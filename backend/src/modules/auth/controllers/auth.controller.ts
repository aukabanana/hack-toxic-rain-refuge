import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import { PrismaClient } from '../../../generated/prisma';
import prisma from '../../../lib/prisma.js';

export const register = async (req: Request, res: Response) => {
  const { username, password, telephone } = req.body;
  if (!username || !password || !telephone)
    return res.status(400).json({ message: 'All fields required' });

  const exists = await prisma.user.findUnique({ where: { telephone } });
  if (exists) return res.status(409).json({ message: 'Telephone already registered' });

  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { username, password: hashed, telephone },
  });

  return res.status(201).json({ message: 'Registered successfully', userId: user.id });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'All fields required' });

  const user = await prisma.user.findFirst({ where: { username } });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid password' });

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );

  return res.json({ token, username: user.username, userId: user.id });
};
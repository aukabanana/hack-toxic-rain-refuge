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

// export const login = async (req: Request, res: Response) => {
//   const { username, password } = req.body;

//   const user = await prisma.user.findFirst({
//     where: { username },
//   });

//   if (!user) {
//     return res.status(404).json({ message: 'User not found' });
//   }

//   const valid = await bcrypt.compare(password, user.password);

//   if (!valid) {
//     return res.status(401).json({ message: 'Invalid password' });
//   }

//   const token = jwt.sign(
//     { id: user.id, username: user.username },
//     process.env.JWT_SECRET!,
//     { expiresIn: '7d' }
//   );

//   res.cookie('token', token, {
//     httpOnly: true,
//     secure: false, 
//     sameSite: 'lax',
//     maxAge: 7 * 24 * 60 * 60 * 1000,
//   });

//   return res.json({
//     username: user.username,
//     userId: user.id,
//   });
// };

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await prisma.user.findFirst({
    where: { username },
  });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: 'Invalid password' });
  }


  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role }, 
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  );

  res.cookie('token', token, {
    httpOnly: true,
    secure: false, 
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });


  return res.json({
    username: user.username,
    userId: user.id,
    role: user.role
  });
};

export const logout = async (req: Request, res: Response) => {
    res.clearCookie("token");
    return res.status(200).json({
        message: "Logged out successfully"
    })
}
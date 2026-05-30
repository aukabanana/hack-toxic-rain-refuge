import type { Request, Response } from 'express';
import prisma from '../../../lib/prisma.js';
import { ResourceType } from '../../../generated/prisma/index.js';

type MemberWithUser = {
  id: string;
  userId: string;
  communityId: string;
  role: 'RESOURCE_TRACKER' | 'RESOURCE_FINDER' | 'SCOUT' | 'SURVIVOR';
  joinedAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    username: string;
    telephone: string;
  };
};

// ─── Community ───────────────────────────────────────────

export const createCommunity = async (req: Request, res: Response) => {
  const { name, userId } = req.body as { name: string; userId: string };
  if (!name) return res.status(400).json({ message: 'name required' });

  const community = await prisma.community.create({ data: { name } });
  
  if (userId) {
    await prisma.communityMember.create({
      data: { userId, communityId: community.id, role: 'SURVIVOR' },
    });
  }

  return res.status(201).json(community);
};

export const getMyCommunity = async (req: Request, res: Response) => {
  const { userId } = req.query as { userId: string };
  if (!userId) return res.status(400).json({ message: 'userId required' });

  const membership = await prisma.communityMember.findFirst({
    where: { userId },
    include: { community: true },
  });
  if (!membership) return res.status(404).json({ message: 'No community found' });
  return res.json(membership.community);
};

export const getCommunityMembers = async (req: Request, res: Response) => {
  const id = req.params['id'];
  if (!id) return res.status(400).json({ message: 'Community ID required' });

  const members = await prisma.communityMember.findMany({
    where: { communityId: id as string},
    include: { user: { select: { id: true, username: true, telephone: true } } },
  });
  return res.json((members as MemberWithUser[]).map(m => ({ ...m.user, role: m.role })));
};

export const addMember = async (req: Request, res: Response) => {
  const id = req.params['id'];
  if (!id) return res.status(400).json({ message: 'Community ID required' });

  const { userId } = req.body as { userId: string };
  const already = await prisma.communityMember.findUnique({
    where: { userId_communityId: { userId, communityId: id as string} },
  });
  if (already) return res.status(409).json({ message: 'User already in community' });

  const member = await prisma.communityMember.create({
    data: { userId, communityId: id as string, role: 'SURVIVOR' },
  });
  return res.status(201).json(member);
};

export const searchUsers = async (req: Request, res: Response) => {
  const q = (req.query['q'] as string) || '';
  if (!q) return res.json([]);

  const users = await prisma.user.findMany({
    where: { username: { contains: q } },
    select: { id: true, username: true, telephone: true },
    take: 10,
  });
  return res.json(users);
};

// ─── Resources ───────────────────────────────────────────

export const getResources = async (req: Request, res: Response) => {
  const id = req.params['id'];
  if (!id) return res.status(400).json({ message: 'Community ID required' });

  const resources = await prisma.resource.findMany({
    where: { communityId: id as string },
    orderBy: { createdAt: 'asc' },
  });
  return res.json(resources);
};

export const updateResourceAmount = async (req: Request, res: Response) => {
  const resourceId = req.params['resourceId'];
  if (!resourceId) return res.status(400).json({ message: 'Resource ID required' });

  const { action } = req.body as { action: 'increase' | 'decrease' };
  const resource = await prisma.resource.findUnique({ where: { id: resourceId as string } });
  if (!resource) return res.status(404).json({ message: 'Not found' });

  const newAmount = action === 'increase' ? resource.amount + 1 : Math.max(0, resource.amount - 1);
  const updated = await prisma.resource.update({
    where: { id: resourceId as string },
    data: { amount: newAmount },
  });
  return res.json(updated);
};

export const deleteResource = async (req: Request, res: Response) => {
  const resourceId = req.params['resourceId'];
  if (!resourceId) return res.status(400).json({ message: 'Resource ID required' });

  await prisma.resource.delete({
    where: { id: resourceId as string },
  });
  return res.json({ message: 'Deleted' });
};

export const createResource = async (req: Request, res: Response) => {
  const id = req.params['id'];
  if (!id) return res.status(400).json({ message: 'Community ID required' });

  const { name, type, unit } = req.body as { name: string; type: string; unit: string };
  if (!name || !type || !unit)
    return res.status(400).json({ message: 'name, type, unit required' });

  const validTypes = Object.values(ResourceType);
  if (!validTypes.includes(type as ResourceType))
    return res.status(400).json({ message: 'Invalid resource type' });

  const resource = await prisma.resource.create({
    data: { name, type: type as ResourceType, amount: 0, unit, communityId: id as string },
  });
  return res.status(201).json(resource);
};
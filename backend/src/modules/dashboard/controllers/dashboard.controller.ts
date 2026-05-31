import type { Request, Response } from 'express';
import prisma from '../../../lib/prisma.js';
import { ResourceType } from '../../../generated/prisma/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

// export const createCommunity = async (req: Request, res: Response) => {
//   const { name, userId } = req.body as { name: string; userId: string };
//   if (!name) return res.status(400).json({ message: 'name required' });

//   const community = await prisma.community.create({ data: { name } });
  
//   if (userId) {
//     await prisma.communityMember.create({
//       data: { userId, communityId: community.id, role: 'RESOURCE_TRACKER' },
//     });
//   }

//   return res.status(201).json(community);
// };

export const createCommunity = async (req: Request, res: Response) => {
  const { name, userId } = req.body as { name: string; userId: string };
  if (!name) return res.status(400).json({ message: 'name required' });

  const community = await prisma.community.create({ 
    data: { 
      name,
      ...(userId && { createdById: userId }) 
    } 
  });

  if (userId) {
    // เพิ่มเป็น member
    await prisma.communityMember.create({
      data: { userId, communityId: community.id, role: 'RESOURCE_TRACKER' }, 
    });

    // เปลี่ยน role ใน User table ด้วย
    await prisma.user.update({
      where: { id: userId },
      data: { role: 'RESOURCE_TRACKER' },
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
  

  if (!membership) {
    return res.json({ 
      community: null, 
      role: 'SURVIVOR' 
    });
  }
  

  return res.json({ 
    community: membership.community, 
    role: membership.role 
  });
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

  const { name, type, amount } = req.body as { name: string; type: string; amount: number };
  if (!name || !type || !amount)
    return res.status(400).json({ message: 'name, type, unit required' });

  const validTypes = Object.values(ResourceType);
  if (!validTypes.includes(type as ResourceType))
    return res.status(400).json({ message: 'Invalid resource type' });

  const resource = await prisma.resource.create({
    data: { name, type: type as ResourceType, amount, unit: '', communityId: id as string },
  });
  return res.status(201).json(resource);
};


export const getUserRole = async (req: Request, res: Response) => {
    try {
        const allRoleUser = await prisma.user.findMany({
            select: {
                username: true,
                telephone: true,
                role: true,
            }
        });
        return res.status(200).json(allRoleUser);
        
    } catch (err) {
        console.error(err);
        return res.status(500).json({ 
            message: 'Internal server error' 
        });
    }
};



// export const getMe = async (req: Request, res: Response) => {
//   try {
//     const token = req.cookies?.token; 
//     if (!token) return res.status(401).json({ message: "Unauthorized" });
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
//     const user = await prisma.user.findUnique({
//       where: { id: decoded.id },
//       select: {
//         id: true,
//         username: true,
//         telephone: true,

//         memberships: {
//           select: {
//             communityId: true,
//             role: true
//           }
//         }
//       }
//     });

//     if (!user) return res.status(404).json({ message: "User not found" });

//     return res.status(200).json({
//       id: user.id,
//       username: user.username,
//       telephone: user.telephone,
//       currentCommunityId: user.memberships[0]?.communityId || null, 
//       roleInCommunity: user.memberships[0]?.role || 'SURVIVOR'
//     });

//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };



export const getRole = async (req: Request, res: Response) => {
  const userId = req.params['userId'] as string
  if (!userId) return res.status(400).json({ message: 'userId required' });

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json({ role: user.role });
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};
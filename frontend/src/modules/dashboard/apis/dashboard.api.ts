import axios, { type AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

interface ApiError {
  message: string;
}

export function errorMessage(err: unknown): string {
  const error = err as AxiosError<ApiError>;
  return error?.response?.data?.message ?? 'Something was wrong';
}

// ─── Types ───────────────────────────────────────────────

export interface Community {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Member {
  id: string;
  username: string;
  telephone: string;
  role: string;
}

export interface Resource {
  id: string;
  name: string;
  type: string;
  amount: number;
  unit: string;
  communityId: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Community ───────────────────────────────────────────

export async function createCommunity(name: string): Promise<Community> {
  try {
    const res = await api.post<Community>('/community', { name });
    return res.data;
  } catch (err) {
    throw new Error(errorMessage(err), { cause: err });
  }
}

export async function getMyCommunity(userId: string): Promise<Community> {
  try {
    const res = await api.get<Community>('/community/me', { params: { userId } });
    return res.data;
  } catch (err) {
    throw new Error(errorMessage(err), { cause: err });
  }
}

export async function getCommunityMembers(communityId: string): Promise<Member[]> {
  try {
    const res = await api.get<Member[]>(`/community/${communityId}/members`);
    return res.data;
  } catch (err) {
    throw new Error(errorMessage(err), { cause: err });
  }
}

export async function addMember(communityId: string, userId: string): Promise<void> {
  try {
    await api.post(`/community/${communityId}/members`, { userId });
  } catch (err) {
    throw new Error(errorMessage(err), { cause: err });
  }
}

export async function searchUsers(q: string): Promise<Member[]> {
  try {
    const res = await api.get<Member[]>('/users/search', { params: { q } });
    return res.data;
  } catch (err) {
    throw new Error(errorMessage(err), { cause: err });
  }
}

// ─── Resources ───────────────────────────────────────────

export async function getResources(communityId: string): Promise<Resource[]> {
  try {
    const res = await api.get<Resource[]>(`/community/${communityId}/resources`);
    return res.data;
  } catch (err) {
    throw new Error(errorMessage(err), { cause: err });
  }
}

export async function createResource(communityId: string, name: string, type: string, unit: string): Promise<Resource> {
  try {
    const res = await api.post<Resource>(`/community/${communityId}/resources`, { name, type, unit });
    return res.data;
  } catch (err) {
    throw new Error(errorMessage(err), { cause: err });
  }
}

export async function updateResourceAmount(resourceId: string, action: 'increase' | 'decrease'): Promise<Resource> {
  try {
    const res = await api.patch<Resource>(`/resources/${resourceId}/amount`, { action });
    return res.data;
  } catch (err) {
    throw new Error(errorMessage(err), { cause: err });
  }
}

export async function deleteResource(resourceId: string): Promise<void> {
  try {
    await api.delete(`/resources/${resourceId}`);
  } catch (err) {
    throw new Error(errorMessage(err), { cause: err });
  }
}
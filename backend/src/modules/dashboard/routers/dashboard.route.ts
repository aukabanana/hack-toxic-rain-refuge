import { Router } from 'express';
import {
  createCommunity, getMyCommunity, getCommunityMembers,
  addMember, searchUsers,
  getResources, createResource, updateResourceAmount, deleteResource,
} from '../controllers/dashboard.controller.js';

const router = Router();

// Community
router.post('/community', createCommunity);
router.get('/community/me', getMyCommunity);
router.get('/community/:id/members', getCommunityMembers);
router.post('/community/:id/members', addMember);
router.get('/users/search', searchUsers);

// Resources
router.get('/community/:id/resources', getResources);
router.post('/community/:id/resources', createResource);
router.patch('/resources/:resourceId/amount', updateResourceAmount);
router.delete('/resources/:resourceId', deleteResource);

export default router;
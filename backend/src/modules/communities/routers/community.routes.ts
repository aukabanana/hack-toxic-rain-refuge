import { Router } from "express";

import {
    createCommunity,
    getCommunities,
    getCommunityById,
    getUserCommunity
} from "../controllers/community.controller.js";

const communityRouter = Router();

communityRouter.get("/", getCommunities);
communityRouter.get("/member/:userId",getUserCommunity,);
communityRouter.get("/:communityId", getCommunityById);
communityRouter.post("/", createCommunity);

export default communityRouter;
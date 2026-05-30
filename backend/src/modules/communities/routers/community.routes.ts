import { Router } from "express";

import {
    createCommunity,
    getCommunities,
    getCommunityById,
} from "../controllers/community.controller.js";

const communityRouter = Router();

communityRouter.get("/", getCommunities);
communityRouter.get("/:communityId", getCommunityById);
communityRouter.post("/", createCommunity);

export default communityRouter;
import { Router } from "express";

import {
    createCommunity,
    getCommunities,
} from "../controllers/community.controller.js";

const communityRouter = Router();

communityRouter.get("/", getCommunities);
communityRouter.post("/", createCommunity);

export default communityRouter;
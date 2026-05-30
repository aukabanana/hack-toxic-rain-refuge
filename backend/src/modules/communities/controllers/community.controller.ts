import type { Request, Response } from "express";

import prisma from "../../../lib/prisma.js";
import { formatZodError } from "../../../utils/formatError.js";
import { createCommunitySchema } from "../../../validators/community.validator.js";

export async function getCommunities(
    _req: Request,
    res: Response,
) {
    try {
        const communities = await prisma.community.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return res.status(200).json({
            success: true,
            data: communities,
            message: "Communities fetched successfully",
        });
    } catch (error) {
        console.error("GET_COMMUNITIES_ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch communities",
        });
    }
}

export async function createCommunity(
    req: Request,
    res: Response,
) {
    try {
        const result = createCommunitySchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid community data",
                errors: formatZodError(result.error),
            });
        }

        const community = await prisma.community.create({
            data: {
                name: result.data.name,
            },
        });

        return res.status(201).json({
            success: true,
            data: community,
            message: "Community created successfully",
        });
    } catch (error) {
        console.error("CREATE_COMMUNITY_ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to create community",
        });
    }
}
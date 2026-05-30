import type { Request, Response } from "express";

import prisma from "../../../lib/prisma.js";
import { formatZodError } from "../../../utils/formatError.js";
import {
  communityIdParamsSchema,
  createCommunitySchema,
} from "../../../validators/community.validator.js";

export async function getCommunityById(
  req: Request,
  res: Response,
) {
  try {
    const result =
      communityIdParamsSchema.safeParse(req.params);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid community id",
        errors: formatZodError(result.error),
      });
    }

    const community =
      await prisma.community.findUnique({
        where: {
          id: result.data.communityId,
        },

        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,

          createdBy: {
            select: {
              id: true,
              username: true,
            },
          },
        },
      });

    if (!community) {
      return res.status(404).json({
        success: false,
        message: "Community not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: community,
      message: "Community fetched successfully",
    });
  } catch (error) {
    console.error("GET_COMMUNITY_BY_ID_ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch community",
    });
  }
}

export async function createCommunity(
  req: Request,
  res: Response,
) {
  try {
    const result =
      createCommunitySchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid community data",
        errors: formatZodError(result.error),
      });
    }

    const {
      name,
      createdById,
    } = result.data;

    if (createdById) {
      const creator = await prisma.user.findUnique({
        where: {
          id: createdById,
        },

        select: {
          id: true,
        },
      });

      if (!creator) {
        return res.status(404).json({
          success: false,
          message: "Creator user not found",
        });
      }
    }

    const communityData = {
      name,
      ...(createdById
        ? {
          createdBy: {
            connect: {
              id: createdById,
            },
          },
        }
        : {}),
    };

    const community =
      await prisma.community.create({
        data: communityData,

        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,

          createdBy: {
            select: {
              id: true,
              username: true,
            },
          },
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
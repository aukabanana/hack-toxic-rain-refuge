import type { Request, Response } from "express";

import prisma from "../../../lib/prisma.js";
import { formatZodError } from "../../../utils/formatError.js";

import {
  createMapMarkerSchema,
  deleteMapMarkerParamsSchema,
  getMapMarkersQuerySchema,
} from "../../../validators/mapMarker.validator.js";

export async function getMapMarkers(
  req: Request,
  res: Response,
) {
  try {
    const result = getMapMarkersQuerySchema.safeParse(req.query);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid query parameters",
        errors: formatZodError(result.error),
      });
    }

    const markers = await prisma.mapMarker.findMany({
      where: {
        communityId: result.data.communityId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      data: markers,
      message: "Map markers fetched successfully",
    });
  } catch (error) {
    console.error("GET_MAP_MARKERS_ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch map markers",
    });
  }
}

export async function createMapMarker(
  req: Request,
  res: Response,
) {
  try {
    const result = createMapMarkerSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid map marker data",
        errors: formatZodError(result.error),
      });
    }

    const community = await prisma.community.findUnique({
      where: {
        id: result.data.communityId,
      },
      select: {
        id: true,
      },
    });

    if (!community) {
      return res.status(404).json({
        success: false,
        message: "Community not found",
      });
    }

    const marker = await prisma.mapMarker.create({
      data: {
        ...result.data,
        description: result.data.description ?? null,
      },
    });

    return res.status(201).json({
      success: true,
      data: marker,
      message: "Map marker created successfully",
    });
  } catch (error) {
    console.error("CREATE_MAP_MARKER_ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to create map marker",
    });
  }
}

export async function deleteMapMarker(
  req: Request,
  res: Response,
) {
  try {
    const result = deleteMapMarkerParamsSchema.safeParse(req.params);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid marker id",
        errors: formatZodError(result.error),
      });
    }

    const existingMarker = await prisma.mapMarker.findUnique({
      where: {
        id: result.data.markerId,
      },
      select: {
        id: true,
      },
    });

    if (!existingMarker) {
      return res.status(404).json({
        success: false,
        message: "Map marker not found",
      });
    }

    await prisma.mapMarker.delete({
      where: {
        id: existingMarker.id,
      },
    });

    return res.status(200).json({
      success: true,
      data: {
        id: existingMarker.id,
      },
      message: "Map marker deleted successfully",
    });
  } catch (error) {
    console.error("DELETE_MAP_MARKER_ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to delete map marker",
    });
  }
}
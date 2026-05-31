import type { Request, Response } from "express";

import prisma from "../../../lib/prisma.js";
import { formatZodError } from "../../../utils/formatError.js";

import {
    createMapZoneSchema,
    deleteMapZoneParamsSchema,
    getMapZonesQuerySchema,
} from "../../../validators/mapZone.validator.js";

export async function getMapZones(
    req: Request,
    res: Response,
) {
    try {
        const result = getMapZonesQuerySchema.safeParse(
            req.query,
        );

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid query parameters",
                errors: formatZodError(result.error),
            });
        }

        const { communityId } = result.data;

        const community = await prisma.community.findUnique({
            where: {
                id: communityId,
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

        const zones = await prisma.mapZone.findMany({
            where: {
                communityId,
            },

            orderBy: {
                createdAt: "desc",
            },
        });

        return res.status(200).json({
            success: true,
            data: zones,
            message: "Map zones fetched successfully",
        });
    } catch (error) {
        console.error("GET_MAP_ZONES_ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch map zones",
        });
    }
}

export async function createMapZone(
    req: Request,
    res: Response,
) {
    try {
        const result = createMapZoneSchema.safeParse(
            req.body,
        );

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid map zone data",
                errors: formatZodError(result.error),
            });
        }

        const {
            communityId,
            name,
            type,
            riskLevel,
            description,
            geoJson,
        } = result.data;

        const community = await prisma.community.findUnique({
            where: {
                id: communityId,
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

        const zone = await prisma.mapZone.create({
            data: {
                communityId,
                name,
                type,
                riskLevel,
                description: description ?? null,

                // SQLite does not have a native JSON column in this schema.
                geoJson: JSON.stringify(geoJson),
            },
        });

        return res.status(201).json({
            success: true,
            data: zone,
            message: "Map zone created successfully",
        });
    } catch (error) {
        console.error("CREATE_MAP_ZONE_ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to create map zone",
        });
    }
}

export async function deleteMapZone(
    req: Request,
    res: Response,
) {
    try {
        const result = deleteMapZoneParamsSchema.safeParse(
            req.params,
        );

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid zone id",
                errors: formatZodError(result.error),
            });
        }

        const existingZone = await prisma.mapZone.findUnique({
            where: {
                id: result.data.zoneId,
            },

            select: {
                id: true,
            },
        });

        if (!existingZone) {
            return res.status(404).json({
                success: false,
                message: "Map zone not found",
            });
        }

        await prisma.mapZone.delete({
            where: {
                id: existingZone.id,
            },
        });

        return res.status(200).json({
            success: true,
            data: {
                id: existingZone.id,
            },
            message: "Map zone deleted successfully",
        });
    } catch (error) {
        console.error("DELETE_MAP_ZONE_ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to delete map zone",
        });
    }
}
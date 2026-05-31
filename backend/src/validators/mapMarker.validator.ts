import { z } from "zod";

export const markerTypeSchema = z.enum([
    "COMMUNITY_BASE",
    "RESOURCE_LOCATION",
    "MISSION_DESTINATION",
    "SAFE_AREA",
    "TOXIC_AREA",
    "DANGER_AREA",
]);

export const riskLevelSchema = z.enum([
    "LOW",
    "MEDIUM",
    "HIGH",
    "CRITICAL",
    "UNKNOWN",
]);

export const getMapMarkersQuerySchema = z.object({
    communityId: z
        .string()
        .uuid("communityId must be a valid UUID"),
});

export const createMapMarkerSchema = z.object({
    communityId: z
        .string()
        .uuid("communityId must be a valid UUID"),

    name: z
        .string()
        .trim()
        .min(1, "Marker name is required")
        .max(100, "Marker name must not exceed 100 characters"),

    type: markerTypeSchema,

    latitude: z
        .number()
        .min(-90, "Latitude must not be lower than -90")
        .max(90, "Latitude must not exceed 90"),

    longitude: z
        .number()
        .min(-180, "Longitude must not be lower than -180")
        .max(180, "Longitude must not exceed 180"),

    description: z
        .string()
        .trim()
        .max(500, "Description must not exceed 500 characters")
        .optional(),

    riskLevel: riskLevelSchema.default("UNKNOWN"),
});

export const deleteMapMarkerParamsSchema = z.object({
    markerId: z
        .string()
        .uuid("markerId must be a valid UUID"),
});
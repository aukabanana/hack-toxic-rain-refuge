import { z } from "zod";

export const zoneTypeSchema = z.enum([
    "SAFE",
    "TOXIC",
]);

export const zoneRiskLevelSchema = z.enum([
    "LOW",
    "MEDIUM",
    "HIGH",
    "CRITICAL",
    "UNKNOWN",
]);

const coordinateSchema = z.tuple([
    z
        .number()
        .min(-180, "Longitude must not be lower than -180")
        .max(180, "Longitude must not exceed 180"),

    z
        .number()
        .min(-90, "Latitude must not be lower than -90")
        .max(90, "Latitude must not exceed 90"),
]);

const polygonGeometrySchema = z.object({
    type: z.literal("Polygon"),

    coordinates: z
        .array(
            z
                .array(coordinateSchema)
                .min(4, "A polygon ring requires at least 4 coordinates"),
        )
        .min(1, "Polygon coordinates are required"),
});

export const geoJsonPolygonFeatureSchema = z.object({
    type: z.literal("Feature"),

    properties: z
        .record(z.string(), z.unknown())
        .default({}),

    geometry: polygonGeometrySchema,
});

export const getMapZonesQuerySchema = z.object({
    communityId: z
        .string()
        .uuid("communityId must be a valid UUID"),
});

export const createMapZoneSchema = z.object({
    communityId: z
        .string()
        .uuid("communityId must be a valid UUID"),

    name: z
        .string()
        .trim()
        .min(1, "Zone name is required")
        .max(100, "Zone name must not exceed 100 characters"),

    type: zoneTypeSchema,

    riskLevel: zoneRiskLevelSchema.default("UNKNOWN"),

    description: z
        .string()
        .trim()
        .max(500, "Description must not exceed 500 characters")
        .optional(),

    geoJson: geoJsonPolygonFeatureSchema,
});

export const deleteMapZoneParamsSchema = z.object({
    zoneId: z
        .string()
        .uuid("zoneId must be a valid UUID"),
});
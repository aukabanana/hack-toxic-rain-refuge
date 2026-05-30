import { z } from "zod";

export const communityIdParamsSchema = z.object({
  communityId: z
    .string()
    .uuid("communityId must be a valid UUID"),
});

export const createCommunitySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Community name is required")
    .max(80, "Community name must not exceed 80 characters"),

  createdById: z
    .string()
    .uuid("createdById must be a valid UUID")
    .optional(),
});
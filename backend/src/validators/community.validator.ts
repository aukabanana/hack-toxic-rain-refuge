import { z } from "zod";

export const createCommunitySchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Community name is required")
        .max(80, "Community name must not exceed 80 characters"),
});
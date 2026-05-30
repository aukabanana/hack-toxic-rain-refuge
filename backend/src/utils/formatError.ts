import type { ZodError } from "zod";

interface FormattedValidationError {
    field: string;
    message: string;
}

export function formatZodError(
    error: ZodError,
): FormattedValidationError[] {
    return error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
    }));
}
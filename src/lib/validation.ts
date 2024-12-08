
import { z } from 'zod';

export const optionalString = z.string().trim().optional().or(z.literal(""));

export const generalInfoSchema = z.object({
    title: optionalString,
    description: optionalString
})

// Manually defined TypeScript type if we do not want to use z.infer<>
// to extact type from schema then need to define type manually 
//export type GeneralInfoValues = { title?: string | ""; description?: string | ""};

export type GeneralInfoValues = z.infer<typeof generalInfoSchema>;

export const PersonalInfoSchema = z.object({
    photo: z.custom<File | undefined>()
        .refine((file) => !file || (file instanceof File && file.type.startsWith("image/")), "Must be an image file")
        .refine((file) => !file || file.size <= 1024 * 1024 * 4, "File size should not be more than 4MB"),

    firstName: optionalString,
    lastName: optionalString,
    jobTitle: optionalString,
    city: optionalString,
    country: optionalString,
    phone: optionalString,
    email: optionalString
})

export type PersonalInfoValues = z.infer<typeof PersonalInfoSchema>
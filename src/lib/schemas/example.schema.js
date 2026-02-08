import { z } from "zod";

export const exampleSchema = z.object({
  id: z.string().optional().nullable(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  groupId: z.string().optional().nullable(),

  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }).transform((val) => new Date(val))
    .refine((date) => date > new Date(), {
      message: "Date must be in the future",
    }),
    
  image: z.string().optional(),
});

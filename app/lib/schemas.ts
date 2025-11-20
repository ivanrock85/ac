import { z } from "zod";

export const reservationSchema = z.object({
    type: z.enum(["tourism", "charter", "rental", "airport"]),
    name: z.string().min(1, "姓名不能为空"),
    phone: z.string().min(1, "联系电话不能为空"),
    peopleCount: z.string().optional(),
    origin: z.string().optional(),
    destination: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    summary: z.string().optional(),
    notes: z.string().optional(),
    // details object can be flattened or handled separately if needed, 
    // but based on our Prisma model, we are storing these fields directly.
});

export type ReservationInput = z.infer<typeof reservationSchema>;

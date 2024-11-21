import { z } from "zod";

export const emailSchema = z.object({
  attendee_name: z.string().min(3),
  event_date: z.date(),
  email: z.string().email(),
});

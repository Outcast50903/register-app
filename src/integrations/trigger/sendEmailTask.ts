import { logger, task } from "@trigger.dev/sdk/v3";
import { z } from "zod";

import { EmailTemplate } from "@/components/emails/FirstEmail";
import { resend } from "@/integrations/email";
import { emailSchema } from "@/integrations/email/validations";

export const sendEmailTask = task({
  id: "send-email-task",
  maxDuration: 300,
  run: async (payload: z.infer<typeof emailSchema>) => {
    logger.log("Start send Email Task!");

    const { attendee_name, event_date, email } = emailSchema.parse(payload);

    // Send an email
    const { error } = await resend.emails.send({
      from: "Register <onboarding@resend.dev>",
      to: [email],
      subject: "An attendance has been recorded!",
      react: EmailTemplate({
        attendee_name,
        event_date: event_date.toISOString(),
      }),
    });

    if (error) {
      logger.log("Error sending email");
    }

    logger.log("Email sent successfully!");
  },
});

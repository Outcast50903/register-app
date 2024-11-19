import { logger, task } from "@trigger.dev/sdk/v3";

import { twilioClient } from "@/integrations/twilio/client";

export const sendWhatsAppMessageTask = task({
  id: "send-message-task",
  // Set an optional maxDuration to prevent tasks from running indefinitely
  maxDuration: 300, // Stop executing after 300 secs (5 mins) of compute
  run: async () => {
    logger.log("Start send WhatsApp message Task!");

    // Send a WhatsApp message
    await twilioClient.messages.create({
      to: `whatsapp:${process.env.WHATSAPP_NUMBER}`,
      from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
      body: "You have successfully registered an attendance!",
    });
  },
});

import * as React from "react";

interface EmailTemplateProps {
  event_date: string;
  attendee_name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  event_date,
  attendee_name
}) => (
  <body style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, margin: 0, padding: 0, backgroundColor: "#f4f4f4" }}>
    <table role="presentation" width="100%" cellSpacing="0" cellPadding="0" style={{ border: 0 }}>
      <tr>
        <td style={{ padding: "20px 0", textAlign: "center", backgroundColor: "#007bff" }}>
          <h1 style={{ color: "#ffffff", margin: 0 }}>Event Attendance Registration</h1>
        </td>
      </tr>
      <tr>
        <td style={{ padding: "40px 20px", backgroundColor: "#ffffff" }}>
          <table role="presentation" width="100%" cellSpacing="0" cellPadding="0" style={{ border: 0 }}>
            <tr>
              <td>
                <h2 style={{ color: "#333333", marginTop: 0 }}>Dear {attendee_name},</h2>
                <p style={{ marginBottom: "20px" }}>
                  We hope this email finds you well. An attendance has been recorded on {event_date}.
                </p>
                <p>We look forward to seeing you!</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
);

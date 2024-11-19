import { auth } from "@clerk/nextjs/server";

import { AuthSession } from "../types";

export const getUserAuth = async () => {
  const { userId, sessionClaims } = await auth();
  if (userId) {
    return {
      session: {
        user: {
          id: userId,
          name: `${sessionClaims?.firstName} ${sessionClaims?.lastName}`,
          email: sessionClaims?.email,
        },
      },
    } as AuthSession;
  } else {
    return { session: null };
  }
};

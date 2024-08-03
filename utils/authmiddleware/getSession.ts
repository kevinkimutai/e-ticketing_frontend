import { getSession } from "@auth0/nextjs-auth0";

export const getSessionUser = async () => {
  const session = await getSession();

  return session?.idToken;
};

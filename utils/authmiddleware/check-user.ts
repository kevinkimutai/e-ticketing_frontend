import { getSession } from "@auth0/nextjs-auth0";

export const checkUser = async () => {
  const session = await getSession();
  const user = session?.user;

  return user;
};

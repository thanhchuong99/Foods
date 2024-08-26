export const isUserCookiePayload = (user?: User) => {
  return !user?.id;
};

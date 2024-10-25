export const isAuthPage = (pathname) => {
  const authRoutes = ["/auth/signin", "/auth/signup"];
  return authRoutes.includes(pathname);
};

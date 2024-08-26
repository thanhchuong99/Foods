export const appEnv = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
  socketUrl: process.env.NEXT_PUBLIC_SOCKET_URL || '',
  origin: process.env.NEXT_PUBLIC_ORIGIN || 'https://localhost:3000',
  branchIo: process.env.NEXT_PUBLIC_BRANCH_IO,
};

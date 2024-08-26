import { cookies } from 'next/headers';

const parseUserFromCookies = () => {
  const cookieStore = cookies();
  const userCookie = cookieStore.get('user');

  if (!userCookie || !userCookie.value) {
    return null;
  }

  let user: User | null = null;
  try {
    user = JSON.parse(userCookie.value);
  } catch (error) {
    console.error('Failed to parse user from cookies', error);
  }

  return user;
};

export default parseUserFromCookies;

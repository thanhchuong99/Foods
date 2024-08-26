'use server';
import { USER_KEY } from '@/const/cookieKey';
import { cookies } from 'next/headers';

export const setUserToCookie = (user: User | null) => {
  const cookieStore = cookies();

  cookieStore.set(
    USER_KEY,
    JSON.stringify({
      avatar: user?.avatar,
      fullname: user?.fullname,
      email: user?.email,
      is_active: user?.is_active,
      role: user?.role,
    }),
    {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      path: '/',
      secure: true,
    },
  );
};

export const removeUserFromCookie = () => {
  const cookieStore = cookies();
  cookieStore.delete(USER_KEY);
};

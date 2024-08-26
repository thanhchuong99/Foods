'use client';
import { useMeQuery } from '@/queries/user/useMeQuery';
import { Router } from '@/util/Router';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FC, PropsWithChildren, useEffect } from 'react';
import FullScreenLoading from '../FullScreenLoading';
import ConfirmLogoutModal from '../ConfirmLogout';
import { accountDeactivated } from '@/const/messages';
import { isUserCookiePayload } from '@/util/is-user-cookie-payload';

interface PublicRoute {
  shouldShowConfirmLogout: string[];
  children: React.ReactElement;
}

export const PublicRoute: FC<PublicRoute> = ({ children, shouldShowConfirmLogout }) => {
  const { data: user, isPending } = useMeQuery();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const router = useRouter();

  const IS_USER_COOKIE_PAYLOAD = isUserCookiePayload(user);

  useEffect(() => {
    if (!isPending && user && !IS_USER_COOKIE_PAYLOAD && (user.email === email || !email)) {
      router.push(Router.Profile);
    }
  }, [user, isPending]);

  if (isPending) return <FullScreenLoading />;

  if (user) {
    // Note: If the user is already logged in and is the same user, redirect to the profile page
    // Wait until fetching useMeQuery is done instead of using user cookie payload
    if (user.email === email || IS_USER_COOKIE_PAYLOAD || !email) {
      return <FullScreenLoading />;
    }

    // Note: If the user is already logged in and is a different user, show the confirm logout modal
    if (shouldShowConfirmLogout.includes(pathname)) {
      return <ConfirmLogoutModal />;
    }
  }

  return children;
};

export const PrivateRoute: FC<PropsWithChildren> = ({ children }) => {
  const { data: user, isPending } = useMeQuery();
  const router = useRouter();

  const isUserActive = user?.is_active;

  useEffect(() => {
    if (!isPending && !user) {
      router.push(Router.Login);
    }
  }, [user, isPending]);

  if (isPending || !user) return <FullScreenLoading />;

  if (!isUserActive) {
    return <ConfirmLogoutModal hideCancel description={accountDeactivated} />;
  }

  return children;
};

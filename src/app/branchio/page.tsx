'use client';
import { appEnv } from '@/configs/env';
import { queryString } from '@/hooks/useQueryString';
import { Router } from '@/util/Router';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const getLink = (data: any): string => {
  // this is where you can parse the data and return the link
  switch (data.action) {
    case 'reset-password':
      return queryString.createUrlQueryString({ email: data.email, otp: data.otp }, Router.ResetPassword);
    case 'verify':
      return queryString.createUrlQueryString({ email: data.email, key: data.key }, Router.VerifyRegister);
    default:
      return Router.Root;
  }
};

const Page = () => {
  const router = useRouter();
  useEffect(() => {
    appEnv.branchIo
      ? branch.init(appEnv.branchIo, undefined, (error, data) => {
          if (data) {
            const link = getLink(data.data_parsed);
            router.replace(link);

            return;
          }
          router.replace(Router.Root);
        })
      : router.replace(Router.Root);
  }, []);

  return null;
};

export default Page;

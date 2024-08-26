'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Router } from '@/util/Router';
import useVerifyEmailMutation from '@/queries/auth/useVerifyEmailMutation';
import { useHandelLoadingQueries } from '@/hooks/useQueryWrapper';
import FullScreenLoading from '@/components/FullScreenLoading';
import ResultSuccess from '@/components/Result/Success';
import { useQueryClient } from '@tanstack/react-query';
import { useMeQuery } from '@/queries/user/useMeQuery';
import { sessionStorage } from '@/configs/api';
import { ALREADY_SENT_VERIFY_CODE, EXPIRED_LINK_CODE } from '@/const/statusCode';
import { BaseResponseError } from '@/queries/types';
import { unHandledError, verifyEmailMessageAtLoginPage } from '@/const/messages';
import { queryString } from '@/hooks/useQueryString';
import { useToast } from '@/hooks/useToast';
import ErrorState from './Error';
import { useLoading } from '@/queries/useLoading';
import { useResendEmailMutation } from '@/queries/auth/useResendEmail';
import { useTheme } from '@mui/material';
import { renderStringTemplate } from '@/util/stringUtils';

const VerifyRegisterPage = () => {
  const searchParams = useSearchParams();
  const { error: errorToast } = useToast();
  const { mutateAsync: handleErrorResendEmail } = useResendEmailMutation();
  const { showLoading, hideLoading } = useLoading();
  const theme = useTheme();
  const { mutate, isPending } = useVerifyEmailMutation({
    onSuccess: data => {
      sessionStorage.set('oauth_token', JSON.stringify(data));
      setIsDone(true);
    },
    onError: async error => {
      if (error.code === EXPIRED_LINK_CODE && email) {
        try {
          showLoading();
          await handleErrorResendEmail(email);

          return router.push(queryString.createUrlQueryString({ email }, Router.CheckYourEmail));
        } catch (error) {
          if ((error as BaseResponseError).code === ALREADY_SENT_VERIFY_CODE) {
            const message = renderStringTemplate(verifyEmailMessageAtLoginPage, {
              mail: email,
              color: theme.palette.primary.main,
              font_weight: '700',
            });

            return setError(message);
          }

          if (error instanceof Error) {
            return setError(error.message);
          }

          return setError(unHandledError);
        } finally {
          hideLoading();
        }
      }

      if (error instanceof Error) {
        errorToast(error.message);
      }

      errorToast(unHandledError);

      router.push(Router.Login);
    },
  });
  useHandelLoadingQueries({
    isFetching: isPending,
  });
  const email = searchParams.get('email');
  const key = searchParams.get('key');
  const [isDone, setIsDone] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  const [error, setError] = useState('');

  useEffect(() => {
    if (!email || !key) router.push(Router.Login);

    mutate({ key: key!, email: email! });
  }, []);

  if (error) {
    return <ErrorState error={error} />;
  }

  return !isDone ? (
    <FullScreenLoading />
  ) : (
    <ResultSuccess
      description={`
        Thanks! Your email has been verified 
        - you are now ready to enter!
      `}
      finishOption={{
        label: 'Done',
        fn: () => {
          router.push(Router.Profile);
          queryClient.invalidateQueries({
            queryKey: useMeQuery.getKey(),
          });
        },
      }}
    />
  );
};

export default VerifyRegisterPage;

'use client';
import { EMAIL_ALREADY_SUBSCRIBED, EXPIRED_LINK_CODE } from '@/const/statusCode';
import { Router } from '@/util/Router';
import { goToHome, resend, subscribeEmailSuccess } from '@/const/messages';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useSubscribeEmail } from '@/queries/user/useSubscribeEmail';
import { useVerifyNewsletterSubscription } from '@/queries/user/useVerifyNewsletterSubscription';
import errorJson from 'public/error.json';
import FinishState from './FinishState';
import LoadingState from './LoadingState';
import State, { StateProps } from './State';
import successSendEmailJson from 'public/send-email.json';
import useCountdown from '@/hooks/useCountdown';
import useAppInformation from '@/hooks/useAppInformation';

const MainBody = () => {
  const appInformation = useAppInformation();
  const searchParams = useSearchParams();
  const key = searchParams.get('key');
  const email = searchParams.get('email');
  const {
    mutate: subscribeEmail,
    isPending: isPendingSubscribeEmail,
    error: errorSubscribeEmail,
    isSuccess: isSuccessSubscribeEmail,
  } = useSubscribeEmail();
  const {
    isLoading: isLoadingVerify,
    isSuccess: isSuccessVerify,
    error: errorVerify,
  } = useVerifyNewsletterSubscription(key, { retry: false });
  const {
    time,
    start: startCountDown,
    clear: clearCountDown,
    isCounting,
  } = useCountdown(appInformation.resend_email_time ?? 60);

  const isEmailAlreadySubscribed =
    EMAIL_ALREADY_SUBSCRIBED.includes((errorSubscribeEmail as any)?.code) ||
    EMAIL_ALREADY_SUBSCRIBED.includes((errorVerify as any)?.code);
  const isExpiredKey =
    (errorSubscribeEmail as any)?.code === EXPIRED_LINK_CODE || (errorVerify as any)?.code === EXPIRED_LINK_CODE;

  const action: StateProps['action'] =
    isExpiredKey && !isEmailAlreadySubscribed && email
      ? {
          disabled: isCounting,
          label: isCounting ? resend + ' ' + time : resend,
          loading: isPendingSubscribeEmail,
          onClick: () => {
            subscribeEmail({ email });
            clearCountDown();
          },
        }
      : {
          label: goToHome,
          href: Router.Root,
        };

  useEffect(() => {
    // Once the email is successfully subscribed, start the countdown
    // Resend button will be disabled until the countdown is finished
    if (isSuccessSubscribeEmail) {
      startCountDown();
    }
  }, [isSuccessSubscribeEmail]);

  if (isPendingSubscribeEmail) {
    return (
      <LoadingState
        content={
          <p>
            We&apos;re sending mail to your inbox. <br />
            This won&apos;t take long!
          </p>
        }
      />
    );
  }

  if (isLoadingVerify || !key) {
    return (
      <LoadingState
        content={
          <p>
            We&rsquo;re verifying your email subscription. <br /> This won&apos;t take long!
          </p>
        }
      />
    );
  }

  if (isSuccessVerify) {
    return <FinishState />;
  }

  if (isSuccessSubscribeEmail) {
    return (
      <State
        title="Email Subscription"
        content={subscribeEmailSuccess}
        action={action}
        playerProps={{ src: successSendEmailJson, loop: true }}
      />
    );
  }

  return (
    <State
      title="Oops! Something Went Wrong."
      content={errorVerify?.message || errorSubscribeEmail?.message}
      action={action}
      playerProps={{ src: errorJson, loop: true }}
    />
  );
};

export default MainBody;

'use client';
import { Box, Button, styled } from '@mui/material';
import React, { useEffect } from 'react';
import StyledWrapper from '../../components/Form/authenticate/FormWrapper';
import FormText from '@/components/Form/authenticate/FormText';
import { Router } from '@/util/Router';
import { useRouter, useSearchParams } from 'next/navigation';
import { useHandleErrorQueries } from '@/hooks/useQueryWrapper';
import { useResendEmailMutation } from '@/queries/auth/useResendEmail';
import { useToast } from '@/hooks/useToast';
import { resendEmailSignUpSuccess } from '@/const/messages';
import { dark } from '@/theme/colors';
import useAppInformation from '@/hooks/useAppInformation';
import useCountdown from '@/hooks/useCountdown';

const StyledFormDescription = styled(FormText.FormDescription)(() => ({
  maxWidth: '100%',
  marginX: 'auto',
}));

const CheckYourEmail = () => {
  const appInformation = useAppInformation();
  const { time, isCounting, start: startCountdown } = useCountdown(appInformation.resend_email_time ?? 60);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const { success: toastSuccess } = useToast();

  const { mutateAsync: resendEmail, isPending } = useHandleErrorQueries(
    useResendEmailMutation({
      onSuccess: () => {
        toastSuccess(resendEmailSignUpSuccess);
      },
    }),
  );

  useEffect(() => {
    if (!email) {
      router.push(Router.Login);
    } else if (!isCounting) {
      startCountdown();
    }
  }, [email, router]);

  const handleResendClick = async () => {
    if (!email) return;
    await resendEmail(email);
    startCountdown();
  };

  return (
    <StyledWrapper
      sx={() => ({
        gap: '12px',
        paddingY: '112px',
      })}
    >
      <FormText.FormTitle>Verify Account</FormText.FormTitle>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledFormDescription>
          A verify link has been sent to{' '}
          <StyledFormDescription
            as="span"
            className="truncate"
            sx={theme => ({ color: theme.palette.primary.main, fontWeight: 700, display: 'block' })}
            typoProps={{ title: email || '' }}
          >
            {email || ''}
            <Box component="span" sx={{ color: dark[40] }}>
              .
            </Box>
          </StyledFormDescription>{' '}
          Please use the link to verify your account
        </StyledFormDescription>
      </Box>
      <Button
        type="submit"
        sx={{ padding: '16px', lineHeight: '33px', fontSize: '1.5rem', textTransform: 'none' }}
        variant="contained"
        color="primary"
        onClick={handleResendClick}
        disabled={isCounting || isPending}
      >
        {isCounting ? `Resend Link in ${time}` : 'Resend Link'}
      </Button>
      <Button
        type="submit"
        sx={{ padding: '16px', lineHeight: '33px', fontSize: '1.5rem' }}
        variant="contained"
        color="primary"
        onClick={() => router.push(Router.Login)}
      >
        Back to Sign In
      </Button>
    </StyledWrapper>
  );
};

export default CheckYourEmail;

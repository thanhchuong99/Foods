'use client';
import { Box, Stack, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import Form from '@/components/Form';
import Image from 'next/image';
import React, { useEffect } from 'react';
import StyledWrapper from '../../components/Form/authenticate/FormWrapper';
import FormText from '@/components/Form/authenticate/FormText';
import EmailInput from '@/components/Form/authenticate/EmailInput';
import PasswordInput from '@/components/Form/authenticate/PasswordInput';
import ForgotPasswordLink from '@/components/Form/authenticate/ForgotPasswordLink';
import { buildEmailRequired, buildStringRequired } from '@/util/yup';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginMutation } from '@/queries/auth/useLoginMutation';
import { Router } from '@/util/Router';
import { useToast } from '@/hooks/useToast';
import Link from 'next/link';
import { ALREADY_SENT_VERIFY_CODE, NOT_VERIFIED_EMAIL } from '@/const/statusCode';
import { useRouter } from 'next/navigation';
import { queryString } from '@/hooks/useQueryString';
import { BaseResponseError } from '@/queries/types';
import { unHandledError, verifyEmailMessageAtLoginPage } from '@/const/messages';
import { useResendEmailMutation } from '@/queries/auth/useResendEmail';
import { normalizeMessage, renderStringTemplate } from '@/util/stringUtils';

type FormValues = {
  email: string;
  password: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object().shape({
  email: buildEmailRequired(),
  password: buildStringRequired('password'),
});

const StyledFormTitle = styled(FormText.FormTitle)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    maxWidth: '345px',
    paddingLeft: 0,
    paddingRight: 0,
    margin: '0 auto',
  },
}));

const LoginPage = () => {
  const router = useRouter();
  const { error: toastError } = useToast();
  const { control, formState, handleSubmit, getValues } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });
  const { mutateAsync: handleErrorResendEmail } = useResendEmailMutation();
  const { mutate, isPending } = useLoginMutation({
    onError: async error => {
      if (error.code === NOT_VERIFIED_EMAIL) {
        const email = getValues('email');

        try {
          await handleErrorResendEmail(email);

          return router.push(queryString.createUrlQueryString({ email }, Router.CheckYourEmail));
        } catch (error) {
          if ((error as BaseResponseError).code === ALREADY_SENT_VERIFY_CODE) {
            const message = renderStringTemplate(verifyEmailMessageAtLoginPage, { mail: email });
            const normalizedMessage = normalizeMessage(message);

            return toastError(normalizedMessage);
          }

          if (error instanceof Error) {
            return toastError(error.message);
          }

          return toastError(unHandledError);
        }
      }

      toastError(error.message);
    },
  });

  const isValid = formState.isValid;

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  useEffect(() => {
    router.prefetch(Router.Profile);
  }, []);

  return (
    <StyledWrapper>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link href={Router.Root}>
          <Image
            className="cursor-pointer "
            src="/assets/image/Illustration.png"
            width={151}
            height={151}
            alt="sign in logo"
          />
        </Link>
      </Box>
      <StyledFormTitle>Welcome to wonderfoods</StyledFormTitle>
      <FormText.FormDescription>Sign in to continue in Wonderfoods</FormText.FormDescription>
      <Form onSubmit={handleSubmit(onSubmit)} id="form-login">
        <Stack flexDirection="column" gap="16px">
          <EmailInput control={control} name="email" />
          <PasswordInput control={control} name="password" />
          <ForgotPasswordLink />
        </Stack>
      </Form>
      <Form.SubmitButton
        loading={isPending}
        control={control}
        type="submit"
        form="form-login"
        sx={{ padding: '16px', lineHeight: '33px', fontSize: '1.5rem' }}
        variant="contained"
        color="primary"
        disabled={!isValid}
      >
        Sign In
      </Form.SubmitButton>
      <FormText.FormDontHaveAccount />
    </StyledWrapper>
  );
};

export default LoginPage;

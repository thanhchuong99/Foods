'use client';
import { Stack, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import Form from '@/components/Form';
import React, { useState } from 'react';
import StyledWrapper from '../../components/Form/authenticate/FormWrapper';
import FormText from '@/components/Form/authenticate/FormText';
import PasswordInput from '@/components/Form/authenticate/PasswordInput';
import { buildConfirmPassword, buildPasswordRequired } from '@/util/yup';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryWrapper } from '@/hooks/useQueryWrapper';
import { useResetPasswordMutation } from '@/queries/auth/useResetPassword';
import { useRouter, useSearchParams } from 'next/navigation';
import ResultSuccess from '@/components/Result/Success';
import { Router } from '@/util/Router';

const StyledResultSuccess = styled(ResultSuccess)(() => ({
  '.result-success__description': {
    maxWidth: '202px',
    marginX: 'auto',
  },
}));

type FormValues = {
  password: string;
  confirmPassword: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object().shape({
  password: buildPasswordRequired('password'),
  confirmPassword: buildConfirmPassword(),
});

const ResetPassword = () => {
  const { control, formState, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  const [isDone, setIsDone] = useState(false);
  const router = useRouter();

  const { mutate, isPending } = useQueryWrapper(
    useResetPasswordMutation({
      onSuccess: () => setIsDone(true),
    }),
  );
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const otp = searchParams.get('otp');

  const onSubmit = async (data: FormValues) => {
    if (!email || !otp) return;

    mutate({
      newPassword: data.password,
      otp: otp,
      email,
    });
  };

  return (
    <>
      {!isDone && (
        <StyledWrapper>
          <FormText.FormTitle>Reset Password</FormText.FormTitle>
          <FormText.FormDescription>Create the unique password</FormText.FormDescription>
          <Form onSubmit={handleSubmit(onSubmit)} id="form-login">
            <Stack flexDirection="column" gap="16px">
              <PasswordInput control={control} name="password" placeholder="New Password" />
              <PasswordInput control={control} name="confirmPassword" placeholder="Confirm New Password" />
            </Stack>
          </Form>
          <Form.SubmitButton
            loading={isPending}
            control={control}
            type="submit"
            form="form-login"
            sx={{ padding: '16px', lineHeight: '33px', fontSize: '1.5rem', marginTop: '197px' }}
            variant="contained"
            color="primary"
            disabled={!formState.isValid}
          >
            Continue
          </Form.SubmitButton>
        </StyledWrapper>
      )}
      {isDone && (
        <StyledResultSuccess
          description="Password has been change successfully"
          finishOption={{
            label: 'Sign In',
            fn: () => {
              router.push(Router.Login);
            },
          }}
        />
      )}
    </>
  );
};

export default ResetPassword;

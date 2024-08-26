'use client';
import { Box, Button, Stack, styled } from '@mui/material';
import { useForm } from 'react-hook-form';
import Form from '@/components/Form';
import React from 'react';
import StyledWrapper from '../../components/Form/authenticate/FormWrapper';
import FormText from '@/components/Form/authenticate/FormText';
import EmailInput from '@/components/Form/authenticate/EmailInput';
import Image from 'next/image';
import * as yup from 'yup';
import { buildEmailRequired } from '@/util/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetPasswordWithEmailMutation } from '@/queries/auth/useResetPasswordWithEmail';
import { useQueryWrapper } from '@/hooks/useQueryWrapper';
import { useRouter } from 'next/navigation';

const StyledFormTitle = styled(FormText.FormTitle)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    paddingLeft: '61px',
    paddingRight: '61px',
  },
}));

type FormValues = {
  email: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object().shape({
  email: buildEmailRequired(),
});

const ForgotPassword = () => {
  const { control, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
    mode: 'onBlur',
  });
  const { mutate, isPending } = useQueryWrapper(useResetPasswordWithEmailMutation());
  const router = useRouter();

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <StyledWrapper>
      <Box sx={{ marginBottom: '125.5px' }}>
        <Button
          sx={{
            height: 40,
            width: 40,
            minWidth: 40,
            svg: {
              flexShrink: 0,
            },
          }}
          variant="contained"
          color="primary"
          aria-label="back"
          onClick={() => router.back()}
        >
          <Image width={23} height={21} src="/assets/svg/left-arrow.svg" alt="" />
        </Button>
      </Box>
      <StyledFormTitle>FORGOT PASSWORD</StyledFormTitle>
      <FormText.FormDescription>We will email a link to reset your password</FormText.FormDescription>
      <Form onSubmit={handleSubmit(onSubmit)} id="form-login">
        <Stack flexDirection="column" gap="16px">
          <EmailInput control={control} name="email" />
        </Stack>
      </Form>
      <Form.SubmitButton
        loading={isPending}
        control={control}
        type="submit"
        form="form-login"
        sx={{ padding: '16px', lineHeight: '33px', fontSize: '1.5rem', marginTop: '101.5px' }}
        variant="contained"
        color="primary"
        disabled={!formState.isValid}
      >
        Send Link
      </Form.SubmitButton>
    </StyledWrapper>
  );
};

export default ForgotPassword;

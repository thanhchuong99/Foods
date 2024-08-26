'use client';
import React, { useEffect } from 'react';
import { FormHelperText, TextField, styled } from '@mui/material';
import { basic, dark, primary } from '@/theme/colors';
import Form from '@/components/Form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { buildEmailRequired } from '@/util/yup';
import theme from '@/provider/ThemeProvider';
import { useSubscribeEmail } from '@/queries/user/useSubscribeEmail';
import { useToast } from '@/hooks/useToast';
import isArray from 'lodash/isArray';
import { usePathname } from 'next/navigation';

const StyledSubscribeWrapper = styled(Form)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  border: `2px solid ${dark[10]}`,
  height: '51px',
  borderRadius: '18px',
  paddingRight: '4px',
  backgroundColor: basic.white,

  'input::placeholder': {
    color: dark[40],
    fontSize: '0.875rem',
  },

  '.Mui-focused': {
    fontSize: '0.875rem',
    boxShadow: 'none',
  },

  '& fieldset': {
    border: 'none',
  },

  [theme.breakpoints.up('lg')]: {
    maxWidth: '360px',
  },
}));

const StyledTextField = styled(TextField)(() => ({}));

const StyledButton = styled(Form.SubmitButton)(() => ({}));

type FormValues = {
  email: string;
};

const schema: yup.ObjectSchema<FormValues> = yup.object().shape({
  email: buildEmailRequired(),
});

const SubscribeTextField = () => {
  const [isFocused, setIsFocused] = React.useState(false);
  const { register, handleSubmit, formState, control, resetField } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });
  const { mutate, isPending } = useSubscribeEmail();
  const { error: toastError } = useToast();
  const pathname = usePathname();

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess() {
        resetField('email');
      },
      onError(error) {
        if (isArray(error.message)) {
          toastError(error.message[0]);
        } else {
          toastError(error.message);
        }
      },
    });
  };

  const error = formState.errors.email?.message;

  let borderColor = isFocused ? primary.base : dark[10];

  if (error) {
    borderColor = theme.palette.error.main;
  }

  useEffect(() => {
    // Reset email field when user navigates to a new page
    resetField('email');
  }, [pathname]);

  return (
    <>
      <StyledSubscribeWrapper onSubmit={handleSubmit(onSubmit)} sx={{ borderColor: borderColor }}>
        <StyledTextField
          {...register('email')}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          InputLabelProps={{ shrink: false }}
          placeholder="Email address"
          sx={theme => ({
            fontSize: '0.875rem',
            lineHeight: '19px',

            'input.MuiInputBase-input': {
              paddingLeft: 0,
              color: dark[40],
              borderRadius: 0,
              lineHeight: '19px',
              '&::-webkit-input-placeholder': { color: dark[40], opacity: 1, fontSize: '0.875rem', fontWeight: 500 },

              [theme.breakpoints.up('xs')]: {
                paddingTop: '13px',
                paddingBottom: '13px',
              },
            },
          })}
        />
        <StyledButton
          sx={{
            width: 79,
            height: 43,
            flexShrink: 0,
          }}
          variant="contained"
          color="primary"
          control={control}
          loading={isPending}
        >
          Submit
        </StyledButton>
      </StyledSubscribeWrapper>
      {error && (
        <FormHelperText error sx={{ marginTop: '4px', marginLeft: '14px', textAlign: 'left', width: '100%' }}>
          {error}
        </FormHelperText>
      )}
    </>
  );
};

export default SubscribeTextField;

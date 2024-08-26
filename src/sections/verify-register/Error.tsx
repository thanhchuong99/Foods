'use client';
import { Box, Button, styled } from '@mui/material';
import React, { FC } from 'react';
import StyledWrapper from '../../components/Form/authenticate/FormWrapper';
import FormText from '@/components/Form/authenticate/FormText';
import { Router } from '@/util/Router';
import { useRouter } from 'next/navigation';

const StyledFormDescription = styled(FormText.FormDescription)(() => ({
  maxWidth: '100%',
  marginX: 'auto',
}));

interface ErrorStateProps {
  error: string;
}

const ErrorState: FC<ErrorStateProps> = ({ error }) => {
  const router = useRouter();

  return (
    <StyledWrapper
      sx={() => ({
        gap: '12px',
        paddingY: '112px',
      })}
    >
      <FormText.FormTitle>Verify Account</FormText.FormTitle>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <StyledFormDescription isDangerouslySetInnerHTML>{error}</StyledFormDescription>
      </Box>

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

export default ErrorState;

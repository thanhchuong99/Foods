'use client';
import { Box, Button } from '@mui/material';
import FormText from '@/components/Form/authenticate/FormText';
import Image from 'next/image';
import React from 'react';
import StyledWrapper from '../../components/Form/authenticate/FormWrapper';

interface Props {
  description: string;
  finishOption: {
    label: string;
    fn: () => void;
  };
  className?: string;
}

const ResultSuccess = ({ finishOption, description, className }: Props) => {
  return (
    <StyledWrapper
      sx={() => ({
        gap: '12px',
        paddingY: '112px',
      })}
      className={className}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Image src="/assets/image/success-check.png" width={175} height={175} alt="sign in logo" />
      </Box>
      <FormText.FormTitle>Success</FormText.FormTitle>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <FormText.FormDescription className="result-success__description">{description}</FormText.FormDescription>
      </Box>
      <Button
        type="submit"
        form="form-login"
        sx={{ padding: '16px', lineHeight: '33px', fontSize: '1.5rem' }}
        variant="contained"
        color="primary"
        onClick={() => finishOption.fn()}
      >
        {finishOption.label}
      </Button>
    </StyledWrapper>
  );
};

export default ResultSuccess;

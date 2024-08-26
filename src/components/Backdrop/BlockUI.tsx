'use client';
import { useLoading } from '@/queries/useLoading';
import { Backdrop, CircularProgress } from '@mui/material';
import { memo } from 'react';

const BlockUI = () => {
  const { isLoading } = useLoading();

  return (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default memo(BlockUI);

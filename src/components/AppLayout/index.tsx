'use client';
import { withProperties } from '@/util/types';
import Box from '@mui/material/Box';
import React, { FC } from 'react';
import MasterHeader from './master/MasterHeader/MasterHeader';
import MasterFooter from './master/MasterFooter/MasterFooter';

interface MasterLayoutProps {
  header: React.ReactNode;
  container?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const MasterLayout: React.FC<MasterLayoutProps> = ({ header, footer, container, children }) => {
  return (
    <>
      {header}
      <Box component="main" sx={{ marginTop: '93px' }}>
        {container ?? children}
      </Box>
      {footer}
    </>
  );
};

const AppLayout: FC<React.PropsWithChildren & { isAuthPage?: boolean }> = ({ children, isAuthPage }) => {
  return (
    <MasterLayout
      header={<MasterHeader isAuthPage={isAuthPage} />}
      container={children}
      footer={<MasterFooter isAuthPage={isAuthPage} />}
    />
  );
};

export default withProperties(AppLayout, {});

'use client';
import { dark } from '@/theme/colors';
import { Divider, styled } from '@mui/material';

const StyledDivider = styled(Divider)(() => ({
  backgroundColor: dark[10],
}));

export default StyledDivider;

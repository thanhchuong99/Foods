'use client';
import TitleSection from '@/components/TitleSection';
import { styled } from '@mui/material';

const StyledTitleSection = styled(TitleSection)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    '.MuiBox-root': {
      bottom: 60,
    },
  },
}));

export default StyledTitleSection;

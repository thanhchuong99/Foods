import { basic } from '@/theme/colors';
import { customShadows } from '@/theme/customShadows';
import { Box, styled } from '@mui/material';

const StyledWrapper = styled(Box)(() => ({
  width: '100%',
  backgroundColor: basic.white,
  padding: '32px',
  boxShadow: customShadows.z16,
  borderRadius: '48px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  maxWidth: '531px',
}));

export default StyledWrapper;

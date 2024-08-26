import { Box } from '@mui/material';
import StyledLink from './StyledLink';

const ForgotPasswordLink = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <StyledLink href="/forgot-password">Forgot Password?</StyledLink>
    </Box>
  );
};

export default ForgotPasswordLink;

'use client';
import DeleteAccountButton from '@/components/DeleteAccountButton';
import Heading from '@/components/Heading';
import { useMeQuery } from '@/queries/user/useMeQuery';
import { dark } from '@/theme/colors';
import { Box, Button, Stack, Typography, styled } from '@mui/material';

// Note: Temporary component for mocking the user profile ProfilePage

const StyledLabel = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '1.25rem',
  lineHeight: '27px',
  color: dark[60],
}));

const StyledWrappedValue = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const StyledValue = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: '2rem',
  lineHeight: '44px',
  color: dark[60],
}));

const StyledStack = styled(Stack)(() => ({
  rowGap: 32,
}));

const StyledStackItem = styled(Stack)(({ theme }) => ({
  rowGap: 8,
  flexDirection: 'column',

  [theme.breakpoints.up('2md')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const StyledButton = styled(Button)(() => ({
  textTransform: 'capitalize',
  height: 43,
  padding: '10px 14px 10px 14px',
}));

const CTAGroup = styled(Box)(() => ({
  display: 'none',
}));

const MyAccountPage = () => {
  const { data: user } = useMeQuery();

  return (
    <Box component="section">
      <Heading>my account</Heading>
      <StyledStack>
        <StyledStackItem>
          <Box>
            <StyledLabel>Name</StyledLabel>
            <StyledWrappedValue>
              <StyledValue>{user?.fullname}</StyledValue>
            </StyledWrappedValue>
          </Box>
          <CTAGroup>
            <StyledButton sx={{ width: '124px' }} variant="outlined">
              Change name
            </StyledButton>
          </CTAGroup>
        </StyledStackItem>
        <StyledStackItem>
          <Box>
            <StyledLabel>Email address</StyledLabel>
            <StyledWrappedValue>
              <StyledValue>{user?.email}</StyledValue>
            </StyledWrappedValue>
          </Box>
          <CTAGroup>
            <StyledButton sx={{ width: '146px' }} variant="outlined">
              Change my email
            </StyledButton>
          </CTAGroup>
        </StyledStackItem>
        {/* <StyledStackItem>
          <StyledWrappedValue>
            <StyledValue>Password</StyledValue>
          </StyledWrappedValue>
          <CTAGroup>
            <StyledButton sx={{ width: '150px' }} variant="outlined">
              Change password
            </StyledButton>
          </CTAGroup>
        </StyledStackItem> */}
        <StyledStackItem>
          <DeleteAccountButton />
        </StyledStackItem>
      </StyledStack>
    </Box>
  );
};

export default MyAccountPage;

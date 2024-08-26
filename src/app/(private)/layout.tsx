'use client';
import AppLayout from '@/components/AppLayout';
import MasterSidebar from '@/components/AppLayout/master/MasterSidebar/MasterSidebar';
import { PrivateRoute } from '@/components/Route';
import { Box, Container, Stack, styled } from '@mui/material';

const StyledContent = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',

  [theme.breakpoints.up('md')]: {
    marginLeft: 100,
  },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: '78px',
  paddingBottom: '301.5px',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRoute>
      <AppLayout isAuthPage>
        <Container sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <StyledStack>
            <MasterSidebar />
            <StyledContent>{children}</StyledContent>
          </StyledStack>
        </Container>
      </AppLayout>
    </PrivateRoute>
  );
}

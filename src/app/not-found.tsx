import { MasterLayout } from '@/components/AppLayout';
import MasterHeader from '@/components/AppLayout/master/MasterHeader/MasterHeader';
import { goToHome } from '@/const/messages';
import { dark } from '@/theme/colors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFoundView() {
  return (
    <>
      <MasterLayout
        header={<MasterHeader isHideMenu isHideActionButtons />}
        container={
          <>
            <Container>
              <Box
                sx={{
                  maxWidth: 480,
                  mx: 'auto',
                  display: 'flex',
                  textAlign: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    mb: 1,
                    fontSize: {
                      xs: '1.5rem',
                      '2md': '1.875rem',
                    },
                  }}
                >
                  Sorry, page not found!
                </Typography>
                <Typography sx={{ color: dark[40], fontSize: '1.25rem' }}>
                  Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check
                  your spelling.
                </Typography>

                <Box
                  component="img"
                  src="/assets/svg/404.svg"
                  sx={{
                    mx: 'auto',
                    width: '100%',
                    maxWidth: '347px',
                    my: {
                      xs: 5,
                    },
                  }}
                />

                <Button
                  LinkComponent={Link}
                  sx={{ padding: '12px 24px', height: '46px', fontWeight: 900, fontSize: '1rem', lineHeight: '22px' }}
                  href="/"
                  size="large"
                  variant="contained"
                >
                  {goToHome}
                </Button>
              </Box>
            </Container>
          </>
        }
        footer={null}
      />
    </>
  );
}

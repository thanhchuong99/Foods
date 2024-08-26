'use client';
import useGetStartedUrl from '@/hooks/useGetStartedUrl';
import { accent, dark } from '@/theme/colors';
import { paytoneOneFont } from '@/util/fonts';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

const GetStartNow = () => {
  const getStartedUrl = useGetStartedUrl();

  return (
    <Box
      component="section"
      sx={{
        paddingTop: {
          xs: '80px',
          lg: '140px',
        },
        paddingBottom: {
          xs: '80px',
          lg: '140px',
        },
        backgroundColor: accent.softYellow,
      }}
    >
      <Container
        sx={theme => ({
          [theme.breakpoints.down('lg')]: {
            paddingLeft: '50px',
            paddingRight: '50px',
          },
        })}
      >
        <Typography
          sx={{
            ...paytoneOneFont.style,
            fontWeight: 400,
            fontSize: {
              xs: '3rem',
              lg: '3rem',
            },
            color: dark.base,
            lineHeight: {
              xs: '67px',
              lg: '67px',
            },
            marginBottom: {
              xs: '48px',
              lg: '48px',
            },
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
          variant="h2"
        >
          It’s time to take the pressure off and make mealtimes fun for everyone!
        </Typography>
        <Button
          component={Link}
          href={getStartedUrl}
          sx={{
            display: 'flex',
            height: {
              xs: '65px',
              lg: '65px',
            },
            width: '237px',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: {
              xs: '1.5rem',
              lg: '1.5rem',
            },
          }}
          variant="contained"
          color="primary"
        >
          Get Started Now
        </Button>
      </Container>
    </Box>
  );
};

export default GetStartNow;

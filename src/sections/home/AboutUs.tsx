import LazyLoadImage from '@/components/LazyLoadImage';
import { dark } from '@/theme/colors';
import { paytoneOneFont } from '@/util/fonts';
import { Box, Container, Grid, Stack, Typography, styled } from '@mui/material';
import Button from '@mui/material/Button';
import aboutImage from '../../../public/assets/image/about-us-img.png';
import Link from 'next/link';
import { Router } from '@/util/Router';

const StyledTextAboutUs = styled(Typography)(({ theme }) => ({
  color: dark[40],
  textAlign: 'left',
  fontWeight: 500,
  fontSize: '1.25rem',

  [theme.breakpoints.up('lg')]: {
    fontSize: '1.25rem',
    lineHeight: 1.4,
  },
}));

const AboutUs = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingTop: {
          xs: '20px',
          lg: '100px',
        },
        paddingBottom: {
          xs: '170px',
          lg: '100px',
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={theme => ({
          [theme.breakpoints.down('lg')]: {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        })}
      >
        <Grid container alignItems="center" justifyContent="space-between" rowGap="24px">
          <Grid item xs={12} lg={6}>
            <Stack
              sx={theme => ({
                [theme.breakpoints.only('lg')]: {
                  maxWidth: '531px',
                },
              })}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '2.5rem',
                    lg: '2.5rem',
                  },
                  color: dark.base,
                  lineHeight: '56px',
                  textAlign: 'left',
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                }}
                style={paytoneOneFont.style}
                variant="h2"
              >
                about us
              </Typography>
              <StyledTextAboutUs
                sx={{
                  marginBottom: {
                    xs: '40px',
                    lg: '30px',
                  },
                }}
              >
                Wonderfoods was developed with the guidance of Occupational Therapists and Child Behaviour specialists.
              </StyledTextAboutUs>
              <StyledTextAboutUs
                sx={{
                  marginBottom: {
                    xs: '24px',
                  },
                }}
              >
                If you have concerns regarding your child&apos;s eating, it is important to discuss this with your GP or
                pediatrician before using these tools.
              </StyledTextAboutUs>
              <Button
                component={Link}
                href={Router.About}
                color="primary"
                variant="contained"
                sx={{ width: 140, fontSize: '1rem', height: '46px' }}
              >
                View More
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6} className="flex items-center justify-center lg:justify-end">
            <Box
              sx={theme => ({
                width: '100%',
                maxWidth: '535px',

                [theme.breakpoints.up('sm')]: {
                  // Note: 408 includes padding-left and padding-right
                  aspectRatio: '408/459',
                  // Note: Do not use paddingX, It makes the image ratio render wrong.
                  marginX: '12px',
                },

                [theme.breakpoints.up('lg')]: {
                  aspectRatio: '535/603',
                  width: '100%',
                },
              })}
            >
              <LazyLoadImage
                src={aboutImage}
                alt="About Us"
                loading="lazy"
                className="rounded-32 shadow-image p-2.5 w-full h-full object-cover"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;

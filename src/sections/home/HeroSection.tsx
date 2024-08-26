import { Box, Button, Container, Typography, styled } from '@mui/material';
import Image from 'next/image';
import { dark } from '@/theme/colors';
import { marvinFont } from '@/util/fonts';
import HeroAnimation from './HeroAnimation/HeroAnimation';
import Link from 'next/link';
import useGetStartedUrl from '@/hooks/useGetStartedUrl';

const StyledHero = styled(Box)(({ theme }) => ({
  backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, #F4F8FC 100%)',
  display: 'flex',
  justifyContent: 'space-between',
  height: 'auto',
  paddingTop: '20px',
  position: 'relative',

  '.left-hero-image': {
    width: '100%',
    height: '100%',
    display: 'none',
  },

  '.object': {
    position: 'absolute',
    zIndex: 1,
  },

  [theme.breakpoints.up('xs')]: {
    '.left-hero-image': {
      display: 'inline-block',
    },
    paddingLeft: '30px',

    '.object': {
      left: '-328px',
      top: '-142px',
    },
  },

  [theme.breakpoints.up('sm')]: {
    paddingLeft: '41px',
    paddingRight: '48px',
    paddingTop: '71px',
  },

  [theme.breakpoints.up('lg')]: {
    paddingTop: '124px',

    '.object': {
      top: -120,
      zIndex: 1,
      left: -295,
    },
  },
}));

const HeroTitleText = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  ...marvinFont.style,
  fontSize: '2rem',

  [theme.breakpoints.up('sm')]: {
    fontSize: '3rem',
    lineHeight: '60px',
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '4.5rem',
    lineHeight: '90px',
    fontWeight: 400,
  },
}));

const HeroSection = () => {
  const getStartedUrl = useGetStartedUrl();

  return (
    <StyledHero component="section">
      <Container
        maxWidth="lg"
        sx={theme => ({
          position: 'relative',

          [theme.breakpoints.up('xs')]: {
            paddingLeft: 0,
            paddingRight: 0,
          },

          [theme.breakpoints.up('md')]: {
            paddingBottom: '153px',
          },
        })}
      >
        <Box
          sx={() => ({
            position: 'relative',
            zIndex: 5,
            width: 'fit-content',
          })}
        >
          <Typography variant="h1">
            <HeroTitleText sx={{ color: dark.base }}>Reverse picky</HeroTitleText>
            <HeroTitleText sx={{ color: dark.base }}>eating with the</HeroTitleText>
            <HeroTitleText
              sx={{ color: theme => theme.palette.primary.main, position: 'relative', width: 'fit-content' }}
            >
              Wonderfoods
              <Image
                className="hidden lg:block absolute -bottom-[17px] lg:-bottom-[17px] left-0 lg:-left-[20px] -z-10 object-contain w-full lg:w-auto"
                src="/assets/svg/underline-hero-page.svg"
                height={43}
                width={658}
                alt=""
              />
              <Box
                component="span"
                sx={theme => ({
                  width: '100%',
                  display: 'block',
                  position: 'absolute',
                  zIndex: -10,

                  [theme.breakpoints.down('sm')]: {
                    img: {
                      width: '100%',
                      height: '18px',
                      objectFit: 'cover',
                      overflow: 'visible',
                      zIndex: -10,
                      bottom: 0,
                      left: 0,
                    },
                  },

                  [theme.breakpoints.up('sm')]: {
                    width: '418px',
                    bottom: -2.9,
                    left: 0,

                    img: {
                      objectFit: 'contain',
                      width: 'auto',
                      height: 'auto',
                    },
                  },

                  [theme.breakpoints.up('lg')]: {
                    display: 'none',
                  },
                })}
              >
                <Image
                  className="block lg:hidden absolute -bottom-[14px] -left-5 -z-10 object-cover"
                  src="/assets/svg/underline-hero-page-mobile.svg"
                  height={30}
                  width={430}
                  alt=""
                />
              </Box>
            </HeroTitleText>
            <HeroTitleText sx={{ color: dark.base, mb: 4 }}>App</HeroTitleText>
          </Typography>
          <Button
            href={getStartedUrl}
            component={Link}
            sx={{
              width: {
                xs: 209.5,
              },
              height: 46,
              paddingLeft: {
                lg: '24px',
              },
              paddingRight: {
                lg: '24px',
              },
              justifyContent: {
                lg: 'space-between',
              },
              fontWeight: 900,
              fontSize: '1rem',
              lineHeight: '22px',
            }}
            color="primary"
            variant="contained"
          >
            <span>Get Started Now</span>
            <Image className="ml-[10px]" src="/assets/svg/arrow-right.svg" width={19} height={21} alt="" />
          </Button>
        </Box>
        <Box
          sx={theme => ({
            [theme.breakpoints.up('xs')]: {
              // Note: Actually design is 612px, but we need to calculate the actual size with ratio
              // 1122/801 = 1.4
              // 848/612 = 1.4 ~ 1,38562092

              width: 801,
              height: 605.71428571,
              position: 'relative',
              right: 280,
              bottom: 59,
              marginBottom: '-59px',
            },

            '@media only screen and (min-width: 500px) and (max-width: 768px)': {
              right: 80,
            },

            '@media only screen and (min-width: 768px) and (max-width: 830px)': {
              right: -500,
            },

            '@media only screen and (min-width: 831px) and (max-width: 992px)': {
              right: -400,
            },

            [theme.breakpoints.up('md')]: {
              width: '1122px',
              height: '848px',
              position: 'absolute',
              right: -250,
            },

            [theme.breakpoints.up('lg')]: {
              right: -301,
            },

            svg: {
              width: '100%',
              height: '100%',
            },

            '.transparent-pipe': {
              display: 'block',
              '--width-pipe': '74px',
              width: 'var(--width-pipe)',
              height: '60px',
              bgcolor: 'transparent',
              position: 'absolute',
              top: 0,
              right: 'calc(87px + 37px)',
              backgroundImage: 'linear-gradient(to bottom, rgba(250, 252, 254, 1) 0%, rgba(250, 252, 254, 0) 90%)',

              [theme.breakpoints.up('lg')]: {
                display: 'none',
              },
            },
          })}
        >
          <HeroAnimation />
          <Box className="transparent-pipe" />
        </Box>
        <Image className="object" src="/assets/image/hero-img2.png" alt="" width={359} height={489} />
      </Container>
    </StyledHero>
  );
};

export default HeroSection;

import LazyLoadImage from '@/components/LazyLoadImage';
import { dark } from '@/theme/colors';
import { customShadows } from '@/theme/customShadows';
import { Box, Container, Typography, styled } from '@mui/material';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: '64px 0 90px',

  [theme.breakpoints.up('lg')]: {
    paddingTop: '100px',
    paddingBottom: '90px',
  },
}));

const SectionInner = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '22px',

  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-start',
    '& img': {
      height: '100%',
      transform: 'none',
    },
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  borderRadius: '32px',
  width: '100%',

  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  border: '10px solid white',
  boxShadow: customShadows.z16,
  boxSizing: 'content-box',
  marginLeft: '-10px',
  aspectRatio: '432/429',
  height: '100%',
  [theme.breakpoints.up('lg')]: {
    height: '429px',
    aspectRatio: '1160/429',
  },
}));

const AboutSection = () => {
  return (
    <SectionWrapper>
      <Container
        sx={{
          paddingX: {
            xs: '24px',
            lg: '0',
          },
        }}
      >
        <SectionInner>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '500',
              lineHeight: '30px',
              color: dark[40],
              textAlign: 'left',
            }}
          >
            Welcome to Adventure Foods! We&apos;re passionate about combining the thrill of gaming with the joy of
            culinary exploration. Our mission is to create immersive experiences that transport players to vibrant
            food-themed worlds, where they can embark on exciting adventures, discover delicious recipes, and connect
            with fellow food enthusiasts.
          </Typography>
          <ImageWrapper>
            <LazyLoadImage
              className="h-full lg:h-auto w-full object-cover lg:object-contain"
              src="/assets/about-us.jpg"
              alt="About Us"
              width={1160}
              height={772}
              sxWrapper={{
                transform: {
                  lg: 'translateY(-90px)',
                },
              }}
            />
          </ImageWrapper>
        </SectionInner>
      </Container>
    </SectionWrapper>
  );
};

export default AboutSection;

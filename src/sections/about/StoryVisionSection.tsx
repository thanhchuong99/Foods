import { dark } from '@/theme/colors';
import { nunitoFont, paytoneOneFont } from '@/util/fonts';
import { Box, Container, Typography, styled } from '@mui/material';

const SectionWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    paddingBottom: '0',
  },

  [theme.breakpoints.up('lg')]: {
    padding: '104px 0',
  },
}));

const SectionInner = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '40px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

const Paragraph = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}));

const ParagraphTitle = styled(Typography)(({ theme }) => ({
  ...paytoneOneFont.style,
  fontSize: '36px',
  fontWeight: '400',
  lineHeight: '56px',
  color: dark.base,
  textTransform: 'uppercase',

  [theme.breakpoints.up('lg')]: {
    fontSize: '40px',
  },
}));

const ParagraphDesc = styled(Typography)(() => ({
  ...nunitoFont.style,
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '30px',
  color: dark[40],
}));

const StoryVisionSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionInner>
          <Paragraph>
            <ParagraphTitle>Our Story</ParagraphTitle>
            <ParagraphDesc>
              Adventure Foods was founded by a team of gaming enthusiasts and food lovers who shared a vision of
              creating a unique gaming experience centered around food. Inspired by our love for culinary delights and
              the immersive world of gaming, we set out to develop a game that would captivate players of all ages and
              backgrounds.
            </ParagraphDesc>
          </Paragraph>
          <Paragraph>
            <ParagraphTitle>Our VISION</ParagraphTitle>
            <ParagraphDesc>
              Our vision is to become the leading destination for food-themed gaming experiences, known for our
              innovative gameplay, stunning visuals, and mouthwatering recipes. We aim to continuously push the
              boundaries of gaming and culinary exploration, inspiring players to unleash their inner chef and embark on
              unforgettable adventures.
            </ParagraphDesc>
          </Paragraph>
        </SectionInner>
      </Container>
    </SectionWrapper>
  );
};

export default StoryVisionSection;

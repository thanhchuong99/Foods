import LazyLoadImage from '@/components/LazyLoadImage';
import { dark } from '@/theme/colors';
import { nunitoFont, paytoneOneFont } from '@/util/fonts';
import { Box, Container, Typography, styled } from '@mui/material';

const SectionWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    paddingTop: '100px',
    paddingBottom: '163px',
  },

  [theme.breakpoints.up('lg')]: {
    padding: '74px 0',
  },
}));

const SectionInner = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '64px',
}));

const TeamIntro = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}));

const IntroTitle = styled(Typography)(({ theme }) => ({
  ...paytoneOneFont.style,
  fontSize: '36px',
  fontWeight: '400',
  lineHeight: '56px',
  color: dark.base,
  textTransform: 'uppercase',
  textAlign: 'center',

  [theme.breakpoints.up('lg')]: {
    fontSize: '40px',
  },
}));

const IntroDesc = styled(Typography)(() => ({
  ...nunitoFont.style,
  fontSize: '20px',
  fontWeight: '500',
  lineHeight: '30px',
  color: dark[40],
  textAlign: 'center',
}));

const TeamMembers = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: '40px',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  },
}));

const Member = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
  },
}));

const MemberImageWrapper = styled(Box)(() => ({
  width: '100%',
  maxWidth: '260px',
  overflow: 'hidden',
  borderRadius: '16px',
  display: 'flex',
  justifyContent: 'center',

  aspectRatio: '180 / 252',

  '.lazy-load-image': {
    width: '100%',
    height: '100%',
  },

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const MemberName = styled(Typography)(() => ({
  ...nunitoFont.style,
  fontSize: '24px',
  fontWeight: '900',
  lineHeight: '33px',
  textAlign: 'center',
  color: dark.base,
}));

const MemberRole = styled(Typography)(() => ({
  ...nunitoFont.style,
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '25px',
  textAlign: 'center',
  color: dark[50],
}));

const TeamSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <SectionInner>
          <TeamIntro>
            <IntroTitle>MEET THE TEAM</IntroTitle>
            <IntroDesc>
              Behind Adventure Foods is a dedicated team of developers, designers, and food enthusiasts who are
              passionate about creating memorable gaming experiences.
            </IntroDesc>
          </TeamIntro>
          <TeamMembers>
            <Member>
              <MemberImageWrapper>
                <LazyLoadImage
                  sxWrapper={{ display: 'flex', justifyContent: 'center' }}
                  src="/assets/team-member-1.jpg"
                  alt="About Us"
                  fill
                />
              </MemberImageWrapper>
              <Box>
                <MemberName>James Doe</MemberName>
                <MemberRole>Manager</MemberRole>
              </Box>
            </Member>
            <Member>
              <MemberImageWrapper>
                <LazyLoadImage
                  sxWrapper={{ display: 'flex', justifyContent: 'center' }}
                  src="/assets/team-member-2.jpg"
                  alt="About Us"
                  fill
                />
              </MemberImageWrapper>
              <Box>
                <MemberName>James Doe</MemberName>
                <MemberRole>Manager</MemberRole>
              </Box>
            </Member>
            <Member>
              <MemberImageWrapper>
                <LazyLoadImage
                  sxWrapper={{ display: 'flex', justifyContent: 'center' }}
                  src="/assets/team-member-3.jpg"
                  alt="About Us"
                  fill
                />
              </MemberImageWrapper>
              <Box>
                <MemberName>James Doe</MemberName>
                <MemberRole>Manager</MemberRole>
              </Box>
            </Member>
            <Member>
              <MemberImageWrapper>
                <LazyLoadImage
                  sxWrapper={{ display: 'flex', justifyContent: 'center' }}
                  src="/assets/team-member-4.jpg"
                  alt="About Us"
                  fill
                />
              </MemberImageWrapper>
              <Box>
                <MemberName>James Doe</MemberName>
                <MemberRole>Manager</MemberRole>
              </Box>
            </Member>
          </TeamMembers>
        </SectionInner>
      </Container>
    </SectionWrapper>
  );
};

export default TeamSection;

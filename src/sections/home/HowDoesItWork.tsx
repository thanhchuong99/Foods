import { dark } from '@/theme/colors';
import { paytoneOneFont } from '@/util/fonts';
import { Box, Container, Typography } from '@mui/material';
import HowDoesItWorkTile from './HowDoesItWorkTile';
import { styled } from '@mui/system';

const StyledWrapper = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  columnGap: '40px',
  rowGap: '40px',

  '@media (min-width: 576px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 260px)',
  },
}));

const HowDoesItWork = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingTop: {
          xs: '80px',
          md: '150px',
        },
        paddingBottom: {
          xs: '80px',
          md: '121px',
        },
        backgroundColor: '#F5F9FD',
      }}
    >
      <Container>
        <Typography
          sx={{
            fontSize: {
              xs: '2.25rem',
              lg: '2.5rem',
            },
            color: dark.base,
            lineHeight: {
              lg: '60px',
            },
            textAlign: 'center',
            marginBottom: {
              xs: '64px',
            },
            textTransform: 'uppercase',
          }}
          style={paytoneOneFont.style}
          variant="h2"
        >
          How does Wonderfoods <br className="lg:hidden" /> Work?
        </Typography>
        <StyledWrapper>
          <HowDoesItWorkTile
            title="SELECT FOOD"
            description="Simply choose a new food and complete the food adventure over a time frame that works for you and your child"
            imageSrc="/assets/svg/how-does-it-work-1.svg"
          />
          <HowDoesItWorkTile
            title="ADD EXPOSURE"
            description="Look, Touch, Smell, Taste and bite in food to get more exposure for your child."
            imageSrc="/assets/svg/how-does-it-work-2.svg"
          />
          <HowDoesItWorkTile
            title="COMPLETE CHALLENGE"
            description="Every food exposure - sight, touch, smell or taste is progress on the challenge"
            imageSrc="/assets/svg/how-does-it-work-3.svg"
            sx={() => ({
              maxWidth: '228px',
              marginLeft: 'auto',
              marginRight: 'auto',
            })}
          />
          <HowDoesItWorkTile
            title="EARN AWARD"
            description="Earn a certificate for every food adventure completed!"
            imageSrc="/assets/svg/how-does-it-work-4.svg"
          />
        </StyledWrapper>
      </Container>
    </Box>
  );
};

export default HowDoesItWork;

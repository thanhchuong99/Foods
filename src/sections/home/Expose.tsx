import { accent, dark, primary } from '@/theme/colors';
import { paytoneOneFont } from '@/util/fonts';
import { Box, Container, Typography } from '@mui/material';
// import ExposeSvg from './Animation/ExposeSvg';
import ExposeAnimation from './Animation/ExposeAnimation';

const Expose = () => {
  return (
    <Box
      component="section"
      sx={{
        paddingTop: {
          xs: '146px',
          lg: '120px',
        },
        height: {
          xs: 'auto',
          lg: 1395,
        },
        position: 'relative',
      }}
    >
      <Container
        maxWidth={false}
        className="w-full"
        sx={{
          overflow: 'hidden',
        }}
      >
        <Container maxWidth={'lg'}>
          <Typography
            variant="h2"
            sx={{
              ...paytoneOneFont.style,
              color: dark.base,
              fontSize: {
                xs: '2.25rem',
                lg: '2.5rem',
              },
              fontWeight: 400,
              textAlign: 'center',
              maxWidth: '962px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textTransform: 'uppercase',
              lineHeight: {
                xs: '50px',
                lg: '56px',
              },
            }}
          >
            With{' '}
            <Box component="span" sx={{ color: primary.base }}>
              Wonderfoods
            </Box>{' '}
            your child can
            <br className="hidden lg:inline" /> explore{' '}
            <Box component="span" sx={{ color: accent.yellow, whiteSpace: 'nowrap' }}>
              new foods
            </Box>{' '}
            <br className="inline-block lg:hidden" />
            in a relaxed way <br className="hidden lg:inline" /> through gradual{' '}
            <Box component="span" sx={{ color: accent.red }}>
              exposure
            </Box>{' '}
          </Typography>
        </Container>
        <ExposeAnimation />
      </Container>
    </Box>
  );
};

export default Expose;

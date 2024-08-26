import Video from '@/components/Video';
import useAppInformation from '@/hooks/useAppInformation';
import { accent } from '@/theme/colors';
import { paytoneOneFont } from '@/util/fonts';
import { Box, Container, Typography } from '@mui/material';

const VideoSection = () => {
  const data = useAppInformation();

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        height: {
          xs: 'auto',
        },
        width: '100%',
        backgroundImage: 'url("/background-video.png")',
        backgroundRepeat: 'repeat',
        backgroundSize: '45px',
        backgroundPosition: '3.5px 0px',

        '&::before, &::after': {
          position: 'absolute',
          content: '""',
          width: '100%',
          height: '18px',
          backgroundColor: accent.softYellow,
        },

        '&::before': {
          boxShadow: '0px 12px 0px rgba(186, 192, 140, 0.58)',
          top: '-1px',
        },

        '&::after': {
          bottom: 0,
        },

        paddingTop: { xs: '140px', lg: '122px' },
        paddingBottom: { xs: '130px', lg: '122px' },
      }}
    >
      <Container
        sx={{
          maxWidth: {
            xs: '100%',
            lg: '1160px',
          },
          paddingLeft: '11.5px',
          paddingRight: '11.5px',
          margin: {
            xs: '0px',
            lg: '0 auto',
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            maxWidth: {
              xs: '100%',
              lg: '1110px',
            },
            marginLeft: '0px',
            marginRight: '0px',
            color: accent.softYellow,
            lineHeight: {
              xs: '50px',
              lg: '56px',
            },
            fontSize: {
              xs: '2.25rem',
              lg: '2.5rem',
            },
            fontWeight: 400,
            textTransform: 'uppercase',
            marginBottom: '54px',
          }}
          style={paytoneOneFont.style}
        >
          Did you know your child may need to be introduced to a food at least 20 times before eating it?
        </Typography>
        <Video
          allowStopWhenPlaying
          className="mr-auto ml-auto block mt-4 lg:mt-16 w-full"
          videoSx={theme => ({
            width: '100%',
            height: '100%',

            [theme.breakpoints.up('lg')]: {
              maxWidth: 1130,
              maxHeight: 620,
            },

            aspectRatio: '438/246',
          })}
          poster="/assets/image/video.png"
          sources={data?.video_url ? [{ key: '1', src: data?.video_url, type: 'video/mp4' }] : []}
        />
      </Container>
    </Box>
  );
};

export default VideoSection;

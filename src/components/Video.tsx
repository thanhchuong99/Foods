'use client';
import { useRef, useState } from 'react';
import { Box, SxProps, Theme, styled } from '@mui/material';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';

const StyledVideo = styled('video')`
  border-radius: 32px;
  border: 10px solid #ffffff;
  object-fit: cover;
`;

interface Props {
  sources: { src: string; type: 'video/mp4' | 'video/webm'; key: string }[];
  preload?: 'auto' | 'metadata' | 'none';
  poster: string;
  width?: number;
  height?: number;
  className?: string;
  loop?: boolean;
  videoSx?: SxProps<Theme>;
  allowStopWhenPlaying?: boolean;
}

const Video = ({ sources, preload, poster, height, width, className, loop, videoSx, allowStopWhenPlaying }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const playVideo = () => {
    if (!videoRef.current || !sources.length) return;

    videoRef.current.play();
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlayVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  };

  return (
    <Box sx={{ position: 'relative', height: height }}>
      <StyledVideo
        onEnded={() => setIsPlaying(false)}
        className={className}
        ref={videoRef}
        width={width}
        height={height}
        playsInline
        disablePictureInPicture
        preload={preload}
        poster={poster}
        controls={false}
        loop={loop}
        aria-labelledby="video-title"
        sx={videoSx}
      >
        {sources.map(source => {
          return <source key={source.key} src={source.src} type={source.type} />;
        })}
      </StyledVideo>

      <Box
        sx={{
          cursor: sources.length ? 'pointer' : 'default',
          width: '100%',
          height: '100%',
          bgcolor: 'transparent',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          borderRadius: '32px',
          overflow: 'hidden',
          display: allowStopWhenPlaying ? 'block' : 'none',
        }}
        className="video-player__overplay"
        onClick={togglePlayVideo}
      />

      {sources.length > 0 && (
        <Box
          onClick={e => {
            e.stopPropagation();
            playVideo();
          }}
          sx={{
            width: { xs: '66px', lg: '93px' },
            height: { xs: '66px', lg: '93px' },
            border: '5px solid #ffffff',
            backgroundImage: 'linear-gradient(to bottom, #F86335, #FF611D)',
            boxShadow: '0 20px 20px 0 rgba(251, 97, 39, 0.42)',
            position: 'absolute',
            zIndex: 2,
            top: {
              xs: '50%',
              lg: '288px',
            },
            left: '50%',
            transform: {
              xs: 'translate(-50%, -50%)',
              lg: 'translateX(-50%)',
            },
            display: isPlaying ? 'none' : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
          className="video-player__play-button"
          aria-controls="video-ref"
        >
          <Image
            src="/assets/svg/play-button.svg"
            alt="Play button"
            width={matches ? 22 : 15.78}
            height={matches ? 33 : 24.16}
          />
        </Box>
      )}
    </Box>
  );
};

export default Video;

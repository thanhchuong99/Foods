import Box from '@mui/material/Box';
import Image from 'next/image';
import { center, zoomKeyframes } from '../styles';
import { configAnimation, constType } from './_config';

const Logo = () => {
  const { from, to } = configAnimation.logo;

  return (
    <Box
      component={'div'}
      sx={{
        ...center,
        animation: `${zoomKeyframes(from, to)} ${constType}`,
      }}
    >
      <Image
        src={'/assets/image/dashboard/logo.png'}
        style={{
          width: '100%',
          height: '100%',
        }}
        width={308}
        height={308}
        alt="Look Icon"
      />
    </Box>
  );
};

export default Logo;

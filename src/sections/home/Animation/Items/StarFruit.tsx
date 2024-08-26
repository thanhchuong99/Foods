import { Box } from '@mui/material';
import Image from 'next/image';
import { moveItemKeyframesAndHide } from '../styles';
import { configAnimation, constType } from './_config';

const StarFruit = () => {
  const { from, to } = configAnimation.starFruit;

  return (
    <Box
      component={'div'}
      sx={{
        position: 'absolute',
        animation: `${moveItemKeyframesAndHide(from, to)} ${constType}`,
      }}
    >
      <Image src={'/assets/image/dashboard/starFruit.png'} width={32} height={49} alt="Look Icon" />
    </Box>
  );
};

export default StarFruit;

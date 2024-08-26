import { Box } from '@mui/material';
import Image from 'next/image';
import { configAnimation, constType } from './_config';
import { moveItemKeyframesAndHide } from '../styles';

const Lemon2 = () => {
  const { from, to } = configAnimation.lemon2;

  return (
    <Box
      component={'div'}
      sx={{
        position: 'absolute',
        animation: `${moveItemKeyframesAndHide(from, to)} ${constType}`,
      }}
    >
      <Image src={'/assets/image/dashboard/lemon2.png'} width={74} height={71} alt="Look Icon" />
    </Box>
  );
};

export default Lemon2;

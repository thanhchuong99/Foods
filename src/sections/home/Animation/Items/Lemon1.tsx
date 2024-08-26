import { Box } from '@mui/material';
import Image from 'next/image';
import { configAnimation, constType } from './_config';
import { moveItemKeyframesAndHide } from '../styles';

const Lemon = () => {
  const { from, to } = configAnimation.lemon1;

  return (
    <Box
      component={'div'}
      sx={{
        position: 'absolute',
        animation: `${moveItemKeyframesAndHide(from, to)} ${constType}`,
      }}
    >
      <Image src={'/assets/image/dashboard/lemon.png'} width={36} height={35} alt="Look Icon" />
    </Box>
  );
};

export default Lemon;

import { Box } from '@mui/material';
import Image from 'next/image';

const StarFruit3 = () => {
  return (
    <Box
      component={'div'}
      sx={{
        position: 'absolute',
        left: '-5px',
        top: '606px',
        rotate: '-17deg',
      }}
    >
      <Image src={'/assets/image/dashboard/starFruit.png'} width={32} height={49} alt="Look Icon" />
    </Box>
  );
};

export default StarFruit3;

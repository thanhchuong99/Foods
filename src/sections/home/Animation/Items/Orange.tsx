import { Box } from '@mui/material';
import Image from 'next/image';
import { configAnimation, constType } from './_config';
import { moveItemKeyframesAndHide } from '../styles';

const Orange = () => {
  const { from, to } = configAnimation.orange;

  return (
    <Box
      component={'div'}
      sx={{
        position: 'absolute',
        animation: `${moveItemKeyframesAndHide(from, to)} ${constType}`,
      }}
    >
      <Image
        src={'/assets/image/dashboard/orange.png'}
        className="object-cover"
        width={180}
        height={200}
        alt="Look Icon"
      />
    </Box>
  );
};

export default Orange;

import { Box } from '@mui/material';
import Image from 'next/image';
import { moveItemKeyframesAndHide } from '../styles';
import { configAnimation, constType } from './_config';

const Apple = () => {
  const { from, to } = configAnimation.apple;

  return (
    <Box
      component={'div'}
      sx={{
        position: 'absolute',
        animation: `${moveItemKeyframesAndHide(from, to)} ${constType}`,
      }}
    >
      <Image
        src={'/assets/image/dashboard/apple.png'}
        className="object-cover"
        width={158}
        height={175}
        alt="Look Icon"
      />
    </Box>
  );
};

export default Apple;

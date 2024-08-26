import { Box } from '@mui/material';
import Image from 'next/image';
import { configAnimation, constType } from './_config';
import { moveItemKeyframesAndHide } from '../styles';

const Melon = () => {
  const { from, to } = configAnimation.melon;

  return (
    <Box
      component={'div'}
      sx={{
        position: 'absolute',
        animation: `${moveItemKeyframesAndHide(from, to)} ${constType}`,
      }}
    >
      <Image
        src={'/assets/image/dashboard/melon.png'}
        className="object-cover"
        width={182}
        height={149}
        alt="Look Icon"
      />
    </Box>
  );
};

export default Melon;

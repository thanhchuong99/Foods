import Image from 'next/image';
import BackgroundLayout from './BackgroundLayout';
import { Box } from '@mui/material';
import { primary } from '@/theme/colors';
import { configAnimation, constType } from './_config';
import { moveItemKeyframesAndHide } from '../styles';

const Touch = () => {
  const { from, to } = configAnimation.touch;

  return (
    <BackgroundLayout
      sx={{
        position: 'absolute',
        animation: `${moveItemKeyframesAndHide(from, to, 'to')} ${constType}`,
      }}
    >
      <Image
        src={'/assets/image/dashboard/touch.png'}
        className="object-cover"
        width={57}
        height={87}
        alt="Look Icon"
      />
      <Box
        sx={{
          color: primary['60'],
        }}
      >
        Touch
      </Box>
    </BackgroundLayout>
  );
};

export default Touch;

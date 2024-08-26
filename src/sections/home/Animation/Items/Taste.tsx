import { accent } from '@/theme/colors';
import { Box } from '@mui/material';
import Image from 'next/image';
import { moveItemKeyframesAndHide } from '../styles';
import BackgroundLayout from './BackgroundLayout';
import { configAnimation, constType } from './_config';

const Taste = () => {
  const { from, to } = configAnimation.taste;

  return (
    <BackgroundLayout
      sx={{
        position: 'absolute',
        animation: `${moveItemKeyframesAndHide(from, to, 'to')} ${constType}`,
      }}
    >
      <Image
        src={'/assets/image/dashboard/taste.png'}
        className="object-cover"
        width={57}
        height={74}
        alt="Look Icon"
      />
      <Box
        sx={{
          color: accent.red,
        }}
        component={'span'}
        className="!font-nunito !font-[900]"
      >
        Taste
      </Box>
    </BackgroundLayout>
  );
};

export default Taste;

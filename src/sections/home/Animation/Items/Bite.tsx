import Image from 'next/image';
import BackgroundLayout from './BackgroundLayout';
import { Box } from '@mui/material';
import { moveItemKeyframesAndHide } from '../styles';
import { configAnimation, constType } from './_config';

const Bite = () => {
  const { from, to } = configAnimation.bite;

  return (
    <BackgroundLayout
      sx={{
        position: 'absolute',
        animation: `${moveItemKeyframesAndHide(from, to, 'to')} ${constType}`,
      }}
    >
      <Image src={'/assets/image/dashboard/bite.png'} className="object-cover" width={58} height={71} alt="Look Icon" />
      <Box
        sx={{
          color: '#7F74F3',
        }}
      >
        Bite
      </Box>
    </BackgroundLayout>
  );
};

export default Bite;

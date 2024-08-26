import { Box } from '@mui/material';
import Image from 'next/image';
import BackgroundLayout from './BackgroundLayout';
import { configAnimation, constType } from './_config';
import { moveItemKeyframesAndHide } from '../styles';

const Smell = () => {
  const { from, to } = configAnimation.smell;

  return (
    <BackgroundLayout
      sx={{
        position: 'absolute',
        animation: `${moveItemKeyframesAndHide(from, to, 'to')} ${constType}`,
      }}
    >
      <Box
        component={'div'}
        sx={{
          position: 'relative',
          height: '77px',
          width: '54px',
        }}
      >
        <Image src={'/assets/image/dashboard/smell.png'} className="object-cover" fill alt="Look Icon" />
      </Box>
      <Box
        component="span"
        sx={{
          color: '#EE7F40',
          display: 'block',
        }}
      >
        Smell
      </Box>
    </BackgroundLayout>
  );
};

export default Smell;

import { dark } from '@/theme/colors';
import { Box } from '@mui/material';
import Image from 'next/image';
import BackgroundLayout from './BackgroundLayout';
import { moveItemKeyframesAndHide } from '../styles';
import { configAnimation, constType } from './_config';
// 331 194
// 381 344

const Look = () => {
  const { from, to } = configAnimation.look;

  return (
    <BackgroundLayout
      sx={{
        position: 'absolute',
        animation: `${moveItemKeyframesAndHide(from, to, 'to')} ${constType}`,
      }}
    >
      <Image src={'/assets/image/dashboard/look.png'} width={70} className="object-cover" height={64} alt="Look Icon" />
      <Box
        component="span"
        sx={{
          color: dark['40'],
        }}
      >
        Look
      </Box>
    </BackgroundLayout>
  );
};

export default Look;

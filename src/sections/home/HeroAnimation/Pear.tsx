import { Keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { generateAnimation } from './keyframes';

interface PearProps {
  keyframes: Keyframes;
}

const Pear = ({ keyframes }: PearProps) => {
  return (
    <Box
      id="Pear"
      sx={() => ({
        position: 'absolute',
        width: 'calc(199.49 / 1122 * 100%)',
        height: 'calc(250.35 / 848 * 100%)',
        left: 'calc(617 / 1122 * 100%)',
        bottom: 'calc(238.21 / 848 * 100%)',
        animation: generateAnimation(keyframes),
      })}
    >
      <Image fill alt="Pear" src="/assets/home-hero/pear.png" />
    </Box>
  );
};

export default Pear;

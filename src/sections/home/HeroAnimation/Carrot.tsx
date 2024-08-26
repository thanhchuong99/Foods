import { Keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { generateAnimation } from './keyframes';

interface CarrotProps {
  keyframes: Keyframes;
}

const Carrot = ({ keyframes }: CarrotProps) => {
  return (
    <Box
      id="carrot"
      sx={() => ({
        position: 'absolute',
        width: 'calc(159 / 1122 * 100%)',
        height: 'calc(248.5 / 848 * 100%)',
        left: 'calc(396 / 1122 * 100%)',
        top: 'calc(165 / 848 * 100%)',
        animation: generateAnimation(keyframes),
      })}
    >
      <Image fill alt="carrot" src="/assets/home-hero/carrot.png" />
    </Box>
  );
};

export default Carrot;

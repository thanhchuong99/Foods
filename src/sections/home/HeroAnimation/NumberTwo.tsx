import { Keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { generateAnimation } from './keyframes';

interface NumberTwoProps {
  keyframes?: Keyframes;
}

const NumberTwo = ({ keyframes }: NumberTwoProps) => {
  return (
    <Box
      id="number-2"
      sx={() => ({
        '--border-width': '5',

        position: 'absolute',
        // Note: Actual size is 45px and border 5px, it includes in image but not design
        // So, we need to calculate the actual size with border
        width: 'calc((45 + var(--border-width) * 2) / 1122 * 100%)',
        height: 'calc((45 + var(--border-width) * 2) / 848 * 100%)',
        left: 'calc((1005.14 - var(--border-width)) / 1122 * 100%)',
        top: 'calc((724.14 - var(--border-width)) / 848 * 100%)',
        animation: generateAnimation(keyframes),
      })}
    >
      <Image fill alt="carrot" src="/assets/home-hero/number-2.png" />
    </Box>
  );
};

export default NumberTwo;

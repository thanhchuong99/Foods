import { Keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { generateAnimation } from './keyframes';

interface NumberFourProps {
  keyframes?: Keyframes;
}

const NumberFour = ({ keyframes }: NumberFourProps) => {
  return (
    <Box
      id="number-4"
      sx={() => ({
        '--border-width': '5',

        position: 'absolute',
        // Note: Actual size is 45px and border 5px, it includes in image but not design
        // So, we need to calculate the actual size with border
        width: 'calc((45 + var(--border-width) * 2) / 1122 * 100%)',
        height: 'calc((45 + var(--border-width) * 2) / 848 * 100%)',
        left: 'calc((732.24 - var(--border-width)) / 1122 * 100%)',
        top: 'calc((632.24 - var(--border-width)) / 848 * 100%)',
        animation: generateAnimation(keyframes),
        transform: 'rotate(30deg)',
      })}
    >
      <Image fill alt="carrot" src="/assets/home-hero/number-4.png" />
    </Box>
  );
};

export default NumberFour;

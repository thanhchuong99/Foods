import { Keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { generateAnimation } from './keyframes';

interface NumberNine {
  keyframes?: Keyframes;
}

const NumberNine = ({ keyframes }: NumberNine) => {
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
        left: 'calc((784 - var(--border-width)) / 1122 * 100%)',
        top: 'calc((170 - var(--border-width)) / 848 * 100%)',
        animation: generateAnimation(keyframes),
        boxShadow: '0 20px 20px 5px rgba(92, 110, 141, 0.24)',
        borderRadius: '50%',
      })}
    >
      <Image fill alt="carrot" src="/assets/home-hero/number-9.png" />
    </Box>
  );
};

export default NumberNine;

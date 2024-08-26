import { Keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { generateAnimation } from './keyframes';

interface StarCircleProps {
  keyframes?: Keyframes;
}

const StarCircle = ({ keyframes }: StarCircleProps) => {
  return (
    <Box
      id="star-circle"
      sx={() => ({
        '--border-width': '5',

        position: 'absolute',
        // Note: Actual size is 50px and border 5px, it includes in image but not design
        // So, we need to calculate the actual size with border
        width: 'calc((50 + var(--border-width) * 2) / 1122 * 100%)',
        height: 'calc((50 + var(--border-width) * 2) / 848 * 100%)',
        left: 'calc((579 - var(--border-width)) / 1122 * 100%)',
        top: 'calc((501 - var(--border-width)) / 848 * 100%)',
        animation: generateAnimation(keyframes),
      })}
    >
      <Image fill alt="carrot" src="/assets/home-hero/star-circle.png" />
    </Box>
  );
};

export default StarCircle;

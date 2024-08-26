import { Keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { generateAnimation } from './keyframes';

interface StarGroupProps {
  top?: string;
  left?: string;
  keyframes?: Keyframes;
}

const StarGroup = ({ top, left, keyframes }: StarGroupProps) => {
  return (
    <Box
      id="star-group"
      sx={() => ({
        position: 'absolute',
        width: 'calc(114.66666667 / 1122 * 100%)',
        height: 'calc(94 / 848 * 100%)',
        left: left ?? 'calc(543 / 1122 * 100%)',
        top: top ?? 'calc(465 / 848 * 100%)',
        animation: generateAnimation(keyframes),
      })}
    >
      <Image fill alt="" src="/assets/home-hero/star-group.png" />
    </Box>
  );
};

export default StarGroup;

import { Keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { generateAnimation } from './keyframes';

interface KiwiCardProps {
  keyframes: Keyframes;
}

const KiwiCard = ({ keyframes }: KiwiCardProps) => {
  return (
    <Box
      id="KiwiCard"
      sx={() => ({
        position: 'absolute',
        width: 'calc(202 / 3 / 1122 * 100%)',
        height: 'calc(202 / 3 / 848 * 100%)',
        left: 'calc(594.87 / 1122 * 100%)',
        top: 'calc(701.67 / 848 * 100%)',
        animation: generateAnimation(keyframes),
        boxShadow: '0 12px 32px rgba(3, 13, 28, 0.22)',
        borderRadius: '50%',
      })}
    >
      <Image fill alt="KiwiCard" src="/assets/home-hero/kiwi-card.png" />
    </Box>
  );
};

export default KiwiCard;

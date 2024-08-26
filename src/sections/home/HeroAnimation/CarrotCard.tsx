import { Keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { generateAnimation } from './keyframes';

interface CarrotCardProps {
  keyframes: Keyframes;
}

const CarrotCard = ({ keyframes }: CarrotCardProps) => {
  return (
    <Box
      id="CarrotCard"
      sx={() => ({
        position: 'absolute',
        width: 'calc(202 / 3 / 1122 * 100%)',
        height: 'calc(202 / 3 / 848 * 100%)',
        left: 'calc(396 / 1122 * 100%)',
        top: 'calc(532 / 848 * 100%)',
        animation: generateAnimation(keyframes),
        boxShadow: '0 12px 32px rgba(3, 13, 28, 0.22)',
        borderRadius: '50%',
      })}
    >
      <Image fill alt="CarrotCard" src="/assets/home-hero/carrot-card.png" />
    </Box>
  );
};

export default CarrotCard;

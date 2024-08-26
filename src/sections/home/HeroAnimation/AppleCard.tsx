import { Keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { generateAnimation } from './keyframes';

interface AppleCardProps {
  keyframes: Keyframes;
}

const AppleCard = ({ keyframes }: AppleCardProps) => {
  return (
    <Box
      id="AppleCard"
      sx={() => ({
        position: 'absolute',
        width: 'calc(202 / 3 / 1122 * 100%)',
        height: 'calc(202 / 3 / 848 * 100%)',
        left: 'calc(821.46 / 1122 * 100%)',
        top: 'calc(496.46 / 848 * 100%)',
        animation: generateAnimation(keyframes),
        boxShadow: '0 12px 32px rgba(3, 13, 28, 0.22)',
        borderRadius: '50%',
      })}
    >
      <Image fill alt="AppleCard" src="/assets/home-hero/apple-card.png" />
    </Box>
  );
};

export default AppleCard;

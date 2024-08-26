import { Keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { generateAnimation } from './keyframes';

interface LeafProps {
  top?: string;
  left?: string;
  keyframes?: Keyframes;
  src?: string;
}

const Leaf = ({ src, top, left, keyframes }: LeafProps) => {
  return (
    <Box
      className="leaf"
      sx={() => ({
        position: 'absolute',
        width: 'calc(31 / 1122 * 100%)',
        height: 'calc(47 / 848 * 100%)',
        left: left ?? 'calc(149 / 1122 * 100%)',
        top: top ?? 'calc(756 / 848 * 100%)',
        animation: generateAnimation(keyframes),
      })}
    >
      <Image fill alt="carrot" src={src ?? '/assets/home-hero/leaf.png'} />
    </Box>
  );
};

export default Leaf;

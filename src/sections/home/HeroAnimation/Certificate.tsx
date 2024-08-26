import { Keyframes } from '@emotion/react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { generateAnimation } from './keyframes';

interface CertificateProps {
  keyframes?: Keyframes;
}

const Certificate = ({ keyframes }: CertificateProps) => {
  return (
    <Box
      id="certificate"
      sx={() => ({
        position: 'absolute',
        width: 'calc(258.66666667 / 1122 * 100%)',
        height: 'calc(233.33333333 / 848 * 100%)',
        left: 'calc(740 / 1122 * 100%)',
        bottom: 'calc(413.87 / 848 * 100%)',
        animation: generateAnimation(keyframes),
      })}
    >
      <Image fill alt="carrot" src="/assets/home-hero/certificate.png" />
    </Box>
  );
};

export default Certificate;

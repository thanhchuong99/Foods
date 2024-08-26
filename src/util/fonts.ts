import { Nunito, Paytone_One } from 'next/font/google';
import localFont from 'next/font/local';

export const marvinFont = localFont({
  src: '../../public/assets/fonts/Marvin.woff2',
  variable: '--font-marvin',
  weight: '400',
  style: 'normal',
});

export const paytoneOneFont = Paytone_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-paytone-one',
});

export const nunitoFont = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

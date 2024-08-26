import AboutPage from '@/sections/about';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};
export default function About() {
  return <AboutPage />;
}

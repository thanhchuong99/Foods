import ContactPage from '@/sections/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact() {
  return <ContactPage />;
}

import CheckYourEmail from '@/sections/check-your-email';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Check Your Email',
};

const Page = () => {
  return <CheckYourEmail />;
};

export default Page;

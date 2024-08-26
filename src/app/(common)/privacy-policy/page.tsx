import { Metadata } from 'next';
import PrivacyPolicyPage from '../../../sections/Term&Policy/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />;
}

import { Metadata } from 'next';
import TermConditionPage from '../../../sections/Term&Policy/TermConditions';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
};

export default function TermConditions() {
  return <TermConditionPage />;
}

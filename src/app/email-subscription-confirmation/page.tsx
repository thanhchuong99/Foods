import EmailSubscriptionConfirmationPage from '@/sections/email-subscription-confirmation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Subscription Confirmation',
};

const DeleteAccount = () => {
  return <EmailSubscriptionConfirmationPage />;
};

export default DeleteAccount;

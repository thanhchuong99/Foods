import RequestAccountDeletionPage from '@/sections/request-account-deletion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account Deletion Request',
};

const DeleteAccount = () => {
  return <RequestAccountDeletionPage />;
};

export default DeleteAccount;

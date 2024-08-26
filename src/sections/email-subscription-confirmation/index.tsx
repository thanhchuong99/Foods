import { MasterLayout } from '@/components/AppLayout';
import MasterHeader from '@/components/AppLayout/master/MasterHeader/MasterHeader';
import { Container } from '@mui/material';
import MainBody from './components/MainBody';

const EmailSubscriptionConfirmationPage = () => {
  return (
    <MasterLayout header={<MasterHeader isHideMenu isHideActionButtons />} footer={null}>
      <Container maxWidth="md">
        <MainBody />
      </Container>
    </MasterLayout>
  );
};

export default EmailSubscriptionConfirmationPage;

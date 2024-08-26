'use client';
import FormContainer from './FormContainer';
import MasterHeader from '@/components/AppLayout/master/MasterHeader/MasterHeader';
import { MasterLayout } from '@/components/AppLayout';
import StyledTitleSection from './StyledTitleSection';
import useAppInformation from '@/hooks/useAppInformation';

const RequestAccountDeletion = () => {
  const data = useAppInformation();

  return (
    <MasterLayout
      header={<MasterHeader isHideMenu isHideActionButtons />}
      container={
        <>
          <StyledTitleSection title="ACCOUNT DELETION REQUEST" />
          <FormContainer appInformation={data} />
        </>
      }
      footer={null}
    />
  );
};

export default RequestAccountDeletion;

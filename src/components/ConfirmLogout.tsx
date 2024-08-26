import { confirmLogoutWhenLogged } from '@/const/messages';
import ConfirmModal from './ConfirmModal';
import { useLogoutMutation } from '@/queries/auth/useLogoutMutation';
import { Router } from '@/util/Router';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material';
import React from 'react';

const StyledConfirmModal = styled(ConfirmModal)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    '.confirm-modal': {
      width: 500,
    },
  },
}));

interface ConfirmLogoutModalProps {
  title?: string;
  description?: string;
  hideCancel?: boolean;
}

const ConfirmLogoutModal = ({ title, description, hideCancel }: ConfirmLogoutModalProps) => {
  const { mutate, isPending } = useLogoutMutation();
  const router = useRouter();

  return (
    <StyledConfirmModal
      open
      hideCancel={hideCancel}
      title={title ?? 'Logout'}
      description={description ?? confirmLogoutWhenLogged}
      loading={isPending}
      onCancel={() => router.push(Router.Root)}
      onConfirm={async () => mutate()}
    />
  );
};

export default ConfirmLogoutModal;

import { dark } from '@/theme/colors';
import { Button, styled } from '@mui/material';
import TrashSvg from 'public/assets/svg/trash.svg';
import ConfirmModal from './ConfirmModal';
import { deleteAccount, deleteAccountDescription } from '@/const/messages';
import { useState } from 'react';
import { useDeleteAccountMutation } from '@/queries/user/useDeleteAccountMutation';
import { useQueryWrapper } from '@/hooks/useQueryWrapper';
import { useMeQuery } from '@/queries/user/useMeQuery';

const StyledConfirmModal = styled(ConfirmModal)(() => ({
  '.confirm-modal': {
    maxWidth: 500,
  },
}));

const DeleteAccountButton = () => {
  const [open, setOpen] = useState(false);
  const { isPending, mutateAsync } = useQueryWrapper(useDeleteAccountMutation());
  const { data: user } = useMeQuery();

  const handleCloseConfirm = () => {
    setOpen(false);
  };

  const handleOpenConfirm = () => {
    setOpen(true);
  };

  const handleConfirmDelete = async () => {
    await mutateAsync();
  };

  if (user?.role === UserRole.ADMIN) {
    return null;
  }

  return (
    <>
      <Button
        sx={{
          '&.MuiButton-colorInherit': {
            border: `2px solid ${dark[30]}`,
            borderRadius: '18px',
            color: dark[30],
            lineHeight: '18px',
            padding: '12px 16px',
            width: 'fit-content',
            textTransform: 'capitalize',
          },
        }}
        variant="outlined"
        color="inherit"
        startIcon={<TrashSvg />}
        onClick={handleOpenConfirm}
      >
        {deleteAccount}
      </Button>
      <StyledConfirmModal
        open={open}
        loading={isPending}
        title={deleteAccount}
        description={<span dangerouslySetInnerHTML={{ __html: deleteAccountDescription }} />}
        onCancel={handleCloseConfirm}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default DeleteAccountButton;

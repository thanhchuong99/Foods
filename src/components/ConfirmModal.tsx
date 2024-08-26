'use client';
import { Box, Button, Modal, ModalProps, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { dark } from '@/theme/colors';

const StyledModal = styled(Modal)(() => ({}));

interface ConfirmModalProps extends Omit<ModalProps, 'children'> {
  title: string;
  description: React.ReactNode;
  loading?: boolean;
  cancelText?: string;
  confirmText?: string;
  hideCancel?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const { title, description, loading, cancelText, confirmText, hideCancel, onConfirm, onCancel, ...modalProps } =
    props;

  return (
    <>
      <StyledModal disableAutoFocus {...modalProps} title={title}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: 200,
            bgcolor: 'background.paper',
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            width: 'calc(100% - 48px)',
          }}
          className="confirm-modal"
        >
          <Typography
            variant="h2"
            sx={theme => ({
              [theme.breakpoints.up('xs')]: {
                fontSize: '2rem',
                mb: 2,
              },
            })}
            className="confirm-modal__title"
          >
            {title}
          </Typography>
          <Typography
            sx={{ color: dark.base, fontSize: '1.2rem' }}
            className="confirm-modal__description"
            component="p"
          >
            {description}
          </Typography>
          <Stack className="confirm-modal__cta" flexDirection="row" justifyContent="flex-end" columnGap={1} mt={2}>
            {!hideCancel && (
              <Button
                sx={{ width: 110, height: 40 }}
                disabled={loading}
                variant="outlined"
                color="primary"
                onClick={onCancel}
                className="confirm-modal__cancel-btn"
              >
                {cancelText || 'Cancel'}
              </Button>
            )}
            <LoadingButton
              sx={{ width: 110, height: 40 }}
              loading={loading}
              variant="contained"
              color="primary"
              onClick={onConfirm}
              className="confirm-modal__confirm-btn"
            >
              {confirmText || 'Confirm'}
            </LoadingButton>
          </Stack>
        </Box>
      </StyledModal>
    </>
  );
};

export default ConfirmModal;

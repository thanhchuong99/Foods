import { useMutation } from '@tanstack/react-query';
import api from '@/configs/api';
import { ResetPasswordMutation, ResetPasswordParams } from './types';

export const useResetPasswordMutation = (props: ResetPasswordMutation) => {
  return useMutation({
    mutationFn: (params: ResetPasswordParams) =>
      api.auth.resetPasswordConfirm(params.newPassword, params.otp, params.email, params.phone),
    onSuccess: props.onSuccess,
    onError: props.onError,
  });
};

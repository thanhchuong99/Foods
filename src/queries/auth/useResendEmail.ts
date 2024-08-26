import api from '@/configs/api';
import { useMutation } from '@tanstack/react-query';
import { ResendEmailMutation } from './types';

export const useResendEmailMutation = (props?: ResendEmailMutation) => {
  return useMutation({
    mutationFn: (email: string) => api.auth.resendEmail(email),
    onSuccess: props?.onSuccess,
    onError: props?.onError,
  });
};

import { useMutation } from '@tanstack/react-query';
import api from '@/configs/api';

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: (email: string) => api.user.existsEmail(email),
  });
};

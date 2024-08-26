import { useMutation } from '@tanstack/react-query';
import api from '@/configs/api';

export const useRegisterWithEmail = () => {
  return useMutation({
    mutationFn: (params: UserRegisterParams) => api.auth.register(params),
  });
};

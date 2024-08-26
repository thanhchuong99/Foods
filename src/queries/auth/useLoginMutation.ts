import { LoginMutation, LoginParams } from '@/queries/auth/types';
import { loginSuccess } from '@/const/messages';
import { useMeQuery } from '../user/useMeQuery';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/configs/api';
import { useToast } from '@/hooks/useToast';

export const useLoginMutation = (props?: LoginMutation) => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (params: LoginParams) => api.auth.login(params.email, params.password),
    onSuccess: () => {
      toast.success(loginSuccess);
      queryClient.invalidateQueries({
        queryKey: useMeQuery.getKey(),
      });
      props?.onSuccess?.();
    },
    onError: props?.onError,
  });
};

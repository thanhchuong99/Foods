import { logoutSuccess } from '@/const/messages';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/configs/api';
import { useToast } from '@/hooks/useToast';

import useClearQuery from '@/hooks/useClearQuery';

export const useLogoutMutation = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const clearQuery = useClearQuery();

  return useMutation({
    mutationFn: () => {
      queryClient.cancelQueries();

      return api.auth.logout();
    },
    onSuccess: () => {
      clearQuery();
      toast.success(logoutSuccess);
    },
  });
};

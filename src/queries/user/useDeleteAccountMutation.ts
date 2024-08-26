import { deleteAccountSuccess } from '@/const/messages';
import { useMutation } from '@tanstack/react-query';
import api from '@/configs/api';
import { useToast } from '@/hooks/useToast';
import { useRouter } from 'next/navigation';
import { Router } from '@/util/Router';
import useClearQuery from '@/hooks/useClearQuery';

export const useDeleteAccountMutation = () => {
  const toast = useToast();
  const router = useRouter();
  const clearQuery = useClearQuery();

  return useMutation({
    mutationFn: () => api.user.deleteUser(),
    onSuccess: () => {
      clearQuery();
      router.replace(Router.Root);
      toast.success(deleteAccountSuccess);
    },
  });
};

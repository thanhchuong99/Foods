import { subscribeEmailSuccess } from '@/const/messages';
import { useMutation } from '@tanstack/react-query';
import api from '@/configs/api';
import { SubscribeEmailParams } from './types';
import { useToast } from '@/hooks/useToast';

export const useSubscribeEmail = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: (params: SubscribeEmailParams) => api.mailMarketing.subscribeEmail(params),
    onSuccess: () => {
      toast.success(subscribeEmailSuccess);
    },
  });
};

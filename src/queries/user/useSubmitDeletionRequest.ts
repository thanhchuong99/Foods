import api from '@/configs/api';
import { sendDeleteAccountRequestSuccess } from '@/const/messages';
import { useToast } from '@/hooks/useToast';
import { useMutation } from '@tanstack/react-query';

interface DeleteAccountMutation {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useSubmitDeletionRequest = ({ onError, onSuccess }: DeleteAccountMutation) => {
  const toast = useToast();

  return useMutation({
    mutationFn: (payload: AccountDeletionRequestArgs) => api.user.submitDeletionRequest(payload),
    onSuccess: () => {
      toast.success(sendDeleteAccountRequestSuccess);
      onSuccess?.();
    },
    onError: onError,
  });
};

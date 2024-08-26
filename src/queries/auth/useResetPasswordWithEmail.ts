import api from '@/configs/api';
import { sendResetPasswordSuccess } from '@/const/messages';
import { useToast } from '@/hooks/useToast';
import { Router } from '@/util/Router';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface ForgotPasswordParams {
  email: string;
}

export const useResetPasswordWithEmailMutation = () => {
  const router = useRouter();
  const toast = useToast();

  return useMutation({
    mutationFn: (props: ForgotPasswordParams) => api.auth.resetPasswordWithEmail(props.email),
    onSuccess: (data: unknown, variables: ForgotPasswordParams) => {
      toast.success(sendResetPasswordSuccess.replace('<email>', variables.email));
      router.push(Router.Login);
    },
  });
};

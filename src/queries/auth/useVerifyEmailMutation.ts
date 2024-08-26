import api from '@/configs/api';
import { useMutation } from '@tanstack/react-query';
import { VerifyEmailMutation } from './types';
import { BaseResponseError } from '../types';

interface VerifyEmailParams {
  key: string;
  email: string;
}

const useVerifyEmailMutation = (props: VerifyEmailMutation) => {
  return useMutation<unknown, BaseResponseError, VerifyEmailParams>({
    mutationFn: props => api.auth.verifyEmail(props.key),
    onSuccess: data => props?.onSuccess?.(data),
    onError: props.onError,
  });
};

export default useVerifyEmailMutation;

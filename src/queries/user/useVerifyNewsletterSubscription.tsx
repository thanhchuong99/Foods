import api from '@/configs/api';
import { useQuery } from '@tanstack/react-query';
import { QueryOptions } from '../types';

type TypeQueryOptions = QueryOptions<typeof api.user.verifyEmailUpdate>;

export const useVerifyNewsletterSubscription = (key?: string | null, config?: TypeQueryOptions['config']) => {
  return useQuery({
    queryKey: useVerifyNewsletterSubscription.getKey(),
    queryFn: async () => api.mailMarketing.subscribeEmailConfirmation(key as string),
    staleTime: Infinity,
    enabled: !!key,
    ...config,
  });
};

useVerifyNewsletterSubscription.getKey = (): [string] => {
  return ['user.verify-newsletter-subscription'];
};

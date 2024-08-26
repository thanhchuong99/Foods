'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';

const globalLoadingKey = 'global-loading';
export const useLoading = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: [globalLoadingKey],
    enabled: false,
    initialData: {
      count: 0,
    },
    staleTime: Infinity,
  });

  const isLoading = data ? data.count > 0 : false;
  const showLoading = () => {
    queryClient.setQueryData([globalLoadingKey], (prev: any) => ({
      count: prev.count + 1,
    }));
  };

  const hideLoading = () => {
    queryClient.setQueryData([globalLoadingKey], (prev: any) => ({
      count: prev.count - 1,
    }));
  };

  return { isLoading, showLoading, hideLoading };
};

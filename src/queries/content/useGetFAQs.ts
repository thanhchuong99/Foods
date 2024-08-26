import api from '@/configs/api';
import { useQuery } from '@tanstack/react-query';
import { QueryOptions } from '../types';

type TypeQueryOptions = QueryOptions<typeof api.system.getFAQList>;

export const useGetFAQs = (config?: TypeQueryOptions) => {
  return useQuery({
    queryKey: useGetFAQs.getKey(),
    queryFn: async () => api.system.getFAQList(),
    ...config,
  });
};

useGetFAQs.getKey = (): [string] => ['content.faqs'];

import api from '@/configs/api';
import { pageType } from '@hdwebsoft/wonderfoods-api-customer-sdk/libs/api/system/models';
import { useQuery } from '@tanstack/react-query';
import { QueryOptions } from '../types';

type TypeQueryOptions = QueryOptions<typeof api.system.getPageConfig>;

export const useGetPageConfigQuery = (type: pageType, config?: TypeQueryOptions['config']) => {
  return useQuery({
    queryKey: useGetPageConfigQuery.getKey(type),
    queryFn: async () => api.system.getPageConfig({ type }),
    ...config,
  });
};

useGetPageConfigQuery.getKey = (type: pageType): [string] => {
  return [`content.page.${type}`];
};

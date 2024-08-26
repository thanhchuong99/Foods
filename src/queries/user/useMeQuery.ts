import api from '@/configs/api';
import { useQuery } from '@tanstack/react-query';
import { QueryOptions } from '../types';
import { setUserToCookie } from '@/app/actions/user/actions';

type TypeQueryOptions = QueryOptions<typeof api.user.me>;

export const useMeQuery = (config?: TypeQueryOptions['config']) => {
  const query = useQuery({
    queryKey: useMeQuery.getKey(),
    queryFn: async () => {
      const user = await api.user.me();
      setUserToCookie(user);

      return user;
    },
    staleTime: Infinity,
    retry: 0,
    ...config,
  });

  return query;
};

useMeQuery.getKey = (): [string] => {
  return ['user.me'];
};

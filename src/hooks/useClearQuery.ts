import { removeUserFromCookie } from '@/app/actions/user/actions';
import { useMeQuery } from '@/queries/user/useMeQuery';
import { useQueryClient } from '@tanstack/react-query';
import isEqual from 'lodash/isEqual';

const useClearQuery = () => {
  const queryClient = useQueryClient();

  const handler = () => {
    queryClient.setQueryData(useMeQuery.getKey(), null);
    queryClient.resetQueries({
      predicate(query) {
        // Reset others to initial state
        if (!isEqual(query.queryKey, useMeQuery.getKey())) {
          return true;
        }

        return false;
      },
    });
    removeUserFromCookie();
  };

  return handler;
};

export default useClearQuery;

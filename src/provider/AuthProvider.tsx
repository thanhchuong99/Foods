'use client';
import { removeUserFromCookie } from '@/app/actions/user/actions';
import { useMeQuery } from '@/queries/user/useMeQuery';
import { useQueryClient } from '@tanstack/react-query';
import { FC, useEffect } from 'react';

// Using cookie to store user information on server and retrieve it to set initial data for React Query
// When query is set initial data, it will not fetch after Component is rendered
// So, we try to manually refetch it.
// Placeholder wont share initial data, so it won't work

export const AuthProvider: FC<{ children: React.ReactNode; initialUser?: User | null }> = ({
  children,
  initialUser,
}) => {
  const { refetch, isError } = useMeQuery({
    initialData: initialUser ?? undefined,
  });
  const queryClient = useQueryClient();

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (isError) {
      removeUserFromCookie();
      // Remove initial data that we set from SSR to prevent inifite loading
      queryClient.setQueryData(useMeQuery.getKey(), null);
    }
  }, [isError]);

  return children;
};

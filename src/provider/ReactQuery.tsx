// https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr

// In Next.js, this file would be called: app/providers.jsx
'use client';

import React from 'react';
// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
import dynamic from 'next/dynamic';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DEACTIVE_ACCOUNT_CODE } from '@/const/statusCode';

const ReactQueryDevtools = dynamic(() => import('@tanstack/react-query-devtools').then(mod => mod.ReactQueryDevtools), {
  ssr: false,
});

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
        refetchInterval: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        refetchOnMount: false,
      },
    },
    queryCache: new QueryCache({
      onError: async (error, query) => {
        const previousData = query.state.data as User | null;

        if ((error as any)?.code === DEACTIVE_ACCOUNT_CODE) {
          query.setData(previousData ? { ...previousData, is_active: false } : null);
        }
      },
    }),
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important so we don't re-make a new client if React
    // supsends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();

    return browserQueryClient;
  }
}

export default function ReactQueryProviders({ children }: { children: React.ReactNode }) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary

  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

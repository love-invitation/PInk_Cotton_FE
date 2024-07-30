'use client';

import { PropsWithChildren, useState } from 'react';

import { useRouter } from 'next/navigation';

import { DOMAIN_URL, QUERY_KEYS, getQueryClient } from '@/constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const TanstackProvider = ({ children }: PropsWithChildren) => {
  const route = useRouter();
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
          staleTime: 60 * 1000,
          retryOnMount: false,
        },
        mutations: {
          onError(error: unknown) {
            if (error instanceof Error && error.toString().endsWith('401')) {
              route.push(DOMAIN_URL.LOGIN);
              getQueryClient().invalidateQueries({ queryKey: QUERY_KEYS.AUTH_USER });
            }
          },
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanstackProvider;

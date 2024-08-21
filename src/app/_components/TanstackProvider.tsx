'use client';

import { PropsWithChildren, useState } from 'react';

import { useRouter } from 'next/navigation';

import { DOMAIN_URL, QUERY_KEYS, getQueryClient } from '@/constants';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const TanstackProvider = ({ children }: PropsWithChildren) => {
  const route = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (error) => {
            const errorMessage = error.toString();

            if (error instanceof Error && errorMessage.endsWith('401')) {
              route.push(DOMAIN_URL.LOGIN);
              getQueryClient().invalidateQueries({ queryKey: QUERY_KEYS.AUTH_USER });
            }

            if (error instanceof Error && errorMessage.endsWith('404')) {
              route.push('/notfound');
            }
          },
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            const errorMessage = error.toString();

            if (error instanceof Error && errorMessage.endsWith('401')) {
              route.push(DOMAIN_URL.LOGIN);
              getQueryClient().invalidateQueries({ queryKey: QUERY_KEYS.AUTH_USER });
            }
          },
        }),
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 60 * 1000,
            retryOnMount: false,
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

import { cache } from 'react';

import { getBestInvitations } from '@/services/server';
import { QueryClient } from '@tanstack/react-query';

export const getQueryClient = cache(() => new QueryClient());

export const QUERY_KEYS = {
  BEST_INVITATIONS: ['best', 'invitations'],
};

export const QUERY_OPTIONS = {
  BEST_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.BEST_INVITATIONS,
    queryFn: () => getBestInvitations(),
  }),
};

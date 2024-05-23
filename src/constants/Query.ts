import { cache } from 'react';

import { getAllInvitations, getBestInvitations } from '@/services/server';
import { QueryClient } from '@tanstack/react-query';

export const getQueryClient = cache(() => new QueryClient());

export const QUERY_KEYS = {
  BEST_INVITATIONS: ['best', 'invitations'],
  ALL_INVITATIONS: ['all', 'invitations'],
};

export const QUERY_OPTIONS = {
  BEST_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.BEST_INVITATIONS,
    queryFn: () => getBestInvitations(),
  }),
  ALL_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.ALL_INVITATIONS,
    queryFn: () => getAllInvitations(),
  }),
};

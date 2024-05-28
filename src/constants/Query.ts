import { cache } from 'react';

import { getAllInvitations, getBestInvitations, getInvitation } from '@/services/server';
import { QueryClient } from '@tanstack/react-query';

export const getQueryClient = cache(() => new QueryClient());

export const QUERY_KEYS = {
  BEST_INVITATIONS: ['best', 'invitations'],
  ALL_INVITATIONS: ['all', 'invitations'],
  INVITATION: (productInfoId: number | string) => ['invitation', productInfoId],
};

export const QUERY_OPTIONS = {
  BEST_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.BEST_INVITATIONS,
    queryFn: () => getBestInvitations(),
    gcTime: 86400000,
    staleTime: 86400000,
  }),
  ALL_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.ALL_INVITATIONS,
    queryFn: () => getAllInvitations(),
    gcTime: 86400000,
    staleTime: 86400000,
  }),
  INVITATION: (productInfoId: number | string) => ({
    queryKey: QUERY_KEYS.INVITATION(productInfoId),
    queryFn: () => getInvitation(productInfoId),
    gcTime: 86400000,
    staleTime: 86400000,
  }),
};

import { cache } from 'react';

import { Invitation } from '@/app/(Web)/wedding/invitations/produce/[id]/_constants/DefaultValue';
import {
  getAllInvitations,
  getBestInvitations,
  getInvitation,
  postInvitation,
} from '@/services/server';
import { QueryClient } from '@tanstack/react-query';

export const getQueryClient = cache(() => new QueryClient());

export const QUERY_KEYS = {
  BEST_INVITATIONS: ['best', 'invitations'],
  ALL_INVITATIONS: ['all', 'invitations'],
  INVITATION_TEMPLATE: (productInfoId: number | string) => ['invitation', productInfoId],
};

export const QUERY_OPTIONS = {
  BEST_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.BEST_INVITATIONS,
    queryFn: () => getBestInvitations(),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),
  ALL_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.ALL_INVITATIONS,
    queryFn: () => getAllInvitations(),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),
  INVITATION_TEMPLATE: (productInfoId: number | string) => ({
    queryKey: QUERY_KEYS.INVITATION_TEMPLATE(productInfoId),
    queryFn: () => getInvitation(productInfoId),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),
};

export const MUTATE_OPTIONS = {
  INVITATION: () => ({
    mutationFn: ({ id, invitationInfo }: { id: number; invitationInfo: Invitation }) =>
      postInvitation({ id, invitationInfo }),
  }),
};

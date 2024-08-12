import { cache } from 'react';

import {
  getAllWeddingTemplates,
  getAuthUser,
  getBestWeddingTemplates,
  getInvitation,
  getMyInvitation,
  getWeddingTemplate,
  logoutAuth,
  postInvitation,
} from '@/services/server';
import { QueryClient } from '@tanstack/react-query';

import { InvitationInput } from '.';

export const getQueryClient = cache(() => new QueryClient());

export const QUERY_KEYS = {
  BEST_WEDDING_TEMPLATES: ['best', 'invitations'],
  ALL_WEDDING_TEMPLATES: ['all', 'invitations'],
  WEDDING_TEMPLATE: (templateId: number | string) => ['invitation', 'template', templateId],
  INVITATION: (produceId: number | string) => ['invitation', 'produce', produceId],
  AUTH_USER: ['auth'],
  MY_INVITATIONS: ['my', 'invitations'],
};

export const QUERY_OPTIONS = {
  BEST_WEDDING_TEMPLATES: () => ({
    queryKey: QUERY_KEYS.BEST_WEDDING_TEMPLATES,
    queryFn: () => getBestWeddingTemplates(),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),

  ALL_WEDDING_TEMPLATES: () => ({
    queryKey: QUERY_KEYS.ALL_WEDDING_TEMPLATES,
    queryFn: () => getAllWeddingTemplates(),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),

  WEDDING_TEMPLATE: (templateId: number | string) => ({
    queryKey: QUERY_KEYS.WEDDING_TEMPLATE(templateId),
    queryFn: () => getWeddingTemplate(templateId),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),

  INVITATION: (produceId: number | string) => ({
    queryKey: QUERY_KEYS.INVITATION(produceId),
    queryFn: () => getInvitation(produceId),
    gcTime: 1000 * 60 * 60 * 24,
    staleTime: 1000 * 60 * 60 * 24,
  }),

  AUTH_USER: () => ({
    queryKey: QUERY_KEYS.AUTH_USER,
    queryFn: () => getAuthUser(),
    gcTime: Infinity,
    staleTime: Infinity,
  }),

  MY_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.MY_INVITATIONS,
    queryFn: () => getMyInvitation(),
  }),
};

export const MUTATE_OPTIONS = {
  INVITATION: () => ({
    mutationFn: ({ id, invitationInfo }: { id: number; invitationInfo: InvitationInput }) =>
      postInvitation({ id, invitationInfo }),
  }),

  LOGOUT: () => ({
    mutationFn: () => logoutAuth(),
    onSettled: () => {
      getQueryClient().invalidateQueries({
        queryKey: QUERY_KEYS.AUTH_USER,
      });
    },
  }),
};

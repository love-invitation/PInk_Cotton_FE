import { cache } from 'react';

import {
  createGuestBook,
  deleteAdminGuestBook,
  deleteGuestBook,
  fetchImageAsBlob,
  getAllWeddingTemplates,
  getAuthUser,
  getBestWeddingTemplates,
  getGuestBooks,
  getInvitation,
  getMyInvitation,
  getWeddingTemplate,
  logoutAuth,
  postInvitation,
  putInvitation,
} from '@/services/server';
import { GuestBookComment } from '@/types/request';
import { InvitationResponse } from '@/types/response';
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
  COVERT_IMAGE_FILE: (invitation: InvitationResponse) => [
    invitation.result.cover.imageUrl,
    invitation.result.thumbnail.imageUrl,
    ...invitation.result.gallery.galleries.map((value) => value.imageUrl),
  ],

  GET_GUEST_BOOKS: (inviteId: string, page: number) => ['invite', 'guestbooks', inviteId, page],
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
    gcTime: 0,
    staleTime: 0,
  }),

  AUTH_USER: () => ({
    queryKey: QUERY_KEYS.AUTH_USER,
    queryFn: () => getAuthUser(),
    gcTime: 0,
    staleTime: 0,
  }),

  MY_INVITATIONS: () => ({
    queryKey: QUERY_KEYS.MY_INVITATIONS,
    queryFn: () => getMyInvitation(),
    gcTime: 0,
    staleTime: 0,
  }),

  CONVERT_IMAGE_FILE: (invitation: InvitationResponse | undefined) => {
    if (!invitation) {
      return {
        queryKey: ['undefined'],
      };
    }

    return {
      queryKey: QUERY_KEYS.COVERT_IMAGE_FILE(invitation),
      enabled: !!invitation,
      queryFn: async () => {
        const coverImagePromise = fetchImageAsBlob(invitation.result.cover.imageUrl);
        const thumbnailImagePromise = fetchImageAsBlob(invitation.result.thumbnail.imageUrl);
        const galleryImagePromises = invitation.result.gallery.galleries.map(
          ({ imageUrl }: { imageUrl: string }) => fetchImageAsBlob(imageUrl),
        );

        const [coverImage, thumbnailImage, ...galleryImages] = await Promise.all([
          coverImagePromise,
          thumbnailImagePromise,
          ...galleryImagePromises,
        ]);

        return { coverImage, thumbnailImage, galleryImages };
      },
      select: ({
        coverImage,
        thumbnailImage,
        galleryImages,
      }: {
        coverImage: Blob;
        thumbnailImage: Blob;
        galleryImages: Blob[];
      }) => {
        const coverImageFile = new File([coverImage], coverImage.type.replace('/', '.'), {
          type: coverImage.type,
        });
        const thumbnailImageFile = new File(
          [thumbnailImage],
          thumbnailImage.type.replace('/', '.'),
          {
            type: thumbnailImage.type,
          },
        );
        const galleryImageFiles = galleryImages.map(
          (blob) => new File([blob], blob.type.replace('/', '.'), { type: blob.type }),
        );

        return { coverImageFile, thumbnailImageFile, galleryImageFiles };
      },
      gcTime: Infinity,
      staleTime: Infinity,
    };
  },

  GET_GUEST_BOOKS: ({ inviteId, page }: { inviteId: string; page: number }) => ({
    queryKey: QUERY_KEYS.GET_GUEST_BOOKS(inviteId, page),
    queryFn: () => getGuestBooks({ inviteId, page }),
    gcTime: 0,
    staleTime: 0,
  }),
};

export const MUTATE_OPTIONS = {
  INVITATION_POST: () => ({
    mutationFn: ({ id, invitationInfo }: { id: number; invitationInfo: InvitationInput }) =>
      postInvitation({ id, invitationInfo }),
  }),

  INVITATION_PUT: () => ({
    mutationFn: ({ id, invitationInfo }: { id: bigint; invitationInfo: InvitationInput }) =>
      putInvitation({ id, invitationInfo }),
  }),

  LOGOUT: () => ({
    mutationFn: () => logoutAuth(),
  }),

  INVITATION_GUEST_BOOK_POST: () => ({
    mutationFn: (param: { inviteId: string; data: GuestBookComment }) => createGuestBook(param),
  }),

  INVITATION_GUEST_BOOK_DELETE: () => ({
    mutationFn: (param: { inviteId: string; commentId: string; password: string }) =>
      deleteGuestBook(param),
  }),

  INVITATION_GUEST_BOOK_DELETE_ADMIN: () => ({
    mutationFn: (param: { inviteId: string; commentId: string }) => deleteAdminGuestBook(param),
  }),
};

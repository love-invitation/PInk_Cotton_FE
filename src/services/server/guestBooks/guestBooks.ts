import { fetchApi } from '@/api';
import { GuestBookComment } from '@/types/request';

export const createGuestBook = async ({
  inviteId,
  data,
}: {
  inviteId: string;
  data: GuestBookComment;
}) => {
  const response = await fetchApi(`/api/v1/products/invitations/${inviteId}/guestbooks`, {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getGuestBooks = async () => {
  const response = await fetchApi(
    `/api/v1/products/invitations/600246308994180233/guestbooks?page=0`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
/**
 * TODO
 *
 * Delete 메서드 정비 후 재 정의하기
 */

export const deleteGuestBook = async ({
  // inviteId,
  // commentId,
  password,
}: {
  // inviteId: string;
  // commentId: string;
  password: string;
}) => {
  const response = await fetchApi(
    `/api/v1/products/invitations/600246308994180233/guestbooks?page=0`,
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        Password: password,
      },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

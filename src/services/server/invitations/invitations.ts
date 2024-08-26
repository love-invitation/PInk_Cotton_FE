import { fetchApi } from '@/api';
import { InvitationInput } from '@/constants';
import { GuestBookComment } from '@/types/request';

export const fetchImageAsBlob = async (imageUrl: string): Promise<Blob> => {
  const response = await fetch(imageUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch image from ${imageUrl}`);
  }

  return response.blob();
};

export const getMyInvitation = async () => {
  const response = await fetchApi(`/api/v1/orders`, {
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getInvitation = async (produceId: number | string) => {
  const response = await fetchApi(`/api/v1/products/invitations/${produceId}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const postInvitation = async ({
  id,
  invitationInfo,
}: {
  id: number;
  invitationInfo: InvitationInput;
}) => {
  const formData = new FormData();
  const {
    cover,
    thumbnail,
    gallery,
    article,
    groom,
    bride,
    place,
    booking,
    guestbookCheck,
    transport,
    priority,
    contacts,
    accounts,
  } = invitationInfo;

  if (cover.image) {
    formData.append('mainImage', cover.image);
  }

  if (thumbnail.image) {
    formData.append('shareThumbnail', thumbnail.image);
  }

  gallery.forEach((image) => {
    formData.append('gallery', image);
  });

  const invitationDto = {
    productInfoId: id,
    title: article.title,
    contents: article.contents,
    coverContents: cover.contents,
    groom,
    bride,
    place,
    booking: {
      date: `${booking.date}T${booking.time}`,
      dateType: booking.dateType ? 'CALENDAR' : 'NONE',
    },
    guestbookCheck,
    transport,
    priority,
    contacts,
    accounts,
    thumbnail: {
      title: thumbnail.title,
      contents: thumbnail.contents,
    },
  };

  formData.append(
    'invitationDto',
    new Blob([JSON.stringify(invitationDto)], { type: 'application/json' }),
  );

  const response = await fetchApi('/api/v1/products/invitations', {
    method: 'POST',
    body: formData,
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const putInvitation = async ({
  id,
  invitationInfo,
}: {
  id: bigint;
  invitationInfo: InvitationInput;
}) => {
  const formData = new FormData();
  const {
    cover,
    thumbnail,
    gallery,
    article,
    groom,
    bride,
    place,
    booking,
    guestbookCheck,
    transport,
    priority,
    contacts,
    accounts,
  } = invitationInfo;

  if (cover.image) {
    formData.append('mainImage', cover.image);
  }

  if (thumbnail.image) {
    formData.append('shareThumbnail', thumbnail.image);
  }

  gallery.forEach((image) => {
    formData.append('gallery', image);
  });

  const invitationDto = {
    title: article.title,
    contents: article.contents,
    coverContents: cover.contents,
    groom,
    bride,
    place,
    booking: {
      date: `${booking.date}T${booking.time}`,
      dateType: booking.dateType ? 'CALENDAR' : 'NONE',
    },
    guestbookCheck,
    transport,
    priority,
    contacts,
    accounts,
    thumbnail: {
      title: thumbnail.title,
      contents: thumbnail.contents,
    },
  };

  formData.append(
    'invitationDto',
    new Blob([JSON.stringify(invitationDto)], { type: 'application/json' }),
  );

  const response = await fetchApi(`/api/v1/products/invitations/${id}`, {
    method: 'PUT',
    body: formData,
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

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

import { fetchApi } from '@/api';
import { Invitation } from '@/app/(Web)/wedding/invitations/produce/[id]/_constants/DefaultValue';

export const getBestWeddingTemplates = async () => {
  const response = await fetchApi('/api/product/info/best', {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getAllWeddingTemplates = async () => {
  const response = await fetchApi('/api/product/info', {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getWeddingTemplate = async (templateId: number | string) => {
  const response = await fetchApi(`/api/product/info/${templateId}`, {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getInvitationProduce = async (produceId: number | string) => {
  const response = await fetchApi(`/product/invitation/read/${produceId}`, {
    next: { revalidate: 1000 * 60 * 60 * 24 },
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
  invitationInfo: Invitation;
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
    reservation,
    guestbookCheck,
    transportation,
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
    groomInfo: {
      name: groom.name,
      fatherName: groom.father.name,
      fatherIsCondolences: groom.father.deceased,
      motherName: groom.mother.name,
      motherIsCondolences: groom.mother.deceased,
      relation: groom.relation,
    },
    brideInfo: {
      name: bride.name,
      fatherName: bride.father.name,
      fatherIsCondolences: bride.father.deceased,
      motherName: bride.mother.name,
      motherIsCondolences: bride.mother.deceased,
      relation: bride.relation,
    },
    wedding: {
      placeName: place.name,
      detail: place.detail,
      placeAddress: place.address,
      date: `${reservation.date}T${reservation.time}`,
      dateType: reservation.type ? 'CALENDAR' : 'NONE',
    },
    guestbookCheck,
    transport: transportation,
    priority,
    contacts: {
      groomContactInfo: [
        { name: contacts.groom.name, phoneNumber: contacts.groom.phoneNumber, relation: '본인' },
        ...contacts.groom.others,
      ],
      brideContactInfo: [
        { name: contacts.bride.name, phoneNumber: contacts.bride.phoneNumber, relation: '본인' },
        ...contacts.bride.others,
      ],
    },
    accounts: {
      groomAccountInfo: [
        {
          name: groom.name,
          bankName: accounts.groom.bankName,
          accountNumber: accounts.groom.accountNumber,
        },
        ...accounts.groom.others,
      ],
      brideAccountInfo: [
        {
          name: bride.name,
          bankName: accounts.bride.bankName,
          accountNumber: accounts.bride.accountNumber,
        },
        ...accounts.bride.others,
      ],
    },
    shareThumbnail: {
      shareTitle: thumbnail.title,
      shareContents: thumbnail.contents,
    },
  };

  formData.append(
    'invitationDto',
    new Blob([JSON.stringify(invitationDto)], { type: 'application/json' }),
  );

  const response = await fetchApi('/product/invitation/create', {
    method: 'POST',
    body: formData,
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

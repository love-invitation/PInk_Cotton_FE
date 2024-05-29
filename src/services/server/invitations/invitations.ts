import { fetchApi } from '@/api';

export const getBestInvitations = async () => {
  const response = await fetchApi('/api/product/info/best', {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getAllInvitations = async () => {
  const response = await fetchApi('/api/product/info', {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getInvitation = async (productInfoId: number | string) => {
  const response = await fetchApi(`/api/product/info/${productInfoId}`, {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

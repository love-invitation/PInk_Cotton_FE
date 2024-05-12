import { fetchApi } from '@/api';

export const getBestInvitations = async () => {
  const response = await fetchApi('/api/product/info/best');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

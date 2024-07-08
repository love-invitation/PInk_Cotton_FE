import { fetchApi } from '@/api';

export const getBestWeddingTemplates = async () => {
  const response = await fetchApi('/api/v1/product-infos/best', {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getAllWeddingTemplates = async () => {
  const response = await fetchApi('/api/v1/product-infos', {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getWeddingTemplate = async (templateId: number | string) => {
  const response = await fetchApi(`/api/v1/product-infos/${templateId}`, {
    next: { revalidate: 1000 * 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

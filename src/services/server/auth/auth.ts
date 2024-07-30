import { fetchApi } from '@/api';
import { AuthUserResponse, LogoutAuthResponse } from '@/types/response';

export const getAuthUser = async (): Promise<AuthUserResponse> => {
  const response = await fetchApi('/api/v1/user', { credentials: 'include' });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const logoutAuth = async (): Promise<LogoutAuthResponse> => {
  const response = await fetchApi('/api/v1/logout', { credentials: 'include', method: 'POST' });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

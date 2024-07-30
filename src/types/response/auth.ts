export interface AuthUserResponse {
  status: number;
  result: {
    email: string;
  } | null;
}

export interface LogoutAuthResponse {
  status: number;
}

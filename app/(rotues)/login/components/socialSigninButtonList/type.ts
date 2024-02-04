import { ClientSafeProvider } from 'next-auth/react';

export interface IProps {
    providers: Record<string, ClientSafeProvider>;
}

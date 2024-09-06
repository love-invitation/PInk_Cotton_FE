import { ReactNode } from 'react';

import { Metadata } from 'next';

import { EDIT_META_DATA } from '@/constants/MetaData';

interface InvitationsLayoutProps {
  children: ReactNode;
  params: { id: string };
}

export const generateMetadata = ({ params }: InvitationsLayoutProps): Metadata => {
  return EDIT_META_DATA({ id: params.id });
};
const InvitationsLayout = ({ children }: Readonly<InvitationsLayoutProps>) => {
  return <>{children}</>;
};

export default InvitationsLayout;

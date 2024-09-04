import { ReactNode } from 'react';

import { Metadata } from 'next';

import { WEDDINGS_META_DATA } from '@/constants/MetaData';

interface InvitationsLayoutProps {
  children: ReactNode;
  floating: ReactNode;
}

export const metadata: Metadata = WEDDINGS_META_DATA;

const InvitationsLayout = ({ children, floating }: Readonly<InvitationsLayoutProps>) => {
  return (
    <>
      {children}
      {floating}
    </>
  );
};

export default InvitationsLayout;

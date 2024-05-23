import { ReactNode } from 'react';

interface InvitationsLayoutProps {
  children: ReactNode;
  floating: ReactNode;
}

const InvitationsLayout = ({ children, floating }: Readonly<InvitationsLayoutProps>) => {
  return (
    <>
      {children}
      {floating}
    </>
  );
};

export default InvitationsLayout;

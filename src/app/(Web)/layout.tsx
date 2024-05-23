import { Footer, Header } from '@/components/server';

const WebLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {modal}
      {children}
      <Footer />
    </>
  );
};

export default WebLayout;

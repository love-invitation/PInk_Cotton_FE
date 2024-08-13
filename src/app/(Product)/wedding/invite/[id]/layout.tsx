const InviteLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default InviteLayout;

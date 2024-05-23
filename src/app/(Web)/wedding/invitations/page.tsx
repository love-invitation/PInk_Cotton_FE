import { InvitationsBanner } from './_components';
import AllInvitations from './_components/AllInvitations/AllInvitations';
import BestInvitations from './_components/BestInvitations/BestInvitations';

const InvitationsPage = () => {
  return (
    <>
      <InvitationsBanner />
      <BestInvitations />
      <AllInvitations />
    </>
  );
};

export default InvitationsPage;

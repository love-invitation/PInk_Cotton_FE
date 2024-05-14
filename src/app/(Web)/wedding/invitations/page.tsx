import { InvitationsBanner } from './_components';
import BestInvitations from './_components/BestInvitations/BestInvitations';

const InvitationsPage = async () => {
  return (
    <>
      <InvitationsBanner />
      <BestInvitations />
    </>
  );
};

export default InvitationsPage;

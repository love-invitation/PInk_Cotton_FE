import { QUERY_OPTIONS, getQueryClient } from '@/constants';

import { InvitationsBanner } from './_components';
import AllInvitations from './_components/AllInvitations/AllInvitations';
import BestInvitations from './_components/BestInvitations/BestInvitations';

const InvitationsPage = async () => {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery(QUERY_OPTIONS.BEST_INVITATIONS()),
    queryClient.prefetchQuery(QUERY_OPTIONS.ALL_INVITATIONS()),
  ]);

  return (
    <>
      <InvitationsBanner />
      <BestInvitations />
      <AllInvitations />
    </>
  );
};

export default InvitationsPage;

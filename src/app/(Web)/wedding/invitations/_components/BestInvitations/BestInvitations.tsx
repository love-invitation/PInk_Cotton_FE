import { QUERY_OPTIONS, getQueryClient } from '@/constants';

const BestInvitations = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.BEST_INVITATIONS());
  // const { result } = queryClient.getQueryData(QUERY_KEYS.BEST_INVITATIONS);

  return (
    <section>
      <h3>BEST</h3>
    </section>
  );
};

export default BestInvitations;

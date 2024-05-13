import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { BestInvitationsResponse } from '@/types/response/Invitations';

const MainBestSection = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(QUERY_OPTIONS.BEST_INVITATIONS());

  const data = queryClient.getQueryData<BestInvitationsResponse>(QUERY_KEYS.BEST_INVITATIONS);

  if (!data) {
    return null;
  }

  return (
    <section className='w-full'>
      <article className=''>{data.message}</article>
    </section>
  );
};

export default MainBestSection;

import { QUERY_KEYS, getQueryClient } from '@/constants';
import { InvitationsResponse } from '@/types/response';

import { InvitationsList } from '..';

const BestInvitations = async () => {
  const data = getQueryClient().getQueryData<InvitationsResponse>(QUERY_KEYS.BEST_INVITATIONS);

  if (!data) {
    return;
  }

  return (
    <section className='py-[7.3rem]'>
      <h3 className='text-[3rem] font-semibold px-[10%]'>BEST</h3>
      <InvitationsList productInfoList={data.result.productInfoList} />
    </section>
  );
};

export default BestInvitations;

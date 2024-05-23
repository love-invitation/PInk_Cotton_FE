import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { InvitationsResponse } from '@/types/response';

import { InvitationsList } from '..';

const AllInvitations = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.ALL_INVITATIONS());
  const data = queryClient.getQueryData<InvitationsResponse>(QUERY_KEYS.ALL_INVITATIONS);
  const { productInfoList } = data?.result || { productInfoList: [] };

  return (
    <section className='py-[7.3rem]'>
      <h3 className='text-[3rem] font-semibold px-[10%]'>ALL</h3>
      <InvitationsList productInfoList={productInfoList} />
    </section>
  );
};

export default AllInvitations;

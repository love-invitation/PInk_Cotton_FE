import { CommonList, TemplateItem } from '@/components/server';
import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { BestInvitationsResponse } from '@/types/response';

const BestInvitations = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.BEST_INVITATIONS());
  const data = queryClient.getQueryData<BestInvitationsResponse>(QUERY_KEYS.BEST_INVITATIONS);
  const { productInfoList } = data?.result || { productInfoList: [] };

  return (
    <section className='py-[7.3rem]'>
      <h3 className='text-[3rem] font-semibold px-[10%]'>BEST</h3>
      <CommonList
        data={productInfoList}
        className='flex flex-wrap justify-between px-[10%]'
      >
        {({ templateName, newest, price, discountedPrice }) => (
          <li key={templateName}>
            <TemplateItem
              name={templateName}
              isNew={newest}
              price={price}
              discountPrice={discountedPrice}
              id={templateName}
            >
              {templateName}
            </TemplateItem>
          </li>
        )}
      </CommonList>
    </section>
  );
};

export default BestInvitations;

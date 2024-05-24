import Template from '@/components/server/Template/Template';
import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { InvitationsResponse } from '@/types/response';

interface FloatingProps {
  params: {
    id: string;
  };
}

const Floating = async ({ params }: FloatingProps) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.ALL_INVITATIONS());
  const data = queryClient.getQueryData<InvitationsResponse>(QUERY_KEYS.ALL_INVITATIONS);
  const { title, details, groomName, brideName } = data?.result || {};
  const { productInfoList } = data?.result || { productInfoList: [] };
  const { id, imageUrl } =
    productInfoList?.find((productInfo) => productInfo.id === Number(params.id)) || {};

  return (
    <div className='h-dvh w-dvw'>
      <article>
        <Template
          title={title}
          details={details || ''}
          groomName={groomName || ''}
          brideName={brideName || ''}
          productItem={{
            id: id || 0,
            imageUrl: imageUrl || '',
          }}
        />
      </article>
    </div>
  );
};

export default Floating;

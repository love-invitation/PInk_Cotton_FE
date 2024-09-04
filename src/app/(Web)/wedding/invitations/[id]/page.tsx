import { Metadata } from 'next';

import { QUERY_OPTIONS, getQueryClient } from '@/constants';
import { WEDDING_META_DATA } from '@/constants/MetaData';
import { getWeddingTemplate } from '@/services/server';
import { WeddingTemplateResponse } from '@/types/response';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { InvitationFloating } from '../_components';

interface FloatingProps {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({ params }: FloatingProps): Promise<Metadata> => {
  try {
    const response: WeddingTemplateResponse = await getWeddingTemplate(params.id);

    return WEDDING_META_DATA(response);
  } catch (error) {
    return {};
  }
};

const Floating = async ({ params }: FloatingProps) => {
  const { id } = params;
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.WEDDING_TEMPLATE(id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <article className='bg-white_100 text-black_900 pt-[4rem] flex justify-center'>
        <InvitationFloating id={id} />
      </article>
    </HydrationBoundary>
  );
};

export default Floating;

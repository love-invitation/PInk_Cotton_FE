import { Nanum_Myeongjo } from 'next/font/google';

import { QUERY_KEYS, QUERY_OPTIONS, getQueryClient } from '@/constants';
import { InvitationResponse } from '@/types/response';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import {
  InviteArticle,
  InviteCalender,
  InviteContact,
  InviteCover,
  InviteGallery,
  InviteLocation,
} from './_components';

// 600246308994180233 ID key 값

const NanumMyeongjo = Nanum_Myeongjo({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--nanum',
});

const InvitePage = async ({ params }: { params: { id: string } }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(QUERY_OPTIONS.INVITATION(params.id));

  const data = queryClient.getQueryData<InvitationResponse>(QUERY_KEYS.INVITATION(params.id));

  if (!data?.result) {
    return null;
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className='w-full h-full flex justify-center bg-gray_900'>
        <div
          className={`max-w-[45rem] w-full h-full overflow-scroll bg-white scrollbar-hide shadow-shadow_500 font-nanum ${NanumMyeongjo.className}`}
        >
          <InviteCover coverData={data.result.cover} />
          <InviteArticle article={data.result.article} />
          <InviteContact contactData={data.result.contact} />
          <InviteCalender calenderData={data.result.cover.weddingDate} />
          <InviteGallery galleryData={data.result.gallery} />
          <InviteLocation />
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default InvitePage;

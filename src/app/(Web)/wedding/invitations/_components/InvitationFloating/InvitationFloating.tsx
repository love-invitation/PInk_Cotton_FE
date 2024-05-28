'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { InvitationTemplate } from '@/components/server';
import { QUERY_OPTIONS } from '@/constants';
import useClickAway from '@/hooks/useClickAway/useClickAway';
import { useQuery } from '@tanstack/react-query';

import { InvitationFloatingProps } from './InvitationFloating.type';

const InvitationFloating = ({ id }: InvitationFloatingProps) => {
  const route = useRouter();
  const ref = useClickAway<HTMLDivElement>(() => route.back());
  const { data } = useQuery(QUERY_OPTIONS.INVITATION(id));

  if (!data?.result) {
    return;
  }

  return (
    <div
      className='flex flex-col justify-center items-center gap-[2rem]'
      ref={ref}
    >
      <InvitationTemplate
        title={data.result.title}
        details={data.result.details}
        groomName={data.result.groomName}
        brideName={data.result.brideName}
        productInfo={data.result.productInfo}
        width={200}
        height={100}
      />
      <Link
        href={`wedding/invitations/produce${id}`}
        className='bg-pink_500 text-white_100 w-full py-[1rem] flex justify-center text-[1.6rem] border-solid	border-2 rounded-2xl'
      >
        제작하기
      </Link>
    </div>
  );
};

export default InvitationFloating;

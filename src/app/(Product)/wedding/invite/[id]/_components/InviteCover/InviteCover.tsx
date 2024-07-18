import { WeddingTemplates } from '@/components/client';

import { InviteCoverProps } from './InviteCover.type';

const InviteCover = ({ coverData }: InviteCoverProps) => {
  return (
    <article className='w-full min-h-[100dvh] flex justify-center items-center animate-fadeIn opacity-0'>
      <WeddingTemplates
        id={coverData.templateId}
        details={coverData.coverContents}
        brideName={coverData.brideName}
        groomName={coverData.groomName}
        imageUrl={coverData.imageUrl}
      />
    </article>
  );
};

export default InviteCover;

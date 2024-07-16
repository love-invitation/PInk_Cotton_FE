import { WeddingTemplates } from '@/components/client';

import { InviteCoverProps } from './InviteCover.type';

const InviteCover = ({ coverData }: InviteCoverProps) => {
  return (
    <article className='w-full animate-fadeIn opacity-0'>
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

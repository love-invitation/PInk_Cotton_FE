import { WeddingTemplates } from '@/components/client';

import InviteBottomWave from '../InviteBottomWave/InviteBottomWave';
import InviteTopWave from '../InviteTopWave/InviteTopWave';
import { InviteCoverProps } from './InviteCover.type';

const InviteCover = ({ coverData }: InviteCoverProps) => {
  return (
    <article className='w-full min-h-[100dvh] flex justify-center items-center animate-fadeIn opacity-0 relative overflow-hidden'>
      <InviteTopWave />
      <WeddingTemplates
        id={coverData.templateId}
        details={coverData.coverContents}
        brideName={coverData.brideName}
        groomName={coverData.groomName}
        imageUrl={coverData.imageUrl}
      />
      <InviteBottomWave />
    </article>
  );
};

export default InviteCover;

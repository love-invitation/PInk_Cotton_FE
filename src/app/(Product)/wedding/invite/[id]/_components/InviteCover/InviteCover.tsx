'use client';

import { Snowfall } from 'react-snowfall';

import tailwindConfig from '@/../tailwind.config';
import { WeddingTemplates } from '@/components/client';

import InviteBottomWave from '../InviteBottomWave/InviteBottomWave';
import InviteTopWave from '../InviteTopWave/InviteTopWave';
import { InviteCoverProps } from './InviteCover.type';

import resolveConfig from 'tailwindcss/resolveConfig';

const InviteCover = ({ coverData }: InviteCoverProps) => {
  const { theme } = resolveConfig(tailwindConfig);

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

      <Snowfall
        color={theme.colors.pink_300}
        snowflakeCount={100}
        style={{
          opacity: 0.5,
        }}
      />
    </article>
  );
};

export default InviteCover;

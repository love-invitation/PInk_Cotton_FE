'use client';

import tailwindConfig from '@/../tailwind.config';
import { CopyIcon } from '@/components/server';

import { InviteAccountItemProps } from './InviteAccountItem.type';

import resolveConfig from 'tailwindcss/resolveConfig';

const InviteAccountItem = ({ onCopy, accountInfo }: InviteAccountItemProps) => {
  const { theme } = resolveConfig(tailwindConfig);

  const { accountNumber, bankName, name } = accountInfo;

  return (
    <li className='w-full px-[1.6rem] py-[1.6rem] flex items-center select-all'>
      <span className='flex-grow-[1] text-size14 flex flex-col gap-[0.6rem]'>
        <p className=' select-auto'>
          <strong className='font-bold mr-[1rem]'>{bankName}</strong>
          {accountNumber}
        </p>
        <p className='font-bold tracking-[0.2rem] text-size16'>{name}</p>
      </span>

      <div className='w-[4rem] flex items-center justify-center select-none'>
        <button
          type='button'
          aria-label='account_copy'
          onClick={() => onCopy(`${bankName} ${accountNumber}`)}
        >
          <CopyIcon
            size='2.8rem'
            fill={theme.colors.brown_500}
          />
        </button>
      </div>
    </li>
  );
};

export default InviteAccountItem;

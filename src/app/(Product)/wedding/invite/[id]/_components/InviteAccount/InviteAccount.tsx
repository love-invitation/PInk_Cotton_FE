'use client';

import { Fragment, useCallback } from 'react';
import { toast } from 'react-toastify';

import { Accordion } from '@/components/client';
import { Divider } from '@/components/server';

import { INVITE_STYLE } from '../../Invite.style';
import { InviteAccountProps } from './InviteAccount.type';
import { InviteAccountItem } from './components';

import copy from 'copy-to-clipboard';
import { twMerge } from 'tailwind-merge';

const InviteAccount = ({ accountData }: InviteAccountProps) => {
  const handleCopyAccount = useCallback((account: string) => {
    copy(account);

    toast('계좌번호가 복사되었습니다.', {
      position: 'bottom-center',
      hideProgressBar: true,
      autoClose: 600,
    });
  }, []);

  const { groom, bride } = accountData;

  return (
    <article className={twMerge(INVITE_STYLE.LAYOUT, 'px-[1.6rem] gap-[4rem]')}>
      <span className='w-full px-[1.6rem] flex flex-col gap-[1.6rem] items-center'>
        <h2 className={INVITE_STYLE.TITLE}>ACCOUNT</h2>
        <p className='text-size18 font-bold'>마음 전하실 곳</p>
        <p className='text-size14'>축복의 의미로 축의금을 전달해보세요.</p>
      </span>

      <div className='w-full flex flex-col gap-[2rem]'>
        <Accordion
          buttonTitle='신랑측'
          type='account'
        >
          <ul className='w-full border-[0.1rem] border-gray_700 rounded-radius6'>
            {groom.map((accountInfo, index) => (
              <Fragment key={accountInfo.name + accountInfo.bankName}>
                {index !== 0 && <Divider />}

                <InviteAccountItem
                  onCopy={handleCopyAccount}
                  accountInfo={accountInfo}
                />
              </Fragment>
            ))}
          </ul>
        </Accordion>

        <Accordion
          buttonTitle='신부측'
          type='account'
        >
          <ul className='w-full border-[0.1rem] border-gray_700 rounded-radius6'>
            {bride.map((accountInfo, index) => (
              <Fragment key={accountInfo.name + accountInfo.bankName}>
                {index !== 0 && <Divider />}

                <InviteAccountItem
                  onCopy={handleCopyAccount}
                  accountInfo={accountInfo}
                />
              </Fragment>
            ))}
          </ul>
        </Accordion>
      </div>
    </article>
  );
};

export default InviteAccount;

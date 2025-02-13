'use client';

import { useRef } from 'react';

import { WeddingTemplates } from '@/components/client';
import { InvitationItem } from '@/components/server';

import { MainBestListProps } from './MainBestList.type';

import { AnimatePresence, motion, useInView } from 'framer-motion';

const MainBestList = ({ invitation, bride, groom, detail }: MainBestListProps) => {
  const ref = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ul
      ref={ref}
      className='w-full min-h-[37rem] max-w-[100rem] px-[6rem] flex justify-between gap-[6rem] overflow-scroll scrollbar-hide items-center scroll-smooth'
    >
      <AnimatePresence>
        {isInView &&
          invitation.map(({ templateName, newest, price, id, imageUrl }, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: index * 0.5 }}
              key={id}
            >
              <InvitationItem
                name={templateName}
                isNew={newest}
                price={price}
                id={templateName}
              >
                <WeddingTemplates
                  id={id}
                  groomName={groom}
                  brideName={bride}
                  imageUrl={imageUrl}
                  details={detail}
                />
              </InvitationItem>
            </motion.li>
          ))}
      </AnimatePresence>
    </ul>
  );
};

export default MainBestList;

'use client';

import { useRef } from 'react';

import { TemplateItem } from '@/components/server';

import { MainBestListProps } from './MainBestList.type';

import { AnimatePresence, motion, useInView } from 'framer-motion';

const MainBestList = ({ invitation }: MainBestListProps) => {
  const ref = useRef<HTMLUListElement | null>(null);
  const isInView = useInView(ref);

  return (
    <ul
      ref={ref}
      className='w-full min-h-[37rem] main_page_550:max-w-[117rem] flex gap-[2rem] overflow-scroll scrollbar-hide items-center justify-center scroll-smooth'
    >
      <AnimatePresence>
        {isInView &&
          invitation.map(({ templateName, newest, price }, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: index * 0.5 }}
              key={templateName}
            >
              <TemplateItem
                name={templateName}
                isNew={newest}
                price={price}
                id={templateName}
              >
                {templateName}
              </TemplateItem>
            </motion.li>
          ))}
      </AnimatePresence>
    </ul>
  );
};

export default MainBestList;

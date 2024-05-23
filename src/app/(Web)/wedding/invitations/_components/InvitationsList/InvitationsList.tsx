import Link from 'next/link';

import { CommonList, TemplateItem } from '@/components/server';

import { InvitationsListProps } from './InvitationsList.type';

const InvitationsList = ({ productInfoList }: InvitationsListProps) => {
  return (
    <CommonList
      data={productInfoList}
      className='grid grid-cols-auto-fill-minmax auto-rows-auto gap-[10%] px-[10%]'
    >
      {({ id, templateName, newest, price, discountedPrice }) => (
        <li
          key={id}
          className='flex justify-center'
        >
          <Link href={`/wedding/invitations/${id}`}>
            <TemplateItem
              name={templateName}
              isNew={newest}
              price={price}
              discountPrice={discountedPrice}
              id={templateName}
            >
              {templateName}
            </TemplateItem>
          </Link>
        </li>
      )}
    </CommonList>
  );
};

export default InvitationsList;

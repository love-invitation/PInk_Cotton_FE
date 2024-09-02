'use client';

import { useMemo } from 'react';

import ContactAnchorBox from '../ContactAnchorBox/ContactAnchorBox';
import ContactItem from '../ContactItem/ContactItem';
import { ContactListProps } from './ContactList.type';

const ContactList = ({ type, data }: ContactListProps) => {
  const typeName = type === 'bride' ? '신부' : '산랑';

  const mainData = useMemo(
    () => data.find(({ relation }) => relation === typeName),
    [data, typeName],
  );

  const otherList = useMemo(
    () => data.filter(({ relation }) => relation !== typeName),
    [data, typeName],
  );

  return (
    <ul className='w-[40%] max-w-[16rem] flex flex-col gap-[6rem]'>
      <p className='w-full text-size20 text-nowrap text-center font-bold'>{`${typeName}측`}</p>

      {mainData && (
        <li className='w-full flex flex-col gap-[2rem]'>
          <p className='w-full text-size16 text-gray_400 text-center'>{`${typeName}에게 연락하기`}</p>

          <ContactAnchorBox
            labelName={typeName}
            phoneNumber={mainData.phoneNumber}
          />
        </li>
      )}

      {otherList.length !== 0 && (
        <p className='w-full text-size16 text-gray_400 text-center'>{`${typeName} 측 혼주`}</p>
      )}

      {otherList.map((other) => (
        <ContactItem
          key={other.relation}
          otherData={other}
        />
      ))}
    </ul>
  );
};

export default ContactList;

import ContactAnchorBox from '../ContactAnchorBox/ContactAnchorBox';
import ContactItem from '../ContactItem/ContactItem';
import { ContactListProps } from './ContactList.type';

const ContactList = ({ type }: ContactListProps) => {
  const typeName = type === 'bride' ? '신부' : '산렁';

  const TEST_LIST = ['123', '456'];

  return (
    <ul className='w-[40%] max-w-[16rem] flex flex-col gap-[6rem]'>
      <li className='w-full flex flex-col gap-[2rem]'>
        <p className='w-full text-size20 text-nowrap text-center font-semiBold'>
          {`${typeName}에게 연락하기`}
        </p>

        <ContactAnchorBox labelName={typeName} />
      </li>

      <p className='w-full text-size16 text-gray_400 text-center'>{`${typeName} 측 혼주`}</p>

      {TEST_LIST.map((item) => (
        <ContactItem key={item} />
      ))}
    </ul>
  );
};

export default ContactList;

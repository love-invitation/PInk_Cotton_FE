import ContactAnchorBox from '../ContactAnchorBox/ContactAnchorBox';
import { ContactItemProps } from './ContactItem.type';

const ContactItem = ({ otherData }: ContactItemProps) => {
  return (
    <li className='w-full flex flex-col gap-[2rem]'>
      <span className='w-full flex items-end justify-center gap-[1rem]'>
        <p className='text-size14 text-gray_400'>{otherData.relation}</p>
        <p className='text-size18 font-bold'>{otherData.name}</p>
      </span>

      <ContactAnchorBox
        labelName='TODO 추후 관계 넣어주기'
        phoneNumber={otherData.phoneNumber}
      />
    </li>
  );
};

export default ContactItem;

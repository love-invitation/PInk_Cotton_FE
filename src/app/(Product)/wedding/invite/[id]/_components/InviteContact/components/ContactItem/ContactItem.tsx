import ContactAnchorBox from '../ContactAnchorBox/ContactAnchorBox';

const ContactItem = () => {
  return (
    <li className='w-full flex flex-col gap-[2rem]'>
      <span className='w-full flex items-end justify-center gap-[1rem]'>
        <p className='text-size14 text-gray_400'>관계는</p>
        <p className='text-size18 font-semiBold'>이름은</p>
      </span>

      <ContactAnchorBox labelName='TODO 추후 관계 넣어주기' />
    </li>
  );
};

export default ContactItem;

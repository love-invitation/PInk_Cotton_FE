import { InviteContactProps } from './InviteContact.type';
import { ContactList } from './components';

const InviteContact = ({ contactData }: InviteContactProps) => {
  return (
    <article className='w-full py-[12rem] flex justify-around bg-[#f9f9f9] shadow-shadow_500 border-t-[0.1rem] border-b-[0.1rem]'>
      <ContactList
        type='groom'
        data={contactData.groom}
      />
      <ContactList
        type='bride'
        data={contactData.bride}
      />
    </article>
  );
};

export default InviteContact;

import { INVITE_STYLE } from '../../Invite.style';
import { InviteContactProps } from './InviteContact.type';
import { ContactList } from './components';

const InviteContact = ({ contactData }: InviteContactProps) => {
  return (
    <div className='w-full py-[8rem] flex flex-col gap-[4rem] bg-[#f9f9f9] shadow-shadow_500 border-t-[0.1rem] border-b-[0.1rem]'>
      <h2 className={INVITE_STYLE.TITLE}>CONTACT</h2>

      <article className='w-full flex justify-around '>
        <ContactList
          type='groom'
          data={contactData.groom}
        />
        <ContactList
          type='bride'
          data={contactData.bride}
        />
      </article>
    </div>
  );
};

export default InviteContact;

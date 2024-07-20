import { CallIcon, SMSIcon } from '@/components/server';

import { ContactAnchorBoxProps } from './ContactAnchorBox.type';

const ContactAnchorBox = ({ labelName, phoneNumber }: ContactAnchorBoxProps) => {
  return (
    <div className='w-full flex justify-center gap-[2rem]'>
      <a
        href={`tel:${phoneNumber}`}
        aria-label={`${labelName}에게 전화 보내기`}
      >
        <CallIcon />
      </a>
      <a
        href={`sms:${phoneNumber}`}
        aria-label={`${labelName}에게 문자 보내기`}
      >
        <SMSIcon />
      </a>
    </div>
  );
};

export default ContactAnchorBox;

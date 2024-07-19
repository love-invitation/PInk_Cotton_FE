import { CallIcon, SMSIcon } from '@/components/server';

import { ContactAnchorBoxProps } from './ContactAnchorBox.type';

const ContactAnchorBox = ({ labelName }: ContactAnchorBoxProps) => {
  return (
    <div className='w-full flex justify-center gap-[2rem]'>
      <a
        href='tel:01012345678'
        aria-label={`${labelName}에게 전화 보내기`}
      >
        <CallIcon />
      </a>
      <a
        href='sms:01012345678'
        aria-label={`${labelName}에게 문자 보내기`}
      >
        <SMSIcon />
      </a>
    </div>
  );
};

export default ContactAnchorBox;

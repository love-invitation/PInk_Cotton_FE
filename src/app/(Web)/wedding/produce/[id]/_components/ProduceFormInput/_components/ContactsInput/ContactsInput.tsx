import { Accordion, Input } from '@/components/client';

import { ContactInputItem } from './components';

const ContactsInput = () => {
  return (
    <Accordion
      type='edit'
      buttonTitle='연락처'
      defaultToggleValue
    >
      <Input className='w-full flex flex-col'>
        <ContactInputItem type='groom' />
        <ContactInputItem type='bride' />
      </Input>
    </Accordion>
  );
};

export default ContactsInput;

import { Accordion } from '@/components/client';

import { AccountInputItem } from './components';

const AccountInput = () => {
  return (
    <Accordion
      buttonTitle='축의금 계좌'
      type='edit'
      defaultToggleValue
    >
      <AccountInputItem type='groom' />
    </Accordion>
  );
};

export default AccountInput;

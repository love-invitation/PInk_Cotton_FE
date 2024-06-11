import { useMemo } from 'react';

import { AccountInputItemProps } from './AccountInputItem.type';

const AccountInputItem = ({ type }: AccountInputItemProps) => {
  const typeName = useMemo(() => (type === 'groom' ? '신랑' : '신부'), [type]);

  return <div>{typeName}</div>;
};

export default AccountInputItem;

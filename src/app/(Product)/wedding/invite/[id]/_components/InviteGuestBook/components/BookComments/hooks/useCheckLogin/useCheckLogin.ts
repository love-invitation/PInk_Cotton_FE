import { useMemo } from 'react';

import { QUERY_OPTIONS } from '@/constants';
import { useQuery } from '@tanstack/react-query';

const useCheckLogin = () => {
  const { data, isError } = useQuery(QUERY_OPTIONS.AUTH_USER());

  const isLogin = useMemo(() => !isError && !!data?.result, [data?.result, isError]);

  return isLogin;
};

export default useCheckLogin;

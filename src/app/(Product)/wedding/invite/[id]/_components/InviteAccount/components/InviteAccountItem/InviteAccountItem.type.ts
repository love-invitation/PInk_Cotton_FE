import { AccountDetail } from '@/types/response';

export interface InviteAccountItemProps {
  onCopy: (account: string) => void;
  accountInfo: AccountDetail;
}

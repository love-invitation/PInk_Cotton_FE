import { InvitationContactItem } from '@/types/response';

export interface ContactListProps {
  type: 'bride' | 'groom';
  data: InvitationContactItem[];
}

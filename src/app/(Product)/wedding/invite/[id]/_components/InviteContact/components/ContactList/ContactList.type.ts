import { ContactDetail } from '@/types/response';

export interface ContactListProps {
  type: 'bride' | 'groom';
  data: ContactDetail[];
}

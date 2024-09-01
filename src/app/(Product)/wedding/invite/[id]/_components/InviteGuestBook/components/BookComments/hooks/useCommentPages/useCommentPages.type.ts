import { GuestBook } from '@/types/response';

export interface UseCommentPagesProps {
  isLoading: boolean;
  data: GuestBook | undefined;
  page: number;
}

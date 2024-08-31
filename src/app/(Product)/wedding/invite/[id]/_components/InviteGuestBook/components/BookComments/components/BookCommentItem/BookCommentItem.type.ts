export interface BookCommentItemProps {
  message: string;
  name: string;
  created: string;
  id: number;
  onDelete: (commentId: string) => void;
}

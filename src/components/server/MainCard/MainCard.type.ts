export interface MainCardProps {
  children: React.ReactNode;
  name: string;
  price: number | string;
  id: string;

  discountPrice?: number | string;
  isNew?: boolean;
}

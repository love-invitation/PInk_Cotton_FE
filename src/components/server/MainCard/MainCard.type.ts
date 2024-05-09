export interface MainCardProps {
  children: React.ReactNode;
  name: string;
  price: number | string;
  discountPrice?: number | string;

  isNew?: boolean;
}

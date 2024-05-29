export interface TemplateLayoutProps {
  children: React.ReactNode;
  size?: CardSizeType;
  className?: string;
}

export type CardSizeType = 'small' | 'medium' | 'large';

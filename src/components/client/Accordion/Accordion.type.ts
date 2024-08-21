export type AccordionStyleType = 'main' | 'edit' | 'account';

export interface AccordionProps {
  children: React.ReactNode;
  buttonTitle: string;
  type?: AccordionStyleType;
  defaultToggleValue?: boolean;
}

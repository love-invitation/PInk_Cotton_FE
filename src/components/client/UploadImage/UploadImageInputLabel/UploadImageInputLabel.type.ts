import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface UploadImageInputLabelProps extends HtmlHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  visible?: boolean;
  multiple?: boolean;
}

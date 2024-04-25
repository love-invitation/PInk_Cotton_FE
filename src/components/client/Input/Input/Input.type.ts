import { InputHTMLAttributes } from 'react';
import { RegisterOptions } from 'react-hook-form';

export type InputType = 'text' | 'email' | 'number' | 'password' | 'tel';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  name: string;
  className?: string;
  registerOptions?: RegisterOptions;
}

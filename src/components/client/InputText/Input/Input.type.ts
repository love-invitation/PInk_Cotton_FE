import { InputHTMLAttributes } from 'react';
import { RegisterOptions } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  registerOptions?: RegisterOptions;
}

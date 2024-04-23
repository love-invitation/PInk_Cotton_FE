import ErrorMessage from './ErrorMessage/ErrorMessage';
import Input from './Input/Input';
import { InputTextProps } from './InputText.type';
import Label from './Label/Label';

import { twMerge } from 'tailwind-merge';

const InputText = ({ children, className, ...rest }: InputTextProps) => {
  return (
    <div
      className={twMerge('flex items-center gap-3', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

InputText.Input = Input;
InputText.Label = Label;
InputText.ErrorMessage = ErrorMessage;

export default InputText;

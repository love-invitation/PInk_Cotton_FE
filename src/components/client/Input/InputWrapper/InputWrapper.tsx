import Input from '../Input/Input';
import InputErrorMessage from '../InputErrorMessage/InputErrorMessage';
import InputLabel from '../InputLabel/InputLabel';
import { InputWrapperProps } from './InputWrapper.type';

import { twMerge } from 'tailwind-merge';

const InputWrapper = ({ children, className, ...rest }: InputWrapperProps) => {
  return (
    <div
      className={twMerge('flex', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

InputWrapper.Input = Input;
InputWrapper.Label = InputLabel;
InputWrapper.ErrorMessage = InputErrorMessage;

export default InputWrapper;

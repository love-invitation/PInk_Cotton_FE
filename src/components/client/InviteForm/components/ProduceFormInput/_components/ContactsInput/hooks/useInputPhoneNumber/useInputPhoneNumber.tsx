import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';

const useInputPhoneNumber = () => {
  const { setValue } = useFormContext();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    let { value } = e.target;
    const lastChar = value[value.length - 1];

    if (lastChar === '-' && value.length === 4) {
      return setValue(name, value);
    }

    if (lastChar === '-' && value.length === 9) {
      return setValue(name, value);
    }

    value = value.replace(/\D/g, '');

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    if (value.length > 3 && value.length <= 7) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length > 7) {
      value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7)}`;
    }

    setValue(name, value);
  };

  return { handleInputChange };
};

export default useInputPhoneNumber;

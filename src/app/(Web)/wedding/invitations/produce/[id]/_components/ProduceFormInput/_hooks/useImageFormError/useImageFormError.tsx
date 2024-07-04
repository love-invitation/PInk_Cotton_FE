import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { INVITATION_FORM, InvitationInput } from '@/constants';

import { UseImageFormErrorProps } from './useImageFormError.type';

const useImageFormError = ({ type }: UseImageFormErrorProps) => {
  const { setValue, getValues, setError, clearErrors } = useFormContext<InvitationInput>();
  const key = type === 'cover' ? 'COVER' : 'THUMBNAIL';

  const handleChangeImage = (image: File[]) => {
    if (!image[0]) {
      setError(`${type}.image`, INVITATION_FORM.REGISTER_OPTION[key].IMAGE);
    }

    if (image[0]) {
      clearErrors(`${type}.image`);
    }

    setValue(`${type}.image`, image[0]);
  };

  useEffect(() => {
    if (!getValues(`${type}.image`)) {
      setError(`${type}.image`, INVITATION_FORM.REGISTER_OPTION[key].IMAGE);
    }
  }, [getValues, key, setError, type]);

  return { handleChangeImage };
};

export default useImageFormError;

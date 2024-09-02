import { useFieldArray, useFormContext } from 'react-hook-form';

import tailwindConfig from '@/../tailwind.config';
import { Button, Input } from '@/components/client';
import { CloseIcon } from '@/components/server';
import { INVITATION_FORM, InvitationInput } from '@/constants';

import { useInputPhoneNumber } from '../../hooks';
import { ContactInputItemProps } from './ContactInputItem.type';

import resolveConfig from 'tailwindcss/resolveConfig';

const ContactInputItem = ({ type }: ContactInputItemProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<InvitationInput>();
  const { fields, remove, insert } = useFieldArray({
    control,
    name: `contacts.${type}`,
  });
  const { handleInputChange } = useInputPhoneNumber();
  const { theme } = resolveConfig(tailwindConfig);

  const key = type === 'groom' ? 'GROOM' : 'BRIDE';
  const typeName = type === 'groom' ? '신랑' : '신부';

  return (
    <div className='w-full flex flex-col py-[4rem] items-center gap-[4rem]'>
      <div className='w-full flex flex-col gap-[2rem]'>
        <Input.Label>{`${typeName}측`}</Input.Label>
        <ul className='w-full flex flex-col gap-[2rem]'>
          {fields.map((field, index) => (
            <li
              className='w-full flex items-center gap-[0.6rem] tablet:flex-col tablet:items-start mobile:flex-col mobile:items-start'
              key={field.id}
            >
              <div className='flex items-center gap-[0.6rem]'>
                <div className='flex flex-col gap-[1rem]'>
                  <Input.Input
                    name={`contacts.${type}.${index}.relation`}
                    placeholder='관계'
                    registerOptions={INVITATION_FORM.REGISTER_OPTION.CONTACT[key].RELATION}
                  />
                  <Input.ErrorMessage>
                    {errors?.contacts?.[type]?.[index]?.relation?.message}
                  </Input.ErrorMessage>
                </div>
                <div className='flex flex-col gap-[1rem]'>
                  <Input.Input
                    name={`contacts.${type}.${index}.name`}
                    placeholder='이름'
                    registerOptions={INVITATION_FORM.REGISTER_OPTION.CONTACT[key].NAME}
                  />
                  <Input.ErrorMessage>
                    {errors?.contacts?.[type]?.[index]?.name?.message}
                  </Input.ErrorMessage>
                </div>
                <Button
                  backgroundColor='naked'
                  className='w-[2.4rem] p-0 h-[2.4rem] hidden tablet:block mobile:block self-start relative top-[1rem]'
                  onClick={() => remove(index)}
                >
                  <CloseIcon
                    size='2.4rem'
                    fill={theme.colors.gray_500}
                  />
                </Button>
              </div>
              <div className='flex flex-col gap-[1rem] w-full'>
                <Input.Input
                  type='tel'
                  name={`contacts.${type}.${index}.phoneNumber`}
                  placeholder='전화 번호 (010-1234-5678)'
                  registerOptions={{
                    ...INVITATION_FORM.REGISTER_OPTION.CONTACT[key].PHONE_NUMBER,
                    onChange: (e) => handleInputChange(e, `contacts.${type}.${index}.phoneNumber`),
                  }}
                />
                <Input.ErrorMessage>
                  {errors?.contacts?.[type]?.[index]?.phoneNumber?.message}
                </Input.ErrorMessage>
              </div>
              <Button
                backgroundColor='naked'
                className='w-[2.4rem] p-0 h-[2.4rem] block tablet:hidden mobile:hidden self-start relative top-[1rem] '
                onClick={() => remove(index)}
              >
                <CloseIcon
                  size='2.4rem'
                  fill={theme.colors.gray_500}
                />
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <Button
        className='w-[20rem]'
        backgroundColor='naked'
        border='gray'
        fontColor='black'
        radius='0.8rem'
        onClick={() => insert(fields.length, { relation: '', name: '', phoneNumber: '' })}
      >
        {`+ ${typeName}측 연락처 추가`}
      </Button>
    </div>
  );
};

export default ContactInputItem;

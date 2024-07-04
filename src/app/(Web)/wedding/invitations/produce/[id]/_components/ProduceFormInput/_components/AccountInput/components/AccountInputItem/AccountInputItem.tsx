import { useFieldArray, useFormContext } from 'react-hook-form';

import tailwindConfig from '@/../tailwind.config';
import { Button, Input } from '@/components/client';
import { CloseIcon } from '@/components/server';
import { INVITATION_FORM, InvitationInput } from '@/constants';

import { AccountInputItemProps } from './AccountInputItem.type';

import resolveConfig from 'tailwindcss/resolveConfig';

const AccountInputItem = ({ type }: AccountInputItemProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<InvitationInput>();
  const { fields, remove, insert } = useFieldArray({
    control,
    name: `accounts.${type}`,
  });
  const { theme } = resolveConfig(tailwindConfig);

  const key = type === 'groom' ? 'GROOM' : 'BRIDE';
  const typeName = type === 'groom' ? '신랑' : '신부';

  return (
    <div className='w-full flex flex-col py-[4rem] items-center gap-[4rem]'>
      <div className='w-full flex flex-col gap-[2rem]'>
        <Input.Label>{`${typeName}측 계좌`}</Input.Label>
        <ul className='w-full flex flex-col gap-[2rem]'>
          {fields.map((field, index) => (
            <li
              className='w-full relative flex items-center gap-[0.6rem] tablet:flex-col tablet:items-start mobile:flex-col mobile:items-start'
              key={field.id}
            >
              <div className='flex items-center gap-[0.6rem]'>
                <div className='flex flex-col gap-[1rem] bas'>
                  <Input.Input
                    name={`accounts.${type}.${index}.name`}
                    placeholder='이름'
                    registerOptions={INVITATION_FORM.REGISTER_OPTION.ACCOUNTS[key].NAME}
                  />
                  <Input.ErrorMessage>
                    {errors?.accounts?.[type]?.[index]?.name?.message}
                  </Input.ErrorMessage>
                </div>
                <div className='flex flex-col gap-[1rem]'>
                  <Input.Input
                    name={`accounts.${type}.${index}.bankName`}
                    placeholder='은행명'
                    registerOptions={INVITATION_FORM.REGISTER_OPTION.ACCOUNTS[key].BANK_NAME}
                  />
                  <Input.ErrorMessage>
                    {errors?.accounts?.[type]?.[index]?.bankName?.message}
                  </Input.ErrorMessage>
                </div>
                <Button
                  backgroundColor='naked'
                  className='w-[2.4rem] p-0 h-[2.4rem] hidden tablet:block mobile:block self-start relative top-[1rem]'
                  onClick={() => {
                    remove(index);
                  }}
                >
                  <CloseIcon
                    size='2.4rem'
                    fill={theme.colors.gray_500}
                  />
                </Button>
              </div>
              <div className='flex flex-col gap-[1rem] w-full'>
                <Input.Input
                  name={`accounts.${type}.${index}.accountNumber`}
                  placeholder='계좌 번호'
                  registerOptions={INVITATION_FORM.REGISTER_OPTION.ACCOUNTS[key].ACCOUNT_NUMBER}
                />
                <Input.ErrorMessage>
                  {errors?.accounts?.[type]?.[index]?.accountNumber?.message}
                </Input.ErrorMessage>
              </div>
              <Button
                backgroundColor='naked'
                className='w-[2.4rem] p-0 h-[2.4rem] block tablet:hidden mobile:hidden self-start relative top-[1rem] '
                onClick={() => {
                  remove(index);
                }}
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
        onClick={() => {
          insert(fields.length, { name: '', bankName: '', accountNumber: '' });
        }}
      >
        {`+ ${typeName}측 계좌 번호 추가`}
      </Button>
    </div>
  );
};

export default AccountInputItem;

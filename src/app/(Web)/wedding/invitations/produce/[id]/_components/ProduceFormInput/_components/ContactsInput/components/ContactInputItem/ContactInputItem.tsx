import { useMemo } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import tailwindConfig from '@/../tailwind.config';
import { Button, Input } from '@/components/client';
import { DeleteIcon } from '@/components/server';

import { ContactInputItemProps } from './ContactInputItem.type';

import resolveConfig from 'tailwindcss/resolveConfig';

const ContactInputItem = ({ type }: ContactInputItemProps) => {
  const { control } = useFormContext();
  const { fields, remove, insert } = useFieldArray({
    control,
    name: `contacts.${type}.others`,
  });

  const typeName = useMemo(() => (type === 'groom' ? '신랑' : '신부'), [type]);
  const { theme } = resolveConfig(tailwindConfig);

  const style = useMemo(
    () => ({
      nameInput: 'w-[10rem]',
      phoneInput: 'grow-1',
      inputLayout:
        'w-full relative flex items-center gap-[0.6rem] tablet:flex-col tablet:items-start mobile:flex-col mobile:items-start',
      inputContainer: 'flex items-center gap-[0.6rem]',
    }),
    [],
  );

  return (
    <div className='w-full flex flex-col py-[4rem] items-center gap-[4rem]'>
      <div className={style.inputLayout}>
        <div className={style.inputContainer}>
          <Input.Label className='w-[8rem] text-center'>{typeName}</Input.Label>
          <Input.Input
            className={style.nameInput}
            name={`contacts.${type}.name`}
            placeholder='이름'
          />
        </div>
        <Input.Input
          className={style.phoneInput}
          name={`contacts.${type}.phone`}
          placeholder='전화 번호 (010-1234-5678)'
        />
      </div>

      {fields.length !== 0 && (
        <div className='w-full flex flex-col gap-[2rem]'>
          <Input.Label>{`${typeName}측 추가 연락처`}</Input.Label>
          <ul className='w-full flex flex-col gap-[2rem]'>
            {fields.map((field, index) => (
              <li
                className={style.inputLayout}
                key={field.id}
              >
                <div className={style.inputContainer}>
                  <Input.Input
                    className='w-[8rem]'
                    name={`contacts.${type}.others.${index}.relationship`}
                    placeholder='관계'
                  />
                  <Input.Input
                    className={style.nameInput}
                    name={`contacts.${type}.others.${index}.name`}
                    placeholder='이름'
                  />
                </div>

                <Input.Input
                  className={style.phoneInput}
                  name={`contacts.${type}.others.${index}.phone`}
                  placeholder='전화 번호 (010-1234-5678)'
                />

                <Button
                  backgroundColor='naked'
                  className='w-[2.4rem] p-0 h-[2.4rem] [mobile:absolute tablet:absolute mobile:right-[1rem] tablet:right-[1rem] mobile:top-[1.2rem] tablet:top-[1.2rem]'
                  onClick={() => {
                    remove(index);
                  }}
                >
                  <DeleteIcon
                    size='2.4rem'
                    fill={theme.colors.gray_500}
                  />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button
        className='w-[20rem]'
        backgroundColor='naked'
        border='gray'
        fontColor='black'
        radius='0.8rem'
        onClick={() => {
          insert(fields.length, { relationship: '', name: '', phone: '' });
        }}
      >
        {`+ ${typeName}측 연락처 추가`}
      </Button>
    </div>
  );
};

export default ContactInputItem;

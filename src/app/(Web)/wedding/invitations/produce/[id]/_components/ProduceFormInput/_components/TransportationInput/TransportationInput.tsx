'use client';

import { useFieldArray, useFormContext } from 'react-hook-form';

import { Accordion, Button, Input } from '@/components/client';

const TransportationInput = () => {
  const { control, setValue, getValues } = useFormContext();
  const { fields } = useFieldArray({
    control,
    name: 'transportation',
  });

  return (
    <Accordion
      type='edit'
      buttonTitle='교통수단'
      defaultToggleValue
    >
      <Input className='w-full  pt-[2rem] pb-[4rem] flex flex-col gap-[5.2rem] items-center'>
        <ul className='w-full flex flex-col gap-[3.2rem]'>
          {fields.map((field, index) => (
            <li
              key={field.id}
              className='w-full flex flex-col gap-[1.2rem]'
            >
              <Input.Label>{`${index + 1}번째 교통수단`}</Input.Label>
              <Input.Input
                name={`transportation.${index}.kind`}
                placeholder='교통 수단을 입력해주세요. (지하철, 버스)'
              />
              <Input.Input
                name={`transportation.${index}.detail`}
                placeholder='가는 방법을 작성해주세요.'
              />
            </li>
          ))}
        </ul>

        <Button
          className='w-[20rem]'
          backgroundColor='naked'
          border='gray'
          fontColor='black'
          radius='0.8rem'
          onClick={() => {
            setValue('transportation', [...getValues('transportation'), { kind: '', detail: '' }]);
          }}
        >
          + 교통수단 추가
        </Button>
      </Input>
    </Accordion>
  );
};

export default TransportationInput;

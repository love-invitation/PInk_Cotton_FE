'use client';

import { useFormContext } from 'react-hook-form';

import { Accordion, CheckBox, Input } from '@/components/client';
import { INVITATION_FORM, InvitationInput } from '@/constants';

const ReservationInput = () => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<InvitationInput>();

  return (
    <Accordion
      buttonTitle='예약일시'
      type='edit'
      defaultToggleValue
    >
      <div className='flex flex-col gap-[1.9rem] py-[4rem]'>
        <div className='flex flex-col gap-[1rem]'>
          <Input className='items-center gap-[3.3rem]'>
            <Input.Label>예약일</Input.Label>
            <Input.Input
              type='date'
              name='booking.date'
              registerOptions={INVITATION_FORM.REGISTER_OPTION.BOOKING.DATE}
            />
          </Input>
          <Input.ErrorMessage>{errors?.booking?.date?.message}</Input.ErrorMessage>
        </div>
        <div className='flex flex-col gap-[1rem]'>
          <Input className='items-center gap-[4.7rem]'>
            <Input.Label>시각</Input.Label>
            <Input.Input
              type='time'
              name='booking.time'
              registerOptions={INVITATION_FORM.REGISTER_OPTION.BOOKING.TIME}
            />
          </Input>
          <Input.ErrorMessage>{errors?.booking?.time?.message}</Input.ErrorMessage>
        </div>
        <Input className='items-center gap-[4.7rem]'>
          <Input.Label>표시</Input.Label>
          <div className='flex items-center gap-[1rem]'>
            <CheckBox
              id='mark'
              checked={watch(`booking.dateType`)}
              onChange={(event) => setValue('booking.dateType', event.currentTarget.checked)}
            />
            <label
              htmlFor='mark'
              className='text-[1.7rem] text-black_800 font-semibold'
            >
              달력
            </label>
          </div>
        </Input>
      </div>
    </Accordion>
  );
};

export default ReservationInput;

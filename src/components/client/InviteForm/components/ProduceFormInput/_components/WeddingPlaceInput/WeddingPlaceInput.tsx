'use client';

import { useFormContext } from 'react-hook-form';

import { Accordion, AlertModal, Input, PinkMap } from '@/components/client';
import { INVITATION_FORM, InvitationInput } from '@/constants';
import { useModal } from '@/hooks';

import { useGetAddress } from './hooks';

const WeddingPlaceInput = () => {
  const {
    formState: { errors },
  } = useFormContext<InvitationInput>();
  const { isShowModal, closeModal, showModal } = useModal();
  const { center, handleClickAddress, address, alertMessage } = useGetAddress({ showModal });

  return (
    <Accordion
      type='edit'
      buttonTitle='예식 장소'
      defaultToggleValue
    >
      <Input className='w-full flex-col gap-[2rem] py-[2rem]'>
        <div className='w-full flex flex-col gap-[1rem]'>
          <Input.Label>예식장 이름</Input.Label>
          <Input.Input
            name='place.name'
            placeholder='PINK COTTON 웨딩 홀'
            registerOptions={INVITATION_FORM.REGISTER_OPTION.PLACE.NAME}
          />
          <Input.ErrorMessage>{errors?.place?.name?.message}</Input.ErrorMessage>
        </div>

        <div className='w-full flex flex-col gap-[1rem]'>
          <Input.Label>층과 홀</Input.Label>
          <Input.Input
            name='place.detail'
            placeholder='7F, 이스트홀'
            registerOptions={INVITATION_FORM.REGISTER_OPTION.PLACE.DETAIL}
          />
          <Input.ErrorMessage>{errors?.place?.detail?.message}</Input.ErrorMessage>
        </div>

        <div className='w-full flex flex-col gap-[1rem]'>
          <Input.Label>주소</Input.Label>
          <Input.Input
            name='place.address'
            readOnly
            value={address}
            placeholder='주소'
            onClick={handleClickAddress}
            registerOptions={INVITATION_FORM.REGISTER_OPTION.PLACE.ADDRESS}
          />
          <Input.ErrorMessage>{errors?.place?.address?.message}</Input.ErrorMessage>
        </div>

        {center && (
          <PinkMap
            center={center}
            width='100%'
            height='25rem'
          />
        )}
      </Input>

      <AlertModal
        message={alertMessage}
        isShow={isShowModal}
        onClose={closeModal}
      />
    </Accordion>
  );
};

export default WeddingPlaceInput;

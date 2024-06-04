import { useEffect, useState } from 'react';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useFormContext } from 'react-hook-form';

import { GeoPosition } from '@/types/originType';

const useGetAddress = () => {
  const [center, setCenter] = useState<GeoPosition | null>(null);
  const [geocoder, setGeocoder] = useState<kakao.maps.services.Geocoder | null>(null);
  const { setValue, watch } = useFormContext();

  useEffect(() => {
    kakao.maps.load(() => {
      const geo = new kakao.maps.services.Geocoder();
      setGeocoder(geo);
    });
  }, []);

  const open = useDaumPostcodePopup();

  const handleClickAddress = () => {
    open({
      onComplete: (data: Address) => {
        setValue('place.address', data.roadAddress);
        if (!geocoder) {
          // 경고 처리 하기
          return;
        }

        geocoder.addressSearch(data.address, (result, state) => {
          if (state === kakao.maps.services.Status.OK) {
            setCenter({
              lat: Number(result[0].y),
              lng: Number(result[0].x),
            });
          }
        });
      },

      onError: () => {
        // 실패 처리 하기
      },
    });
  };

  return {
    center,
    handleClickAddress,
    address: watch('place.address'),
  };
};

export default useGetAddress;

'use client';

import {
  ChangeEvent,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { toast } from 'react-toastify';

import {
  UploadImageContextProps,
  UploadImageContextProviderProps,
} from './UploadImageContext.type';

export const UploadImageContext = createContext<UploadImageContextProps>({
  images: [],
  handleUploadImage: () => {},
  handleRemoveImage: () => {},
});

export const useUploadImageContext = () => useContext(UploadImageContext);

export const UploadImageContextProvider = ({
  limit = 1,
  onChange,
  children,
}: UploadImageContextProviderProps) => {
  const [images, setImages] = useState<File[]>([]);
  const onChangeRef = useRef(onChange);

  const handleUploadImage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const selectedImages = event.target.files;

      if (!selectedImages) {
        return;
      }

      if (selectedImages.length > limit) {
        return toast.warn(`최대 ${limit}만큼 업로드가 가능합니다.`);
      }

      const imagesArray = Array.from(selectedImages);

      onChangeRef.current(imagesArray);
      setImages(imagesArray);
    },
    [limit],
  );

  const handleRemoveImage = useCallback(
    (selectedImage: File) => {
      const newImagesArray = images.filter((image) => image !== selectedImage);

      onChangeRef.current(newImagesArray);
      setImages(newImagesArray);
    },
    [images],
  );

  const value = useMemo(
    () => ({
      images,
      handleUploadImage,
      handleRemoveImage,
    }),
    [images, handleUploadImage, handleRemoveImage],
  );

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  return <UploadImageContext.Provider value={value}>{children}</UploadImageContext.Provider>;
};

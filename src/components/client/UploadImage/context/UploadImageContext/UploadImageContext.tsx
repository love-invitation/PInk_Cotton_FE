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
        return toast.warn(`최대 ${limit}장 선택 가능합니다.`);
      }

      const selectedImagesArray = Array.from(selectedImages);
      const filteredImages = images
        .filter(
          (image) =>
            !selectedImagesArray.some(
              (selectedImage) =>
                selectedImage.name === image.name &&
                selectedImage.lastModified === image.lastModified,
            ),
        )
        .concat(selectedImagesArray);

      onChangeRef.current(filteredImages);
      setImages(filteredImages);
    },
    [images, limit],
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

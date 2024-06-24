import { useEffect, useState } from 'react';

const usePreviewImage = (image: File | null) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (!image) {
      return;
    }

    const url = URL.createObjectURL(image);

    setImageUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [image]);

  return { imageUrl };
};

export default usePreviewImage;

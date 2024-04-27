import { ChangeEvent, ReactNode } from 'react';

export interface UploadImageContextProps {
  images: File[];
  handleUploadImage: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: (selectedImage: File) => void;
}

export interface UploadImageProviderProps {
  children: ReactNode;
  limit?: number;
  onChange: (images: File[]) => void;
}

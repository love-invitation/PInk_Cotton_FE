export interface GalleryItemProps {
  imageUrl: string;

  isInView: boolean;
  index: number;

  onClick: () => void;
}

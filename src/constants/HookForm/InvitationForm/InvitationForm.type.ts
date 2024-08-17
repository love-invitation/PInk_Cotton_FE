import { InvitationResponse } from '@/types/response';

export interface ParentInput {
  name: string;
  deceased: boolean;
}

export interface PersonInput {
  name: string;
  relation: string;
  father: ParentInput;
  mother: ParentInput;
}

export interface ImageSectionInput {
  image: File | null;
  contents: string;
}

export interface ContactsInput {
  groom: { name: string; phoneNumber: string; relation: string }[];
  bride: { name: string; phoneNumber: string; relation: string }[];
}

export interface AccountsInput {
  groom: { name: string; bankName: string; accountNumber: string }[];
  bride: { name: string; bankName: string; accountNumber: string }[];
}

export interface InvitationInput {
  cover: ImageSectionInput;
  thumbnail: ImageSectionInput & { title: string };
  article: {
    title: string;
    contents: string;
  };
  booking: {
    date: string;
    time: string;
    dateType: boolean;
  };
  place: {
    name: string;
    detail: string;
    address: string;
    latitude: null | number;
    longitude: null | number;
  };
  transport: { kind: string; detail: string }[];
  gallery: File[];
  groom: PersonInput;
  bride: PersonInput;
  guestbookCheck: boolean;
  contacts: ContactsInput;
  accounts: AccountsInput;
  priority: { name: string; priority: number }[];
}

export interface InitialStateOption {
  invitation: InvitationResponse;
  coverImageFile: Blob;
  thumbnailImageFile: Blob;
  galleryImageFiles: Blob[];
}

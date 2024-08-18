export interface Cover {
  priority: number;
  templateId: number;
  imageUrl: string;
  imageOriginName: string;
  imageStoreFileName: string;
  weddingDate: string;
  detail: string;
  groomName: string;
  brideName: string;
  coverContents: string;
}

export interface Place {
  priority: number;
  name: string;
  detail: string;
  address: string;
  longitude: number;
  latitude: number;
}

export interface Booking {
  priority: number;
  date: string;
  dateType?: string | null;
}

export interface Person {
  name: string;
  father: {
    name: string;
    deceased: boolean;
  };
  mother: {
    name: string;
    deceased: boolean;
  };
  relation: string;
}

export interface Article {
  priority: number;
  title: string;
  contents: string;
  groom: Person;
  bride: Person;
}

export interface ContactDetail {
  name: string;
  phoneNumber: string;
  relation: string;
}

export interface Contact {
  priority: number;
  groom: ContactDetail[];
  bride: ContactDetail[];
}

export interface TransportDetail {
  kind: string;
  detail: string;
}

export interface Transport {
  priority: number;
  transport: TransportDetail[];
}

export interface AccountDetail {
  name: string;
  bankName: string;
  accountNumber: string;
}

export interface Account {
  priority: number;
  groom: AccountDetail[];
  bride: AccountDetail[];
}

export interface GalleryDetail {
  priority: number;
  originFileName: string;
  imageUrl: string;
}

export interface Gallery {
  priority: number;
  galleries: GalleryDetail[];
}

export interface Thumbnail {
  title: string;
  contents: string;
  imageUrl: string;
}

export interface InvitationResult {
  tsid: number;
  guestbookCheck: boolean;
  cover: Cover;
  place: Place;
  booking: Booking;
  article: Article;
  contact: Contact;
  transport: Transport;
  account: Account;
  gallery: Gallery;
  thumbnail: Thumbnail;
}

export interface InvitationResponse {
  status: number;
  message: string;
  result: InvitationResult;
}

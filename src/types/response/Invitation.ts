/** Cover */

export interface InvitationCover {
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

/** WeddingPlace */

export interface InvitationWeddingPlace {
  priority: number;
  placeName: string;
  detail: string;
  placeAddress: string;
  latitude: number;
  longitude: number;
}

/** Article */

export interface InvitationArticleItem {
  name: string;
  father: { name: string; deceased: boolean };
  mother: { name: string; deceased: boolean };
  relation: string;
}

export interface InvitationArticle {
  priority: number;
  title: string;
  contents: string;
  groom: InvitationArticleItem;
  bride: InvitationArticleItem;
}

/** Contact */

export interface InvitationContactItem {
  name: string;
  phoneNumber: string;
  relation: string;
}

export interface InvitationContact {
  priority: number;
  groom: InvitationContactItem[];
  bride: InvitationContactItem[];
}

/** Transport */

export interface InvitationTransportItem {
  kind: string;
  detail: string;
}

export interface InvitationTransport {
  priority: number;
  transport: InvitationTransportItem[];
}

/** Account */

export interface InvitationAccountItem {
  name: string;
  bankName: string;
  accountNumber: string;
}

export interface InvitationAccount {
  priority: number;
  groomAccountInfo: InvitationAccountItem[];
  brideAccountInfo: InvitationAccountItem[];
}

/** Gallery */

export interface InvitationGalleryItem {
  priority: number;
  originFileName: string;
  imageUrl: string;
}

export interface InvitationGallery {
  priority: number;
  galleries: InvitationGalleryItem[];
}

export interface InvitationResponse {
  status: number;
  message: string;
  result: {
    tsid: number;
    isPaid: boolean;

    cover: InvitationCover;
    weddingPlace: InvitationWeddingPlace;

    weddingDate: {
      priority: number;
      date: string;
      dateType: string;
    };

    article: InvitationArticle;

    contact: InvitationContact;
    transport: InvitationTransport;

    // guestbook: {
    //   priority: number;
    //   guestbookList: {
    //     content: [
    //       {
    //         name: string;
    //         message: string;
    //       },
    //     ];
    //     pageable: {
    //       pageNumber: number;
    //       pageSize: number;
    //       sort: {
    //         empty: boolean;
    //         unsorted: boolean;
    //         sorted: boolean;
    //       };
    //       offset: number;
    //       paged: boolean;
    //       unpaged: boolean;
    //     };
    //     totalPages: number;
    //     totalElements: number;
    //     last: boolean;
    //     size: number;
    //     number: number;
    //     sort: {
    //       empty: boolean;
    //       unsorted: boolean;
    //       sorted: boolean;
    //     };
    //     numberOfElements: number;
    //     first: boolean;
    //     empty: boolean;
    //   };
    // };

    account: InvitationAccount;
    gallery: InvitationGallery;

    shareThumbnail: {
      shareTitle: string;
      shareContents: string;
      imageUrl: string;
    };
  };
}

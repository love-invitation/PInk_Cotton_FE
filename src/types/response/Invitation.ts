export interface InvitationResponse {
  status: number;
  message: string;
  result: {
    tsid: number;
    guestbookCheck: boolean;
    cover: {
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
    };
    place: {
      priority: number;
      name: string;
      detail: string;
      address: string;
      longitude: number;
      latitude: number;
    };
    booking: {
      priority: number;
      date: string;
      dateType?: string | null;
    };
    article: {
      priority: number;
      title: string;
      contents: string;
      groom: {
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
      };
      bride: {
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
      };
    };
    contact: {
      priority: number;
      groom: {
        name: string;
        phoneNumber: string;
        relation: string;
      }[];
      bride: {
        name: string;
        phoneNumber: string;
        relation: string;
      }[];
    };
    transport: {
      priority: number;
      transport: {
        kind: string;
        detail: string;
      }[];
    };
    account: {
      priority: number;
      groom: {
        name: string;
        bankName: string;
        accountNumber: string;
      }[];
      bride: {
        name: string;
        bankName: string;
        accountNumber: string;
      }[];
    };
    gallery: {
      priority: number;
      galleries: {
        priority: number;
        originFileName: string;
        imageUrl: string;
      }[];
    };
    thumbnail: {
      title: string;
      contents: string;
      imageUrl: string;
    };
  };
}

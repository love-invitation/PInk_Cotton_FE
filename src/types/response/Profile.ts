export interface MyInvitationItem {
  coverImageUrl: string;
  productInfoName: string;
  lastModified: string;
  isPaid: boolean;
  tsid: string;
  thumbnail: {
    title: string;
    contents: string;
    imageUrl: string;
  };
}

export interface MyInvitationsResponse {
  status: number;
  result: MyInvitationItem[];
}

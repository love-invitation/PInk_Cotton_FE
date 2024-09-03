export interface MyInvitationItem {
  productInfoImageUrl: string;
  productInfoName: string;
  lastModified: string;
  isPaid: boolean;
  tsid: bigint;
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

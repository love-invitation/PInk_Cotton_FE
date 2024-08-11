export interface MyInvitationItem {
  imageUrl: string;
  title: string;
  lastModified: string;
  isPaid: boolean;
  tsid: bigint;
}

export interface MyInvitationsResponse {
  status: number;
  result: MyInvitationItem[];
}

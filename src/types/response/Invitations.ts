export interface BestInvitationsResponse {
  status: number;
  message: string;
  result: {
    title: string;
    detail: string;
    groomName: string;
    brideName: string;
    productInfoList: BestInvitationsItem[];
  };
}

export interface BestInvitationsItem {
  imageUrl: string;
  templateName: string;
  price: number;
  discountedPrice?: number;
  best: boolean;
  newest: boolean;
}

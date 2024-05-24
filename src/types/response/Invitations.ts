export interface InvitationsResponse {
  status: number;
  message: string;
  result: {
    title?: string;
    details: string;
    groomName: string;
    brideName: string;
    productInfoList: InvitationsItem[];
  };
}

export interface InvitationsItem {
  id: number;
  imageUrl: string;
  templateName: string;
  price: number;
  discountedPrice?: number;
  best: boolean;
  newest: boolean;
}

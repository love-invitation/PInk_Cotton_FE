export interface InvitationsResponse {
  status: number;
  message: string;
  result: {
    title?: string;
    details: string;
    groomName: string;
    brideName: string;
    productInfoList: InvitationItem[];
  };
}

export interface InvitationResponse {
  status: number;
  message: string;
  result: {
    title?: string;
    details: string;
    groomName: string;
    brideName: string;
    productInfo: InvitationItem;
  };
}

export interface InvitationItem {
  id: number;
  imageUrl: string;
  templateName: string;
  price: number;
  discountedPrice?: number;
  best: boolean;
  newest: boolean;
}

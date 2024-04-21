export interface ConfirmModalProps {
  isShow: boolean;
  message: string;

  clickAwayEnable?: boolean;

  onAccept: () => void;
  onReject: () => void;
}

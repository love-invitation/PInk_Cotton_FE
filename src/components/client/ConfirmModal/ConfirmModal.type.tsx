export interface ConfirmModalProps {
  isShow: boolean;
  clickAwayEnable?: boolean;

  onAccept: () => void;
  onReject: () => void;
}

export interface ConfirmModalProps {
  isShow: boolean;
  clickAwayEnable?: boolean;

  message: string;
  warningMessage?: string;

  onAccept: () => void;
  onReject: () => void;
}

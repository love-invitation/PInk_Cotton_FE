export interface ConfirmModalProps {
  isShow: boolean;
  clickAwayEnable?: boolean;

  message: string;
  warningMessage?: string;

  onAccept: () => void;
  acceptButtonTitle?: string;
  onReject: () => void;
  rejectButtonTitle?: string;
}

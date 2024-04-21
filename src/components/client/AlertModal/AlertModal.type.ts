export interface AlertModalProps {
  isShow: boolean;
  onClose: () => void;
  message: string;
  subMessage?: string;

  clickAwayEnable?: boolean;
}

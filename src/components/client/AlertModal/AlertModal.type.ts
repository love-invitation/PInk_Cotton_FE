export type AlertSubMessageType = 'warning' | 'basic' | 'safe' | 'danger';

export interface AlertModalProps {
  isShow: boolean;
  onClose: () => void;
  message: string;
  subMessage?: string;

  subMessageType?: AlertSubMessageType;

  clickAwayEnable?: boolean;
}

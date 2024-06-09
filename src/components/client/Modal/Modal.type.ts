export interface ModalProps {
  children: React.ReactNode;
  isShow: boolean;
  onClose: () => void;
  clickAwayEnable?: boolean;
  disabledCloseButton?: boolean;
}

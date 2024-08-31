export interface PasswordModalProps {
  isShow: boolean;
  onClose: () => void;
  onAccept: (password: string) => void;
  onLogin: () => void;
}

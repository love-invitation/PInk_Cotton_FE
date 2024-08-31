export interface PasswordModalProps {
  isShow: boolean;
  isLogin: boolean;
  onClose: () => void;
  onAccept: (password: string) => void;
  onAdminDelete: () => void;
  onLogin: () => void;
}

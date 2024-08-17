import { InvitationInput } from '@/constants';

export interface InvitationCoverProps {
  isPending: boolean;
  onClick: (id: number, invitationInfo: InvitationInput) => void;
}

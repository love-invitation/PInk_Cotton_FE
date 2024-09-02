import { InvitationInput } from '@/constants';

export interface InvitationCoverProps {
  isPending: boolean;
  onClick: (id: string, invitationInfo: InvitationInput) => void;
}

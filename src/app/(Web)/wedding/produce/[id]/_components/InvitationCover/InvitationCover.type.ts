import { InvitationInput } from '@/constants';

export interface InvitationCoverProps {
  isPending: boolean;
  onClick: (id: bigint, invitationInfo: InvitationInput) => void;
}

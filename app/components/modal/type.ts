import { ReactNode } from 'react';

export interface IProps {
    children: ReactNode;
    visible: boolean;
    onClose: () => void;
}

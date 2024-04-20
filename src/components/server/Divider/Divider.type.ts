import { HTMLAttributes } from 'react';

export type Divider = 'horizontal' | 'vertical';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  direction?: Divider;
}

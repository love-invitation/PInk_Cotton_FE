import S from './styles/EditorView.module.css';
import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';

import { EditorViewProps } from './EditorView.type';

import { twMerge } from 'tailwind-merge';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const EditorView = ({ value, className }: EditorViewProps) => {
  return (
    <ReactQuill
      className={twMerge(className, S.editor)}
      modules={{ toolbar: false }}
      value={value}
      readOnly
    />
  );
};

export default EditorView;

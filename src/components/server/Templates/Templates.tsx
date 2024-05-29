import { Template1 } from './components';

const Templates = ({ id }: { id: string }) => {
  switch (id) {
    case 'tem1':
      return <Template1 />;

    default:
      return <Template1 />;
  }
};

export default Templates;

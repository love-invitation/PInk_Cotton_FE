import Image from 'next/image';

import { TemplateProps } from './Template.type';

const Template = ({ title, details, groomName, brideName, productItem }: TemplateProps) => {
  const { id, imageUrl } = productItem;

  if (id === 1) {
    return (
      <>
        <header>
          <h3>{title}</h3>
          <Image
            src={imageUrl}
            alt='123'
            width={259}
            height={200}
          />
          <div>
            <p>{groomName}</p>
            <p>{brideName}</p>
          </div>

          <p>{details}</p>
        </header>
      </>
    );
  }

  return null;
};

export default Template;

import Image from 'next/image';

import { InvitationTemplateProps } from './InvitationTemplate.type';

const InvitationTemplate = ({
  title,
  details,
  groomName,
  brideName,
  productInfo,
  width,
  height,
}: InvitationTemplateProps) => {
  const { id, imageUrl, templateName } = productInfo;

  if (id) {
    return (
      <>
        <h3 className='text-[1.6rem]'>{title}</h3>
        <Image
          width={width}
          height={height}
          src={imageUrl || ''}
          alt={templateName}
        />
        <div className='flex gap-[1rem] text-[1.6rem]'>
          <p>{groomName}</p>
          <p>·</p>
          <p>{brideName}</p>
        </div>
        <p className='text-[1.2rem] text-center w-[80%] mx-[10rem]'>{details}</p>
      </>
    );
  }

  return null;
};

export default InvitationTemplate;

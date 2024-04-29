import Divider from '@/components/server/Divider/Divider';
import { COMPANY_INFO } from '@/constants';

const FooterInfo = () => {
  const { NAME, ADDRESS, REPRESENTATIVE, EMAIL, COMPANY_NUMBER, MAIL_ORDER_BUSINESS_REPORT } =
    COMPANY_INFO;

  const liStyle = 'w-full h-[1.5rem] flex items-center';

  return (
    <ul className='w-full flex flex-col gap-[0.6rem] pl-[2rem] text-[1.1rem] text-gray_100 tracking-[0.05rem]'>
      <li className={liStyle}>
        <p>
          상호명 : <strong>{NAME}</strong>
        </p>
        <Divider
          direction='vertical'
          className='h-[70%]'
        />
        <p>{ADDRESS}</p>
      </li>
      <li className={liStyle}>
        <p>대표자 : {REPRESENTATIVE}</p>
        <Divider
          direction='vertical'
          className='h-[70%]'
        />
        <p>이메일 : {EMAIL}</p>
      </li>
      <li className={liStyle}>
        <p>사업자등록번호 : {COMPANY_NUMBER}</p>
      </li>
      <li className={liStyle}>
        <p>통신판매업신고 : {MAIL_ORDER_BUSINESS_REPORT}</p>
      </li>
      <li className={liStyle}>
        <p>
          Copyright ⓒ <strong>{NAME}</strong> all rights reserved
        </p>
      </li>
    </ul>
  );
};

export default FooterInfo;

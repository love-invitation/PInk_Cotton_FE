import Divider from '@/components/server/Divider/Divider';
import { PINKCOTTON_COMPANY } from '@/constants';

const FooterInfo = () => {
  const liStyle = 'w-full h-[1.5rem] flex items-center';

  return (
    <ul className='w-full flex flex-col gap-[0.6rem] pl-[2rem] text-[1.1rem] text-gray_100 tracking-[0.05rem]'>
      <li className={liStyle}>
        <p>
          상호명 : <strong>{PINKCOTTON_COMPANY.NAME}</strong>
        </p>
        <Divider
          direction='vertical'
          className='h-[70%]'
        />
        <p>{PINKCOTTON_COMPANY.ADDRESS}</p>
      </li>
      <li className={liStyle}>
        <p>대표자 : {PINKCOTTON_COMPANY.REPRESENTATIVE}</p>
        <Divider
          direction='vertical'
          className='h-[70%]'
        />
        <p>이메일 : {PINKCOTTON_COMPANY.EMAIL}</p>
      </li>
      <li className={liStyle}>
        <p>사업자등록번호 : {PINKCOTTON_COMPANY.COMPANY_NUMBER}</p>
      </li>
      <li className={liStyle}>
        <p>통신판매업신고 : {PINKCOTTON_COMPANY.MAIL_ORDER_BUSINESS_REPORT}</p>
      </li>
      <li className={liStyle}>
        <p>
          Copyright ⓒ <strong>{PINKCOTTON_COMPANY.NAME}</strong> all rights reserved
        </p>
      </li>
    </ul>
  );
};

export default FooterInfo;

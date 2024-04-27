import Divider from '@/components/server/Divider/Divider';

const FooterInfo = () => {
  const email = 'abcdefg@pinkcotton.com';
  const representative = '아무개';
  const address = '서울시 용산구 어느빌딩';
  const companyNumber = '1274812가124나';
  const mailOrderBusinessReport = '79102731';

  const liStyle = 'w-full h-[1.5rem] flex items-center';

  return (
    <ul className='w-full flex flex-col gap-[0.6rem] pl-[2rem] text-[1.1rem] text-gray_100 tracking-[0.05rem] text-nowrap'>
      <li className={liStyle}>
        <p>
          상호명 : <strong>PINKCOTTON</strong>
        </p>
        <Divider
          direction='vertical'
          className='h-[70%]'
        />
        <p>{address}</p>
      </li>
      <li className={liStyle}>
        <p>대표자 : {representative}</p>
        <Divider
          direction='vertical'
          className='h-[70%]'
        />
        <p>이메일 : {email}</p>
      </li>
      <li className={liStyle}>
        <p>사업자등록번호 : {companyNumber}</p>
      </li>
      <li className={liStyle}>
        <p>통신판매업신고 : {mailOrderBusinessReport}</p>
      </li>
      <li className={liStyle}>
        <p>
          Copyright ⓒ <strong>PINKCOTTON</strong> all rights reserved
        </p>
      </li>
    </ul>
  );
};

export default FooterInfo;

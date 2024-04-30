import style from './HeaderLogo.style.module.css';

const HeaderLogo = () => {
  return (
    <div
      className={`ml-[4%] flex items-center justify-center border-red-500 border-[1px] ${style.header_logo}`}
    >
      Logo place
    </div>
  );
};

export default HeaderLogo;

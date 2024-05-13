import { MainBestSection, MainIntroSection, MainServiceSection } from './_components';

const MainPage = () => {
  return (
    <main className='w-full text-black_500'>
      <MainIntroSection />
      <MainBestSection />
      <MainServiceSection />
    </main>
  );
};

export default MainPage;

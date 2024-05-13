import { MainBestSection, MainIntroSection, MainServiceSection } from './_components';

const MainPage = () => {
  return (
    <main className='w-full'>
      <MainIntroSection />
      <MainBestSection />
      <MainServiceSection />
    </main>
  );
};

export default MainPage;

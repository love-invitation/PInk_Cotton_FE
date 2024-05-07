'use client';

import { Dropdown } from '@/components/client';

const Home = () => {
  const list = ['선택 없음', '1', '2', '3'];

  return (
    <main className='h-full w-full'>
      <Dropdown
        defaultValue={list[0]}
        onChange={() => {}}
      >
        <Dropdown.Select />
        <Dropdown.List list={list} />
      </Dropdown>
    </main>
  );
};

export default Home;

const Loading = () => {
  return (
    <ul className='grid [grid-template-columns:repeat(auto-fill,minmax(40rem,40rem))] auto-rows-auto gap-[10rem] justify-center items-center'>
      {new Array(3).fill(null).map((_, index) => {
        const id = index;

        return (
          <li
            key={id}
            className='shadow rounded-md p-4 w-full flex flex-col items-center'
          >
            <div className='animate-pulse space-y-4'>
              <div className='bg-slate-200 rounded-lg h-[40rem] w-[23rem]' />
              <div className='h-4 bg-slate-200 rounded w-3/4 mx-auto' />
              <div className='h-3 bg-slate-200 rounded w-1/2 mx-auto' />
              <div className='flex justify-center space-x-4'>
                <div className='h-8 bg-slate-200 rounded w-1/4' />
                <div className='h-8 bg-slate-200 rounded w-1/4' />
                <div className='h-8 bg-slate-200 rounded w-1/4' />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Loading;

import { Accordion } from '@/components/client';
import { Divider } from '@/components/server';

import MainSectionTitle from '../../../MainSectionTitle/MainSectionTitle';
import { MAIN_QUESTION_LIST } from './constants';

const MainQuestion = () => {
  return (
    <article className='flex flex-col gap-[4rem] grow-1 items-center'>
      <div className='w-full px-[1rem]'>
        <MainSectionTitle
          title='자주 묻는 질문'
          subTitle='자주 들어오는 질문입니다. 더 궁금한 점이 있다면 카카오톡채널을 이용해주세요!'
        />
      </div>

      <ul className='max-w-[40rem] laptop:max-w-full'>
        {MAIN_QUESTION_LIST.map(({ question, answer }) => (
          <>
            <Divider />

            <li key={question}>
              <Accordion
                type='main'
                buttonTitle={question}
              >
                <p className='text-size16 py-[1rem]'>
                  <strong className='pr-[1rem] font-semiBold'>A.</strong>
                  {answer}
                </p>
              </Accordion>
            </li>
          </>
        ))}

        <Divider />
      </ul>
    </article>
  );
};

export default MainQuestion;

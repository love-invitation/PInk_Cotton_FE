import { Suspense } from 'react';

import { MyInvitationList, ProfileBanner } from './components';

const ProfilePage = () => {
  return (
    <div>
      <ProfileBanner />
      <section className='py-[10rem] px-[15%]'>
        <Suspense fallback='...로딩 중'>
          <MyInvitationList />
        </Suspense>
      </section>
    </div>
  );
};

export default ProfilePage;

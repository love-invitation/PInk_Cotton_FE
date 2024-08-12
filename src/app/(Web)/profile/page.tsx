import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { MyInvitationList, ProfileBanner } from './components';
import Error from './error';
import Loading from './loading';

const ProfilePage = () => {
  return (
    <div>
      <ProfileBanner />
      <section className='py-[10rem] px-[15%]'>
        <ErrorBoundary FallbackComponent={Error}>
          <Suspense fallback={<Loading />}>
            <MyInvitationList />
          </Suspense>
        </ErrorBoundary>
      </section>
    </div>
  );
};

export default ProfilePage;

import { ErrorBoundary } from 'react-error-boundary';

import dynamic from 'next/dynamic';

import { ProfileBanner } from './components';
import Error from './error';
import Loading from './loading';

const MyInvitationList = dynamic(() => import('./components/MyInvitationList/MyInvitationList'), {
  ssr: false,
  loading: () => <Loading />,
});

const ProfilePage = () => {
  return (
    <div>
      <ProfileBanner />
      <section>
        <ErrorBoundary FallbackComponent={Error}>
          <MyInvitationList />
        </ErrorBoundary>
      </section>
    </div>
  );
};

export default ProfilePage;

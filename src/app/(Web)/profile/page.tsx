import { ErrorBoundary } from 'react-error-boundary';

import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { PROFILE_META_DATA } from '@/constants/MetaData';

import { ProfileBanner } from './components';
import Error from './error';
import Loading from './loading';

const MyInvitationList = dynamic(() => import('./components/MyInvitationList/MyInvitationList'), {
  ssr: false,
  loading: () => <Loading />,
});

export const metadata: Metadata = PROFILE_META_DATA;

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

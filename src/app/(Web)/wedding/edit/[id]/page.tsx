'use client';

import { QUERY_OPTIONS } from '@/constants';
import { InvitationResponse } from '@/types/response';
import { useQuery } from '@tanstack/react-query';

import { EditForm } from '../../_components';
import Loading from './loading';

const EditPage = ({ params }: { params: { id: string } }) => {
  const {
    data,
    isLoading: isLoadingInvitation,
    error: invitationError,
  } = useQuery<InvitationResponse>(QUERY_OPTIONS.INVITATION(params.id));
  const { data: imageFiles, isLoading: isLoadingImageFiles } = useQuery(
    QUERY_OPTIONS.CONVERT_IMAGE_FILE(data),
  );
  const isLoading = isLoadingInvitation || isLoadingImageFiles;

  if (invitationError) {
    throw invitationError;
  }

  if (isLoading || !imageFiles || !data) {
    return <Loading />;
  }

  const { coverImageFile, thumbnailImageFile, galleryImageFiles } = imageFiles;

  return (
    <EditForm
      invitation={data}
      coverImageFile={coverImageFile}
      thumbnailImageFile={thumbnailImageFile}
      galleryImageFiles={galleryImageFiles}
    />
  );
};

export default EditPage;

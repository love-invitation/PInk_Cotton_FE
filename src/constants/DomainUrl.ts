const DOMAIN_URL = {
  MAIN_IMAGE:
    'https://invitation-bucket.s3.ap-northeast-2.amazonaws.com/productInfo/sample_image.png',
  MAIN: '/',
  SERVICE: '/#service',
  PROFILE: '/profile',
  LOGIN: '/login',
  WEDDING_INVITATIONS: '/wedding/invitations',
  WEDDING_INVITATION: (id: string | number | bigint) => `/wedding/invitations/${id}`,
  WEDDING_PRODUCE: (id: string | number | bigint) => `/wedding/produce/${id}`,
  WEDDING_EDIT: (id: string | number | bigint) => `/wedding/edit/${id}`,
  WEDDING_PREVIEW: (id: string | number | bigint) => `/wedding/invite/${id}`,
  WEDDING_INVITE: (id: string | number) => `/wedding/invite/${id}`,
};

export default DOMAIN_URL;

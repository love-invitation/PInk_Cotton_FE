const DOMAIN_URL = {
  MAIN_IMAGE:
    'https://invitation-bucket.s3.ap-northeast-2.amazonaws.com/productInfo/sample_image.png',
  MAIN: '/',
  SERVICE: '/#service',
  PROFILE: '/profile',
  LOGIN: '/login',
  WEDDING_INVITATIONS: '/wedding/invitations',
  WEDDING_PRODUCE: '/wedding/invitations/produce',
  WEDDING_PREVIEW: (id: string | number) => `/wedding/preview/${id}`,
  WEDDING_INVITE: (id: string | number) => `/wedding/invite/${id}`,
};

export default DOMAIN_URL;

const ACCOUNT = {
  name: '',
  number: '',
};

const PERSON = {
  name: '',
  phone: '',
  account: { ...ACCOUNT },
  relation: '',
  father: { account: { ...ACCOUNT }, name: '', phone: '' },
  mother: { account: { ...ACCOUNT }, name: '', phone: '' },
};

const IMAGE_SECTION = {
  image: null,
  title: '',
  contents: '',
};

const INVITATION = {
  cover: { ...IMAGE_SECTION },
  thumbnail: { ...IMAGE_SECTION },
  article: {
    title: '',
    contents: '',
  },
  reservation: {
    date: '',
    type: '',
  },
  place: {
    name: '',
    detail: '',
    address: '',
  },
  transportation: [{ kind: '', detail: '' }],
  gallery: [],
  groom: { ...PERSON },
  bride: { ...PERSON },
  guestbookCheck: false,
  priority: {
    article: 0,
    weddingDate: 0,
    weddingPlace: 0,
    transport: 0,
    contact: 0,
    thumbnail: 0,
    gallery: 0,
    guestbook: 0,
    account: 0,
  },
};

export default {
  ACCOUNT,
  PERSON,
  IMAGE_SECTION,
  INVITATION,
};

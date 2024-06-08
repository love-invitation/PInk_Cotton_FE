const ACCOUNT = {
  name: '',
  number: '',
};

const PERSON = {
  name: '',
  account: { ...ACCOUNT },
  relation: '',
  father: { account: { ...ACCOUNT }, name: '', deceased: false },
  mother: { account: { ...ACCOUNT }, name: '', deceased: false },
};

const IMAGE_SECTION = {
  image: null,
  contents: '',
};

const CONTACTS = {
  groom: {
    name: '',
    phone: '',

    others: [{ relationship: '', name: '', phone: '' }],
  },
  bride: {
    name: '',
    phone: '',
    others: [{ relationship: '', name: '', phone: '' }],
  },
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
    time: '',
    type: true,
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
  contacts: { ...CONTACTS },
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
  CONTACTS,
};

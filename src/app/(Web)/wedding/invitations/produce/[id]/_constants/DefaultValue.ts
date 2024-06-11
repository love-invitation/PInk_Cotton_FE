const PERSON = {
  name: '',
  relation: '',
  father: { name: '', deceased: false },
  mother: { name: '', deceased: false },
};

const IMAGE_SECTION = {
  image: null,
  contents: '',
};

const CONTACTS = {
  groom: {
    name: '',
    phone: '',

    others: [],
  },
  bride: {
    name: '',
    phone: '',
    others: [],
  },
};

const ACCOUNTS = {
  groom: {
    bank: '',
    account: '',
    others: [],
  },
  bride: {
    bank: '',
    account: '',
    others: [],
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
  accounts: { ...ACCOUNTS },
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
  PERSON,
  IMAGE_SECTION,
  INVITATION,
  CONTACTS,
  ACCOUNTS,
};

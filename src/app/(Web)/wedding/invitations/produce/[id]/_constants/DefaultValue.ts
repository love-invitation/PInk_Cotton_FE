interface Parent {
  name: string;
  deceased: boolean;
}

interface Person {
  name: string;
  relation: string;
  father: Parent;
  mother: Parent;
}

interface ImageSection {
  image: File | null;
  contents: string;
}

interface ContactDetails {
  name: string;
  phoneNumber: string;
  others: { name: string; phoneNumber: string; relation: string }[];
}

interface Contacts {
  groom: ContactDetails;
  bride: ContactDetails;
}

interface AccountDetails {
  bankName: string;
  accountNumber: string;
  others: { name: string; bankName: string; accountNumber: string }[];
}

interface Accounts {
  groom: AccountDetails;
  bride: AccountDetails;
}

export interface Invitation {
  cover: ImageSection;
  thumbnail: ImageSection & { title: string };
  article: {
    title: string;
    contents: string;
  };
  reservation: {
    date: string;
    time: string;
    type: boolean;
  };
  place: {
    name: string;
    detail: string;
    address: string;
    lat: null | number;
    lng: null | number;
  };
  transportation: { kind: string; detail: string }[];
  gallery: File[];
  groom: Person;
  bride: Person;
  guestbookCheck: boolean;
  contacts: Contacts;
  accounts: Accounts;
  priority: { name: string; priority: number }[];
}

const PERSON: Person = {
  name: '',
  relation: '',
  father: { name: '', deceased: false },
  mother: { name: '', deceased: false },
};

const IMAGE_SECTION: ImageSection = {
  image: null,
  contents: '',
};

const CONTACTS: Contacts = {
  groom: {
    name: '',
    phoneNumber: '',
    others: [],
  },
  bride: {
    name: '',
    phoneNumber: '',
    others: [],
  },
};

const ACCOUNTS: Accounts = {
  groom: {
    bankName: '',
    accountNumber: '',
    others: [],
  },
  bride: {
    bankName: '',
    accountNumber: '',
    others: [],
  },
};

const INVITATION = {
  cover: { ...IMAGE_SECTION },
  thumbnail: { ...IMAGE_SECTION, title: '' },
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
    lat: null,
    lng: null,
  },
  transportation: [],
  gallery: [],
  groom: { ...PERSON },
  bride: { ...PERSON },
  guestbookCheck: false,
  contacts: { ...CONTACTS },
  accounts: { ...ACCOUNTS },
  priority: [
    { name: 'article', priority: 1 },
    { name: 'weddingDate', priority: 2 },
    { name: 'weddingPlace', priority: 3 },
    { name: 'transport', priority: 4 },
    { name: 'gallery', priority: 5 },
    { name: 'contact', priority: 6 },
    { name: 'account', priority: 7 },
    { name: 'thumbnail', priority: 8 },
    { name: 'guestbook', priority: 9 },
  ],
} satisfies Invitation;

export default {
  PERSON,
  IMAGE_SECTION,
  INVITATION,
  CONTACTS,
  ACCOUNTS,
};

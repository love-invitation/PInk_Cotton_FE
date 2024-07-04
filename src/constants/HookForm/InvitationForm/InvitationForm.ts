import { InvitationInput } from './InvitationForm.type';

const DEFAULT_VALUE = {
  cover: { image: null, contents: '' },
  thumbnail: { image: null, contents: '', title: '' },
  article: {
    title: '',
    contents: '',
  },
  booking: {
    date: '',
    time: '',
    dateType: true,
  },
  place: {
    name: '',
    detail: '',
    address: '',
    latitude: null,
    longitude: null,
  },
  transport: [{ kind: '', detail: '' }],
  gallery: [],
  groom: {
    name: '',
    relation: '',
    father: { name: '', deceased: false },
    mother: { name: '', deceased: false },
  },
  bride: {
    name: '',
    relation: '',
    father: { name: '', deceased: false },
    mother: { name: '', deceased: false },
  },
  guestbookCheck: false,
  contacts: {
    groom: [{ name: '', phoneNumber: '', relation: '' }],
    bride: [{ name: '', phoneNumber: '', relation: '' }],
  },
  accounts: {
    groom: [{ name: '', bankName: '', accountNumber: '' }],
    bride: [{ name: '', bankName: '', accountNumber: '' }],
  },
  priority: [
    { name: 'article', priority: 1 },
    { name: 'weddingDate', priority: 2 },
    { name: 'weddingPlace', priority: 3 },
    { name: 'transport', priority: 4 },
    { name: 'gallery', priority: 5 },
    { name: 'contact', priority: 6 },
    { name: 'account', priority: 7 },
    { name: 'thumbnail', priority: 8 },
  ],
} satisfies InvitationInput;

const LIMIT = {
  NAME: 10,
  COVER_CONTENTS: 20,
  RELATION: 5,
  PHONE_NUMBER: 11,
};

const INVITATION_FORM = {
  BASIC_OPTION: {
    defaultValues: DEFAULT_VALUE,
    mode: 'onSubmit' as const,
  },
  DEFAULT_VALUE,
  REGISTER_OPTION: {
    GROOM: {
      NAME: {
        required: '신랑 이름을 입력하세요',
        maxLength: {
          value: LIMIT.NAME,
          message: `신랑 이름을 ${LIMIT.NAME}글자 이내로 입력하세요`,
        },
      },
      RELATION: {
        required: false,
        maxLength: {
          value: LIMIT.RELATION,
          message: `관계를 ${LIMIT.RELATION}글자 이내로 입력하세요`,
        },
      },
      FATHER: {
        NAME: {
          required: false,
          maxLength: {
            value: LIMIT.NAME,
            message: `신랑 아버지의 이름을 ${LIMIT.NAME}글자 이내로 입력하세요`,
          },
        },
      },
      MOTHER: {
        NAME: {
          required: false,
          maxLength: {
            value: LIMIT.NAME,
            message: `신랑 어머니의 이름을 ${LIMIT.NAME}글자 이내로 입력하세요`,
          },
        },
      },
    },
    BRIDE: {
      NAME: {
        required: '신부 이름을 입력하세요',
        maxLength: {
          value: LIMIT.NAME,
          message: `신부 이름을 ${LIMIT.NAME}글자 이내로 입력하세요`,
        },
      },
      RELATION: {
        required: false,
        maxLength: {
          value: LIMIT.RELATION,
          message: `관계를 ${LIMIT.RELATION}글자 이내로 입력하세요`,
        },
      },
      FATHER: {
        NAME: {
          required: false,
          maxLength: {
            value: LIMIT.NAME,
            message: `신부 아버지의 이름을 ${LIMIT.NAME}글자 이내로 입력하세요`,
          },
        },
      },
      MOTHER: {
        NAME: {
          required: false,
          maxLength: {
            value: LIMIT.NAME,
            message: `신부 어머니의 이름을 ${LIMIT.NAME}글자 이내로 입력하세요`,
          },
        },
      },
    },
    COVER: {
      CONTENTS: {
        required: '표지 설명을 입력하세요',
        maxLength: {
          value: LIMIT.COVER_CONTENTS,
          message: `표지 설명을 ${LIMIT.COVER_CONTENTS}글자 이내로 입력하세요`,
        },
      },
      IMAGE: {
        type: 'custom',
        message: '이미지를 업로드해주세요',
      },
    },
    BOOKING: {
      DATE: {
        required: '예약 날짜를 입력하세요',
      },
      TIME: {
        required: '예약 시간을 입력하세요',
      },
    },
    PLACE: {
      NAME: {
        required: '예식장 이름을 입력하세요',
      },
      DETAIL: {
        required: '예식장 장소 상세 설명 입력하세요',
      },
      ADDRESS: {
        required: '예식장 주소를 입력하세요',
      },
    },
    THUMBNAIL: {
      title: {
        required: '썸네일 제목을 입력하세요',
      },
      CONTENTS: {
        required: '썸네일 내용을 입력하세요',
      },
      IMAGE: {
        type: 'custom',
        message: '이미지를 업로드해주세요',
      },
    },
    ARTICLE: {
      TITLE: {
        required: '모시는 글 제목을 입력하세요',
      },
      CONTENTS: {
        type: 'custom',
        message: '모시는 글 내용을 입력하세요',
      },
    },
    CONTACT: {
      GROOM: {
        RELATION: {
          required: '관계를 입력하세요',
          maxLength: {
            value: LIMIT.RELATION,
            message: `관계를 ${LIMIT.RELATION}글자 이내로 입력하세요`,
          },
        },
        NAME: {
          required: '이름을 입력하세요',
          maxLength: {
            value: LIMIT.NAME,
            message: `이름을 ${LIMIT.NAME}글자 이내로 입력하세요`,
          },
        },
        PHONE_NUMBER: {
          required: '전화번호를 입력하세요',
          maxLength: {
            value: LIMIT.PHONE_NUMBER + 2,
            message: `전화번호를 ${LIMIT.PHONE_NUMBER}글자 이내로 입력하세요`,
          },
        },
      },
      BRIDE: {
        RELATION: {
          required: '관계를 입력하세요',
          maxLength: {
            value: LIMIT.RELATION,
            message: `관계를 ${LIMIT.RELATION}글자 이내로 입력하세요`,
          },
        },
        NAME: {
          required: '이름을 입력하세요',
          maxLength: {
            value: LIMIT.NAME,
            message: `이름을 ${LIMIT.NAME}글자 이내로 입력하세요`,
          },
        },
        PHONE_NUMBER: {
          required: '전화번호를 입력하세요',
          maxLength: {
            value: LIMIT.PHONE_NUMBER + 2,
            message: `전화번호를 ${LIMIT.PHONE_NUMBER}글자 이내로 입력하세요`,
          },
        },
      },
    },
    TRANSPORT: {
      KIND: {
        required: '교통수단을 입력하세요',
      },
      DETAIL: {
        required: '가는 방법을 입력하세요',
      },
    },
    ACCOUNTS: {
      GROOM: {
        NAME: {
          required: '이름을 입력하세요',
          maxLength: {
            value: LIMIT.NAME,
            message: `이름을 ${LIMIT.NAME}글자 이내로 입력하세요`,
          },
        },
        BANK_NAME: {
          required: '은행명을 입력하세요',
        },
        ACCOUNT_NUMBER: {
          required: '계좌번호를 입력하세요',
        },
      },
      BRIDE: {
        NAME: {
          required: '이름을 입력하세요',
          maxLength: {
            value: LIMIT.NAME,
            message: `이름을 ${LIMIT.NAME}글자 이내로 입력하세요`,
          },
        },
        BANK_NAME: {
          required: '은행명을 입력하세요',
        },
        ACCOUNT_NUMBER: {
          required: '계좌번호를 입력하세요',
        },
      },
    },
  },
};

export default INVITATION_FORM;

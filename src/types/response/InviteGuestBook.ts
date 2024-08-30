export interface GuestBookContent {
  id: number;
  name: string;
  message: string;
  created: string;
}

export interface GuestBookPageAble {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface GuestBookComments {
  content: GuestBookContent[];
  pageable: GuestBookPageAble;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  empty: boolean;
}

export interface GuestBook {
  status: number;
  result: GuestBookComments;
}

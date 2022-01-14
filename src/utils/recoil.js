import { atom } from 'recoil';

export const searchInput = atom({
    key: 'searchInput',
    default: '',
  });

  export const planetList = atom({
    key: 'planetList',
    default: [],
  });

  export const searchResults = atom({
    key: 'searchResults',
    default: {},
  });
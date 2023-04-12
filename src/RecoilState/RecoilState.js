import { atom } from 'recoil';

export const searchTextState = atom({
  key: 'searchTextState',
  default: ' ',
});

export const parkinglotListState = atom({
  key: 'listState',
  default: '',
});

export const isListOpen = atom({
  key: 'isListOpen',
  default: false,
});

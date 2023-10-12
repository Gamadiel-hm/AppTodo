import { SortTitle } from '../enums/enumSort';

export interface TodoList {
  name: string;
  lastName: string;
  age: string;
  password: string;
  gender: string;
  nationality: string;
  $id: number;
}

export const todoInit: TodoList = {
  name: '',
  lastName: '',
  age: '',
  gender: '',
  nationality: '',
  password: '',
  $id: 0,
};

export interface ObjectSortTitles {
  afterTitle: SortTitle;
  beforeTitle: SortTitle;
}

export const initSortTitles: ObjectSortTitles = {
  afterTitle: SortTitle.default,
  beforeTitle: SortTitle.default,
};

import debounce from 'lodash.debounce';
import { v4 as uuidv4 } from 'uuid';
import { notelityText } from '../../../global/constants/constants';
import { Notes } from './types';

export const defaultNote = () => {
  return {
    heading: 'New Note',
    note: '',
    id: uuidv4(),
    lastUpdatedTimestamp: new Date().getTime(),
    createdTimestamp: new Date().getTime(),
  };
};

export const offlineCacheSync = debounce((notes: Notes[]) => {
  localStorage.setItem(notelityText, JSON.stringify(notes));
}, 2000);

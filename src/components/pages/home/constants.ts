import { v4 as uuidv4 } from 'uuid';

export const defaultNote = () => {
  return {
    heading: 'New Note',
    note: '',
    id: uuidv4(),
  };
};

import React from 'react';
import { Notes } from './types';

export interface NoteContextProp {
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const NoteContext = React.createContext<NoteContextProp | undefined>(undefined!);

export const NoteProvider = NoteContext.Provider;
export const NoteConsumer = NoteContext.Consumer;

export default NoteContext;

import './style.scss';
import { Notes } from '../../pages/home/types';
import React, { useEffect, useRef } from 'react';
import { deepJsonCopy } from '../../../global/utils/miscellaneous';

interface Props {
  notes: Notes[];
  activeIdx: number;
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const Note: React.FC<Props> = ({ notes, setNotes, activeIdx }: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null!);

  useEffect(() => {
    if (inputRef?.current) {
      const { note } = notes[activeIdx];
      const { length } = note;
      focusElement(inputRef, length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  function focusElement(inputRef: React.MutableRefObject<any>, length: number) {
    inputRef.current.focus();
    if (length) inputRef.current.setSelectionRange(length, length);
  }

  function updateNote(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = e.target;
    const newNotes = deepJsonCopy(notes);
    newNotes[activeIdx].note = value;
    setNotes(newNotes);
  }

  function getNoteText() {
    return notes.length >= activeIdx ? notes[activeIdx]?.note : '';
  }

  return (
    <div className="note-holder">
      <textarea className="notes" value={getNoteText()} ref={inputRef} onChange={updateNote} />
    </div>
  );
};

export default Note;

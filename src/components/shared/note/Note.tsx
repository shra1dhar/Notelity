import './style.scss';
import { Notes } from '../../pages/home/types';
import React, { useEffect, useRef } from 'react';

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
      inputRef.current.focus();
      if (length) inputRef.current.setSelectionRange(length, length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  function updateNote(e: React.ChangeEvent<HTMLTextAreaElement>) {
    notes[activeIdx].note = e.target.value;
    setNotes([...notes]);
  }

  return (
    <div className="note-holder">
      <textarea className="notes" value={notes[activeIdx].note} ref={inputRef} onChange={updateNote} />
    </div>
  );
};

export default Note;

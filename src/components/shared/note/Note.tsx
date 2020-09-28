import './style.scss';
// import { v4 as uuidv4 } from 'uuid';
import debounce from 'lodash.debounce';
import NoteContext, { NoteContextProp } from '../../pages/home/NoteContext';
import React, { useContext, useEffect, useRef, useState } from 'react';

interface Props {
  activeIdx: number;
}

const Note: React.FC<Props> = ({ activeIdx }: Props) => {
  const { notes, setNotes } = useContext<NoteContextProp | undefined>(NoteContext);
  const updateNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);
  const getNote = () => localStorage.getItem(notes[activeIdx].id) || notes[activeIdx]?.note || '';
  const [text, setText] = useState<string>(getNote());
  const inputRef = useRef<HTMLTextAreaElement>(null!);

  useEffect(() => {
    // const browserSyncTimeout = 2000;
    const contextUpdateTimeout = 1000;
    // const getId = () => notes[activeIdx].id || uuidv4();
    const updateContext = debounce(() => {
      notes = [...notes];
      // notes[activeIdx].note = text
    }, contextUpdateTimeout);
    // const updateCache = debounce(() => localStorage.setItem(getId(), text), browserSyncTimeout);
    updateContext();
    // updateCache();
  }, [text, activeIdx, notes]);

  useEffect(() => {
    if (inputRef?.current && notes[activeIdx].note === '') inputRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="note-holder">
      <textarea className="notes" value={text} ref={inputRef} onChange={updateNote} />
    </div>
  );
};

export default Note;

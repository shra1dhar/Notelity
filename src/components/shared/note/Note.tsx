import './style.scss';
// import { v4 as uuidv4 } from 'uuid';
import debounce from 'lodash.debounce';
import NoteContext, { NoteContextProp } from '../../pages/home/NoteContext';
import React, { useContext, useEffect, useRef, useState } from 'react';

interface Props {
  activeIdx: number;
}

const Note: React.FC<Props> = ({ activeIdx }: Props) => {
  const contextUpdateTimeout = 100;
  const { notes, setNotes } = useContext<NoteContextProp>(NoteContext);
  const updateNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);
  const getNote = () => localStorage.getItem(notes[activeIdx]?.id) || notes[activeIdx]?.note || '';
  const [text, setText] = useState<string>(getNote());
  const inputRef = useRef<HTMLTextAreaElement>(null!);

  const updateContext = debounce(function () {
    if (notes[activeIdx]) {
      notes[activeIdx].note = text;
      setNotes([...notes]);
    }
  }, contextUpdateTimeout);

  useEffect(() => {
    if (inputRef?.current && notes[activeIdx].note === '') inputRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setText(notes[activeIdx]?.note);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  useEffect(() => {
    // const getId = () => notes[activeIdx].id || uuidv4();
    updateContext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, notes]);

  return (
    <div className="note-holder">
      <textarea className="notes" value={text} ref={inputRef} onChange={updateNote} />
    </div>
  );
};

export default Note;

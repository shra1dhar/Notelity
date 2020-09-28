import React, { useEffect, useState } from 'react';
import Note from '../../shared/note/Note';
import Sidebar from '../../shared/Sidebar/Sidebar';
import { defaultNote } from './constants';
import './home.scss';
import { NoteProvider } from './NoteContext';
import { Notes } from './types';

const Home = () => {
  const [notes, setNotes] = useState<Notes[]>([defaultNote()]);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  // const notes = useContext(NoteContext);

  useEffect(() => {
    // api call to update context
  }, []);

  return (
    <div className="home">
      <NoteProvider value={{ notes, setNotes }}>
        <Sidebar {...{ activeIdx, setActiveIdx }} />
        <Note {...{ activeIdx }} />
      </NoteProvider>
    </div>
  );
};

export default Home;

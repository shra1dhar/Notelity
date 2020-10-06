import './home.scss';
import { Notes } from './types';
import Note from '../../shared/note/Note';
import Sidebar from '../../shared/Sidebar/Sidebar';
import React, { useEffect, useState } from 'react';
import { defaultNote, offlineCacheSync } from './constants';
import { notelityText } from '../../../global/constants/constants';

const Home = () => {
  const [notes, setNotes] = useState<Notes[]>(getSynchedNotes());
  const [activeIdx, setActiveIdx] = useState<number>(0);

  useEffect(() => {
    // api call to update context
  }, []);

  useEffect(() => {
    offlineCacheSync(notes);
  }, [notes]);

  function getSynchedNotes() {
    let notes = [defaultNote()];
    try {
      notes = JSON?.parse(localStorage.getItem(notelityText) || '');
    } catch (e) {
      // console.log('Error while parsing');
    }
    return notes;
  }

  return (
    <div className="home">
      {/* <NoteProvider value={{ notes, setNotes }}> */}
      <Sidebar {...{ activeIdx, setActiveIdx, notes, setNotes }} />
      <Note {...{ activeIdx, notes, setNotes }} />
      {/* </NoteProvider> */}
    </div>
  );
};

export default Home;

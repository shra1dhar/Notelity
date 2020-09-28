import React, { useEffect, useState } from 'react';
import Note from '../../shared/note/Note';
import Sidebar from '../../shared/Sidebar/Sidebar';
import { defaultNote } from './constants';
import './home.scss';
import debounce from 'lodash.debounce';
import { NoteProvider } from './NoteContext';
import { Notes } from './types';
import { notelityText } from '../../../global/constants/constants';

const Home = () => {
  const [notes, setNotes] = useState<Notes[]>(getSynchedNotes());
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const syncCache = debounce(() => localStorage.setItem(notelityText, JSON.stringify(notes)), 2000);

  useEffect(() => {
    // api call to update context
  }, []);

  useEffect(() => {
    syncCache();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notes]);

  function getSynchedNotes() {
    let notes = [defaultNote()];
    try {
      notes = JSON?.parse(localStorage.getItem(notelityText) || '');
    } catch (e) {
      console.log('Error while parsing');
    }
    return notes;
  }

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

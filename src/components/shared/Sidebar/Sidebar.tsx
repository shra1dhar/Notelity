import './sidebar.scss';
import Button from '../form/Button';
import React, { useContext } from 'react';
import ShowMoreText from '../others/ShowMoreText';
import NoteContext from '../../pages/home/NoteContext';
import { defaultNote } from '../../pages/home/constants';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export interface Props {
  activeIdx: number;
  setActiveIdx: (noteIndex: number) => void;
}

const Sidebar = ({ activeIdx, setActiveIdx }: Props) => {
  const { notes, setNotes } = useContext(NoteContext);
  const getactiveIdx = (idx: number) => (idx === activeIdx ? ' active' : '');
  const deleteNote = (idx: number) => console.log('Deleted');
  const addNote = (e: React.SyntheticEvent) => {
    const newIndex = activeIdx + 1;
    setActiveIdx(newIndex);
    setNotes([...notes, defaultNote()]);
  };

  return (
    <div className="sidebar">
      <h2>All Notes</h2>
      <div className="options">
        <Button onClick={addNote}>New</Button>
      </div>

      <div>
        {notes.map((val, idx) => (
          <div key={val.id} onClick={() => setActiveIdx(idx)} className={`side-items${getactiveIdx(idx)}`}>
            {val.heading}
            <span className="icons">
              <FontAwesomeIcon onClick={() => deleteNote(idx)} icon={faTrash} />
            </span>
            <p>
              <ShowMoreText inpString={val.note} trimAt={80} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

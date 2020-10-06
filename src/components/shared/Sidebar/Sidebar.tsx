import './sidebar.scss';
import React from 'react';
import Button from '../form/button/Button';
import { Notes } from '../../pages/home/types';
import ShowMoreText from '../others/ShowMoreText';
import { defaultNote } from '../../pages/home/constants';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFormattedTime, localeTimeString } from '../../../global/utils/date';

export interface Props {
  activeIdx: number;
  setActiveIdx: (noteIndex: number) => void;
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const Sidebar = ({ activeIdx, setActiveIdx, notes, setNotes }: Props) => {
  // const { notes, setNotes } = useContext(NoteContext);
  const getactiveIdx = (idx: number) => (idx === activeIdx ? ' active' : '');

  function addNote(e: React.SyntheticEvent) {
    const newIndex = activeIdx + 1;
    setActiveIdx(newIndex);
    setNotes([...notes, defaultNote()]);
  }

  function selectNote(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const index = Number(e.currentTarget.getAttribute('data-index'));
    setActiveIdx(index);
  }

  function editNote(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {}

  function deleteNote(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    const index = Number(e.currentTarget.getAttribute('data-index'));
    setNotes([...notes.slice(1, index), ...notes.splice(index + 1, notes.length)]);
  }

  return (
    <div className="sidebar">
      <h2>All Notes</h2>
      <div className="options">
        <Button title="Add New Note" onClick={addNote}>
          New
        </Button>
      </div>

      <div>
        {notes.map((val, idx) => (
          <div key={val.id} data-index={idx} onClick={selectNote} className={`side-items${getactiveIdx(idx)}`}>
            {val.heading}
            {'      '}
            <FontAwesomeIcon
              onClick={editNote}
              className="edit"
              data-index={idx}
              title="Edit Note"
              icon={faPencilAlt}
            />
            <span className="icons">
              <FontAwesomeIcon
                onClick={deleteNote}
                className="delete"
                data-index={idx}
                title="Delete Note"
                icon={faTrash}
              />
            </span>
            <p>
              <ShowMoreText inpString={val.note} trimAt={65} />
            </p>
            <div className="created-time">
              <span>{localeTimeString(val.createdTimestamp)}</span>
              <span>{getFormattedTime(val.createdTimestamp)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

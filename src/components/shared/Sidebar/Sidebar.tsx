import './sidebar.scss';
import React from 'react';
import Button from '../form/button/Button';
import { Notes } from '../../pages/home/types';
import ShowMoreText from '../others/ShowMoreText';
import { defaultNote } from '../../pages/home/constants';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InlineInput from '../form/inline_input/InlineInput';
import { deepJsonCopy } from '../../../global/utils/miscellaneous';
import { getFormattedTime, localeTimeString } from '../../../global/utils/date';

export interface Props {
  activeIdx: number;
  setActiveIdx: (noteIndex: number) => void;
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

const Sidebar = ({ activeIdx, setActiveIdx, notes, setNotes }: Props) => {
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

  function editNote(inputVal: string, shouldSave: boolean) {
    if (shouldSave) {
      const newNotes = deepJsonCopy(notes);
      newNotes[activeIdx].heading = inputVal;
      setNotes(newNotes);
    }
  }

  function deleteNote(e: React.BaseSyntheticEvent) {
    e.stopPropagation();
    const el = e.target.closest('.side-items');
    const isActive: boolean = el.classList.contains('active');
    const index = Number(e.currentTarget.getAttribute('data-index'));
    if (notes.length === 1) return;
    if (isActive) {
      setActiveIdx(Math.max(0, index - 1));
    }
    setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
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
            <InlineInput savedText={editNote} data-index={idx} text={val.heading} />
            <span className="delete">
              <FontAwesomeIcon onClick={deleteNote} data-index={idx} title="Delete Note" icon={faTrash} />
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

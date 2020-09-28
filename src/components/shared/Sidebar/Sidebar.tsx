import React, { useContext } from 'react';
import NoteContext from '../../pages/home/NoteContext';
import Button from '../form/Button';
import ShowMoreText from '../others/ShowMoreText';
import './sidebar.scss';

export interface Props {
  activeIdx: number;
  setActiveIdx: (noteIndex: number) => void;
}

const Sidebar = ({ activeIdx }: Props) => {
  const context = useContext(NoteContext);
  const getactiveIdx = (idx: number) => (idx === activeIdx ? ' active' : '');

  return (
    <div className="sidebar">
      <h2>All Notes</h2>
      <div className="options">
        <Button>New</Button>
      </div>

      <div>
        {context.map((val, idx) => (
          <div className={`side-items${getactiveIdx(idx)}`}>
            {val.heading}
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

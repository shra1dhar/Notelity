import './inline_edit.scss';
import React, { FC, useEffect, useRef, useState } from 'react';
import { faCheck, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  text: string;
  mapKey?: number | string;
  className?: string | undefined;
  savedText?: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined;
}

const InlineInput: FC<Props> = ({ text, mapKey, className = '', onClick }: Props) => {
  const [isEditing, setEdit] = useState<boolean>(false);
  const [tempInput, setTempInput] = useState<string>(text);
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (isEditing && inputRef?.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(text.length, text.length);
    } else if 
  }, [isEditing]);

  return (
    <span className="inline-edit" key={mapKey}>
      {isEditing ? (
        <>
          <input
            ref={inputRef}
            value={tempInput}
            className="form-input"
            onChange={(e) => setTempInput(e.target.value)}
          ></input>
          <FontAwesomeIcon className="check-icon" onClick={() => setEdit(!isEditing)} icon={faCheck} />
        </>
      ) : (
        <>
          {text}
          <FontAwesomeIcon className="edit-icon" onClick={() => setEdit(true)} icon={faPencilAlt} />
        </>
      )}
    </span>
  );
};

export default InlineInput;

import './inline_edit.scss';
import React, { FC, useEffect, useRef, useState } from 'react';
import { faCheck, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  text: string;
  mapKey?: number | string;
  className?: string | undefined;
  savedText: (inputVal: string, shouldSave: boolean) => void;
}

const InlineInput: FC<Props> = ({ text, mapKey, className = '', savedText }: Props) => {
  const [isEditing, setEdit] = useState<boolean>(false);
  const [tempInput, setTempInput] = useState<string>(text);
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (isEditing && inputRef?.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(text.length, text.length);
    }
  }, [isEditing]);

  function saveTempInput() {
    savedText(tempInput, true);
    setEdit(false);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTempInput(e.target.value);
  }

  // function handleInputBlur(e: React.FocusEvent<HTMLInputElement>) {
  //   setEdit(false);
  // }

  return (
    <span className={`inline-edit ${className}`} key={mapKey}>
      {isEditing ? (
        <>
          <input
            ref={inputRef}
            value={tempInput}
            className="form-input"
            onChange={handleInputChange}
            // onBlur={handleInputBlur}
          />
          <FontAwesomeIcon className="check-icon" onClick={saveTempInput} icon={faCheck} />
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

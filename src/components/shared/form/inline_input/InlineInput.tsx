import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';

interface Props {
  title: string;
  mapKey?: number | string;
  className?: string | undefined;
  onClick?: ((event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void) | undefined;
}

const InlineInput: FC<Props> = ({ title, mapKey, className = '', onClick }: Props) => {
  return (
    <>
      {title}
      <FontAwesomeIcon {...{ className, onClick }} key={mapKey} icon={faPencilAlt} />
    </>
  );
};

export default InlineInput;

import React, { useEffect, useState } from 'react';

type Mode = 'readonly' | 'expandable';
interface Props {
  inpString: string;
  trimAt: number;
  mode?: Mode;
}

const ShowMoreText: React.FC<Props> = ({ inpString, trimAt, mode = 'readonly' }: Props) => {
  const bufferString = '...';
  const [isTruncated, truncate] = useState(true);
  const [truncatedStr, setTruncate] = useState(inpString);

  useEffect(() => {
    const truncation = inpString.slice(0, trimAt) + bufferString;
    setTruncate(truncation);
  }, [inpString, trimAt]);

  if (!inpString) {
    return null;
  } else if (inpString.length < trimAt) {
    return <>{inpString}</>;
  }

  const show = <span onClick={() => truncate(!isTruncated)}>{isTruncated ? 'Show more' : 'Show less'}</span>;

  return (
    <>
      {isTruncated ? truncatedStr : inpString}
      {mode === 'expandable' && show}
    </>
  );
};

export default ShowMoreText;

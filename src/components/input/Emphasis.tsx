import { useState, useEffect } from "react";

export default function Emphasis({ showEmphasis }) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    showEmphasis(value);
  }, [value, showEmphasis]);

  const handClick = () => {
    setValue((prevValue) => !prevValue);
  };

  return <p onClick={handClick}>Emphasis</p>;
}

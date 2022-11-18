import React from "react";

const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = React.useState(initialValue);

  const toggle = () => setValue(!value);

  return [value, toggle];
};

export default useToggle;

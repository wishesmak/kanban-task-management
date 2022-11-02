import { useState, useCallback } from "react";

function useToggle(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback((): void => setValue(value => !value), []);

  return [value, toggle];
}

export default useToggle;

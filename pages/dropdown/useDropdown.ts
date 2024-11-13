import { useEffect, useRef, useState } from 'react';

function useDropdown<T>(initialState: T) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<T>(initialState);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside as EventListener);
    document.addEventListener('touchstart', handleClickOutside as EventListener);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside as EventListener);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
    };
  }, []);

  const handleOptionClick = (value: T) => {
    setSelectedValue(value);
    console.log(selectedValue);
    setIsOpen(false);
  };

  return { ref, isOpen, setIsOpen, selectedValue, handleOptionClick };
}

export default useDropdown;
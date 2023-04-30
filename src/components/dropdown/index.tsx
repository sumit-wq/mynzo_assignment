import React, { useState, useRef, useEffect } from "react";
import { BookmarkIcon } from "../../assets/icons/bookmarkIcon";
import "./dropdown.css";

interface Option {
  title: string;
  url: string;
  urlToImage: string;
}

interface Props {
  options: Option[];
  //   onSelectedOptionChange: (option: Option) => void;
}

const Dropdown: React.FC<Props> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleOptionClick = (option: Option) => {
    // onSelectedOptionChange(option);
    setIsOpen(false);
    window.location.href = `${option.url}`;
  };

  return (
    <div className="dropdown" ref={ref}>
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        <BookmarkIcon />
        <span>Bookmarked</span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option.url} onClick={() => handleOptionClick(option)}>
              <img src={option.urlToImage} alt="option" />
              <span>{option.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

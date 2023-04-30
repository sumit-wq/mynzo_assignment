import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Dropdown from "../dropdown";
import SearchBar from "../searchbar";
import "./navbar.css";

interface INavbar {
  handleSearch: (arg: string) => void;
  handleNewsType: (arg: string) => void;
}

const Navbar = (props: INavbar) => {
  const [bookmarked] = useLocalStorage("bookmarked", []);
  const [selectedNewsType, setSelectedNewsType] =
    React.useState<string>("everything");
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedNewsType(event.target.value);
  };

  React.useEffect(() => {
    props.handleNewsType(selectedNewsType);
  }, [selectedNewsType]);

  return (
    <nav className="navbar">
      <div className="logo">
        <h3>MYNZO NEWS</h3>
      </div>
      <div className="radio-container">
        <input
          type="radio"
          name="newsType"
          value="everything"
          id="everything"
          onChange={radioHandler}
          checked={selectedNewsType === "everything"}
        />
        <label htmlFor="coffee">Everything</label>
        <input
          type="radio"
          name="newsType"
          value="top-headlines"
          id="top-headlines"
          onChange={radioHandler}
          checked={selectedNewsType === "top-headlines"}
        />
        <label htmlFor="tea">Top-headlines</label>
      </div>
      <div className="search-container">
        <SearchBar onSearch={props.handleSearch} />
      </div>
      <div className="bookmarked">
        <Dropdown options={bookmarked} />
      </div>
    </nav>
  );
};

export default Navbar;

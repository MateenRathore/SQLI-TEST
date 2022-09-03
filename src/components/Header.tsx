import "./Header.css";
import {useContext} from "react";
import {contextName} from "../App";

const Header = () => {
    const { title } = useContext(contextName);
  return (
    <header>
      <h1>SQLI Frontend code test</h1>
      First dog breed: {title}?
    </header>
  );
};

export default Header;

import "./header.scss";

import logo from "/favicon.svg?url";

export default function Header() {
  return (
    <header className="top">
      <nav>
        <img src={logo} className="logo" />
        <ul className="nav-list">
          <li>
            <a href="#top" className="nav-link">
              Top
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#background" className="nav-link">
              Background
            </a>
          </li>
          <li>
            <a href="#works" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

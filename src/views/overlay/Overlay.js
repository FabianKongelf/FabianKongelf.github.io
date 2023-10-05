import React from 'react';
import './Overlay.css';

function Overlay({pageCount, antPages})  {
  return (
    <div className="Overlay">
      <header className="Overlay-header">
        <a 
          className="Overlay-link"
          href="http://fabiankongelf.github.io/"
        >
          Fabian Kongelf
        </a>
      </header>

      <aside className="Overlay-pagecounter">
        <p>
          {pageCount} / {antPages}
        </p>
      </aside>

      <footer className="Overlay-footer">
        <ul>
          <li>
            <a 
              className="Overlay-sosials"
              href="https://github.com/FabianKongelf"
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              className="Overlay-sosials"
              href="https://www.linkedin.com/in/fabian-kongelf-4965b7242/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a 
              className="Overlay-sosials"
              href="https://www.instagram.com/"
            >
              Instagram
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Overlay;

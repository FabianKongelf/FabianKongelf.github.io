import './Overlay.css';

function Overlay(pagecounter = 1, antpages = 5)  {
  return (
    <div className="App">
      <header className="App-header">
        <a 
          className="App-link"
          href="http://fabiankongelf.github.io/"
        >
          Fabian Kongelf
        </a>

        <p className="App-pagecounter">
          {pagecounter} / {antpages}
        </p>
      </header>

      <footer className="App-footer">
        <ul>
          <li>
            <a 
              className="App-sosials"
              href="#"
            >
              GitHub
            </a>
          </li>
          <li>
            <a 
              className="App-sosials"
              href="#"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a 
              className="App-sosials"
              href="#"
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

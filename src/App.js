import { useState } from 'react';

import Overlay from './views/Overlay/Overlay';
import './App.css';

function App() {
  const [pageCount, setPageCount] = useState(1)

  return (
    <div className="App">
      <Overlay
        pageCount={pageCount}
        antPages={Number(5)}
      ></Overlay>
    </div>
  );
}

export default App;

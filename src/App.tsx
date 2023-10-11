import React, { useState } from 'react';

import './App.css';
import Overlay from './views/overlay/Overlay';
import Intro from './views/0.Intro/intro';

const App = ():React.JSX.Element => {
  const [pageCount, setPageCount] = useState("1")

  return (
    <div className="App">
      <Overlay
        pageCount={pageCount}
        antPages={"5"}
      ></Overlay>

      <Intro></Intro>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

import Routes from './Routes';
import { MediaStreamContext } from './MediaStreamContext';

function InteractionGuard({ children }) {
  const [ ready, setReady ] = React.useState(true);

  if(ready) {
    return children;
  }

  const onClick = (e) => {
    e.stopPropagation();

    setReady(true);
  };

  return <h1 onClick={onClick}>click me</h1>
}

function App() {
  return (
    <InteractionGuard>
    <MediaStreamContext.DefaultProvider>
      <Routes></Routes>
    </MediaStreamContext.DefaultProvider>
    </InteractionGuard>
  );
}

export default App;

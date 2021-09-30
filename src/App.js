import { useEffect } from 'react';

import { Logo } from './components';
import { Content } from './pages';
import colours from './data/colours';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = colours.background;
    document.body.style.fontFamily = 'Roboto, sans-serif';
  });
  return (
    <>
      <Logo></Logo>
      <Content></Content>
    </>
  );
}

export default App;

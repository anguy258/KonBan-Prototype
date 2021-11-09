import React from 'react';
import './assets/main.css'
import Nav from './components/Nav'
import SignBoard from './components/SignBoard/SignBoard'
import ClipBoard from './components/ClipBoard/ClipBoard'
import CollaboratorList from './components/CollaboratorList/CollaboratorList'
import useDarkMode from './hooks/useDarkMode'

function App() {
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <div className="App flex flex-col bg-gradient-img dark:bg-gradient-img-dark w-screen h-screen">
      <Nav colorTheme={colorTheme} setTheme={setTheme}/>
      <div className="flex mx-auto space-x-3 justify-evenly h-full max-h-[90%] w-full py-3 px-5">
        <ClipBoard/>
        <SignBoard/>
        <CollaboratorList/>
      </div>
    </div>
  );
}

export default App;
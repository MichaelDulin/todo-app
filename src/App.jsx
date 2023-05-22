import React from 'react';
import SettingsProvider from './Context/Settings';
import Todo from './Components/Todo';
import NavBar from './Components/NavBar';
import Settings from './Components/Settings'

export default function App() {
  let component;
  switch(window.location.pathname){
    case '/':
      component = <Todo/>
      break
    case '/settings':
      component = <Settings/>
      break
    default:
      component = <Todo/>
  }

  return (
    <SettingsProvider>
      <NavBar />
      {component}
    </SettingsProvider>
  );
}
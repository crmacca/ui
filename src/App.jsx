import React, { useEffect, useState } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    let darkmodeSetting = localStorage.getItem('darkmode') || null
    if (darkmodeSetting === 'true') {
      toggleDark(true)
    } else if(darkmodeSetting === null) {
      localStorage.setItem('darkmode', true)
      toggleDark(true)
    }
  }, [])

  const toggleDark = () => {
    if (darkMode) {
      localStorage.setItem('darkmode', false)
      setDarkMode(false)
    } else {
      localStorage.setItem('darkmode', true)
      setDarkMode(true)
    }
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage darkMode={darkMode} toggleDark={toggleDark}/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

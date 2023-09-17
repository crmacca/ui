import React, { useEffect, useState } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage';

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
      element: <LandingPage darkMode={darkMode} toggleDark={toggleDark} />,
      errorElement: <ErrorPage darkMode={darkMode} toggleDark={toggleDark} />
    }
  ])

  return (
    <div className={`App min-h-screen min-w-screen duration-200 ${darkMode ? 'text-white bg-zinc-900' : 'text-zinc-900 bg-white'}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

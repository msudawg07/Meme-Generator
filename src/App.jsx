import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/Head'
import Main from './components/Main'

function App() {

  return (
    <div className="appBorder">
      <Head />
      <Main />
    </div>
  )
}

export default App

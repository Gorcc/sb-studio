import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Portfolio />

      <Contact />
    </>
  );
}

export default App

import { useState } from 'react'
import One from "./components/one";
import Two from "./components/two";
import Three from "./components/three";
import './App.scss';

function App() {
  const [show, setShow] = useState('one')

  // clean this up you idiot
  const handleClick = (link) => {
    setShow(link)
  }

  return (
    <>
      {show === 'one' && (
        <>
          <div className="btn-wrap">
            <button className="button">LEFT</button>
            <button className="button" onClick={() => handleClick('two')}>RIGHT</button>
          </div>
          <One />
        </>
      )}
      {show === 'two' && (
        <>
          <div className="btn-wrap">
            <button className="button" onClick={() => handleClick('one')}>LEFT</button>
            <button className="button" onClick={() => handleClick('three')}>RIGHT</button>
          </div>
          <Two />
        </>
      )}
      {show === 'three' && (
        <>
          <div className="btn-wrap">
            <button className="button" onClick={() => handleClick('two')}>LEFT</button>
            <button className="button">RIGHT</button>
          </div>
          <Three />
        </>
      )}
    </>
  );
}

export default App;

import { useState } from 'react'
import One from "./components/one";
import Two from "./components/two";
import Three from "./components/three";
import './App.scss';

function App() {
  const [show, setShow] = useState('one')

  const handleRightOne = () => {
    setShow('two')
  }

  const handleRightTwo = () => {
    setShow('three')
  }

  const handleLeftTwo = () => {
    setShow('one')
  }

  const handleLeftThree = () => {
    setShow('two')
  }

  return (
    <>
      {show === 'one' && (
        <>
          <div className="btn-wrap">
            <button className="button">LEFT</button>
            <button className="button" onClick={handleRightOne}>RIGHT</button>
          </div>
          <One />
        </>
      )}
      {show === 'two' && (
        <>
          <div className="btn-wrap">
            <button className="button" onClick={handleLeftTwo}>LEFT</button>
            <button className="button" onClick={handleRightTwo}>RIGHT</button>
          </div>
          <Two />
        </>
      )}
      {show === 'three' && (
        <>
          <div className="btn-wrap">
            <button className="button" onClick={handleLeftThree}>LEFT</button>
            <button className="button">RIGHT</button>
          </div>
          <Three />
        </>
      )}
    </>
  );
}

export default App;

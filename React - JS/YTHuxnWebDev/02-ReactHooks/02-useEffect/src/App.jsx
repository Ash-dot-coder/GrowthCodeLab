import React from 'react';
import LW from './LiveWork/LW';
import './App.css';
import One_BasicEffect from './Ex-Work/One_BasicEffect';
import Two_CounterEffect from './Ex-Work/Two_CounterEffect';
import Three_FetchDataEffect from './Ex-Work/Three_FetchDataEffect';

const App = () => {
  return (
    <>
      {/* -------Live - work */}
      {/* <LW /> */}


      {/* -------Exercise - Work */}
      {/* <One_BasicEffect /> */}
      {/* <Two_CounterEffect /> */}
      <Three_FetchDataEffect />
    </>
  )
}

export default App
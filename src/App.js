import './App.css';
import React, { useState, useEffect } from 'react';
import Layout from './Components/Layout/Layout';
import Loading from './Components/Utilties/Loading';
import Errorpage from './Components/Utilties/Errorpage';

function App() {

  const [page, setFrontpage] = useState(false)

  useEffect(() => {
    setFrontpage(true)
    const timer = setTimeout(() => {
      setFrontpage(false)
    }, 2000);
    return () => clearTimeout(timer)
  }, [])

  
  if(page){
    return(
      <Loading />
    )
  }
  return (
    <>
      <Layout />
    </>
  );
}

export default App;

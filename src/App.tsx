import React, { useState, useEffect } from 'react';
import './global.css';

import PopupCard from './components/PopupCard';
import { useAllContext } from './context/AllContextProvider';
import GenerateButton from './components/GenerateButton';
import Test from './components/Test';


function App() {	
  const { user, response } = useAllContext(); 
  

  return (
    <div className='rounded-lg'>
      <PopupCard />
      <GenerateButton />
      {response !== null ? <p>{JSON.stringify(response.choices[0].message.content)}</p> : <p>Loading...</p>}
      <p>{JSON.stringify(user)}</p>
      <Test></Test>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';

import PopupCard from './components/PopupCard';
import { useAllContext } from './context/AllContextProvider';
import GenerateButton from './components/GenerateButton';

function App() {	
  const { user, response } = useAllContext(); 
  // how the tf does this even work

  return (
    <div className='rounded-lg'>
      <PopupCard />
      <GenerateButton />
      {response !== null ? <p>{JSON.stringify(response.choices[0].message.content)}</p> : <p>Loading...</p>}
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};

export default App;

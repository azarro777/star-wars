import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { PeoplePage } from './pages/people-page';
import { PlanetsPage } from './pages/planets-page';
import { StarshipsPage } from './pages/starships-page';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/star-wars' element={<PeoplePage/>} />
        <Route path='/star-wars/planets' element={<PlanetsPage/>} />
        <Route/>
        <Route path='/star-wars/starships' element={<StarshipsPage/>} />
      </Routes>
    </>
  );
}

export default App;

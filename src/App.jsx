import React from 'react';
import HomePage from './components/HomePage';
import SchedulePage from './components/SchedulePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import PlayerDetails from './components/PlayerDetails';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/players" element={<PlayerList />}></Route>
          <Route path="/players/:id" element={<PlayerDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import Reservation from '../pages/Reservation';

function PageRoutes() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/Reservation" element={<Reservation />} />
    </Routes>
  );
}

export default PageRoutes;

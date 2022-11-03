import React from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Reservation from '../pages/Reservation';

function PageRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="" element={<Home />} />
        <Route path="/Reservation" element={<Reservation />} />
      </Routes>
    </AnimatePresence>
  );
}

export default PageRoutes;

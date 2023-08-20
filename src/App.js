import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Cities from './components/Cities';
import Order from './components/Order';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  const [position, setposition] = useState({ base: "", cities: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setposition({ ...position, base })
  }
  
  const addCities = (cities) => {
    let newCities;
    if(!position.cities.includes(cities)){
      newCities = [...position.cities, cities];
    } else {
      newCities = position.cities.filter(item => item !== cities);
    }
    setposition({ ...position, cities: newCities });
  }

  return (
    <>
      <Header />
      <Modal showModal={showModal} />
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} position={position} />
          </Route>
          <Route path="/cities">
            <Cities addCities={addCities} position={position} />
          </Route>
          <Route path="/order">
            <Order position={position} setShowModal={setShowModal} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
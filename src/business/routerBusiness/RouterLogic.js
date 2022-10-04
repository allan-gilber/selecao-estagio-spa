import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Viwes
import MainView from '../../presentation/MainView';
import SignupView from '../../presentation/SignupView';
import RegisterList from '../../presentation/RegisterList';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          <>
            <MainView />
            <SignupView/>
            <RegisterList/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
  );
}
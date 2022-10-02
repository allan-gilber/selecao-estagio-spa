import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Viwes
import MainView from '../../presentation/MainView';
import SignupView from '../../presentation/SignupView';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          <>
            <MainView />
            <SignupView/>
          </>
        }/>
      </Routes>
    </BrowserRouter>
  );
}
import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute';

import NavigationBar from './components/NavigationBar';
import Login from './components/Login'
import Landing from './components/Landing';
import Map from './components/Map';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
          <NavigationBar/>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/map" element={
            <PrivateRoute>
              <Map/>
            </PrivateRoute>
          }/>
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Table/>
            </PrivateRoute>
          }/>
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

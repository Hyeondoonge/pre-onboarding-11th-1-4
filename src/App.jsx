import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;

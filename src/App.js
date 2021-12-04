import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeAll from './components/pages/index';
import Join from './components/pages/join';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<HomeAll />} exact />
        <Route path='/join' element={<Join />} exact />
      </Routes>
    </Router>
    

  );
};

export default App;
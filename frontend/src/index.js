import React from 'react';
import ReactDOM from 'react-dom';
import General from './App';

import { BrowserRouter, Routes,
  Route} from "react-router-dom";

import Session from './session';
import Rulesoftrading from "./rulesoftrading";

const root = document.getElementById('root');

ReactDOM.render(

  <BrowserRouter>
  <Routes>
   <Route path="/" element={<General/>} />
   <Route path="session" element={<Session/>} />
   <Route path="rules" element={<Rulesoftrading/>} />
  </Routes>
</BrowserRouter>

, root);



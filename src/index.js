import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './components/Login'
import Chatbox from './components/Chatbox'
import Text from './components/Text'






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chatbox" element={<Chatbox/>} />
        <Route path="/text" element={<Text/>} />


      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

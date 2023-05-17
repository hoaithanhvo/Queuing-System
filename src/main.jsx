import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { useHistory } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Name from "./Components/Name.jsx"
import '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} ></Route>
        <Route path='home' element={<Name />} ></Route>
      </Routes>


      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>,
)

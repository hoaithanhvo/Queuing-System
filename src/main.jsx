import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import ResetPassword from './Components/ResetPassword.jsx';
import Name from './Components/Name.jsx';
// import Home from "./Components/Home.jsx";
import ForgotPassword from './Components/ForgotPassword.jsx';
import NavBar from './Components/Navbar.jsx'; // Assuming you have a NavBar component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              {/* <NavBar /> Render the NavBar component only for the home page */}
              <App />
            </React.Fragment>
          }
        />
        <Route path="home" element={<React.Fragment>
          <NavBar />
          <div>d</div>
          <Name />
          {/* <App /> */}
        </React.Fragment>} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} />
        <Route path="Forgotpassword/resetPassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

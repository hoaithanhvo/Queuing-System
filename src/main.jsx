import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import ResetPassword from './Components/ResetPassword/ResetPassword.jsx';
import DichVu from './Components/DichVu/DichVu.jsx';
import CapSo from './Components/CapSo/CapSo.jsx';
import BaoCao from './Components/BaoCao/BaoCao.jsx';
import Device from "./Components/Device/Device.jsx"
import Infomation from "./Components/Infomation/Information.jsx"

// import Setting from './Components/CaiDatHeThong/Setting.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword.jsx';
import NavBar from './Components/Navbar.jsx'; // Assuming you have a NavBar component
import QuanLyVaiTro from './Components/CaiDatHeThong/QuanLyVaiTro/QuanLyVaiTro.jsx';
import QuanLyTaiKhoan from './Components/CaiDatHeThong/QuanLyTaiKhoan/QuanLyTaiKhoan.jsx';
import NhatKyNguoiDung from './Components/CaiDatHeThong/NhatKyNguoiDung/NhatKyNguoiDung.jsx';
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
        {/* <Route path="home" element={<React.Fragment>
          <NavBar  >
            <Route path='home/ThietBi' element={<Device />} />
          </NavBar>

        </React.Fragment>} /> */}
        <Route path='Trang-Chu' element={<NavBar />}>
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='ThietBi' element={<Device />} />
          <Route path='DichVu' element={<DichVu />} />
          <Route path='CapSo' element={<CapSo />} />
          <Route path='BaoCao' element={<BaoCao />} />
          <Route path='CaiDatHeThong' >
            <Route path='QuanLyVaiTro' element={<QuanLyVaiTro />}></Route>
            <Route path='QuanLyTaiKhoan' element={<QuanLyTaiKhoan />}></Route>
            <Route path='NhatKyNguoiDung' element={<NhatKyNguoiDung />}></Route>
          </Route>
          <Route path='Thongtincanhan' element={<Infomation />} />



        </Route>
        <Route path="/Forgotpassword" element={<ForgotPassword />} />
        <Route path="Forgotpassword/resetPassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

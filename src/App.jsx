import React, { useState, useEffect } from 'react';
import styles from "./App.module.scss"
import LogoAlta from "./images/Logo alta.png"
import Eyes from "./images/Vector.png"
import ImageManager from "./images/Group 341.png"

import { Link } from 'react-router-dom';
function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(true);

  const [change, setChange] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  const loginData = [
    { username: '123', password: '123' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
  ];

  localStorage.setItem('loginData', JSON.stringify(loginData));

  const handleLogin = () => {
    const storedData = JSON.parse(localStorage.getItem('loginData')) || [];

    const found = storedData.find(item => item.username === username && item.password === password);

    if (found) {
      // <Link to ="/home">
      setChange(!change)
      // setChange(prevChange => prevChange + 1);
      alert('Đăng nhập thành công!');
    } else {
      setShowPassword1(false)
      setErrorMessage('Tài khoản hoặc mật khẩu không đúng!');
    }
  };
  useEffect(() => {
    // window.location.reload();

  }, [change]);
  console.log(change);
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <div className={styles.box}>
          <img className={styles.LogoAlta} src={LogoAlta} alt="Mô tả hình ảnh" />
          <p style={{ marginTop: "84px", marginBottom: "4px" }}>Tên đăng nhập *</p>
          <input
            placeholder="Nhập tài khoản"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          ></input>
          <p style={{ marginBottom: "4px" }}>Mật khẩu *</p>
          <div className={styles.input}>
            <input
              className={styles.forgotPassword1}
              placeholder="Nhập mật khẩu"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></input>
            <img
              className={styles.Eyes}
              src={Eyes}
              alt="Mô tả hình ảnh"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <p className={styles.forgotPassword}> {showPassword1 ? "Quên mật khẩu " : errorMessage}</p>

          <button className={styles.button} onClick={handleLogin}>
            {change ? (
              <Link to="/home" className={styles.button}>
                Đăng nhập
              </Link>
            ) : (
              <Link to="/" className={styles.button}>
                Đăng nhập
              </Link>
            )}
          </button>
          <p style={{ textAlign: "center", fontSize: "14px", color: "red" }}> {showPassword1 ? "" : "Quên mật khẩu"}</p>


        </div>
      </div>
      <div className={styles.item2}>
        <img className={styles.ImageManager} src={ImageManager} alt="Mô tả hình ảnh" />
        <div className={styles.box2}>
          <p>Hệ thống </p>
          <h1>QUẢN LÝ XẾP HÀNG</h1>
        </div>

        <Link to="/home" > to </Link>
      </div>
    </div>
  );
}
export default App;

import { useState } from 'react';
import styles from './App.module.scss';
import LogoAlta from './images/Logo alta.png';
import Eyes from './images/Vector.png';
import ImageManager from './images/Group 341.png';
import { Link, useNavigate } from 'react-router-dom';

const loginData = [
  { username: '123', password: '123' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
];

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [forgot, setForgot] = useState(true);

  const [showPassword1, setShowPassword1] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin1 = (e) => {
    e.preventDefault();

    const found = loginData.find((item) => item.username === username && item.password === password);

    if (found) {
      navigate('/Trang-Chu/Dashboard');
    } else {
      setShowPassword1(true)
      setForgot(false)
      setErrorMessage('Sai mật khẩu hoặc tên đăng nhập');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin1} className={styles.item1}>
        <div className={styles.box}>
          <img className={styles.LogoAlta} src={LogoAlta} alt="Mô tả hình ảnh" />
          <p style={{ marginTop: '84px', marginBottom: '4px' }}>Tên đăng nhập *</p>
          <input
            placeholder="Nhập tài khoản"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <p style={{ marginBottom: '4px' }}>Mật khẩu *</p>
          <div className={styles.input}>
            <input
              className={styles.forgotPassword1}
              placeholder="Nhập mật khẩu"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <img
              className={styles.Eyes}
              src={Eyes}
              alt="Mô tả hình ảnh"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <p style={{ textDecoration: 'none', fontSize: '14px', color: 'red' }}>
            {' '}
            {showPassword1 ? errorMessage : "Quên mật khẩu"}
          </p>
          <button type="submit">Đăng nhập</button>
          <p style={{ textDecoration: 'none', textAlign: 'center', fontSize: '14px', color: 'red' }}>
            {' '}
            {forgot ? '' : <Link style={{ textDecoration: 'none', color: 'red' }} to="/ForgotPassword">Quên mật khẩu</Link>}
          </p>
        </div>
      </form>
      <div className={styles.item2}>
        <img className={styles.ImageManager} src={ImageManager} alt="Mô tả hình ảnh" />
        <div className={styles.box2}>
          <p>Hệ thống </p>
          <h1>QUẢN LÝ XẾP HÀNG</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

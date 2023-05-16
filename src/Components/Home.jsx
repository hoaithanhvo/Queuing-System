import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './App.module.scss';
import LogoAlta from './images/Logo alta.png';
import Eyes from './images/Vector.png';
import ImageManager from './images/Group 341.png';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        // Your login logic here
        if (username === 'yourUsername' && password === 'yourPassword') {
            setErrorMessage('');
            alert('Đăng nhập thành công!');
        } else {
            setShowPassword(false);
            setErrorMessage('Tài khoản hoặc mật khẩu không đúng!');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.item1}>
                <div className={styles.box}>
                    <img className={styles.LogoAlta} src={LogoAlta} alt="Mô tả hình ảnh" />
                    <p style={{ marginTop: '84px', marginBottom: '4px' }}>Tên đăng nhập *</p>
                    <input
                        placeholder="Nhập tài khoản"
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    ></input>
                    <p style={{ marginBottom: '4px' }}>Mật khẩu *</p>
                    <div className={styles.input}>
                        <input
                            className={styles.forgotPassword1}
                            placeholder="Nhập mật khẩu"
                            type={showPassword ? 'text' : 'password'}
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

                    <p className={styles.forgotPassword}>{errorMessage}</p>
                    <button className={styles.button} onClick={handleLogin}>
                        Đăng nhập
                    </button>
                    <p style={{ textAlign: 'center', fontSize: '14px', color: 'red' }}>
                        {!showPassword && errorMessage && 'Quên mật khẩu'}
                    </p>

                    {username === 'yourUsername' && password === 'yourPassword' && (
                        <Link to="/home" className={styles.link}>
                            Đến trang Home
                        </Link>
                    )}
                </div>
            </div>
            <div className={styles.item2}>
                <img className={styles.ImageManager} src={ImageManager} alt="Mô tả hình ảnh" />
                <div className={styles.box2}>
                    <p>Hệ thống</p>
                    <h1>QUẢN LÝ XẾP HÀNG</h1>
                </div>
            </div>
        </div>
    );
}

export default App;

// import React from 'react'
// import App from "../App"
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Eyes from "../images/Vector.png"
import ImageManager from "../../images/Frame.png"

import LogoAlta from "../../images/Logo alta.png"
import styles from "./ForgotPassword.module.scss"
const ForgotPassword = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item1}>
                <div className={styles.box}>
                    <img className={styles.LogoAlta} src={LogoAlta} alt="Mô tả hình ảnh" />
                    <p style={{ marginTop: "84px", marginBottom: "-4px", fontWeight: "700", fontSize: "22px", lineHeight: "32px", textAlign: "center" }}>Đăng nhập lại mật khẩu </p>
                    <p style={{ textAlign: "center" }} >Vui lòng nhập email để đặt lại mật khẩ của bạn *</p>
                    {/* <p style={{ marginBottom: "4px" }}>Mật khẩu *</p> */}
                    <div>
                        <input
                            className={styles.forgotPassword1}
                            placeholder=""
                            type="text"
                        ></input>

                    </div>


                    <div style={{ marginTop: "48px", display: "flex", justifyContent: "space-between" }}>
                        <button className={styles.buttonDelete} >
                            <Link to="/" style={{ color: "#ff9138", textDecoration: "none" }}>
                                Hủy
                            </Link>
                        </button>
                        <button className={styles.button} >
                            <Link to="resetPassword" className={styles.button}>
                                Tiếp tục
                            </Link>
                        </button>
                    </div>


                </div>
            </div>
            <div className={styles.item2}>
                <img className={styles.ImageManager} src={ImageManager} alt="Mô tả hình ảnh" />


            </div>
        </div>
    )
}

export default ForgotPassword
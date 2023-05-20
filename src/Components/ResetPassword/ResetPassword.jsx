// import React from 'react'
import { useState } from "react";
import styles from "./ResetPassword.module.scss"
import { Link } from 'react-router-dom';
import ImageManager from "../../images/Frame.png"
import Eyes from "../../images/Vector.png"
import LogoAlta from "../../images/Logo alta.png"
const ResetPassword = () => {
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.item1}>
                <div className={styles.box}>
                    <img className={styles.LogoAlta} src={LogoAlta} alt="Mô tả hình ảnh" />
                    <p style={{ marginTop: "105px", marginBottom: "-4px", fontWeight: "700", fontSize: "22px", lineHeight: "32px", textAlign: "center" }}>Đặt lại mật khẩu mới </p>
                    <div className={styles.input} >
                        <p>Mật khẩu</p>

                        <input
                            className={styles.forgotPassword1}
                            placeholder=""
                            // type="text"
                            type={showPassword1 ? "text" : "password"}                            // value={}

                        ></input>
                        <img
                            className={styles.Eyes}
                            src={Eyes}
                            alt="Mô tả hình ảnh"
                            onClick={() => setShowPassword1(!showPassword1)}
                        />
                        <p>Nhập lại mật khẩu</p>
                        <input
                            className={styles.forgotPassword1}
                            placeholder=""
                            // type="text"
                            type={showPassword2 ? "text" : "password"}                            // value={}
                        ></input>
                        <img
                            className={styles.Eyes1}
                            src={Eyes}
                            alt="Mô tả hình ảnh"
                            onClick={() => setShowPassword2(!showPassword2)}
                        />
                    </div>



                    <div style={{ marginTop: "48px", display: "flex", justifyContent: "space-between" }}>

                        <button className={styles.button} >
                            <Link to="/" className={styles.button}>
                                Xác nhận
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

export default ResetPassword
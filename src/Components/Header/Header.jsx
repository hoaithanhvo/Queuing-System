// import React from 'react'
import styles from "./Header.module.scss"
import Chuong from "../../images/Frame 271.png"
import User from "../../images/unsplash_Fyl8sMC2j2Q.png"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className={styles.container}>
            <div></div>
            <div className={styles.item}>
                <img className={styles.img} src={Chuong} alt="" />
                <Link to='Thongtincanhan' className={styles.box}>
                    <img width={40} height={40} src={User} alt="" />
                    <div className={styles.text}>
                        <p >Xin chào</p>
                        <p style={{ fontSize: "16px", fontWeight: "700", }}>Lê Quỳnh Ái Vân</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
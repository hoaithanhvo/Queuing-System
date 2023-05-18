// import React from 'react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoAlta from '../images/Logo alta.png';
import Eyes from '../images/Vector.png';
import ImageManager from '../images/Group 341.png';
import Dashboard from '../images/element-4.png';
import styles from "./Navbar.module.scss"


const Navbar = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} width={80} height={64} src={LogoAlta} />
            <div className={styles.box}>
                <div className={styles.item}>
                    <img src={Dashboard} />
                    <li>Dashboard</li>
                </div>
                <div className={styles.item}>
                    <img src={Dashboard} />
                    <li>Dashboard</li>
                </div>
            </div>

        </div>
    )
}

export default Navbar
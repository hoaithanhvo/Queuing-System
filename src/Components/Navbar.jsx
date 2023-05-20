import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import LogoAlta from '../images/Logo alta.png';
import Dashboard from '../images/element-4.png';
import Monitor from '../images/monitor.png';

import styles from "./Navbar.module.scss";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("Dashboard");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <Link to="Dashboard" className={activeLink === "Dashboard" ? styles.activeLink : styles.link}
                    onClick={() => handleLinkClick("Dashboard")}><img className={styles.img} src={LogoAlta} /></Link>
                <div className={styles.box}>
                    <Link style={{ marginBottom: "8px" }} className={activeLink === "Dashboard" ? styles.activeLink : styles.link}
                        onClick={() => handleLinkClick("Dashboard")} to="Dashboard">
                        <img src={Dashboard} className={styles.icon} />
                        Dashboard
                    </Link>
                    <Link style={{ marginBottom: "8px" }} className={activeLink === "ThietBi" ? styles.activeLink : styles.link}
                        onClick={() => handleLinkClick("ThietBi")} to="ThietBi">
                        <img src={Monitor} className={styles.icon} />
                        Thiết bị
                    </Link>
                    <Link style={{ marginBottom: "8px" }} className={activeLink === "DichVu" ? styles.activeLink : styles.link}
                        onClick={() => handleLinkClick("DichVu")} to="DichVu">
                        <img src={Monitor} className={styles.icon} />
                        Dịch vụ
                    </Link>
                    <Link style={{ marginBottom: "8px" }} className={activeLink === "CapSo" ? styles.activeLink : styles.link}
                        onClick={() => handleLinkClick("CapSo")} to="CapSo">
                        <img src={Monitor} className={styles.icon} />
                        Cấp số
                    </Link>
                    <Link style={{ marginBottom: "8px" }} className={activeLink === "BaoCao" ? styles.activeLink : styles.link}
                        onClick={() => handleLinkClick("BaoCao")} to="BaoCao">
                        <img src={Monitor} className={styles.icon} />
                        Báo cáo
                    </Link>

                </div>
            </div>

            <div className={styles.outlet}>
                <Outlet />
            </div>
        </div>
    );
};

export default Navbar;

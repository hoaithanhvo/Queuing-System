import { useState } from 'react';
import Header from './Header/Header';
import { Link, Outlet } from 'react-router-dom';
import LogoAlta from '../images/Logo alta.png';
import Dashboard from '../images/element-4.png';
import Monitor from '../images/monitor.png';
import Capso from '../images/icon dasboard03.png';
import Dichvu from '../images/Group 304.png';
import Baocao from '../images/Frame (1).png';
import Logout from '../images/fi_log-out.png';
import Setting from '../images/setting.png';
import BaCham from '../images/fi_more-vertical.png';







import styles from "./Navbar.module.scss";

const Navbar = () => {
    // const [isHovered, setIsHovered] = useState(false);

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
                        <img src={Dichvu} className={styles.icon} />
                        Dịch vụ
                    </Link>
                    <Link style={{ marginBottom: "8px" }} className={activeLink === "CapSo" ? styles.activeLink : styles.link}
                        onClick={() => handleLinkClick("CapSo")} to="CapSo">
                        <img src={Capso} className={styles.icon} />
                        Cấp số
                    </Link>
                    <Link style={{ marginBottom: "8px" }} className={activeLink === "BaoCao" ? styles.activeLink : styles.link}
                        onClick={() => handleLinkClick("BaoCao")} to="BaoCao">
                        <img src={Baocao} className={styles.icon} />
                        Báo cáo
                    </Link>

                    <Link className={activeLink === "QuanLyVaiTro" || activeLink === "QuanLyTaiKhoan" || activeLink === "NhatKyNGuoiDung" ? styles.cha : styles.no}>
                        <img src={Setting} className={styles.icon} />

                        Cài đặt hệ thống
                        <img src={BaCham} className={styles.icon1} />

                        <div className={styles.con}>
                            <div className={styles.name}>
                                <Link className={activeLink === "QuanLyVaiTro" ? styles.activeLink1 : styles.link}
                                    onClick={() => handleLinkClick("QuanLyVaiTro")} to="CaiDatHeThong/QuanLyVaiTro">
                                    Quản lý vai trò
                                </Link>
                            </div>
                            <div className={styles.name}>
                                <Link className={activeLink === "QuanLyTaiKhoan" ? styles.activeLink1 : styles.link}
                                    onClick={() => handleLinkClick("QuanLyTaiKhoan")} to="CaiDatHeThong/QuanLyTaiKhoan">
                                    Quản lý tài khoản
                                </Link>
                            </div>
                            <div className={styles.name}>
                                <Link className={activeLink === "NhatKyNGuoiDung" ? styles.activeLink1 : styles.link}
                                    onClick={() => handleLinkClick("NhatKyNGuoiDung")} to="CaiDatHeThong/NhatKyNGuoiDung">
                                    Nhật ký người dùng
                                </Link>
                            </div>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: "none", marginTop: "246px" }} to="/"><button className={styles.button}><img src={Logout}></img>Đăng xuất</button></Link>

                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.header}>
                    <Header />
                    {/* {isHovered} */}
                </div>
                <div className={styles.outlet}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

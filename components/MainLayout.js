import Head from "next/head";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";
import PropTypes from 'prop-types'
import { i18n, Link, withTranslation } from '../i18n'

export function MainLayout({t, children}) {
    const router = useRouter();

    return (
        <>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Union Dental Clinic</title>
        </Head>
        <div className="main-wrapper">
            <header>
                <section id="header" className="header">
                    <div className="header-top">
                        <div className="container px-sm-3 px-0">
                            <div className="row mx-0">
                                <nav className="navbar p-0">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <span className={router.pathname === "/" ? "active" : ""}>
                                                <Link href={'/'}>Стоматология</Link>
                                            </span>
                                        </li>
                                        <li className="nav-item">
                                            <span className={router.pathname === "/rent" ? "active" : ""}>
                                                <Link href={'/rent'}>Аренда оборудования</Link>
                                            </span>
                                        </li>
                                        <li className="nav-item">
                                            <span className="nav-link">
                                                <a href="#">Медицинская сертификация - unionp.kz</a>
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="header-top__lang dropdown">
                                        {/*<Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic" onClick={changeLanguage('en')}>
                                                RU
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <button onClick={changeLanguage('kz')}>
                                                        KZ
                                                    </button>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>*/}
                                        {/*<Dropdown as={ButtonGroup}>
                                            <Button onClick={changeLanguage('en')}>RU</Button>

                                            <Dropdown.Toggle split id="dropdown-split-basic" />

                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <button onClick={changeLanguage('kz')}>KZ</button>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>*/}
                                        <div id="btn-lang">
                                            <button className={i18n.language === 'en' ? "active" : ""}
                                                    onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'kz' : 'en')}>RU</button>
                                            {/*<button className={i18n.language === 'kz' ? "active" : ""}
                                                    onClick={() => i18n.changeLanguage(i18n.language === 'kz')}>KZ</button>*/}
                                            {/*<button className="btn" onClick={changeLanguage('kz')}>KZ</button>*/}
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom py-3 py-lg-0">
                        <div className="container px-sm-3 px-0">
                            <div className="header-bottom__wrapper">
                                <div className="logo">
                                    <img src="img/logo.jpg" alt="logo"/>
                                </div>
                                <div className="info">
                                    <div>
                                        <img src="img/icons/time.png" alt="" className="mr-3"/>
                                        <span>
                                    Пн-пт 10:00 - 21:00 <br/>
                                    Сб-вс 11:00 - 20:00
                                </span>
                                    </div>
                                    <div>
                                        <img src="img/icons/phone.png" alt="" className="mr-3" />
                                        <span>
                                    +7 777 132 1742
                                </span>
                                        <img src="img/icons/whatsapp.png" alt="" className="whatsapp ml-3"/>
                                    </div>
                                    <div>
                                        <img src="img/icons/gps.png" alt="" className="mr-3"/>
                                        <span>
                                    пр. Абая, д. 150/230, блок 3, ЖК «Гаухартаc»
                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="submenu">
                    <div className="container px-sm-3 px-0">
                        <Navbar expand="lg" className="px-3 px-sm-0">
                            <Navbar.Brand className="nav-link p-0 mr-0">
                                <span className={router.pathname === "/" ? "active" : ""}>
                                    <Link href={'/'}>Главная</Link>
                                </span>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    <div className="nav-link mr-5">
                                        <span className={router.pathname === "/services" ? "active" : ""}>
                                            <Link href={'/services'}>Услуги</Link>
                                        </span>
                                    </div>
                                    <div className="nav-link mr-5">
                                        <span className={router.pathname === "/about" ? "active" : ""}>
                                            <Link href={'/about'}>О нас</Link>
                                        </span>
                                    </div>
                                    <div className="nav-link">
                                        <span className="nav-link mr-5">
                                        <Link href={'/#doctors'}>Специалисты</Link>
                                    </span>
                                    </div>
                                    <div className="nav-link">
                                        <span className={router.pathname === "/products" ? "active" : ""}>
                                            <Link href={'/products'}>Наша продукция</Link>
                                        </span>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </section>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <div className="footer">
                    <div className="container px-sm-3 px-0">
                        <div className="row py-3">
                            <div className="col-sm-12 col-md-3 col-lg-3">
                                <ul className="footer-sitemap">
                                    <li>
                                        <a href="">Услуги</a>
                                    </li>
                                    <li>
                                        <a href="">Цены</a>
                                    </li>
                                    <li>
                                        <a href="">О нас</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-6 col-md-5 col-lg-4">
                                <div className="footer-contacts">
                                    <div className="row">
                                        <div className="col-6 mb-4 pl-0 pl-sm-3">
                                            Время работы
                                        </div>
                                        <div className="col-6 mb-4 pr-0 pr-sm-3">
                                            Пн-пт 10:00 - 21:00 <br/> Сб-вс 11:00 - 20:00
                                        </div>
                                        <div className="col-6 mb-4 pl-0 pl-sm-3">
                                            Телефон
                                        </div>
                                        <div className="col-6 mb-4 pr-0 pr-sm-3">
                                            +7 777 777 77 77
                                        </div>
                                        <div className="col-6 mb-3 pl-0 pl-sm-3">
                                            udc@unionp.kz
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-5">
                                <div className="footer-links">
                                    <div className="row">
                                        <div className="col-9 col-sm-9 mb-4 pl-0 pl-sm-3">
                                            <span>Медицинская сертификация - unionp.kz</span>
                                        </div>
                                        <div className="col-3 col-sm-3 mb-4 pr-0 pr-sm-3">
                                            <img src="img/icons/whatsapp.png" alt="whatsapp"/>
                                        </div>
                                        <div className="col-9 col-sm-9 mb-3 pl-0 pl-sm-3">
                                            <span>Аренда оборудования</span>
                                        </div>
                                        <div className="col-3 col-sm-3 mb-3 pr-0 pr-sm-3">
                                            <img src="img/icons/inst.png" alt="instagram"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

        </>
    )
}

MainLayout.getInitialProps = async () => ({
    namespacesRequired: ['common', 'footer'],
})

MainLayout.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(MainLayout)

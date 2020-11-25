import PropTypes from 'prop-types'
import {i18n, Link, withTranslation} from "../i18n";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, {useContext} from "react";
// import {useRouter} from "../.next/server/pages";
import {useRouter} from "next/router";
import { I18nContext } from 'next-i18next'

const Header = ({ t }) => {
    const router = useRouter();
    const { i18n: { language } } = useContext(I18nContext)
    return (
    <>
        <header>
            <section id="header" className="header">
                <div className="header-top">
                    <div className="container px-sm-3 px-0">
                        <div className="row mx-0">
                            <nav className="navbar p-0">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                            <span className={router.pathname === "/" ? "active" : ""}>
                                                <Link href={'/'}>{t('header_top_link_1')}</Link>
                                            </span>
                                    </li>
                                    <li className="nav-item">
                                            <span className={router.pathname === "/rent" ? "active" : ""}>
                                                <Link href={'/rent'}>{t('header_top_link_2')}</Link>
                                            </span>
                                    </li>
                                    <li className="nav-item">
                                            <span className="nav-link">
                                                <a href="http://unionp.kz/" target="_blank">{t('header_top_link_3')}</a>
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
                                        <button onClick={() => i18n.changeLanguage('en')} className={language === 'en' ? 'is-active': ''}>RU</button>
                                        <button onClick={() => i18n.changeLanguage('kz')} className={language === 'kz' ? 'is-active': ''}>KZ</button>
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
                                    {t('footer_working_hours_date1')} 10:00 - 21:00 <br/>
                                    {t('footer_working_hours_date2')} 11:00 - 20:00
                                </span>
                                </div>
                                <div>
                                    <img src="img/icons/phone.png" alt="" className="mr-3"/>
                                    <span>
                                    +7 777 132 1742
                                    </span>
                                    <img src="img/icons/whatsapp.png" alt="" className="whatsapp ml-3"/>
                                </div>
                                <div>
                                    <img src="img/icons/gps.png" alt="" className="mr-3"/>
                                    <span>
                                    {t('address')}
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
                                    <Link href={'/'}>{t('submenu_main')}</Link>
                                </span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                <div className="nav-link mr-5">
                                        <span className={router.pathname === "/services" ? "active" : ""}>
                                            <Link href={'/services'}>{t('submenu_services')}</Link>
                                        </span>
                                </div>
                                <div className="nav-link mr-5">
                                        <span className={router.pathname === "/about" ? "active" : ""}>
                                            <Link href={'/about'}>{t('submenu_about')}</Link>
                                        </span>
                                </div>
                                <div className="nav-link">
                                        <span className="nav-link mr-5">
                                        <Link href={'/#doctors'}>{t('submenu_spec')}</Link>
                                    </span>
                                </div>
                                <div className="nav-link">
                                        <span className={router.pathname === "/products" ? "active" : ""}>
                                            <Link href={'/products'}>{t('submenu_product')}</Link>
                                        </span>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </section>
        </header>
    </>
)
}

Header.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Header.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Header)

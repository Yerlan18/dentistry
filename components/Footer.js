import React from "react";
import PropTypes from "prop-types";
import {withTranslation} from "../i18n";
import Link from "next/link";

const Footer = ({t}) => {
    return (
        <footer>
            <div className="footer">
                <div className="container px-sm-3 px-0">
                    <div className="row py-3">
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <ul className="footer-sitemap">
                                <li>
                                    <Link href={'/#header'}><a>{t('to_begin')}</a></Link>
                                </li>
                                <li>
                                    <a href="">{t('submenu_services')}</a>
                                </li>
                                <li>
                                    <a href="">{t('footer_price')}</a>
                                </li>
                                <li>
                                    <a href="">{t('submenu_about')}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-md-5 col-lg-4">
                            <div className="footer-contacts">
                                <div className="row">
                                    <div className="col-6 mb-4 pl-0 pl-sm-3">
                                        {t('footer_working_hours')}
                                    </div>
                                    <div className="col-6 mb-4 pr-0 pr-sm-3">
                                        {t('footer_working_hours_date1')} 09:00 - 18:00 <br/>
                                        {t('footer_working_hours_date2')} 09:00 - 16:00
                                    </div>
                                    <div className="col-6 mb-4 pl-0 pl-sm-3">
                                        Телефон
                                    </div>
                                    <div className="col-6 mb-4 pr-0 pr-sm-3">
                                        +7 777 132 1742
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
                                        <a href="http://unionp.kz/" target="_blank">
                                            {t('header_top_link_3')}
                                        </a>
                                    </div>
                                    <div className="col-3 col-sm-3 mb-4 pr-0 pr-sm-3">
                                        <img src="img/icons/whatsapp.png" alt="whatsapp"/>
                                    </div>
                                    <div className="col-9 col-sm-9 mb-3 pl-0 pl-sm-3">
                                        <Link href={'/rent'}>
                                            <a>{t('header_top_link_2')}</a>
                                        </Link>
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
    )
}

Footer.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Footer.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Footer)

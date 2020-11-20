import {MainLayout} from "../components/MainLayout";
import Form from "../components/Form";
import {withTranslation} from "../i18n";
import React from "react";

function About({t}) {
    return (
        <MainLayout>
            <div className="title sub">{t('submenu_about')}</div>
            <section id="about-main">
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="col-12">
                            <p>
                                {t('about_p1')}<br/>
                                {t('about_p2')}
                            </p>
                            <p>
                                {t('about_p3')}<br/>
                                {t('about_p4')}<br/>
                                {t('about_p5')}
                            </p>
                            <br/>
                            <p>
                                {t('about_p6')}<br/>
                                {t('about_p7')}
                            </p>
                            <p>{t('about_p8')}</p>
                            <p>{t('about_p9')}</p>
                            <p>{t('about_p10')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="title sub">{t('about_eq_title')}</div>
            <section id="equipment">
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="eqm">
                            <div className="eqm-inner">
                                <div className="wrapper">
                                    <p>{t('about_eq_inner1_n')}</p>
                                    <div>
                                        <span className="idx">K3</span>
                                        <span className="desc">
                                    {t('about_eq_inner1_d1')} <br/>
                                    {t('about_eq_inner1_d2')} <br/>
                                    {t('about_eq_inner1_d3')} <br/>
                                    {t('about_eq_inner1_d4')} <br/>
                                    {t('about_eq_inner1_d5')}
                                </span>
                                    </div>
                                    <img src="img/eqm/eqm1.png" alt="Оборудование 1"/>
                                </div>
                            </div>
                            <div className="eqm-inner">
                                <div className="wrapper">
                                    <p>{t('about_eq_inner2_n')}</p>
                                    <div>
                                        <span className="idx">Т1</span>
                                        <span className="desc">
                                    {t('about_eq_inner1_d1')} <br/>
                                            {t('about_eq_inner2_d2')} <br/>
                                            {t('about_eq_inner2_d3')} <br/>
                                            {t('about_eq_inner2_d4')} <br/>
                                            {t('about_eq_inner2_d5')}
                                </span>
                                    </div>
                                    <img src="img/eqm/eqm2.png" alt="Оборудование 2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="advantages">
                <div className="adv extra">
                    <div className="title sub">{t('adv_title')}</div>
                    <div className="container px-sm-3 px-0 mt-4">
                        <div className="row mx-0">
                            <div className="adv-block">
                                <div className="adv-block__inner">
                                    <div className="adv-wrapper">
                                        <div className="adv-wrapper__title">{t('adv_inner1_text')}</div>
                                        <img src="img/advantages/icon1.png" alt="icon1"/>
                                        <div className="adv-wrapper__desc">
                                            {t('adv_inner1_desc')}
                                        </div>
                                    </div>
                                </div>
                                <div className="adv-block__inner">
                                    <div className="adv-wrapper">
                                        <div className="adv-wrapper__title">{t('adv_inner2_text')}</div>
                                        <img src="img/advantages/icon2.png" alt="icon2"/>
                                        <div className="adv-wrapper__desc">
                                            {t('adv_inner2_desc')}
                                        </div>
                                    </div>
                                </div>
                                <div className="adv-block__inner">
                                    <div className="adv-wrapper">
                                        <div className="adv-wrapper__title">{t('adv_inner3_text')}</div>
                                        <img src="img/advantages/icon3.png" alt="icon3"/>
                                        <div className="adv-wrapper__desc">
                                            {t('adv_inner3_desc')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Form/>
        </MainLayout>
    )
}
export default withTranslation('common')(About)

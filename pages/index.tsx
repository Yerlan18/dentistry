import {MainLayout} from "../components/MainLayout";
// import Link from "next/link";
import PhotoCarousel from "../components/PhotoCarousel"
import MainCarousel from "../components/MainCarousel";
import React from "react";
import PropTypes from 'prop-types'
import { withTranslation, Link } from '../i18n'
// import withTranslation from '../i18n'
// import {useTranslation} from "react-i18next";

function Home({t}) {

    // const {t, i18n} = useTranslation();

  return (
      <MainLayout>
          <section id="main-carousel" className="photo-carousel">
              <div className="container px-sm-3 px-0">
                  <MainCarousel/>
              </div>
          </section>
          <section id="service-main" className="service">
              <div className="title">{t('service_title')}</div>
              <div className="container px-sm-3 px-0">
                  <div className="row">
                      <div className="service-block">
                          <div className="service-block__inner">
                              <div className="s-wrapper">
                                  <img src="img/services/icon1.png" alt="icon1"/>
                                      <div className="s-wrapper__title">{t('service_inner1_title')}</div>
                                      <div className="s-wrapper__desc">
                                          {t('service_inner1_d1')} <br/>
                                          {t('service_inner1_d2')} <br/>
                                          {t('service_inner1_d3')} <br/>
                                      </div>
                              </div>
                          </div>
                          <div className="service-block__inner">
                              <div className="s-wrapper">
                                  <img src="img/services/icon2.png" alt="icon2"/>
                                      <div className="s-wrapper__title">{t('service_inner2_title')}</div>
                                      <div className="s-wrapper__desc">
                                          {t('service_inner2_d1')} <br/>
                                          {t('service_inner2_d2')} <br/>
                                          {t('service_inner2_d3')} <br/>
                                          {t('service_inner2_d4')}
                                      </div>
                              </div>
                          </div>
                          <div className="service-block__inner">
                              <div className="s-wrapper">
                                  <img src="img/services/icon3.png" alt="icon3"/>
                                      <div className="s-wrapper__title">{t('service_inner3_title')}</div>
                                      <div className="s-wrapper__desc">
                                          {t('service_inner3_d1')} <br/>
                                          {t('service_inner3_d2')} <br/>
                                          {t('service_inner3_d3')} <br/>
                                          {t('service_inner3_d4')}
                                      </div>
                              </div>
                          </div>
                          <div className="service-block__inner">
                              <div className="s-wrapper">
                                  <img src="img/services/icon4.png" alt="icon4"/>
                                      <div className="s-wrapper__title">{t('service_inner4_title')}</div>
                                      <div className="s-wrapper__desc">
                                          {t('service_inner4_d1')} <br/>
                                          {t('service_inner4_d2')} <br/>
                                          {t('service_inner4_d3')} <br/>
                                          {t('service_inner4_d4')}
                                      </div>
                              </div>
                          </div>
                          <div className="service-block__inner">
                              <div className="s-wrapper">
                                  <img src="img/services/icon5.png" alt="icon5"/>
                                      <div className="s-wrapper__title">{t('service_inner5_title')}</div>
                                      <div className="s-wrapper__desc">
                                          {t('service_inner5_d1')} <br/>
                                          {t('service_inner5_d2')} <br/>
                                          {t('service_inner5_d3')} <br/>
                                          {t('service_inner5_d4')}
                                      </div>
                              </div>
                          </div>
                          <div className="service-block__inner">
                              <div className="s-wrapper">
                                  <img src="img/services/icon6.png" alt="icon6"/>
                                      <div className="s-wrapper__title">{t('service_inner6_title')}</div>
                                      <div className="s-wrapper__desc">
                                          {t('service_inner6_d1')} <br/>
                                          {t('service_inner6_d2')} <br/>
                                          {t('service_inner6_d3')} <br/>
                                          {t('service_inner6_d4')}
                                      </div>
                              </div>
                          </div>
                          <Link href={'/services'}>
                              <a className="btn-brand">{t('services_more_btn')}</a>
                          </Link>
                      </div>
                  </div>
              </div>
          </section>
          <section id="advantages">
              <div className="title">{t('adv_title')}</div>
              <div className="adv">
                  <div className="container px-sm-3 px-0">
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
          <section id="about-us">
              <div className="container px-sm-3 px-0">
                  <div className="row mx-0 align-items-center justify-content-center">
                      <div className="col-sm-12 col-md-10 col-lg-6 text-center">
                          <img src="img/about/img.png" alt="img"/>
                      </div>
                      <div className="col-sm-12 col-md-10 col-lg-6">
                          <div className="about-text">
                              <div className="about-text__top">
                                  {t('adv2_text')}
                              </div>
                              <div className="about-text__bottom">
                                  <p>
                                      {t('adv2_desc1')}
                                  </p>
                                  <p>
                                      {t('adv2_desc2')}
                                  </p>
                                  <p>
                                      {t('adv2_desc3')} <br/>
                                      {t('adv2_desc4')}
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section id="doctors">
              <div className="title">{t('doctor_title')}</div>
              <div className="doctors">
                  <div className="container px-sm-3 px-0">
                      <div className="row mx-0">
                          <div className="col-sm-12 col-md-10 col-lg-6">
                              <div className="doctors-block">
                                  <img src="img/doctors/d1.png" alt="doctor1"/>
                                      <div className="mt-3">
                                          <div className="doctors-block__name">{t('doctor_p1_name')}</div>
                                          <div className="doctors-block__pos">{t('doctor_p1_pos')}</div>
                                          <div className="doctors-block__exp">{t('doctor_p1_exp')}</div>
                                      </div>
                              </div>
                          </div>
                          <div className="col-sm-12 col-md-10 col-lg-6">
                              <div className="doctors-block">
                                  <img src="img/doctors/d2.png" alt="doctor2"/>
                                      <div className="mt-3">
                                          <div className="doctors-block__name">{t('doctor_p2_name')}</div>
                                          <div className="doctors-block__pos">{t('doctor_p2_pos')}</div>
                                          <div className="doctors-block__exp">{t('doctor_p2_exp')}</div>
                                      </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="photo-carousel">
              <div className="title">{t('photo_title')}</div>
              <div className="container px-sm-3 px-0">
                  <PhotoCarousel/>
              </div>
          </section>
      </MainLayout>
  )
}

Home.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Home.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Home)

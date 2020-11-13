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
              <div className="container px-sm-3 px-0" style={{maxWidth: 1800}}>
                  <MainCarousel/>
              </div>
          </section>
          <section id="service-main" className="service">
              <div className="title">{t('h1')}</div>
              <div className="container px-sm-3 px-0">
                  <div className="row">
                      <div className="service-block">
                          <div className="service-block__inner">
                              <div className="s-wrapper">
                                  <img src="img/services/icon1.png" alt="icon1"/>
                                      <div className="s-wrapper__title">Ортодонтия</div>
                                      <div className="s-wrapper__desc">
                                          Выравнивание зубов передовыми
                                          методами! <br/>
                                          - Исправление прикуса <br/>
                                          - Установка металлических и
                                          керамических брекетов
                                      </div>
                              </div>
                          </div>
                          <div className="service-block__inner">
                              <div className="s-wrapper">
                                  <img src="img/services/icon2.png" alt="icon2"/>
                                      <div className="s-wrapper__title">Ортопедия</div>
                                      <div className="s-wrapper__desc">
                                          Научный подход! Быстрое изготовление! <br/>
                                          - Съемные протезы <br/>
                                          - Коронки <br/>
                                          - Виниры на зубы
                                      </div>
                              </div>
                          </div>
                          <div className="service-block__inner">
                              <div className="s-wrapper">
                                  <img src="img/services/icon3.png" alt="icon3"/>
                                      <div className="s-wrapper__title">Терапия</div>
                                      <div className="s-wrapper__desc">
                                          Безболезненое лечение и профилактика! <br/>
                                          - Кариес <br/>
                                          - Пульпит <br/>
                                          - Комплексная чистка
                                      </div>
                              </div>
                          </div>
                          <div className="service-block__inner">
                              <div className="s-wrapper">
                                  <img src="img/services/icon4.png" alt="icon4"/>
                                      <div className="s-wrapper__title">Хирургия</div>
                                      <div className="s-wrapper__desc">
                                          Лечение и удаление зубов без боли и последствий! <br/>
                                          - Удаление кисты зуба <br/>
                                          - Удаление зуба мудрости <br/>
                                          - Удаление зубов
                                      </div>
                              </div>
                          </div>
                          <div className="service-block__inner">
                              <div className="s-wrapper">
                                  <img src="img/services/icon5.png" alt="icon5"/>
                                      <div className="s-wrapper__title">Имплантация</div>
                                      <div className="s-wrapper__desc">
                                          Срок службы зубных имплантатов более 25 лет! <br/>
                                          - Имплант под ключ <br/>
                                          - Одноэтапная имплантация <br/>
                                          - Наращивание костной ткани
                                      </div>
                              </div>
                          </div>
                          <div className="service-block__inner">
                              <div className="s-wrapper">
                                  <img src="img/services/icon6.png" alt="icon6"/>
                                      <div className="s-wrapper__title">Детская стоматология</div>
                                      <div className="s-wrapper__desc">
                                          Процедуры без страха и боли! <br/>
                                          - Лечение молочных зубов <br/>
                                          - Лечение постоянных зубов <br/>
                                          - Удаление молочного зуба
                                      </div>
                              </div>
                          </div>
                          <Link href={'/services'}>
                              <a className="btn-brand">Все виды услуг</a>
                          </Link>
                      </div>
                  </div>
              </div>
          </section>
          <section id="advantages">
              <div className="title">Наши преимущества</div>
              <div className="adv">
                  <div className="container px-sm-3 px-0">
                      <div className="row mx-0">
                          <div className="adv-block">
                              <div className="adv-block__inner">
                                  <div className="adv-wrapper">
                                      <div className="adv-wrapper__title">Производство Южная Корея</div>
                                      <img src="img/advantages/icon1.png" alt="icon1"/>
                                          <div className="adv-wrapper__desc">
                                              Технологии, оборудования, медицинские изделия высшего качества
                                          </div>
                                  </div>
                              </div>
                              <div className="adv-block__inner">
                                  <div className="adv-wrapper">
                                      <div className="adv-wrapper__title">Компьютерная томография</div>
                                      <img src="img/advantages/icon2.png" alt="icon2"/>
                                          <div className="adv-wrapper__desc">
                                              Не нужно искать диагностический центр для обследования
                                          </div>
                                  </div>
                              </div>
                              <div className="adv-block__inner">
                                  <div className="adv-wrapper">
                                      <div className="adv-wrapper__title">Комфортное лечение</div>
                                      <img src="img/advantages/icon3.png" alt="icon3"/>
                                          <div className="adv-wrapper__desc">
                                              В клинике работают анестезиологи с опытом более 10 лет
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
                                  Наша клиника была создана совместно с южно-корейской компанией Osstem Implant,
                                  занимающей
                                  ПЯТУЮ строчку во всемирном рейтинге компаний-производителей имплантатов. Основной
                                  приоритет
                                  направлен на комфортное лечение с использованием системы южно-корейской
                                  стоматологической
                                  клиники Chamchoeun. Специалисты клиники Chamchoeun регулярно проводят обучение нашим
                                  врачам
                                  по повышению квалификации.
                              </div>
                              <div className="about-text__bottom">
                                  <p>
                                      Наши высококвалифицированные врачи предоставляют широкий спектр
                                      стоматологических услуг, вас окружают заботой и вниманием.
                                  </p>
                                  <p>
                                      Мы используем цифровые 3D технологии.
                                  </p>
                                  <p>
                                      В нашей клинике имеется кабинет рентгенографии, где имеется возможность сделать
                                      несколько видов рентген-снимков. <br/>
                                      Мы сделаем все для совершенства ваших улыбок!
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section id="doctors">
              <div className="title">Наши доктора</div>
              <div className="doctors">
                  <div className="container px-sm-3 px-0">
                      <div className="row mx-0">
                          <div className="col-sm-12 col-md-10 col-lg-6">
                              <div className="doctors-block">
                                  <img src="img/doctors/d1.png" alt="doctor1"/>
                                      <div className="mt-3">
                                          <div className="doctors-block__name">Расстрига Дмитрий Игоревич</div>
                                          <div className="doctors-block__pos">
                                              Ортопед, хирург. Образование: Высшее медицинское.
                                          </div>
                                          <div className="doctors-block__exp">Опыт работы: 5 лет.</div>
                                      </div>
                              </div>
                          </div>
                          <div className="col-sm-12 col-md-10 col-lg-6">
                              <div className="doctors-block">
                                  <img src="img/doctors/d2.png" alt="doctor2"/>
                                      <div className="mt-3">
                                          <div className="doctors-block__name">Ким Людмила Геннадьевна</div>
                                          <div className="doctors-block__pos">
                                              Терапевт. Образование: высшее медицинское.
                                          </div>
                                          <div className="doctors-block__exp">Опыт работы: 20 лет.</div>
                                      </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="photo-carousel">
              <div className="title">Фотографии стоматологии</div>
              <div className="container px-sm-3 px-0" style={{maxWidth: 1400}}>
                  <PhotoCarousel/>
              </div>
          </section>
      </MainLayout>
  )
}

Home.getInitialProps = async () => ({
    namespacesRequired: ['common', 'footer'],
})

Home.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Home)

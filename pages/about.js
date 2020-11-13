import {MainLayout} from "../components/MainLayout";

export default function About() {
    return (
        <MainLayout>
            <div className="title sub">О нас</div>
            <section id="about-main">
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="col-12">
                            <p>
                                Наша клиника была создана совместно с южно-корейской компанией Osstem Implant,
                                занимающей ПЯТУЮ строчку <br/>
                                во всемирном рейтинге компаний-производителей имплантатов.
                            </p>
                            <p>
                                Основной приоритет направлен на комфортное лечение с использованием системы
                                южно-корейской <br/>
                                стоматологической клиники Chamchoeun. Специалисты клиники Chamchoeun регулярно проводят
                                обучение <br/>
                                нашим врачам по повышению квалификации с целью оказания максимально качественной помощи
                                Вам.
                            </p>
                            <br/>
                            <p>
                                Наши высококвалифицированные врачи предоставляют широкий спектр стоматологических
                                услуг, вас <br/>
                                окружают заботой и вниманием.
                            </p>
                            <p>
                                Мы используем цифровые 3D технологии.
                            </p>
                            <p>
                                В нашей клинике имеется кабинет рентгенографии, где имеется возможность сделать
                                несколько видов рентген-снимков.
                            </p>
                            <p>
                                Мы сделаем все для совершенства ваших улыбок!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="title sub">Оборудование в стоматологии</div>
            <section id="equipment">
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="eqm">
                            <div className="eqm-inner">
                                <div className="wrapper">
                                    <p>Стоматологическая установка</p>
                                    <div>
                                        <span className="idx">K3</span>
                                        <span className="desc">
                                    Технологичные решения <br/>
                                    для точной операции <br/>
                                    Максимальный <br/>
                                    комфорт и удобство <br/>
                                    пациента и врача
                                </span>
                                    </div>
                                    <img src="img/eqm/eqm1.png" alt="Оборудование 1"/>
                                </div>
                            </div>
                            <div className="eqm-inner">
                                <div className="wrapper">
                                    <p>3D рентген аппарат</p>
                                    <div>
                                        <span className="idx">Т1</span>
                                        <span className="desc">
                                    Широкий выбор зоны <br/>
                                    сканирования <br/>
                                    Легко задавать пол, <br/>
                                    возраст, область <br/>
                                    сканирования
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
                    <div className="title sub">Наши преимущества</div>
                    <div className="container px-sm-3 px-0 mt-4">
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
            <section id="contact-us">
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1">
                            <div className="contact-us">
                                <img src="img/form-bg.png" alt=""/>
                                    <div className="form">
                                        <p>Записаться на прием</p>
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="fio"
                                                       placeholder="Ваше ФИО" required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="tel" className="form-control" id="tel"
                                                       placeholder="Телефон" required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="date"
                                                       placeholder="Желаемая дата посещения" required/>
                                            </div>
                                            <button type="submit" className="btn-brand">Записаться</button>
                                        </form>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

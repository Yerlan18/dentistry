import {MainLayout} from "../components/MainLayout";
import Form from "../components/Form";

export default function Services() {
    return (
        <MainLayout>
            <div className="title sub">Услуги стоматологии</div>
            <section id="service">
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="service-block">
                            <div className="service-block__inner">
                                <div className="wrapper">
                                    <div className="wrapper__title">
                                        Терапия
                                    </div>
                                    <div className="wrapper__desc">
                                        Безболезненное лечение и профилактика!
                                    </div>
                                    <div>
                                        -Кариес <br/> -Пульпит <br/> -Комплексная чистка
                                    </div>
                                </div>
                            </div>
                            <div className="service-block__inner">
                                <div className="wrapper">
                                    <div className="wrapper__title">
                                        Ортопедия
                                    </div>
                                    <div className="wrapper__desc">
                                        Безболезненное лечение и профилактика!
                                    </div>
                                    <div>
                                        -Кариес <br/> -Пульпит <br/> -Комплексная чистка
                                    </div>
                                </div>
                            </div>
                            <div className="service-block__inner">
                                <div className="wrapper">
                                    <div className="wrapper__title">
                                        Хирургия
                                    </div>
                                    <div className="wrapper__desc">
                                        Безболезненное лечение и профилактика!
                                    </div>
                                    <div>
                                        -Кариес <br/> -Пульпит <br/> -Комплексная чистка
                                    </div>
                                </div>
                            </div>
                            <div className="service-block__inner">
                                <div className="wrapper">
                                    <div className="wrapper__title">
                                        Ортодонтия
                                    </div>
                                    <div className="wrapper__desc">
                                        Безболезненное лечение и профилактика!
                                    </div>
                                    <div>
                                        -Кариес <br/> -Пульпит <br/> -Комплексная чистка
                                    </div>
                                </div>
                            </div>
                            <div className="service-block__inner">
                                <div className="wrapper">
                                    <div className="wrapper__title">
                                        Детская стоматология
                                    </div>
                                    <div className="wrapper__desc">
                                        Безболезненное лечение и профилактика!
                                    </div>
                                    <div>
                                        -Кариес <br/> -Пульпит <br/> -Комплексная чистка
                                    </div>
                                </div>
                            </div>
                            <div className="service-block__inner">
                                <div className="wrapper">
                                    <div className="wrapper__title">
                                        Имплантация
                                    </div>
                                    <div className="wrapper__desc">
                                        Безболезненное лечение и профилактика!
                                    </div>
                                    <div>
                                        -Кариес <br/> -Пульпит <br/> -Комплексная чистка
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service-ct">
                <div className="title sub font-small">Так же в нашей стоматологии вы можете воспользоваться улугами
                    компьютерной томографии!
                </div>
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="ct-wrapper">
                                <img src="img/services/snapshot1.png" alt="Снимок1"/>
                                <div className="ct-wrapper__name">Снимок понорамный</div>
                                <div className="ct-wrapper__price">3000тг</div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="ct-wrapper">
                                <img src="img/services/snapshot2.png" alt="Снимок2"/>
                                <div className="ct-wrapper__name">Снимок понорамный</div>
                                <div className="ct-wrapper__price">3000тг</div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                            <div className="ct-wrapper">
                                <img src="img/services/snapshot3.png" alt="Снимок3"/>
                                <div className="ct-wrapper__name">Снимок понорамный</div>
                                <div className="ct-wrapper__price">3000тг</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="title sub">Цены на услуги стоматологии</div>
            <section id="service-price">
                <div className="container px-sm-3 px-0">
                    <div className="sp">
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">Консультация</div>
                                <div className="price">от 1000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">Удаление зубных отложений ультразвуком (1 зуб)</div>
                                <div className="price">500</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">Лечение кариеса</div>
                                <div className="price">от 5000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">Профессиональная чистка зубов</div>
                                <div className="price">от 2000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">Лечение периодонтита</div>
                                <div className="price">от 14000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">Удаление зуба</div>
                                <div className="price">от 4000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Form/>
        </MainLayout>
    );
}

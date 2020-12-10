import {MainLayout} from "../components/MainLayout";
import Button from "react-bootstrap/Button";
import * as React from "react";
import Vmodal from "../components/Modal";
import {withTranslation} from "../i18n";

function Rent({t}) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <MainLayout>
            <div className="title sub">{t('header_top_link_2')}</div>
            <section id="products">
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="product-inner rent">
                                <div className="d-flex">
                                    <div className="product-inner__left">
                                        <img src="img/equipment/tc1.png" alt="Продукт1"/>
                                    </div>
                                    <div className="product-inner__right">
                                        <div className="pr-name">
                                        3D рентген аппарат Т1
                                        </div>
                                        <div className="pr-price">{t('product_price')}</div>
                                        {/* <Button className="btn more-btn" onClick={() => setModalShow(true)}>
                                            {t('rent_btn')}
                                        </Button> */}
                                        <Vmodal show={modalShow} onHide={() => setModalShow(false)}/>
                                    </div>
                                </div>
                                <div className="product-inner__desc">
                                    <p>{t('rent_desc')}</p>
                                    <span>
                                    Широкий выбор зоны сканирования<br/>
                                    Удобен в использовании<br/>
                                    Легко задавать пол, возраст, область сканирования<br/>
                                    Каждый режим с понятным интерфейсом и сенсорной панелью
                            </span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-sm-12">
                            <div className="product-inner rent">
                                <div className="d-flex">
                                    <div className="product-inner__left">
                                        <img src="img/products/product2.png" alt="Продукт2"/>
                                    </div>
                                    <div className="product-inner__right">
                                        <div className="pr-name">
                                            Костный материал THE Graft Granule (0,5g)
                                        </div>
                                        <div className="pr-price">Цену уточняйте</div>
                                        <Button className="btn more-btn" onClick={() => setModalShow(true)}>
                                            Арендовать
                                        </Button>
                                        <Vmodal show={modalShow} onHide={() => setModalShow(false)}/>
                                    </div>
                                </div>
                                <div className="product-inner__desc">
                                    <p>Описание</p>
                                    <span>
                                THE Graft™ представляет собой натуральную пористую минеральную костную матрицу.
                                Производится путем удаления всех органических компонентов  из свиной кости.
                                Благодаря своей природной структуре  неорганический костный минерал
                                THE Graft ™ сравнивает физические  и химические аспекты минерализованной
                                матрицы человеческой кости. После помещения THE Graft ™ в поврежденную часть
                                кости постепенно происходит формирование новой костной ткани. Это доступно в губчатых
                                гранулах, упакованных во флакон. THE Graft ™ стерилизуется гамма-излучением.
                            </span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
export default withTranslation('common')(Rent)

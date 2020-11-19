import {MainLayout} from "../components/MainLayout";
import Button from "react-bootstrap/Button";
import * as React from "react";
import Vmodal from "../components/Modal";

export default function Rent() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <MainLayout>
            <div className="title sub">Аренда оборудования</div>
            <section id="products">
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="product-inner rent">
                                <div className="d-flex">
                                    <div className="product-inner__left">
                                        <img src="img/products/product1.png" alt="Продукт1"/>
                                    </div>
                                    <div className="product-inner__right">
                                        <div className="pr-name">
                                            Хирургический шовный материал Silk 3-0
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
                        </div>
                        <div className="col-sm-12">
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
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

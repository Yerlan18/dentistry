import {MainLayout} from "../components/MainLayout";

export default function Products() {
    return (
        <MainLayout>
            <div className="title sub">Наша продукция</div>
            <section id="products">
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="product-inner">
                                <div className="product-inner__left">
                                    <img src="img/products/product1.png" alt="Продукт1"/>
                                </div>
                                <div className="product-inner__right">
                                    <div className="pr-name">
                                        Хирургический шовный материал Silk 3-0
                                    </div>
                                    <div className="pr-price">Цену уточняйте</div>
                                    <a href="" className="btn more-btn">Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="product-inner">
                                <div className="product-inner__left">
                                    <img src="img/products/product2.png" alt="Продукт2"/>
                                </div>
                                <div className="product-inner__right">
                                    <div className="pr-name">
                                        Костный материал THE Graft Granule (0,5g)
                                    </div>
                                    <div className="pr-price">Цену уточняйте</div>
                                    <a href="" className="btn more-btn">Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="product-inner">
                                <div className="product-inner__left">
                                    <img src="img/products/product1.png" alt="Продукт1"/>
                                </div>
                                <div className="product-inner__right">
                                    <div className="pr-name">
                                        Хирургический шовный материал Silk 3-0
                                    </div>
                                    <div className="pr-price">Цену уточняйте</div>
                                    <a href="" className="btn more-btn">Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

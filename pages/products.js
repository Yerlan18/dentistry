import {MainLayout} from "../components/MainLayout";
import {withTranslation} from "../i18n";

function Products({t}) {
    return (
        <MainLayout>
            <div className="title sub">{t('submenu_product')}</div>
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
                                    <div className="pr-price">{t('product_price')}</div>
                                    <a href="" className="btn more-btn">{t('product_more_btn')}</a>
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
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}
export default withTranslation('common')(Products)

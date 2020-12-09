import {MainLayout} from "../components/MainLayout";
import Form from "../components/Form";
import {withTranslation} from "../i18n";
import React from "react";

function Services({t}) {
    return (
        <MainLayout>
            <div className="title sub">{t('services_title')}</div>
            <section id="service">
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="service-block">
                            <div className="service-block__inner">
                                <div className="wrapper">
                                    <div className="wrapper__title">
                                        {t('service_inner1_title')}
                                    </div>
                                    <div className="wrapper__desc">
                                        {t('service_inner1_d1')}
                                    </div>
                                    <div>
                                        {t('service_inner1_d2')} <br/>
                                        {t('service_inner1_d3')}
                                    </div>
                                </div>
                            </div>
                            <div className="service-block__inner">
                                <div className="wrapper">
                                    <div className="wrapper__title">
                                        {t('service_inner2_title')}
                                    </div>
                                    <div className="wrapper__desc">
                                        {t('service_inner2_d1')}
                                    </div>
                                    <div>
                                        {t('service_inner2_d2')} <br/>
                                        {t('service_inner2_d3')} <br/>
                                        {t('service_inner2_d4')}
                                    </div>
                                </div>
                            </div>
                            <div className="service-block__inner">
                                <div className="wrapper">
                                    <div className="wrapper__title">
                                        {t('service_inner3_title')}
                                    </div>
                                    <div className="wrapper__desc">
                                        {t('service_inner3_d1')}
                                    </div>
                                    <div>
                                        {t('service_inner3_d2')} <br/>
                                        {t('service_inner3_d3')} <br/>
                                        {t('service_inner3_d4')}
                                    </div>
                                </div>
                            </div>
                            <div className="service-block__inner">
                                <div className="wrapper">
                                    <div className="wrapper__title">
                                        {t('service_inner4_title')}
                                    </div>
                                    <div className="wrapper__desc">
                                        {t('service_inner4_d1')}
                                    </div>
                                    <div>
                                        {t('service_inner4_d2')} <br/>
                                        {t('service_inner4_d3')} <br/>
                                        {t('service_inner4_d4')}
                                    </div>
                                </div>
                            </div>
                            <div className="service-block__inner">
                                <div className="wrapper">
                                    <div className="wrapper__title">
                                        {t('service_inner5_title')}
                                    </div>
                                    <div className="wrapper__desc">
                                        {t('service_inner5_d1')}
                                    </div>
                                    <div>
                                        {t('service_inner5_d2')} <br/>
                                        {t('service_inner5_d3')} <br/>
                                        {t('service_inner5_d4')}
                                    </div>
                                </div>
                            </div>
                            <div className="service-block__inner">
                                <div className="wrapper">
                                    <div className="wrapper__title">
                                        {t('service_inner6_title')}
                                    </div>
                                    <div className="wrapper__desc">
                                        {t('service_inner6_d1')}
                                    </div>
                                    <div>
                                        {t('service_inner6_d2')} <br/>
                                        {t('service_inner6_d3')} <br/>
                                        {t('service_inner6_d4')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="service-ct">
                <div className="title sub font-small">{t('service_ct_title')}</div>
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="ct-wrapper">
                                <img src="img/services/snapshot1.png" alt="Снимок1"/>
                                <div className="ct-wrapper__name">{t('service_ct_desc1')}</div>
                                <div className="ct-wrapper__price">3000тг</div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="ct-wrapper">
                                <img src="img/services/snapshot2.png" alt="Снимок2"/>
                                <div className="ct-wrapper__name">{t('service_ct_desc2')}</div>
                                <div className="ct-wrapper__price">3000тг</div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                            <div className="ct-wrapper">
                                <img src="img/services/snapshot3.png" alt="Снимок3"/>
                                <div className="ct-wrapper__name">{t('service_ct_desc3')}</div>
                                <div className="ct-wrapper__price">3000тг</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="title sub">{t('service_pr_title')}</div>
            <section id="service-price">
                <div className="container px-sm-3 px-0">
                    <div className="sp">
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n1')}</div>
                                <div className="price">1000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n2')}</div>
                                <div className="price">3000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n3')}</div>
                                <div className="price">1000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n4')}</div>
                                <div className="price">2000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n5')}</div>
                                <div className="price">6000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n6')}</div>
                                <div className="price">7000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n7')}</div>
                                <div className="price">8000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n8')}</div>
                                <div className="price">14000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n9')}</div>
                                <div className="price">16000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n10')}</div>
                                <div className="price">18000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n11')}</div>
                                <div className="price">12000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n12')}</div>
                                <div className="price">14000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n13')}</div>
                                <div className="price">16000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n14')}</div>
                                <div className="price">200</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n15')}</div>
                                <div className="price">500</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n16')}</div>
                                <div className="price">2000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n17')}</div>
                                <div className="price">3000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n18')}</div>
                                <div className="price">1000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n19')}</div>
                                <div className="price">2000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n20')}</div>
                                <div className="price">4000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n21')}</div>
                                <div className="price">500</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n22')}</div>
                                <div className="price">6000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n23')}</div>
                                <div className="price">7500</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n24')}</div>
                                <div className="price">2000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n25')}</div>
                                <div className="price">3000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n26')}</div>
                                <div className="price">3000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n27')}</div>
                                <div className="price">700</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n28')}</div>
                                <div className="price">2500</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n29')}</div>
                                <div className="price">2000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n30')}</div>
                                <div className="price">4000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n31')}</div>
                                <div className="price">6000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n32')}</div>
                                <div className="price">20000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n33')}</div>
                                <div className="price">2500</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n34')}</div>
                                <div className="price">5000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n35')}</div>
                                <div className="price">2000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n36')}</div>
                                <div className="price">5000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n37')}</div>
                                <div className="price">8000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n38')}</div>
                                <div className="price">15000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n39')}</div>
                                <div className="price">2000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n40')}</div>
                                <div className="price">1000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n41')}</div>
                                <div className="price">1000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n42')}</div>
                                <div className="price">15000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n43')}</div>
                                <div className="price">60000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n44')}</div>
                                <div className="price">150000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n45')}</div>
                                <div className="price">25000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n46')}</div>
                                <div className="price">60000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n47')}</div>
                                <div className="price">75000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n48')}</div>
                                <div className="price">20000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n49')}</div>
                                <div className="price">20000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n50')}</div>
                                <div className="price">2000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n51')}</div>
                                <div className="price">40000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n52')}</div>
                                <div className="price">1000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n53')}</div>
                                <div className="price">10000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n54')}</div>
                                <div className="price">15000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n55')}</div>
                                <div className="price">5000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n56')}</div>
                                <div className="price">85000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n57')}</div>
                                <div className="price">75000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n58')}</div>
                                <div className="price">7500</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n59')}</div>
                                <div className="price">3000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n60')}</div>
                                <div className="price">5000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n61')}</div>
                                <div className="price">1000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n62')}</div>
                                <div className="price">1000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n63')}</div>
                                <div className="price">4000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n64')}</div>
                                <div className="price">10000</div>
                            </div>
                        </div>
                        <div className="sp-wrapper">
                            <div className="sp-wrapper__inner">
                                <div className="name">{t('service_pr_n65')}</div>
                                <div className="price">25000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Form/>
        </MainLayout>
    );
}
export default withTranslation('common')(Services)

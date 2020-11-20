import Carousel, {Dots} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import * as React from "react";
import Link from "next/link";
import {withTranslation} from "../i18n";

class MainCarousel extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            slides: [
                (<div className="item">
                    <img src="img/main-slider1.png" alt=""/>
                        <div className="caption">
                            <p></p>
                            <Link href={'/services#contact-us'}>
                                <a className="btn-brand">Записаться на прием</a>
                            </Link>
                        </div>
                </div>),
                (<div className="item">
                    <img src="img/main-slider2.png" alt=""/>
                    <div className="caption">
                        <p></p>
                    </div>
                </div>),
                (<div className="item">
                    <img src="img/main-slider3.png" alt=""/>
                    <div className="caption">
                        <p></p>
                    </div>
                </div>),
            ],
        };
        this.onchange = this.onchange.bind(this);
    }


    onchange(value) {
        this.setState({ value });
    }

    render() {
        return (
            <div>
                <Carousel
                    value={this.state.value}
                    slides={this.state.slides}
                    onChange={this.onchange}
                    /*autoPlay={3000}
                    animationSpeed={1500}*/
                    centered
                    infinite
                    slidesPerPage={2}
                    // slidesPerScroll={2}
                    clickToChange
                    breakpoints={{
                        1000: { // these props will be applied when screen width is less than 1000px
                            slidesPerPage: 2,
                            clickToChange: false,
                        },
                        576: {
                            slidesPerPage: 1,
                            slidesPerScroll: 1,
                            clickToChange: false,
                        },
                    }}
                />
                <Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
            </div>
        );
    }
}

export default withTranslation('common')(MainCarousel)

import Carousel, {Dots} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import * as React from "react";

export default class PhotoCarousel extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0,
            slides: [
                (<img src="img/slider/slider1.png" />),
                (<img src="img/slider/slider2.png" />),
                (<img src="img/slider/slider3.png" />),
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
                    autoPlay={2000}
                    animationSpeed={1000}
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

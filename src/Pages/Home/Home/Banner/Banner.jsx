import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../../assets/english.jpg'
import img2 from '../../../../assets/japanese.jpg'
import img3 from '../../../../assets/rassan.jpg'

const Banner = () => {
    return (
        <div>
             <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
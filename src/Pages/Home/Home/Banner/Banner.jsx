import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


import img1 from '../../../../assets/english.jpg'
import img2 from '../../../../assets/japanese.jpg'
import img3 from '../../../../assets/rassan.jpg'

const Banner = () => {

    const [sliderRef] = useKeenSlider({
        loop: true,
    })

    return (
        <div className='my-5'>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <img className='w-full h-96' src={img1} alt="" />
                </div>
                <div className="keen-slider__slide number-slide2">
                    <img className='w-full h-96' src={img2} alt="" />
                </div>
                <div className="keen-slider__slide number-slide3">
                    <img className='w-full h-96' src={img3} alt="" />
                </div>
                <div className="keen-slider__slide number-slide4">
                    <img className='w-full h-96' src={img1} alt="" />
                </div>
                <div className="keen-slider__slide number-slide5">
                    <img className='w-full h-96' src={img2} alt="" />
                </div>
                <div className="keen-slider__slide number-slide6">
                    <img className='w-full h-96' src={img3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
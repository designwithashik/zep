'use client'
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import SwiperCore,{Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.min.css';

SwiperCore.use([Autoplay]);
const ImageSlider = () => {
    
    
    const images = [
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAufin.1cae185f.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAxis.f45801e9.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBajaj.6a41ddf3.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIcici.b8108647.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBOB.d87af468.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIdfc.c2795d1e.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FIndusInd.7f678225.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYesBank.44b87df7.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FStandardChartered.6a91f4a9.png&w=256&q=75',
        'https://zetapp.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmex.7272fe32.png&w=256&q=75'

    ]

    const slidesPerView = {
        0: 1,    
        768: 4,  
        1024: 5, 
      };
      const breakpoints = {
        // Configure breakpoints for different slide counts
        0: { slidesPerView: slidesPerView[0] },
        768: { slidesPerView: slidesPerView[768] },
        1024: { slidesPerView: slidesPerView[1024] },
      };
      const swiperOptions = {
        slidesPerView: slidesPerView[0],
        breakpoints: breakpoints,
        autoplay: { delay: 2000 },
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        speed: 2000, // Adjust the animation speed (in milliseconds)
      };
      
        
    
   

    return (
        <Swiper
        {...swiperOptions}
            >
            {images.map((image, index) => {
                return (
                    <SwiperSlide className="border m-4 rounded-xl"  key={index}>
                        <img src={image} alt={`Bank ${index}`} className="w-[250px] px-6 py-2 h-auto" />
                        </SwiperSlide>
                )
            })}
            
        </Swiper>
    );
};

export default ImageSlider;
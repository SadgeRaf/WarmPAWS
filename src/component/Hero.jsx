import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";


const Hero = () => {
    
    const [datas,setDatas] = useState([])
    
    useEffect(()=>{
        fetch("/data.json")
         .then((res)=>res.json())
         .then((data)=>{
            setDatas(data);
         })
    },[]);

    return (
        <div className='relative z-20 w-full px-4'>
            {datas.length > 0 && (
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    freeMode={true}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={5000}
                    effect="slide"
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 40 },
                    }}
                >
                    {datas.map((data) => (
                        <SwiperSlide key={data.serviceId} className='flex justify-center'>
                            <Card data={data} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default Hero;
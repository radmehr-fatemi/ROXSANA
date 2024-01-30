"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.scss';
import Image from 'next/image';

export default function Banner() {

    const items = ["banner1", "banner2", "banner3", "banner4", "banner5",];

    return (
        <div
        style={{ animation: "zoomInDown .6s" }}
         className='banner_container'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="banner"
                
            >
                {
                    items.map((i, index) => (

                        <SwiperSlide key={index}>
                            <Image src={`/images/banner/${i}.jpg`} width={1600} height={500} alt={`${i} photo`} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
}

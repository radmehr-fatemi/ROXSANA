"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BannerDetails.scss';

export default function BannerDetails({ images }) {

    return (
        <div
            style={{ animation: "fadeIn 1s" }}
            className='banner_details_container'>
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
                modules={[ Pagination, Navigation]}
                className="banner_details"

            >
                {
                    images.map((i, index) => (

                        <SwiperSlide key={index}>
                            <img src={i} alt="product photo" />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
}

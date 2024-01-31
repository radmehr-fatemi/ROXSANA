"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

//styles
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderSpecial.scss';

//Component
import CardHome from '@/module/card-home/CardHome';


export default function SliderSpecial({ data }) {
    return (
        <div
            style={{ animation: "fadeIn .4s" }}
            className='sliderSpecial_container'>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={10}
                // centeredSlides={true}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    900: {
                        slidesPerView:4
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    1240: {
                        slidesPerView: 6,
                        spaceBetween: 40,
                    },
                    1440: {
                        slidesPerView: 7,
                        spaceBetween: 40,
                    },
                }}

                modules={[Pagination]}
                className="sliderSpecial"
            >
                {
                    data.map((i, index) => (
                        <SwiperSlide
                            style={{ animation: `fadeInRight .4s .${index + 2}s` }}
                            key={i.id}>
                            <CardHome data={i} index={index} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <p
            style={{ animation: "bounceIn .8s .2s" }}
             className='special_products'> Special products </p>
        </div>
    );
}

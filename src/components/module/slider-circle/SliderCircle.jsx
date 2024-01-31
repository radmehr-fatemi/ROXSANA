"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderCircle.scss';

import { shortHandler } from "@/utils/functions";

export default function SliderCircle({ data }) {
    return (
        <div 
        className='sliderCircle_container'>
            <Swiper
                slidesPerView={3.5}
                spaceBetween={10}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                    640: {
                        slidesPerView: 4.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 6.5,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 9.5,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="sliderCircle"
            >
                {
                    data.map((i, index) => (

                        <SwiperSlide
                        style={{ animation: `zoomIn .4s .${index + 2}s` }}
                         key={index}>
                            <Link
                                href={`/products/category/${i}`}
                                className='sliderCircle_card' >
                                <Image src={`/images/cards/${i}.png`} width={600} height={400} alt={`${i} photo`} />
                                <p> { shortHandler(i ,12) } </p>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

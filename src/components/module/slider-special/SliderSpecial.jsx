"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import useSWR from 'swr';
import axios from 'axios';

//styles
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderSpecial.scss';

//Component
import CardHome from '@/module/card-home/CardHome';
import SmallSpinner from '@/module/spinner/small-spinner/SmallSpinner';

//function
import { filterFetch } from "@/utils/functions";

export default function SliderSpecial({ productsData }) {

    const { data, isLoading, error } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, (url) => axios.get(url).then(res => res.data))
    const newData = filterFetch(data?.products, 4);

    return (
        <div
            style={{ animation: "fadeIn .4s" }}
            className='sliderSpecial_container'>
            <Swiper
                slidesPerView={1.1}
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
                        slidesPerView: 4
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    // 1240: {
                    //     slidesPerView: 6,
                    //     spaceBetween: 40,
                    // },
                    // 1440: {
                    //     slidesPerView: 6,
                    //     spaceBetween: 40,
                    // },
                }}

                modules={[Pagination]}
                className="sliderSpecial"
            >

                {
                    error ?
                        <SmallSpinner error={"Check your connection"} /> :

                        isLoading ? (
                            <div className=' h-56 pb-20' >
                                <SmallSpinner />
                            </div>
                        ) :
                            newData.map((i, index) => (
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

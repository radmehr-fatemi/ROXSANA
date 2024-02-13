"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.scss';
import Link from 'next/link';

export default function Banner() {

    const items = ["fragrances", "smartphones", "mens-shoes", "mens-shirts", "sunglasses",];

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
                            <Link href={`/products/category/${i}`}>
                                <Image src={`/images/banner/${i}.jpg`} width={1600} height={500} alt={`${i} photo`} priority={true} />
                            </Link>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
}

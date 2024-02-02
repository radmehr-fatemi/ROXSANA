"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

//styles
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderMain.scss';

//Component
import CardHome from '@/module/card-home/CardHome';
import SmallSpinner from '../spinner/small-spinner/SmallSpinner';

const SliderMain = ({ children, data }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 10 }}
            viewport={{ once: true }}
            className="sliderMain_container"
        >
            <div className="sliderMain_h2">
                <motion.h2
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: .1 }}
                    viewport={{ once: true }}
                >
                    {children}
                </motion.h2>
            </div>

            <Swiper
                slidesPerView={1.8}
                spaceBetween={10}
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
                    1240: {
                        slidesPerView: 6,
                        spaceBetween: 40,
                    },
                    // 1440: {
                    //     slidesPerView: 7,
                    //     spaceBetween: 40,
                    // },
                }}

                modules={[Pagination]}
                className="sliderMain"
            >

                {
                    !data.length ? (
                        <div className=' h-56' >
                            <SmallSpinner />
                        </div>
                    ) :
                        data.map((i, index) => (
                            <SwiperSlide key={i.id}>
                                <motion.div
                                    initial={{ opacity: 0 ,x:6 }}
                                    whileInView={{ opacity: 1 ,x:0 }}
                                    transition={ index <= 6 ? { duration: .4 + (index / 20) } : { duration: .0 } }
                                    viewport={{ once: true }}
                                >
                                    <CardHome data={i} index={index} />
                                </motion.div>
                            </SwiperSlide>
                        ))
                }
            </Swiper>
        </motion.div>
    );
};

export default SliderMain;
"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

//Style
import styles from "./BannerFlex.module.scss";

const BannerFlex = () => {
    return (
        <div className={styles.container} >
            <div className={styles.field1} >
                <motion.a 
                initial={{ opacity: 0 ,x:-40 }}
                whileInView={{ opacity: 1 ,x:0 }}
                viewport={{ once: true }}
                transition={{ duration:.5 }}
                href={"/search"}>
                    <Image src={"/images/banner-flex/banner-m1.jpg"} width={300} height={400} alt="banner photo" />
                </motion.a>

                <motion.a 
                initial={{ opacity: 0 ,x:-40 }}
                whileInView={{ opacity: 1 ,x:0 }}
                viewport={{ once: true }}
                transition={{ duration:.5 }}
                href={"/search"}>
                    <Image src={"/images/banner-flex/banner-m2.jpg"} width={300} height={800} alt="banner photo" />
                </motion.a>
            </div>

            <div className={styles.field2}>
                <motion.a 
                initial={{ opacity: 0 ,x:40 }}
                whileInView={{ opacity: 1 ,x:0 }}
                viewport={{ once: true }}
                transition={{ duration:.5 }}
                href={"/"}>
                    <Image src={"/images/banner-flex/banner-w2.jpg"} width={300} height={800} alt="banner photo" />
                </motion.a>
                <motion.a 
                initial={{ opacity: 0 ,x:40 }}
                whileInView={{ opacity: 1 ,x:0 }}
                viewport={{ once: true }}
                transition={{ duration:.5 }}
                href={"/"}>
                    <Image src={"/images/banner-flex/banner-w1.jpg"} width={300} height={400} alt="banner photo" />
                </motion.a>
            </div>
        </div>
    );
};

export default BannerFlex;
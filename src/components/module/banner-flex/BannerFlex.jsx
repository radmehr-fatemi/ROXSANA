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
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: [0, 1, .5, 1], x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                >
                    <Link href="/">
                        <Image priority={true} className={ styles.image1 } src={"/images/banner-flex/banner-m1.jpg"} width={300} height={400} alt="banner photo" />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: [0, 1, .5, 1], x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                >
                    <Link href="/">
                        <Image priority={true} className={ styles.image2 } src={"/images/banner-flex/banner-m2.jpg"} width={300} height={800} alt="banner photo" />
                    </Link>
                </motion.div>
            </div>

            <div className={styles.field2}>
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: [0, 1, .5, 1], x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .60 }}
                >
                    <Link href="/">
                        <Image priority={true} className={ styles.image3 } src={"/images/banner-flex/banner-w2.jpg"} width={300} height={800} alt="banner photo" />
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: [0, 1, .5, 1], x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .60 }}
                >
                    <Link href="/">
                        <Image priority={true} className={ styles.image4 } src={"/images/banner-flex/banner-w1.jpg"} width={300} height={400} alt="banner photo" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default BannerFlex;
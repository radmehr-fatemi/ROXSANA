"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

//Style
import styles from "./BannerFlex2.module.scss";

const BannerFlex2 = () => {
    return (
        <div className={styles.container}>
            <Link href="/products/category/mens-watches">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: [0 ,1 ,.5 ,1], x: 0 }}
                    viewport={{ once: true }}
                >
                    <Image priority={true} src="/images/banner-flex-2/watch1.jpg" width={600} height={400} alt="banner photo" />
                </motion.div>
            </Link>

            <Link href="/products/category/womens-watches">
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: [0 ,1 ,.5 ,1], x: 0 }}
                    viewport={{ once: true }}
                >
                    <Image priority={true} src="/images/banner-flex-2/watch2.jpg" width={600} height={400} alt="banner photo" />
                </motion.div>
            </Link>
        </div>
    );
};

export default BannerFlex2;
"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

//Style
import styles from "./SidebarH.module.scss";

//Icon
import { icons } from "@/constants/icons";

//Component
import HamburgerMenu from "@/module/hamburgerMenu/HamburgerMenu";

const SidebarH = () => {

    const [clicked, setClicked] = useState(false);

    const clickHandler = () => {
        setClicked(!clicked)
    }

    return (
        <div className={styles.container} >
            <HamburgerMenu clicked={clicked} clickHandler={clickHandler} />

            <AnimatePresence>
                {
                    clicked &&
                    <motion.ul
                        className={styles.list}
                        animate={{ x: 10, y: 10, opacity: 1 }}
                        exit={{ x: -10, opacity: 0, y: -10 }}
                        transition={{
                            duration: .1
                        }}
                    >
                        <li
                            onClick={clickHandler}
                        ><Link href="/" > {icons.home} Home </Link></li>
                        <li
                            onClick={clickHandler}
                        ><Link href="/products/categories" > {icons.category} Categories </Link></li>
                        <li
                            onClick={clickHandler}
                        ><Link href="/dashboard" > {icons.user} Account </Link></li>
                        <li
                            onClick={clickHandler}
                        ><Link href="/about-us" > {icons.aboutUs} About us </Link></li>

                    </motion.ul>
                }
            </AnimatePresence>
        </div>
    );
};

export default SidebarH;

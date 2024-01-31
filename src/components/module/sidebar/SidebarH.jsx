"use client"

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
        console.log(window.location.pathname)
    }

    return (
        <div className={styles.container} >
            <HamburgerMenu clicked={clicked} clickHandler={clickHandler} />

            <AnimatePresence>
                {
                    clicked &&
                    <motion.ul
                        animate={{ x: 10, y: 10, opacity: 1 }}
                        className={styles.list}
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
                            ><Link href="/categories" > {icons.category} Categories </Link></li>
                            <li
                                onClick={clickHandler}
                            ><Link href="/dashboard" > {icons.user} Account </Link></li>

                    </motion.ul>
                }
            </AnimatePresence>
        </div>
    );
};

export default SidebarH;

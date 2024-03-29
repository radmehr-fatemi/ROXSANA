"use client"

import { icons } from "@/constants/icons";
import { motion } from "framer-motion";

//Style
import styles from "./GoToTop.module.scss";
import { Toaster } from "react-hot-toast";

const GoToTop = () => {

    const topHandler = () => { window.scroll(0, 0) }

    return (
        <motion.button
            className={styles.button}
            whileTap={{ scale: .9 }}
            onClick={topHandler}
        >
            {icons.arrowTop}
            Go to top
            <Toaster />
        </motion.button>
    );
};

export default GoToTop;
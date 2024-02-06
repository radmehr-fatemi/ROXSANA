"use client"

import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

//Action
import { CHECKOUT } from "@/redux/features/cart/cartSlice";

//Icon
import { icons } from "@/constants/icons";

//Style
import styles from "./LayoutCart.module.scss";

const LayoutCart = ({ children }) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const store = useSelector(s => s.cart);

    return (
        <div className={styles.container}>
            <Header router={router} />
            {children}
            <SidBar total={store.total} router={router} dispatch={dispatch}/>
        </div>
    );
};

export default LayoutCart;

const Header = ({ router }) => {
    return (
        <div
            style={{ animation: "fadeInLeft .4s" }}
            className={styles.header}>

            <h1
                style={{ animation: "lightSpeedInLeft .4s .6s" }}
            > Cart </h1>

            <span
                style={{ animation: "lightSpeedInLeft .4s .2s" }}
                onClick={() => router.push("/")}>
                Keep shopping
                {icons.arrowRight}
            </span>
        </div>
    )
}

const SidBar = ({ total, router, dispatch }) => {
    return (
        <div
        style={{ animation: "fadeIn .6s" }}
        className={styles.sidBar}>
            <div className={styles.field1}>
                <motion.button
                    onClick={() => dispatch(CHECKOUT())}
                    whileTap={{ scale: .9 }}
                > Proceed to pay </motion.button>

                <motion.button
                    onClick={() => router.push("/")}
                    whileTap={{ scale: .9 }}
                > Keep going </motion.button>
            </div>
            <div className={styles.field2}>
                <p> The amount payable </p>
                <span> {total} $ </span>
            </div>
        </div>
    )
}

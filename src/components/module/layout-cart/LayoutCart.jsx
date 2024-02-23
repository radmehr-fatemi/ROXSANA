"use client"

import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useContext } from "react";
import { notificationContext } from "../notification/Notification";

//Icon
import { icons } from "@/constants/icons";

//Style
import styles from "./LayoutCart.module.scss";

const LayoutCart = ({ children, session }) => {

    const router = useRouter();
    const store = useSelector(store => store.cart);
    const notification = useContext(notificationContext)

    const checkoutHandler = () => {

        if (!session) return notification({
            model: "router",
            title: "First you need to login",
            buttonOk: "Let`s login"
        });

        notification({
            model: "checkout",
            title: "Sure you`re ready to checkout ?",
            buttonCancel: "Cancel",
            buttonOk: "Yes",
        })
    }
    return (
        <div className={styles.container}>
            <Header router={router} />
            {children}
            <SidBar store={store} router={router} checkoutHandler={checkoutHandler} />
            <Toaster />
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

const SidBar = ({ store: { payable, itemsCounter, checkout }, router, checkoutHandler }) => {
    if (itemsCounter === 0) return (
        <div
            style={{ animation: "fadeIn .6s" }}
            className={styles.sidBarEmpty}>

            {
                checkout ? (
                    <Link
                        style={{ animation: "zoomIn .6s" }}
                        href="/"> Would you buy more ? </Link>
                ) : (
                    <Link
                        style={{ animation: "zoomIn .6s" }}
                        href="/"> Would you buy ? </Link>
                )}

        </div>
    )

    return (
        <div
            style={{ animation: "fadeIn .6s" }}
            className={styles.sidBar}>
            <div className={styles.field1}>
                <motion.button
                    onClick={checkoutHandler}
                    whileTap={{ scale: .9 }}
                > Proceed to pay </motion.button>

                <motion.button
                    onClick={() => router.push("/")}
                    whileTap={{ scale: .9 }}
                > Keep going </motion.button>
            </div>
            <div className={styles.field2}>
                <p> The amount payable </p>
                <span> {payable?.toFixed(2)} $ </span>
            </div>
        </div>
    )
}

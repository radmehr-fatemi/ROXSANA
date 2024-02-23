"use client"

import { discountCounter } from "@/utils/functions";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";

//Context
import { notificationContext } from "@/module/notification/Notification";

//Icon
import { icons } from "@/constants/icons";

//Action
import { ADD_ITEMS, DECREMENT, INCREMENT, REMOVE_ITEM } from "@/redux/features/cart/cartSlice";

//Style
import styles from "./CardCart.module.scss";

const CardCart = ({ data, dispatch }) => {

    const {
        title,
        price,
        discountPercentage: dis,
        thumbnail: image,
        qty,
        id
    } = data;

    const notification = useContext(notificationContext);
    
    const removeHandler = () => {
        notification({
            model:"remove",
            data:data,
            title:"Are you sure to remove it ?"
        })
    }
    
    return (
        <motion.div
            style={{ animation: "fadeIn .3s" }}
            className={styles.container}>
            <div className={styles.field1}>
                <div className={styles.field1_image}>
                    <Link href={`/products/${id}`}>
                        <img src={image} alt={`${title} photo`} />
                    </Link>
                </div>
                <div className={styles.field1_title}>
                    <h2
                        style={{ animation: "fadeInLeft .3s .2s" }}
                    > {title} </h2>
                    <p
                        style={{ animation: "fadeInLeft .3s .3s" }}
                    >
                        Product ID :
                        {`${id}22`}
                    </p>
                    <p
                        style={{ animation: "fadeInLeft .3s .4s" }}
                    >
                        Shopping time :
                        Ready to send
                    </p>
                </div>
            </div>
            <div className={styles.field2}>
                <div className={styles.field2_qty}>
                    <div>
                        <motion.span
                            style={{ animation: "bounceInUp .3s .2s" }}
                            whileTap={{ scale: .9 }}
                            onClick={qty > 1 ? () => dispatch(DECREMENT(data)) : removeHandler}
                        > {qty > 1 ? icons.minus : icons.trash} </motion.span>

                        <p
                            style={{ animation: "bounceInUp .3s .4s" }}
                        > {qty || 0} </p>

                        <motion.span
                            style={{ animation: "bounceInUp .3s .6s" }}
                            whileTap={{ scale: .9 }}
                            onClick={qty < 1 ? () => dispatch(ADD_ITEMS(data)) : () => dispatch(INCREMENT(data))}
                        > {icons.plus} </motion.span>
                    </div>
                </div>
                <div className={styles.field2_discount}>
                    <span> discount : {price - discountCounter(price, dis)} $ </span>
                    <p> {discountCounter(price, dis)} $ </p>
                </div>
            </div>
        </motion.div>
    );
};

export default CardCart;
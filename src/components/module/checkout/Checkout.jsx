"use client"

import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { discountCounter, findItem } from "@/utils/functions";
import Link from "next/link";
import { useRouter } from "next/navigation";

//Icon
import { icons } from "@/constants/icons";

//action
import { ADD_ITEMS, DECREMENT, INCREMENT } from "@/redux/features/cart/cartSlice";

const Checkout = ({ data, styles }) => {

    const { price, discountPercentage: dis, id } = data;

    const dispatch = useDispatch();
    const router = useRouter();
    const store = useSelector(store => store.cart.selectedItems);

    return (
        <div
            style={{ animation: "fadeIn 1s" }}
            className={styles.checkout} >
            <div className={styles.price}>
                <div className={styles.price1}>
                    <p> {dis} % </p>
                    <span> {price} $ </span>
                </div>
                <div className={styles.price2}>
                    <p> {discountCounter(price, dis)} $ </p>
                </div>
            </div>

            <div className={styles.button}>
                {
                    !!findItem(store, id)?.qty > 0 ? (
                        <motion.button
                            style={{ animation: "rubberBand .8s" }}
                            onClick={() => router.push("/cart")}
                        > Go to cart
                        </motion.button>
                    ) : (
                        <button
                            style={{ animation: "bounceIn .4s" }}
                            onClick={() => dispatch(ADD_ITEMS(data))}
                        >Add to cart</button>
                    )}
            </div>

            <div className={styles.quantity}>
                <motion.p
                    style={{ animation: "bounceInUp .3s" }}
                    whileTap={{ scale: .0 }}
                    onClick={() => dispatch(DECREMENT(data))}> {+(findItem(store, id)?.qty) === 1 ? icons.trash : icons.minus} </motion.p>

                <span
                    style={{ animation: "bounceInUp .3s .2s" }}
                > {!!findItem(store, id) ? findItem(store, id).qty : 0} </span>

                <motion.p
                    style={{ animation: "bounceInUp .3s .4s" }}
                    whileTap={{ scale: .0 }}
                    onClick={() => dispatch(!!findItem(store, id) ? INCREMENT(data) : ADD_ITEMS(data))}
                > {icons.plus} </motion.p>
            </div>
        </div>
    )
}

export default Checkout;
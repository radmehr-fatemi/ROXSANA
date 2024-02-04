"use client"

import { useDispatch, useSelector } from "react-redux";

//Icon
import { icons } from "@/constants/icons";

//action
import { ADD_ITEMS, DECREMENT, INCREMENT } from "@/redux/features/cart/cartSlice";
import { discountCounter, findItem } from "@/utils/functions";
import Link from "next/link";

const Checkout = ({ data, styles }) => {

    const { price, discountPercentage: dis, id } = data;

    const dispatch = useDispatch();
    const store = useSelector(store => store.cart.selectedItems);

    return (
        <div className={styles.checkout} >
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
                        <Link href="/cart"> Go to cart </Link>
                    ) : (
                        <button
                            onClick={() => dispatch(ADD_ITEMS(data))}
                        >Add to cart</button>
                    )}
            </div>

            <div className={styles.quantity}>
                <p
                    onClick={() => dispatch(DECREMENT(data))}> {icons.minus} </p>

                <span> {!!findItem(store, id) ? findItem(store, id).qty : 0} </span>

                <p
                    onClick={() => dispatch(!!findItem(store, id) ? INCREMENT(data) : ADD_ITEMS(data))}
                > {icons.plus} </p>
            </div>
        </div>
    )
}

export default Checkout;
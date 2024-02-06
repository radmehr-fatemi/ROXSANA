"use client"

import { icons } from "@/constants/icons";
import { useDispatch, useSelector } from "react-redux";

//Style
import styles from "./CartPage.module.scss";

//Action
import { CHECKOUT } from "@/redux/features/cart/cartSlice";

//Component
import CardCart from "@/module/card-cart/CardCart";

const CartPage = () => {

    const dispatch = useDispatch()
    const store = useSelector(s => s.cart);

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {
                    store.selectedItems.map(i => (
                        <CardCart key={i.id} data={i} dispatch={dispatch} />
                    ))
                }
            </div>

            <div
                style={{ animation: "fadeInUp .6s" }}
                className={styles.checkout}>
                <div className={styles.checkout_header}>
                    <h2> {icons.cart} Your shopping cart </h2>
                    <p> there are {store.itemsCounter} items in your shopping cart </p>
                </div>
                <div className={styles.checkout_total}>
                    <p> Commodity prices({store.itemsCounter}) </p>
                    <span> {store.total} $ </span>
                </div>
                <div className={styles.checkout_discounts}>
                    <p> Products discount </p>
                    <span> {store.totalDiscount.toFixed(2)} $ </span>
                </div>
                <div className={styles.checkout_payable}>
                    <p> The amount payable </p>
                    <span> {store.payable.toFixed(2)} $ </span>
                </div>

                <div className={styles.checkout_button}>
                    <button
                        onClick={() => dispatch(CHECKOUT())}
                    > Proceed to pay </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
"use client"

import CardCart from "@/components/module/card-cart/CardCart";
import { icons } from "@/constants/icons";
import { useDispatch, useSelector } from "react-redux";

//Style
import styles from "./CartPage.module.scss";

const CartPage = ({data}) => {

    const dispatch = useDispatch()
    const store = useSelector(s => s.cart);

    return (
        <div className={ styles.container }>
            <div className={ styles.cards }>
                {
                    store.selectedItems.map(i => (
                        <CardCart key={i.id} data={i} dispatch={dispatch} />
                    ))
                }
            </div>

            <div className={ styles.checkout }>
                <div className={ styles.checkout_header }>
                    <h2> {icons.cart} Your shopping cart </h2>
                    <p> there are {store.itemsCounter} items in your shopping cart </p>
                </div>
                <div className={ styles.checkout_total }>
                    <p> Commodity prices({store.itemsCounter}) </p>
                    <span> {store.total} $ </span>
                </div>
                <div className={ styles.checkout_discounts }>
                    <p> Product discount </p>
                    <span> 100 $ </span>
                </div>
                <div className={ styles.checkout_payable }>
                    <p> The amount payable </p>
                    <span> 1000 $ </span>
                </div>

                <div className={ styles.checkout_button }>
                <button> Proceed to pay </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
"use client"

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

//Icon
import { icons } from "@/constants/icons";

//Style
import styles from "./CartPage.module.scss";

//Action
import { CHECKOUT } from "@/redux/features/cart/cartSlice";

//Component
import CardCart from "@/module/card-cart/CardCart";
import { BallTriangle } from "react-loader-spinner";

const CartPage = ({session}) => {

    const dispatch = useDispatch()
    const store = useSelector(store => store.cart);
    const router = useRouter()

    const checkoutHandler = () => {
        if ( !session ) return router.push("/login");

        dispatch(CHECKOUT())
        toast.success("payment was successfully")
    }

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {
                    !!store.itemsCounter < 1 ? (
                        <EmptyCart />
                    ) : (

                        store.selectedItems.map(i => (
                            <CardCart key={i.id} data={i} dispatch={dispatch} />
                        ))
                    )
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
                    <span> {store.totalDiscount?.toFixed(2)} $ </span>
                </div>
                <div className={styles.checkout_payable}>
                    <p> The amount payable </p>
                    <span> {store.payable?.toFixed(2)} $ </span>
                </div>

                <div className={styles.checkout_button}>
                    {
                        store.itemsCounter < 1 ? (
                            store.checkout ? (
                                <Link
                                    style={{ animation: "zoomIn .6s" }}
                                    href="/"> Would you buy more ? </Link>
                            ) : (
                                <Link
                                    style={{ animation: "zoomIn .6s" }}
                                    href="/"> Would you buy ? </Link>
                            )
                        ) : (


                            <button
                                onClick={checkoutHandler}
                            > Proceed to pay </button>
                        )
                    }
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default CartPage;

const EmptyCart = () => {
    return (
        <div
            style={{ animation: "zoomIn .4s" }}
            className={styles.emptyCart}>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#00E0FF"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <h2
                style={{ animation: "zoomIn .6s .2s" }}
            > Your shopping cart is empty </h2>
            <Link
                style={{ animation: "zoomIn .6s .2s" }}
                href="/" > Keep shopping </Link>
        </div>
    )
}
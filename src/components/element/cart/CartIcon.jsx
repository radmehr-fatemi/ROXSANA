"use client"

import { icons } from "@/constants/icons";
import Link from "next/link";
import { useSelector } from "react-redux";

const CartIcon = ({ styles }) => {

    const store = useSelector(store => store.cart);

    return (
        <Link
            className={styles.cartIcon}
            style={{ animation: "zoomIn .4s .4s" }}
            href="/cart">
            {icons.cart}
            Cart

            {store.itemsCounter > 0 &&
                <span> {store.itemsCounter} </span>
            }
        </Link>
    );
};

export default CartIcon;
"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

//Style
import styles from "./SidebarM.module.scss";

//Icon
import { icons } from "@/constants/icons";
import { usePathname } from "next/navigation";

//Action
import { SET_LOCAL_STORAGE } from "@/redux/features/cart/cartSlice";

const SidebarM = () => {

    const store = useSelector(s => s.cart);
    const dispatch = useDispatch();
    const pathname = usePathname()

    useEffect(() => {
        dispatch(SET_LOCAL_STORAGE())
        console.log(pathname)
    },[pathname])

    return (
        <div
            className={styles.container}
            style={{ animation: "zoomInUp .5s" }}
        >
            <ul>
                <li
                    className={pathname === "/" ? styles.selected : styles.null}
                    style={{ animation: "bounceInUp .3s" }}
                ><Link href="/" > {icons.home} </Link></li>

                <li
                    className={pathname === "/products/search" ? styles.selected : styles.null}
                    style={{ animation: "bounceInUp .3s .2s " }}
                ><Link href="/products/search" > {icons.search} </Link></li>

                <li
                    className={pathname === "/cart" ? styles.selected : styles.null}
                    style={{ animation: "bounceInUp .3s .4s" }}
                >
                    <Link href="/cart" > {icons.cart} </Link>
                    {store.itemsCounter > 0 && <span className={styles.qtyCart}> {store.itemsCounter} </span>}
                </li>

                <li
                    className={pathname === "/products/categories" ? styles.selected : styles.null}
                    style={{ animation: "bounceInUp .3s .6s" }}
                ><Link href="/products/categories" > {icons.category} </Link></li>

                <li
                    className={pathname === "/dashboard" ? styles.selected : styles.null}
                    style={{ animation: "bounceInUp .3s .7s" }}
                ><Link href="/dashboard" > {icons.user} </Link></li>

            </ul>
        </div>
    );
};

export default SidebarM;

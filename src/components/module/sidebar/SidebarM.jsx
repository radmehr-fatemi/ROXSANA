"use client"

import Link from "next/link";

//Style
import styles from "./SidebarM.module.scss";

//Icon
import { icons } from "@/constants/icons";
import { useEffect, useState } from "react";

const SidebarM = () => {

    const [pathname, setPathname] = useState("/");

    useEffect(() => {
        const path = window.location.pathname;
        setPathname(path)
    }, [])

    const checkedHandler = (path) => {
        setPathname(path)
    }

    return (
        <div
         className={styles.container}
         style={{ animation :  "zoomInUp .5s" }}
         >
            <ul>
                <li
                    onClick={() => checkedHandler("/")}
                    className={pathname === "/" ? styles.selected : styles.null}
                    style={{ animation: "bounceInUp .3s" }}
                ><Link href="/" > {icons.home} </Link></li>

                <li
                    onClick={() => checkedHandler("/search")}
                    className={pathname === "/search" ? styles.selected : styles.null}
                    style={{ animation: "bounceInUp .3s .2s " }}
                ><Link href="/search" > {icons.search} </Link></li>

                <li
                    onClick={() => checkedHandler("/cart")}
                    className={pathname === "/cart" ? styles.selected : styles.null}
                    style={{ animation: "bounceInUp .3s .4s" }}
                ><Link href="/cart" > {icons.cart} </Link></li>

                <li
                    onClick={() => checkedHandler("/categories")}
                    className={pathname === "/categories" ? styles.selected : styles.null}
                    style={{ animation: "bounceInUp .3s .6s" }}
                ><Link href="/categories" > {icons.category} </Link></li>

                <li
                    onClick={() => checkedHandler("/")}
                    className={pathname === "/dashboard" ? styles.selected : styles.null}
                    style={{ animation: "bounceInUp .3s .7s" }}
                ><Link href="/dashboard" > {icons.user} </Link></li>

            </ul>
        </div>
    );
};

export default SidebarM;

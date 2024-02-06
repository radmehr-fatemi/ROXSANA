import Link from "next/link";

//Component
import SidebarH from "@/components/module/sidebar/SidebarH";

//Style
import styles from "./Header.module.scss";

//Icon
import { icons } from "@/constants/icons";

const Header = () => {
    
    return (
        <div
            className={styles.container}
            style={{ animation: "fadeInDown .4s" }}
        >
            <div className={styles.field1} >
                <SidebarH />

                <h1
                    style={{ animation: "zoomIn .4s .2s" }}
                ><Link href="/" > Roxana </Link></h1>

                <div
                    style={{ animation: "zoomIn .4s .3s" }}
                >
                    <Link href="/search">
                        {icons.search}
                    </Link>
                </div>
            </div>

            <div className={styles.field2}>
                <div className={styles.field2_f1}>
                    <div className={styles.field2_f1_left}>
                        <h1
                            style={{ animation: "zoomIn .4s .2s" }}
                        ><Link href="/" > Roxana </Link></h1>

                        <form
                            style={{ animation: "zoomIn .3s" }}
                            className={styles.form}>
                            {icons.search}
                            <input type="text" placeholder="search..." />
                        </form>
                    </div>
                    <div className={styles.field2_f1_right}>
                        <Link
                            style={{ animation: "zoomIn .4s .2s" }}
                            href="/auth/login">
                            {icons.user}
                            Login
                        </Link>
                        <Link
                            style={{ animation: "zoomIn .4s .4s" }}
                            href="/cart">
                            {icons.cart}
                            Cart
                        </Link>

                    </div>
                </div>

                <ul className={styles.field2_f2}>
                    <li
                        style={{ animation: "zoomIn .4s .4s" }}
                    ><Link href="/" > {icons.home} Home </Link></li>
                    <li
                        style={{ animation: "zoomIn .4s .6s" }}
                    ><Link href="/categories" > Categories </Link></li>
                    <li
                        style={{ animation: "zoomIn .4s .8s" }}
                    ><Link href="/dashboard" > About us </Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
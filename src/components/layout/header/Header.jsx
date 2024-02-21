import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

//Component
import SidebarH from "@/module/sidebar/SidebarH";
import Searcher from "@/module/searcher/Searcher";

//Style
import styles from "./Header.module.scss";

//Icon
import { icons } from "@/constants/icons";
import CartIcon from "@/element/cart/CartIcon";

const Header = async () => {

    const session = await getServerSession(authOptions);

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
                    <Link href="/products/search">
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

                        <Searcher styles={styles} />

                    </div>
                    <div className={styles.field2_f1_right}>
                        {
                            session ? (
                                <Link
                                    style={{ animation: "zoomIn .4s .2s" }}
                                    href="/dashboard">
                                    {icons.user}
                                    Account
                                </Link>
                            ) : (
                                <Link
                                    style={{ animation: "zoomIn .4s .2s" }}
                                    href="/auth/login">
                                    {icons.user}
                                    Login
                                </Link>
                            )
                        }

                        <CartIcon styles={styles} />

                    </div>
                </div>

                <ul className={styles.field2_f2}>
                    <li
                        style={{ animation: "zoomIn .4s .4s" }}
                    ><Link href="/" > {icons.home} Home </Link></li>
                    <li
                        style={{ animation: "zoomIn .4s .6s" }}
                    ><Link href="/products/categories" > Categories </Link></li>
                    <li
                        style={{ animation: "zoomIn .4s .8s" }}
                    ><Link href="/dashboard" > About us </Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
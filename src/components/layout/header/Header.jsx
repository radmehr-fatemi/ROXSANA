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
    );
};

export default Header;
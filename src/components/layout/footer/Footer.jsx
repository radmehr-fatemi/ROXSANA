import Link from "next/link";

//Style
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={ styles.container } >
            <Link href="/">
                Radmehr | Roxsana project &copy;
            </Link>
        </div>
    );
};

export default Footer;
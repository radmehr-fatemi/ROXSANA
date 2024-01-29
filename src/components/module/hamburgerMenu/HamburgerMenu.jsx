//Style
import styles from "./HamburgerMenu.module.scss";

const HamburgerMenu = ({ clicked, clickHandler }) => {
    return <div
        className={`${styles.hamburgerMenu} ${clicked && styles.hamburgerMenuTrue}`}
        onClick={clickHandler}
    >
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default HamburgerMenu
//Style
import styles from "./HamburgerMenu.module.scss";

const HamburgerMenu = ({ clicked, clickHandler }) => {
    return <div
        className={`${styles.hamburgerMenu} ${clicked && styles.hamburgerMenuTrue}`}
        onClick={clickHandler}
        style={{ animation: "zoomIn .4s" }}
        id={ clicked ? styles.hamburgerMenuTrue : styles.null }
    >
        <div className={ styles.div1 }></div>
        <div className={ styles.div2 }></div>
        <div className={ styles.div3 }></div>
    </div>
}

export default HamburgerMenu
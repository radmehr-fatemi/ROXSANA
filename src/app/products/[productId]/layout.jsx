//Style
import styles from "./layout.module.scss";

//Icon
import { icons } from "@/constants/icons";

const Layout = ({ children ,params:{productId} }) => {

    return (
        <div className={styles.container} >
            {children}

            {/* <div className={styles.sidebar} >
                <div className={styles.price}>
                    <div className={styles.price1}>
                        <p> 12% </p>
                        <span> 240$ </span>
                    </div>
                    <div className={styles.price2}>
                        <p> 222 $ </p>
                    </div>
                </div>

                <div className={styles.checkout}>
                    <button>Add to cart</button>
                </div>

                <div className={ styles.quantity }>
                    {icons.minus}
                    <span> 1 </span>
                    {icons.plus}
                </div>
            </div> */}
        </div>
    );
};

export default Layout;
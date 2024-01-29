//Style 
import styles from "./FullSpinner.module.scss";

const FullSpinner = () => {
    return (
        <div
            style={{ animation: "zoomIn .2s" }}
            className={styles.container}>
                
            <div className={styles.field}>
                <div className={styles.loader}>
                    <h1> Loading.. </h1>
                </div>

                <span
                    className={styles.shadow} ></span>
            </div>
        </div>
    );
};

export default FullSpinner;
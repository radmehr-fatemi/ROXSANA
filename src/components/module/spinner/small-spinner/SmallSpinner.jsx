//Style 
import styles from "./SmallSpinner.module.scss";

const SmallSpinner = () => {
    return (
        <div
            style={{ animation: "zoomIn .4s" }}
            className={styles.container}>
                
            <div className={styles.field}>
                <div className={styles.loader}>
                    <h1> Loading.. </h1>
                </div>
            </div>
        </div>
    );
};

export default SmallSpinner;
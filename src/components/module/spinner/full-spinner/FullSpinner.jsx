//Style 
import styles from "./FullSpinner.module.scss";

const FullSpinner = ({ error }) => {
    return (
        <div
            style={{ animation: "zoomIn .2s" }}
            className={error ? styles.containerError : styles.container}>

            <div className={styles.field}>
                <div className={styles.loader}>
                    <h1>  {error ? "Is a problem" : "Loading.." } </h1>
                </div>

                <span
                    className={styles.shadow} ></span>
            </div>
        </div>
    );
};

export default FullSpinner;
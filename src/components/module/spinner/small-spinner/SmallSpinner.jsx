//Style 
import styles from "./SmallSpinner.module.scss";

const SmallSpinner = ({ error }) => {
    return (
        <div
            style={{ animation: "zoomIn .4s" }}
            className={styles.container}>

            <div className={ error ? styles.field_error : styles.field }>
                <div className={styles.loader}>
                    {
                        error ? <h1> {error} </h1> :
                            <h1> Loading.. </h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default SmallSpinner;
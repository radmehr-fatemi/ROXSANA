import Link from "next/link";

//Style
import styles from "./CardHome.module.scss";

//function
import { shortHandler } from "@/utils/functions";

const CardHome = ({ data }) => {

    const { title, thumbnail: image, price, discountPercentage: dis, id } = data;

    return (
        <div className={styles.container}>
            <Link href={`/products/${id}`}>

                <div className={styles.image}>
                    <img src={image} alt={`${title}/photo`} />
                </div>

                <div className={styles.field}>
                    <h3> { shortHandler(title ,12) } </h3>

                    <div className={styles.prices}>
                        <p> {price} $ </p>
                        <span> {price} $ </span>
                    </div>

                    <span className={styles.discount}> {parseInt(dis)}% </span>
                </div>

            </Link>
        </div>
    );
};

export default CardHome;
"use client"

import { icons } from "@/constants/icons";
import { discountCounter } from "@/utils/functions";

//Style
import styles from "./CardCart.module.scss";
import Link from "next/link";

const CardCart = ({ data, dispatch }) => {

    const {
        title,
        price,
        rating,
        brand,
        discountPercentage: dis,
        thumbnail: image,
        qty,
        id
    } = data;

    return (
        <div className={styles.container}>
            <div className={styles.field1}>
                <div className={styles.field1_image}>
                    <Link href={`/products/${id}`}>
                        <img src={image} alt={`${title} photo`} />
                    </Link>
                </div>
                <div className={styles.field1_title}>
                    <h2> {title} </h2>
                    <p>
                        Product ID :
                        {`${id}22`}
                    </p>
                    <p>
                        Shopping time :
                        Ready to send
                    </p>
                </div>
            </div>
            <div className={styles.field2}>
                <div className={styles.field2_qty}>
                    <div>
                        <span> {icons.minus} </span>
                        <p> {qty || 0} </p>
                        <span> {icons.plus} </span>
                    </div>
                </div>
                <div className={styles.field2_discount}>
                    <span> discount : {price - discountCounter(price, dis)} $ </span>
                    <p> {discountCounter(price, dis)} $ </p>
                </div>
            </div>
        </div>
    );
};

export default CardCart;
"use client"

import { icons } from "@/constants/icons";
import { discountCounter } from "@/utils/functions";

const CardCart = ({ data, dispatch }) => {

    const {
        title,
        price,
        description,
        rating,
        brand,
        discountPercentage: dis,
        thumbnail: image,
        qty,
        id
    } = data;

    return (
        <div>
            <div>
                <div>
                    <img src={image} alt={`${title} photo`} />
                </div>
                <div>
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
            <div>
                <div>
                    <div>
                        <span> {icons.minus} </span>
                        <p> {qty} </p>
                        <span> {icons.plus} </span>
                    </div>
                </div>
                <div>
                    <span> discount : {price - discountCounter(price, dis)} $ </span>
                    <p> {discountCounter(price ,dis)} $ </p>
                </div>
            </div>
        </div>
    );
};

export default CardCart;
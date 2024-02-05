"use client"

import CardCart from "@/components/module/card-cart/CardCart";
import { icons } from "@/constants/icons";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {

    const dispatch = useDispatch()
    const store = useSelector(s => s.cart);

    console.log(store)

    return (
        <div>
            <div>
                {
                    store.selectedItems.map(i => (
                        <CardCart key={i.id} data={i} dispatch={dispatch} />
                    ))
                }
            </div>

            <div>
                <div>
                    <h2> {icons.cart} Your shopping cart </h2>
                    <p> there are {store.itemsCounter} items in your shopping cart </p>
                </div>
                <div>
                    <p> Commodity prices({store.itemsCounter}) </p>
                    <span> {store.total} $ </span>
                </div>
                <div>
                    <p> Product discount </p>
                    <span> 100 $ </span>
                </div>
                <div>
                    <p> The amount payable </p>
                    <span> 1000 $ </span>
                </div>
                <button> Proceed to pay </button>
            </div>
        </div>
    );
};

export default CartPage;
import axios from "axios";

//Component
import CartPage from "@/template/cart/CartPage";

const Cart = async () => {
    const productsData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`).then(res => res.data.products);

    return <CartPage data={productsData} />
};

export default Cart;
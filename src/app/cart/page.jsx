import axios from "axios";

//Component
import CartPage from "@/components/template/cart/CartPage";

const Cart = async () => {
    const productsData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`);

    return <CartPage data={productsData.data.products} />
};

export default Cart;
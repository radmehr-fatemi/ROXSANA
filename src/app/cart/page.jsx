import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

//Component
import CartPage from "@/template/cart/CartPage";

const Cart = async () => {
    const productsData = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products`).then(res => res.data.products);
    const session = await getServerSession(authOptions)

    return <CartPage data={productsData} session={session} />
};

export default Cart;
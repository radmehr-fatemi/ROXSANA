import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

//Component
import LayoutCart from "@/module/layout-cart/LayoutCart";
const Layout = async ({ children ,props }) => {

    const session = await getServerSession(authOptions)
    
    return (
        <LayoutCart session={session}>
            {children}
        </LayoutCart>
    );
};

export default Layout;
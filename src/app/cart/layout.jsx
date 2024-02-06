//Component
import LayoutCart from "@/components/module/layout-cart/LayoutCart";

const Layout = ({ children }) => {
    return (
        <LayoutCart>
            {children}
        </LayoutCart>
    );
};

export default Layout;
//Component
import SidebarM from "../module/sidebar/SidebarM";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <SidebarM />

            {children}
            <Footer />
        </div>
    );
};

export default Layout;
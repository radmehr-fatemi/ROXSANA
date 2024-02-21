import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Layout = async ({children}) => {

    const session = await getServerSession(authOptions);
    
    if ( session ) redirect("/")
    
    return (
        <>
            {children}
        </>
    );
};

export default Layout;
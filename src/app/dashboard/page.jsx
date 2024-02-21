import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

//Component
import DashboardPage from "@/components/template/dashboard/DashboardPage";
import { redirect } from "next/navigation";

const Dashboard = async () => {

    const session = await getServerSession(authOptions);
    
    if ( !session ) redirect("/login")
    
    return <DashboardPage email={session.user.email} />
};

export default Dashboard;
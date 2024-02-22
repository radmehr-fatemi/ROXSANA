import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UserR from "@/model/UserR";
import connectDB from "@/utils/connectDB";

//Component
import DashboardPage from "@/components/template/dashboard/DashboardPage";

const Dashboard = async () => {

    try {
        await connectDB()
    } catch (err) {
        console.log("Error to connected to DB", err)
    }

    const session = await getServerSession(authOptions);

    const user = await UserR.findOne({ email: session.user.email });

    if (!session) redirect("/login")

    return <DashboardPage userData={JSON.parse(JSON.stringify(user))} />
};

export default Dashboard;
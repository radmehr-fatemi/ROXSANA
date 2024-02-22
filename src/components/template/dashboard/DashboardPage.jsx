"use client"

import { icons } from "@/constants/icons";
import { signOut } from "next-auth/react";
import { ClimbingBoxLoader } from "react-spinners";
import Link from "next/link";

//Style
import styles from "./DashboardPage.module.scss";

const DashboardPage = ({ userData }) => {

    const { email, createdAt } = userData;

    const logoutHandler = async () => {
        await signOut()
    }

    return (
        <div
            style={{ animation: "fadeIn .6s" }}
            className={styles.container}>

            <div className={styles.flex}>
                <div className={styles.field1}>
                    <span
                        style={{ animation: "zoomIn .6s .2s" }}
                    > {icons.user} </span>

                    <h1
                        style={{ animation: "lightSpeedInLeft .8s .4s" }}
                    > {email} </h1>
                </div>

                <div className={styles.field2}>
                    <p
                        style={{ animation: "zoomIn .8s .6s" }}
                    >
                        Registery data :
                        <span> {new Date(createdAt).toLocaleDateString("en-us")} </span>
                    </p>

                    <button
                        style={{ animation: "zoomIn .8s .8s" }}
                        onClick={logoutHandler}>
                        {icons.logout}
                        Logout
                    </button>
                </div>
            </div>

            <div className={styles.field3} >
                <div style={{ animation: "zoomIn .8s 1s" }}>
                    <ClimbingBoxLoader color="#009BFF" size={20} />
                </div>

                <p
                    style={{ animation: "zoomIn .8s 1.2s" }}
                > Wanna shopping ? </p>

                <Link
                    style={{ animation: "zoomIn .8s 1.4s" }}
                    href="/">
                    Lets go
                    {icons.arrowRight}
                </Link>
            </div>
        </div>
    );
};

export default DashboardPage;
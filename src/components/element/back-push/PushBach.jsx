"use client"

import { icons } from "@/constants/icons";
import { useRouter } from "next/navigation";

//Style
import styles from "./PushBach.module.scss";

const PushBack = () => {

    const router = useRouter();

    return (
        <div className={styles.header}>
            <span onClick={() => router.back()} >
                {icons.back}
            </span>
        </div>
    )
}

export default PushBack;
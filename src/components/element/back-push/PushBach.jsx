"use client"

import { icons } from "@/constants/icons";
import { useRouter } from "next/navigation";

const PushBack = ({ styles }) => {

    const router = useRouter();

    return (
        <div
            style={{ animation: "fadeIn 1s" }}
            className={styles.header}>
            <span onClick={() => router.back()} >
                {icons.back}
            </span>
        </div>
    )
}

export default PushBack;
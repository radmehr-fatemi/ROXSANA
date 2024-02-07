import { categories } from "@/constants/string";

import Link from "next/link";

//Style
import styles from "./CategoriesPage.module.scss";

//Icon
import { icons } from "@/constants/icons";

//Component
import PushBack from "@/components/element/back-push/PushBach";

const CategoriesPage = () => {
    return (
        <div className={styles.container}>

            <PushBack />

            <div className={styles.header}>
                <h1
                    style={{ animation: "fadeInLeft .4s" }}
                > Categories </h1>
            </div>

            <div className={styles.cards}>
                {
                    categories.map((i, index) => (
                        <div
                            style={{ animation: `zoomIn .4s .${index + 2}s` }}
                            className={styles.card}
                            key={index}>
                            <img src={`/images/cards/${i}.png`} alt={`${i} photo`} />
                            <Link href={`/products/category/${i}`}> {i} </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoriesPage;
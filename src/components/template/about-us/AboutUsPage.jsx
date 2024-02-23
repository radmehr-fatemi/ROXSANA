import Image from "next/image";
import Link from "next/link";

//Icon
import { icons } from "@/constants/icons";

//Style
import styles from "./AboutUsPage.module.scss";

const AboutUsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.flex}>

                <div className={styles.field1}>
                    <Image src="/images/about-us/about-us.jpg" alt="my photo" width={400} height={600} />
                    <h2> Radmehr Fatemi </h2>
                </div>
                <div className={styles.field2}>
                    <h4>Master in :</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>React js</li>
                        <li>Next js</li>
                        <li>Redux</li>
                        <li>REST API</li>
                        <li>SASS</li>
                        <li>Tailwind css</li>
                        <li>Git & Github</li>
                        <li>...</li>
                    </ul>
                </div>
            </div>
            <div className={styles.field3}>
                <h4> Ways of communication </h4>
                <ul>
                    <Link href="https://t.me/radmehr81"> {icons.telegram} </Link>
                    <Link href="https://www.instagram.com/radmehrfatemi81"> {icons.instagram} </Link>
                    <Link href="https://github.com/radmehr-fatemi"> {icons.github} </Link>
                </ul>
            </div>
        </div>
    );
};

export default AboutUsPage;
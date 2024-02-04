//Style
import styles from "./Footer.module.scss";

//Icon
import { icons } from "@/constants/icons";

//Component
import GoToTop from "@/components/element/go-to-top/GoToTop";

const Footer = () => {
    return (
        <div className={styles.container} >
            <div className={styles.field1}>
                <div className={styles.field1_h2}>
                    <h2> ROXANA </h2>
                    <p> Phone number : 0912-000-0000 </p>
                    <span> 24-hour response to your questions and problems </span>
                </div>

                <GoToTop />

            </div>
            <div className={styles.field2}>
                <h4> Join us on social networks </h4>
                <div>
                    <a href="https://github.com/radmehr-fatemi"> {icons.instagram} </a>
                    <a href="https://github.com/radmehr-fatemi"> {icons.telegram} </a>
                </div>
            </div>
            <div className={styles.field3}>
                <h4> ROXANA online store </h4>
                <p> With the symbol of confidence from the Ministry of Mining Industry and Trade, he entered the field of online sales, relying on more than a decade. Providing quality and cost-effective products, customer satisfaction by paying attention to the customer`s voice, ease of purchase and providing various products based on fashion and even ahead of fashion are and will be Roxana`s primary principles and goals. We always try to deliver the purchased products to our dear customers in the shortest possible time with the lowest error rate and by using modern methods of order registration, shipping and packaging, and we step on this path day by day with innovation.</p>
            </div>
            <div className={styles.field4}>
                <span> All rights of this site belong to Roxana online sellers </span>
                <a href="https://github.com/radmehr-fatemi"> Radmehr &copy; </a>
            </div>
        </div>
    );
};

export default Footer;
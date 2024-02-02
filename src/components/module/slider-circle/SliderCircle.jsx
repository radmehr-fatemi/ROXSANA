import Image from 'next/image';
import Link from 'next/link';

//function
import { shortHandler } from "@/utils/functions";

//categories data
import { categories } from '@/constants/string';

//Style
import styles from "./SliderCircle.module.scss";

export default function SliderCircle() {
    return (
        <div
            id='sliderCircle_container'
            className={styles.container}
        >
            <div className={styles.cards}>
                {
                    categories.map((i, index) => index < 10 && (
                        <div
                            className={styles.card}
                            style={{ animation: `zoomIn .4s .${index + 2}s` }}
                            key={index}>
                            <Link
                                href={`/products/category/${i}`}
                                className='sliderCircle_card' >
                                <Image src={`/images/cards/${i}.png`} width={600} height={400} alt={`${i} photo`} />
                            </Link>
                            <p> {shortHandler(i, 12)} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


import {FC, useState} from "react";

import styles from "./style.module.scss";

import {CarouselItem} from "@/components/Review/CarouselItem/CarouselItem";
import {carouselItem} from "@/components/Review/CarouselItem/date";


export const Review: FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const next = () => {
        if(selectedIndex <= carouselItem.length)
            setSelectedIndex(selectedIndex + 1)
        if(selectedIndex === carouselItem.length)
            setSelectedIndex(1)
    }

    const prev = () => {
        if(selectedIndex === carouselItem.length){
            setSelectedIndex(1)
        }else {
            setSelectedIndex(selectedIndex + 1)
        }
    }
    return(
        <section className={styles.wrap}>
            <h3>Review</h3>
            <div className={styles.grid}>
                <div>
                    <p className={styles.title}>Best courses ever</p>
                    <p className={styles.description}>
                        Good course, up to this point, still ongoing. The only downside,
                        why I gave 4,5 stars, because the "teacher" sometimes feel like,
                        he is lost, and takes up quite a time, to correct himself, and check back etc.
                    </p>
                </div>
                <div className={styles.carousel}>
                    <div className={styles.flex}>
                    <div>
                        <span className={styles.active_index}>{selectedIndex}/</span>
                        <span>3</span>
                    </div>
                    <div className={styles.btn}>
                        <div className={styles.left} onClick={prev}></div>
                        <div className={styles.right} onClick={next}></div>
                    </div>
                    </div>
                    <div className={styles.flex}>
                       <CarouselItem carouselItem={carouselItem} selectedIndex={selectedIndex}/>
                    </div>
                </div>
            </div>
        </section>

    )
}
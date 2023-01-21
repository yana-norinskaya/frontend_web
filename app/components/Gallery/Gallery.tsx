import {FC} from "react";

import styles from "./style.module.scss";

import Image from "next/image";

import develop1 from "@/assets/gallery/developer.svg";
import develop2 from "@/assets/gallery/developer2.svg";
import develop3 from "@/assets/gallery/deloper3.svg";
import develop4 from "@/assets/gallery/developer4.svg";

export const Gallery: FC = () => {
    return(
        <section className={styles.wrap}>
            <h3>Gallery</h3>
        <div className={styles.grid}>
            <p className={styles.block1}>By the end of this course,
                you will be able to develop and publish
                your very own Google Chrome extension!
                In this course we will focus on coding exercises and projects.
            </p>
            <Image className={styles.block2} src={develop4} alt="develop4" width={600} height={434}/>
            <Image className={styles.block3} src={develop2} alt="develop2" width={288} height={209}/>
            <Image className={styles.block4} src={develop1} alt="develop1" width={288} height={209}/>
            <Image className={styles.block5} src={develop3} alt="develop3" width={288} height={434}/>
            <p className={styles.block6}>If you would like to learn web development
                and get a job in the tech industry,
                you are going to LOVE this course!
                Learn HTML, CSS, JavaScript, Bootstrap and more with over
                15 hours of HD video tutorials! This course was designed to be
                extremely beginner friendly. We will begin with the very basics
                of HTML and build a simple web page.
            </p>
        </div>
        </section>
    )
}
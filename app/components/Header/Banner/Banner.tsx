import {FC} from "react";

import styles from "../style.module.scss";

export const Banner: FC = () => (
            <div className={styles.banner_wrap}>
                <div className={styles.flex}>
                <h1 className={styles.title}>Front-End </h1>
                    <p className={styles.info}>
                        Make UIs and websites beautiful,
                        functional, and fast.
                        Cover all the topics that expensive
                        bootcamps teach (and more).
                    </p>
                </div>
                <div className={styles.flex}>
                <div className={styles.btn}>Start my career change</div>
                    <h2 className={styles.title}>Developer </h2>
                </div>
                <p className={styles.courses}>Courses</p>
            </div>
    )
import {FC} from "react";

import styles from "./style.module.scss";

import {Skills} from "@/components/Technologies/Skills/Skills";

export const Technologies: FC = () => (
        <section className={styles.wrap}>
           <h3>Programming technologies</h3>
            <p>
                By the end, you’ll have the portfolio and interview skills
                you need to start your new career.
            </p>
            <div className={styles.flex}>
            <Skills/>
            </div>
            <div className={styles.blur}></div>
        </section>
    )
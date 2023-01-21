import {FC} from "react";

import styles from "./style.module.scss";

import {Steps} from "@/components/Steps/Step/Step";

export const StepsSection: FC = () => (
        <section className={styles.wrap}>
            <h3>Steps</h3>
             <div className={styles.grid}>
                <Steps />
             </div>
        </section>
    )
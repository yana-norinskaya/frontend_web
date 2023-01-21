import {FC} from "react";

import styles from "../style.module.scss";

import {steps} from "@/components/Steps/Step/date";

export const Steps: FC = () => {
    return(
        <>
            {steps.map(step =>
                <div className={styles.box} id={step.id}>
                    <p className={styles.number}>{step.number}</p>
                    <p className={styles.title}>{step.title}</p>
                    <p className={styles.description}>{step.description}</p>
                </div>
            )}
        </>

    )
}
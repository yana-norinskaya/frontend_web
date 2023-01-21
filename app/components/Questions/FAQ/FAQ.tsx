import {FC} from "react";

import styles from "../style.module.scss";

import Image from "next/image";

import iconPlus from "@/assets/iconPlus.svg";
import iconMinus from "@/assets/iconMinus.svg";

export const FAQ: FC = () => (
        <div className={styles.box}>
            <div className={styles.question}>
                <div>
                <p className={styles.title}>What is the price?</p>
                <p className={styles.description}>Front-end engineers work closely with designers
                    to make websites beautiful, functional, and fast.
                    This Career Path will teach you not only the necessary
                    languages and technologies, but how to think like a front-end engineer, too.
                </p>
                </div>
                <Image className={styles.img} src={iconPlus} alt="iconPlus"/>
            </div>
            <div className={styles.question}>
                <p className={styles.title}>What is the price?</p>
                <Image className={styles.img} src={iconMinus} alt="iconMinus"/>
            </div>
            <div className={styles.question}>
                <p className={styles.title}>What is the price?</p>
                <Image className={styles.img} src={iconMinus} alt="iconMinus"/>
            </div>
            <div className={styles.question}>
                <p className={styles.title}>What is the price?</p>
                <Image className={styles.img} src={iconMinus} alt="iconMinus"/>
            </div>
            <div className={styles.question}>
                <p className={styles.title}>What is the price?</p>
                <Image className={styles.img} src={iconMinus} alt="iconMinus"/>
            </div>
        </div>
    )
import {FC} from "react";

import {Mentors} from "@/components/AboutUs/Mentors";

import styles from "./style.module.scss";

import Image from "next/image";

import bgFront from "@/assets/bgFront.svg";
import line from "@/assets/line.svg";

export const AboutUs: FC = () => (
        <section className={styles.wrap}>
            <h3 className={styles.tittle}>About Us</h3>
            <div className={styles.flex}>
            <div className={styles.mentors}>
                <p>Mentors</p>
            <Image className={styles.line} src={line} alt="line"/>
                <div className={styles.flex}>
            <Mentors/>
                </div>
            </div>
            <p className={styles.info}>Front-end engineers work closely with designers to
                make websites beautiful, functional, and fast.
                This Career Path will teach you not only the necessary
                languages and technologies, but how to think like a front-end engineer, too.
            </p>
            </div>
            <Image className={styles.bg} src={bgFront} alt="bgFront"/>
        </section>
    )
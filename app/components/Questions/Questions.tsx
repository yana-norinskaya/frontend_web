import {FC} from "react";

import styles from "./style.module.scss";

import Image from "next/image";

import question from "@/assets/question.svg";

import {FAQ} from "@/components/Questions/FAQ/FAQ";

export const Questions: FC = () => (
        <section className={styles.wrap}>
            <h3>Frequently Asked Questions</h3>
            <div className={styles.flex}>
                <div>
                    <p className={styles.txt}>Do you have any kind of questions? We are here to help.</p>
                    <Image className={styles.big_img} src={question} alt="question"/>
                </div>
                <FAQ/>
            </div>
        </section>
     )
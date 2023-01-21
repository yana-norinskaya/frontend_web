import {FC} from "react";

import Image from "next/image";

import styles from "../style.module.scss";

import {mentorsDate} from "@/components/AboutUs/Mentors/date";

export const Mentors: FC = () => {
    return(
        <>
            {
                mentorsDate.map(mentor =>
                    <div key={mentor.id} className={styles.box}>
                        <Image className={styles.img}
                               src={mentor.img}
                               alt={mentor.name}
                               width={184}
                               height={184}/>
                        <p className={styles.name}>{mentor.name}</p>
                        <p className={styles.description}>{mentor.description}</p>
                    </div>
                )
            }
        </>
    )
}
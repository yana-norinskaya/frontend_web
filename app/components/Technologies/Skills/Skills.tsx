import {FC} from "react";

import styles from "../style.module.scss";

import Image from "next/image";

import {skills} from "@/components/Technologies/Skills/date";

export const Skills: FC = () => {
    return(
        <>
            {skills.map(skill =>
                <div className={styles.box} key={skill.id}>
                    <Image src={skill.img} alt={skill.name}/>
                    <p className={styles.name}>{skill.name}</p>
                </div>
            )}
        </>

    )
}
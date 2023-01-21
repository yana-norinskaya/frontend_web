import {FC} from "react";

import {Navigation, Banner, Logo} from "@/components/index";

import styles from "./style.module.scss";

export const Header: FC = () => (
       <header className={styles.header}>
           <div className={styles.wrap}>
              <Logo/>
                <Navigation />
           </div>
                <Banner/>
       </header>
   )
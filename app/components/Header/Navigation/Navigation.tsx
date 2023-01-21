import {FC} from "react";

import Link from "next/link";

import styles from "../style.module.scss";

export const Navigation: FC = () => (
        <nav className={styles.nav}>
          <Link href="/">
                  About
          </Link>
            <Link href="/">
                Programs
            </Link>
            <Link href="/">
                Steps
            </Link>
            <Link href="/">
                Questions
            </Link>
            <Link href="/">
                Get in touch
            </Link>
        </nav>
    )
import {FC} from "react";
import styles from "./style.module.scss";

import Image from "next/image";
import Link from "next/link";

import {Logo} from "@/components/index";

import facebook from "@/assets/footerIcon/facebook.svg";
import cat from "@/assets/footerIcon/cat.svg";
import twitter from "@/assets/footerIcon/twitter.svg";
import linkedin from "@/assets/footerIcon/linkedin.svg";


export const Footer: FC = () => (
       <footer className={styles.footer}>
           <div className={styles.wrap}>
                <div className={styles.logo}>
                    <Logo/>
                    <p>Wisconsin Ave, Suite 700
                        Chevy Chase, Maryland 20815c</p>
                </div>
               <div className={styles.flex}>
                   <div>
                       <p className={styles.title}>Company</p>
                       <ul>
                           <li>
                               <Link href="/">About Us</Link>
                           </li>
                           <li>
                               <Link href="/">Steps</Link>
                           </li>
                           <li>
                               <Link href="/">FAQs</Link>
                           </li>
                       </ul>
                   </div>
                   <ul className={styles.center}>
                       <li>
                           <Link href="/">Review</Link>
                       </li>
                       <li>
                           <Link href="/">Gallery</Link>
                       </li>
                   </ul>
                   <div>
                       <p className={styles.title}>Social media</p>
                       <div className={styles.icon}>
                           <Link href="/">
                               <Image src={facebook} alt="facebook"/>
                           </Link>
                           <Link href="/">
                               <Image src={cat} alt="cat"/>
                           </Link>
                           <Link href="/">
                               <Image src={twitter} alt="twitter"/>
                           </Link>
                           <Link href="/">
                               <Image src={linkedin} alt="linkedin"/>
                           </Link>
                           </div>
                   </div>
               </div>
           </div>

       </footer>
    )

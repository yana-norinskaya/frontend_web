import {FC} from "react";

import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/logo.svg";

export const Logo: FC = () => (
    <Link href="/">
        <Image src={logo} alt="logo"/>
    </Link>
)
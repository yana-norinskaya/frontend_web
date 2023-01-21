import {FC} from "react";

import styles from "@/components/Review/style.module.scss";

import cn from "clsx";

import Image from "next/image";


interface ICarouselItem{
    carouselItem: {id: string, img: string}[],
    selectedIndex: number,

}

export const CarouselItem: FC<ICarouselItem> = ({carouselItem, selectedIndex}) => {
    return(
        <>
            {carouselItem.map(({img, id}, index) =>
                <Image
                    key={id}
                    className={cn(selectedIndex === index + 1 ? [styles.img_active]: [styles.img])}
                    src={img}
                    alt="picture"/>
            )}
        </>
    )
}
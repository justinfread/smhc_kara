import { useEffect, useState } from "react";
import styles from "./HeroSlideshow.module.css";

import img1 from "../../../assets/heroChurchPic.jpg";
import img2 from "../../../assets/heroYardPic.jpg";
import img3 from "../../../assets/philippenes1.jpeg";
import img4 from "../../../assets/philippenes2.jpg";
import img5 from "../../../assets/philippenes3.jpg";

export default function HeroSlideshow() {
  const images = [img1, img2, img3, img4, img5];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((previousIndex) => {
        return (previousIndex + 1) % images.length;
      });
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <div className={styles.imageWrapper}>
      {images.map((image, index) => {
        const isActive = index === activeIndex;

        return (
          <img
            key={image}
            src={image}
            alt="A slideshow of pictures of Karla and her staff"
            className={`${styles.image} ${isActive ? styles.active : ""}`}
          />
        );
      })}
    </div>
  );
}
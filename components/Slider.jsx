import { Carousel } from 'react-bootstrap';
import Image from "next/legacy/image";
import styles from '../styles/Slider.module.css';

export default function Slider() {
  return (
    <div className={styles.sliderContainer}>
      <Carousel fade controls={false} indicators={false} interval={5000}>
        {[1, 2, 3, 4].map((num) => (
          <Carousel.Item key={num} className={styles.carouselItem}>
            <div className={styles.imageWrapper}>
              <Image 
                src={`/images/shoe-${num}.png`} 
                alt={`shoe ${num}`} 
                width={400} 
                height={260} 
                layout="intrinsic"
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

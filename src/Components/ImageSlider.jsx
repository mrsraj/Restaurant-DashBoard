import { useState, useEffect } from "react";
import style from '../Styles/ImageSlider.module.css'

const images = [
    { id: 1, src: "/ImageSliding/frontImage.jpg", alt: "Dish 1" },
    { id: 2, src: "/ImageSliding/frontImage2.jpg", alt: "Dish 2" },
    // { id: 3, src: "/ImageSliding/frontImage.jpg", alt: "Dish 3" },
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className={style.image_slider}>
            <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className={style.slider_image}
            />
        </div>
    );
};

export default ImageSlider;
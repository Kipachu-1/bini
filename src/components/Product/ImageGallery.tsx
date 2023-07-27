"use client";
import Image from "next/image";
import { useRef, useState } from "react";
interface ImageGalleryProps {
  images: string[];
  layout?: "horizontalScroll" | "verticalScroll" | "grid";
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  layout = "verticalScroll",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef(0);
  const touchMoveX = useRef(0);
  const touchDifference = useRef(0);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchMoveX.current = event.touches[0].clientX;
    touchDifference.current = touchMoveX.current - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchDifference.current > 50 && currentImageIndex > 0) {
      // Swipe right
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    } else if (
      touchDifference.current < -50 &&
      currentImageIndex < images.length - 1
    ) {
      // Swipe left
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }

    // Reset touch tracking
    touchStartX.current = 0;
    touchMoveX.current = 0;
    touchDifference.current = 0;
  };

  const translateXValue = currentImageIndex * -100;

  return (
    <div
      className="jGallery w-full max-w-full min-w-full overflow-hidden aspect-square md:aspect-auto relative"
      ref={galleryRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="absolute md:relative h-full md:h-fit w-full inline-flex md:grid grid-cols-2 md:gap-1 transition-transform duration-[300ms] ease-in-out"
        style={{
          transform: `translateX(${translateXValue}%)`,
        }}
      >
        {images.map((image: string, index: number) => (
          <div
            key={image}
            className={`w-full aspect-square relative min-w-full flex-none`}
            style={{
              transitionDelay: `${
                index === currentImageIndex ? "0ms" : "300ms"
              }`, // Adjust the delay time as desired
            }}
          >
            <Image src={image} fill alt="" quality={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

import Image from 'next/image';
import React, { useEffect,useState } from 'react';

export interface SliderImage {
  src: string;
  alt?: string;
  caption?: string;
}

interface ImageSliderProps {
  images: Array<string | SliderImage>;
  interval?: number;
  containerClassName?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  interval = 3000,
  containerClassName = "max-w-4xl",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageRatios, setImageRatios] = useState<Record<string, number>>({});
  const normalizedImages = images.map((image, index) =>
    typeof image === 'string'
      ? {
          src: image,
          alt: `Slider image ${index + 1}`,
        }
      : image
  );
  const hasMultipleImages = normalizedImages.length > 1;

  useEffect(() => {
    if (normalizedImages.length < 2) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % normalizedImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [normalizedImages.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? normalizedImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % normalizedImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  const currentImage = normalizedImages[currentIndex];

  return (
    <div className={`relative mx-auto w-full ${containerClassName}`}>
      {/* Slider Container */}
      <div
        className="relative overflow-hidden rounded-lg bg-gray-100"
        style={{ aspectRatio: imageRatios[currentImage?.src] || "3 / 2" }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {normalizedImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <Image
                src={image.src}
                alt={image.alt || `Slider image ${index + 1}`}
                fill
                className="object-contain"
                onLoad={(event) => {
                  const { naturalWidth, naturalHeight } = event.currentTarget;
                  if (naturalWidth && naturalHeight) {
                    const ratio = naturalWidth / naturalHeight;
                    setImageRatios((previous) => previous[image.src] === ratio
                      ? previous
                      : { ...previous, [image.src]: ratio });
                  }
                }}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {hasMultipleImages && <><button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button></>}
      </div>

      {currentImage?.caption ? (
        <p className="mt-4 text-center text-sm text-gray-600">{currentImage.caption}</p>
      ) : null}

      {/* Dots Indicator */}
      {hasMultipleImages && <div className="flex justify-center mt-4 space-x-2">
        {normalizedImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-gray-900 w-8'
                : 'bg-gray-400 hover:bg-gray-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>}
    </div>
  );
};

export default ImageSlider;

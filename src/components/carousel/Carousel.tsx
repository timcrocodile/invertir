import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import CarouselItem from "../carouselItem";
import { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { steps, stepsIndex } from "@/mocks/steps";

const Carousel = () => {
  const [carouselPosition, setCarouselPosition] = useState<number>(0);

  const next = (): void =>
    carouselPosition > 2
      ? setCarouselPosition(0)
      : setCarouselPosition((prev) => prev + 1);

  const prev = (): void =>
    carouselPosition === 0
      ? setCarouselPosition(3)
      : setCarouselPosition((prev) => prev - 1);

  return (
    <div className="flex gap-4 w-[70vw] ">
      <button
        className="text-2xl self-center hover:text-gray md:hidden"
        onClick={prev}
      >
        <SlArrowLeft />
      </button>
      <div className="setPageContent h-[250px]  md:h-auto md:w-full md:flex-row ">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce={true}
          duration={1.5}
          animatePreScroll={false}
        >
          <CarouselItem
            data={steps[carouselPosition]}
            display="flex md:hidden"
          />
        </AnimationOnScroll>

        {stepsIndex.map((item, i) => (
          <AnimationOnScroll
            animateIn="animate__bounceInLeft"
            delay={i * 200}
            key={item}
            animateOnce={true}
            animatePreScroll={false}
          >
            <CarouselItem
              data={steps[item]}
              key={item}
              display="hidden md:flex"
            />
          </AnimationOnScroll>
        ))}
      </div>
      <button
        className="text-2xl self-center hover:text-gray md:hidden"
        onClick={next}
      >
        <SlArrowRight />
      </button>
    </div>
  );
};

export default Carousel;

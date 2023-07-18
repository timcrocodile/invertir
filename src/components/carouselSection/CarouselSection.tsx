import Carousel from "../carousel/Carousel";
import { BsBarChartSteps } from "react-icons/bs";

const CarouselSection = () => {
  return (
    <div className="setPage relative  ">
      <Carousel />
      <BsBarChartSteps className="absolute left-8 md:left-8  bottom-14 md:bottom-12 text-[250px] md:text-[400px] text-second -z-10" />
    </div>
  );
};

export default CarouselSection;

import FaqItem from "../faqItem";
import { faq } from "@/mocks/faq";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const FaqSection = () => {
  return (
    <div className="setPage " id="faq">
      <div className="setPageContent w-[85%] md:w-[70%] ">
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          animateOnce={true}
          duration={1.5}
          animatePreScroll={false}
        >
          <h2 className="text-center text-3xl font-bold mb-24">FAQ</h2>
        </AnimationOnScroll>
        {faq.map((item) => (
          <FaqItem data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;

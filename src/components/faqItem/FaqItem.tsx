import { faqType } from "@/mocks/faq";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const FaqItem = (props: { data: faqType }) => {
  const { data } = props;
  const [showQuestion, setShowQuestion] = useState<boolean>(false);

  const onHandleShow = (): void => {
    setShowQuestion((prev) => !prev);
  };

  return (
    <div id={data.anchor}>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <div
          className="flex justify-between items-baseline accordion-item cursor-pointer "
          onClick={onHandleShow}
        >
          <h3
            className={`flex flex-row-reverse items-center font-bold accordion-header md:text-2xl  h-[140px]    ${
              showQuestion && "h-[100px]"
            }`}
          >
            {data.question}
            <span className="-ml-4 text-xs mr-3 text-gray ">♦︎</span>
          </h3>
          <div className="px-4">
            <SlArrowDown
              className={`text-xl transition-all"  ${
                showQuestion && "rotate-180 "
              } `}
            />
          </div>
        </div>
        <div
          className={`flex gap-4 pl-10 py-8 overflow-hidden   ${
            !showQuestion && "hidden"
          }`}
        >
          <div className="h-auto  border-l-4 border-gray"> </div>
          <p>{data.answer} </p>
        </div>
        <hr className="text-gray mt-2" />
      </AnimationOnScroll>
    </div>
  );
};

export default FaqItem;

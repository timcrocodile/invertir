import { infoType } from "@/mocks/info";
import { SlArrowDown } from "react-icons/sl";
import { Key, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const InfoItem = (props: { data: infoType }) => {
  const { data } = props;

  const [showInfo, setShowInfo] = useState<boolean>(false);

  const onHandleShowInfo = (): void => {
    setShowInfo((prev) => !prev);
  };

  return (
    <div>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <div
          className="flex justify-between items-baseline accordion-item cursor-pointer "
          onClick={onHandleShowInfo}
        >
          <h3
            className={`flex flex-row-reverse items-center font-bold accordion-header md:text-2xl h-[120px] ${
              showInfo && "h-[80px]"
            }`}
          >
            {data.title}
            <span className="-ml-4 text-xs mr-3 text-gray ">♦︎</span>
          </h3>
          <div className="px-4">
            <SlArrowDown
              className={`text-xl transition-all"  ${
                showInfo && "rotate-180 "
              } `}
            />
          </div>
        </div>
        <div
          className={`flex flex-col gap-4 pl-10 py-8 overflow-hidden   ${
            !showInfo && "hidden"
          }`}
        >
          <div className="h-auto  border-l-4 border-gray "> </div>
          <p>{data.content} </p>
          <ul className="list-decimal">
            {data.subContent &&
              data.subContent.map((item) => {
                return (
                  <li key={item.id} className="pb-4 ">
                    <h3 className="font-bold w-[100%] inline">{item.title}</h3>
                    <p>{item.subTitle}</p>
                    <ul className="flex flex-col list-square ml-5">
                      {item.text &&
                        item.text.map((item: any) => {
                          return (
                            <li key={item.id} className="pb-4 ">
                              {item.text}
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                );
              })}
          </ul>
        </div>
        <hr className="text-gray mt-2" />
      </AnimationOnScroll>
    </div>
  );
};

export default InfoItem;

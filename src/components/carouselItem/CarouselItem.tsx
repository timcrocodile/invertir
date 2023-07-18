import { stepsType } from "@/mocks/steps";

const CarouselItem = (props: { data: stepsType; display: string }) => {
  const { data, display } = props;

  return (
    <div className={`${display} h-full gap-10 md:w-[250px] `}>
      <div className="h-full  border-l-4 border-gray"> </div>
      <div className="pb-12">
        <h2 className="text-gray drop-shadow-lg text-5xl  pb-8 ">
          {data.id}. <span className="text-first text-2xl"> STEP</span>
        </h2>
        <p className="md:text-pDesk ">{data.do}</p>
      </div>
    </div>
  );
};
export default CarouselItem;

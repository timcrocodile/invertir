import { FaArrowRight } from "react-icons/fa";
import { wordType } from "@/mocks/words";
import { Dispatch } from "react";

const Worditem = (props: {
  data: wordType;
  selected: string;
  setSelected: Dispatch<React.SetStateAction<string>>;
}) => {
  const { data, selected, setSelected } = props;

  const onHandleSelect = (): void => setSelected(data.title);

  return (
    <div className="flex flex-col md:flex-row  md:gap-20  ">
      <h2
        className={`text-4xl uppercase flex gap-2  cursor-pointer relative md:text-[4vw] ${
          selected === data.title && "text-strongGray"
        }`}
        onClick={onHandleSelect}
      >
        <FaArrowRight
          className={`text-xl absolute -left-8 top-2 ${
            selected !== data.title && "hidden"
          }`}
        />
        {data.title}
      </h2>

      <p
        className={` text-xl p-4 md:hidden  ${
          selected !== data.title && "hidden"
        }`}
      >
        {data.content}
      </p>
    </div>
  );
};
export default Worditem;

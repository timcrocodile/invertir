import { Dispatch, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { onClickAbout } from "@/utils/func";

const List = (props: {
  display: string;
  direction: string;
  gap: string;
  align: string;
  text: string;
  height: string;
  setOpenMenu: Dispatch<React.SetStateAction<boolean>>;
  scroll: number;
}) => {
  const { display, direction, gap, align, text, height, setOpenMenu, scroll } =
    props;

  const [showSubtitle, setShowSubtitle] = useState<boolean>(false);

  const onHandleClose = (): void => {
    setOpenMenu((prev) => !prev);
  };

  const onHandleChangeStatus = (): void => {
    setShowSubtitle((prev) => !prev);
  };

  const someFunction = (): void => {
    setOpenMenu((prev) => !prev);
    setShowSubtitle((prev) => !prev);
  };

  return (
    <ul
      className={`${display} ${direction} ${gap} ${align} ${text} ${height} flex md:flex  justify-evenly   w-1/2 text-white font-bold transition-all duration-1000 -mt-[20vh] md:mt-0`}
    >
      <li onClick={onHandleClose} className="cursor-pointer">
        <hr className="w-[95vw] p-1 md:hidden" />
        <div
          className="flex  justify-between items-baseline hover:text-gray"
          onClick={(e) => onClickAbout(e, "home")}
        >
          <a className=" md:hover:underline underline-offset-8 ">Home</a>
          <FaArrowRight className="md:hidden  text-xl" />
        </div>
      </li>
      <li onClick={onHandleClose} className="cursor-pointer">
        <hr className="w-[95vw] p-1 md:hidden" />
        <div
          className="flex  justify-between items-baseline hover:text-gray"
          onClick={(e) => onClickAbout(e, "chiSono")}
        >
          <a className=" md:hover:underline underline-offset-8">Chi sono</a>
          <FaArrowRight className="md:hidden text-xl" />
        </div>
      </li>
      <li className="cursor-pointer">
        <hr className="w-[95vw] p-1 md:hidden" />
        <div className="" onClick={onHandleChangeStatus}>
          <div className=" flex  justify-between items-baseline hover:text-gray  md:w-[88px] ">
            <a className="md:hover:underline underline-offset-8 relative cursor-pointer">
              Servizi
              <span
                className={`hidden absolute  -right-7 top-1 md:-right-4 md:block md:top-0 transition-all cursor-pointer  ${
                  showSubtitle &&
                  "rotate-180 -translate-y-2  md:-translate-y-1 "
                } `}
              >
                {"^"}
              </span>
            </a>
            <SlArrowDown
              className={`md:hidden text-xl  transition-all "  ${
                showSubtitle && "rotate-180 "
              } `}
            />
          </div>
          <ul
            className={` text-lg flex flex-col items-start gap-1 mt-2 ml-4 transition-all md:items-start md:absolute md:text-xl md:ml-0   ${
              !showSubtitle && " hidden  "
            } ${scroll > 80 && "md:bg-first md:p-2 mdrounded"}`}
          >
            <li onClick={someFunction}>
              <a
                className="md:md:hover:underline underline-offset-8 relative z-30 hover:text-gray "
                onClick={(e) => onClickAbout(e, "analisi")}
              >
                Area analisi
              </a>
            </li>
            <li onClick={someFunction}>
              <a
                className="md:hover:underline underline-offset-8 relative z-30 hover:text-gray "
                onClick={(e) => onClickAbout(e, "pianificazione")}
              >
                Area pianificazione
              </a>
            </li>
            <li onClick={someFunction}>
              <a
                className="md:hover:underline underline-offset-8 relative z-30 hover:text-gray "
                onClick={(e) => onClickAbout(e, "investimenti")}
              >
                Area investimenti
              </a>
            </li>
            <li onClick={someFunction}>
              <a
                className="md:hover:underline underline-offset-8 relative z-30 hover:text-gray "
                onClick={(e) => onClickAbout(e, "altro")}
              >
                Altro
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`absolute top-0 left-0 w-screen h-screen z-20  bg-transparent ${
            !showSubtitle && "hidden"
          }`}
          onClick={onHandleChangeStatus}
        ></div>
      </li>
      <li onClick={onHandleClose} className="cursor-pointer">
        <hr className="w-[95vw] p-1 md:hidden" />
        <div
          className="flex  justify-between items-baseline hover:text-gray"
          onClick={(e) => onClickAbout(e, "faq")}
        >
          <a className="md:hover:underline underline-offset-8">FAQ</a>
          <FaArrowRight className="md:hidden  text-xl" />
        </div>
      </li>
      <li onClick={onHandleClose} className="cursor-pointer">
        <hr className="w-[95vw] p-1 md:hidden" />
        <div
          className="flex  justify-between items-baseline hover:text-gray"
          onClick={(e) => onClickAbout(e, "contatti")}
        >
          <a className="md:hover:underline underline-offset-8">Contatti</a>
          <FaArrowRight className="md:hidden  text-xl" />
        </div>
        <hr className="w-[95vw] p-1 md:hidden" />
      </li>
    </ul>
  );
};

export default List;

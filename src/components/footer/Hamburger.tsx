import { Dispatch } from "react";
import List from "../list";

const Hamburger = (props: {
  openMenu: boolean;
  setOpenMenu: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { openMenu, setOpenMenu } = props;

  return (
    <div
      className={` ${
        openMenu ? " right-[0px] " : "h-0 w-0    "
      } z-20 fixed h-screen w-screen  bg-first top-[0px] right-[-1000px] p-3  flex justify-center items-center md:hidden  transition-all duration-[1300ms]`}
    >
      <List
        display={` ${openMenu ? "block" : "hidden"} `}
        direction={` ${openMenu ? "flex-col" : "flex-row"} `}
        gap={` ${openMenu ? "gap-0" : ""} `}
        height={` ${openMenu ? "h-1/3" : ""} `}
        text={` ${openMenu ? "text-2xl" : ""} `}
        align={` ${openMenu ? "items-center" : ""} `}
        setOpenMenu={setOpenMenu}
        scroll={80}
      />
    </div>
  );
};

export default Hamburger;

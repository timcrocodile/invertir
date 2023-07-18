import { FaBook } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

const DictionarySection = () => {
  return (
    <div className="setPage bg-second relative ">
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <div className="setPageContent md:w-[55vw] z-10 ">
          <h2 className="absolute -top-6 -left-12 text-7xl font-serif text-first">
            {" "}
            "
          </h2>

          <h2 className="font-bold text-3xl text-first md:text-4xl">
            {" "}
            Invertire
          </h2>

          <h4> [ in·ver·tì·re ] verbo </h4>
          <p className="italic text-[#484848] font-serif md:text-pDesk ">
            1. Volgere o dirigere nel verso contrario: i. il moto, la marcia; i.
            la rotta di una nave, di un aeromobile, far prendere alla nave,
            all’aeromobile la direzione opposta a quella fino allora seguita;
            determinare, provocare un’inversione (in accezioni tecniche).
          </p>
          <h2 className="absolute -bottom-12 -right-12 text-7xl font-serif text-first">
            {" "}
            "
          </h2>
        </div>
        <FaBook className="absolute -right-20 md:-right-80  top-16 md:-top-2 text-[220px] md:text-[250px] text-white" />
      </AnimationOnScroll>
    </div>
  );
};

export default DictionarySection;

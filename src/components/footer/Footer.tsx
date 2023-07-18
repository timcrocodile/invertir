import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div
      className=" bg-first text-white p-10 flex flex-col items-center gap-9 md:h-[250px] md:justify-between  "
      id="contatti"
    >
      <AnimationOnScroll
        animateIn="animate__zoomIn"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <div className="flex flex-col items-center gap-9 md:flex-row md:justify-around md:w-[100vw] ">
          <h1 className="text-xl font-bold"> INVERTIR DI FABIO MASSI</h1>
          <div className="flex flex-col  items-center  gap-2">
            <h3>SOCIAL</h3>
            <ul className="flex gap-5 text-2xl  ">
              <li className="hover:text-gray ">
                <Link href="" target="_blank">
                  <AiFillLinkedin />
                </Link>
              </li>
              <li className="hover:text-gray">
                <Link href="mailto:cfautonomo@proton.me" target="_blank">
                  <SiGmail />
                </Link>
              </li>
              <li className="hover:text-gray">
                <Link
                  href="https://wa.me/393518424799/?text=Ciao Fabio, quando sarebbe possibile prenotare una consulenza?"
                  target="_blank"
                >
                  <IoLogoWhatsapp />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  items-center  gap-2">
            <h3> INDIRIZZO</h3>
            <p className="text-zinc-400 px-8 text-center md:px-0">
              Via Fogazzaro 20 - Civitanova Marche (MC) - CAP 62012
            </p>
          </div>
          <div className="flex flex-col  items-center  gap-2">
            <h3> RECAPITI TELEFONICI</h3>
            <Link className="text-zinc-400" href="tel:+393518424799">
              Cellulare: +39 3518424799
            </Link>
          </div>
        </div>
        <div className="text-[14px] w-screen flex flex-col px-8 items-center mt-10 md:px-0 md:text-base md:mt-16 text-center">
          <p>
            Copyright © 2023 | All rights reserved | Fabio Massi P.IVA: 4747494
          </p>
          <ul className="flex gap-2 ">
            <li className="hover:text-gray">
              <Link
                href="https://www.iubenda.com/privacy-policy/51891474/cookie-policy"
                target="_blank"
              >
                Cookie Policy
              </Link>
            </li>
            <li> {"|"}</li>
            <li className="hover:text-gray">
              <Link
                href="https://www.iubenda.com/privacy-policy/51891474"
                target="_blank"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Footer;

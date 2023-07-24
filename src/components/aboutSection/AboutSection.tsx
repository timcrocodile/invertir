import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="setPage bg-second  " id="chiSono">
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        duration={1.5}
        animatePreScroll={false}
      >
        <div className="setPageContent md:w-[65vw] text-center md:text-pDesk ">
          <h3 className="font-bold text-3xl text-first mb-10 md:text-titleDesk">
            {" "}
            Chi sono ?
          </h3>
          <p className="text-justify">
            Sono Fabio Massi, classe 88, da sempre appassionato di mercati
            finanziari ed innovazioni, la mia famiglia si occupa da oltre 40
            anni di consulenza assicurativa e finanziaria a privati ed aziende,
            ed è grazie a questa esperienza accumulata negli anni che sono
            diventato Broker assicurativo prima, e consulente finanziario
            Indipendente adesso. Conosco bene le dinamiche che stanno dietro la
            consulenza e la vendita di prodotti finanziari e se ho fatto la
            scelta di essere consulente finanziario indipendente è proprio per
            offrire ai miei clienti un'Indipendenza del servizio ma soprattutto
            un' indipendenza del soggetto.
          </p>

          <h3 className="font-bold mt-5"> Percorso di studi:</h3>
          <ul className="md:flex justify-between text-justify ">
            <li className="flex gap-2 ">
              <div>
                <Image
                  src="/images/graduated.png"
                  className=" mr-2 mt-1 "
                  width={35}
                  height={35}
                  alt="Laurea"
                />
              </div>
              L. Economia bancaria finanziaria ed assicurativa
            </li>
            <li>
              <Image
                src="/images/graduated.png"
                className="inline mr-2"
                width={35}
                height={35}
                alt="Laurea"
              />
              LM. Economia e management
            </li>
          </ul>
          <img
            src="/profile.png"
            alt="Fabio Massi consulente finanziario"
            className="absolute -right-20 md:-right-80  bottom-2 md:-bottom-12 w-[400px] md:w-[450px] brightness-0 invert -z-10 "
          />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default AboutSection;

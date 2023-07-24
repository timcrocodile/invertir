import { useEffect, useRef } from "react";
import { onClickAbout } from "@/utils/func";

const Hero = () => {
  const videoCurrent = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoCurrent.current) {
      videoCurrent.current.play().catch(() => {
        if (videoCurrent.current) videoCurrent.current.controls = true;
      });
    }
  }, []);

  return (
    <div className="relative top-0 h-screen w-screen flex " id="home">
      <div className="z-10 absolute top-0 right-0 w-full h-full bg-[#0000004d]"></div>
      <div className="w-full h-full absolute bg-fixed">
        <video
          ref={videoCurrent}
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover bg-fixed object-[70%] "
        >
          <source
            src="https://my-firstandgeneral-bucket1.s3.eu-central-1.amazonaws.com/hero.mp4"
            type="video/mp4"
          />
          <source
            src="https://my-firstandgeneral-bucket1.s3.eu-central-1.amazonaws.com/hero.mp4"
            type="video/webm"
          />
        </video>
      </div>
      <h2 className="z-10 self-end mb-16 text-5xl  md:text-6xl text-gray  p-10 md:mb-20 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        La consulenza finanziaria{" "}
        <span
          className="font-bold text-white ack cursor-pointer hover:text-6xl transition-all md:hover:text-7xl "
          onClick={(e) => onClickAbout(e, "libera")}
        >
          libera
        </span>{" "}
        ed {""}
        <span
          className="font-bold text-white cursor-pointer hover:text-6xl transition-all md:hover:text-7xl"
          onClick={(e) => onClickAbout(e, "indipendente")}
        >
          indipendente
        </span>
      </h2>
    </div>
  );
};

export default Hero;

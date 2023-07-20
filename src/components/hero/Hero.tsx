const Hero = () => {
  return (
    <div className="relative top-0 h-screen w-screen flex " id="home">
      <div className="z-10 absolute top-0 right-0 w-full h-full bg-[#0000004d]"></div>
      <div className="w-full h-full absolute bg-fixed">
        <video
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover bg-fixed object-right"
        >
          <source
            src="https://invertirbucket.s3.eu-central-1.amazonaws.com/hero.mp4"
            type="video/mp4"
          />
          <source
            src="https://invertirbucket.s3.eu-central-1.amazonaws.com/hero.mp4"
            type="video/webm"
          />
        </video>
      </div>
      <h2 className="z-10 self-end mb-16 text-5xl text-center md:text-6xl text-white  p-10 md:mb-20 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
        La consulenza finanziaria libera ed indipendente
      </h2>
    </div>
  );
};

export default Hero;

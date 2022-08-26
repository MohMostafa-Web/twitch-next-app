const Hero = () => {
  return (
    <div className="p-2 md:p-8">
      <div className="relative w-full max-h-[750px] h-[40vh] md:h-[60vh] lg:h-[80vh]">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/fJje8GEHrsU"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;

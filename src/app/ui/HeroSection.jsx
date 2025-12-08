import Image from "next/image";
import GooglePlayButton from "./HeroUI/GooglePlayButton";

function HeroSection() {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center p-6 lg:grid-cols-[60%_auto]">
      <div className="flex flex-col justify-center gap-3 lg:gap-7">
        <div className="text-center lg:w-[80%]">
          <p className="text-4xl font-semibold text-[#3a3a3a] lg:text-8xl">
            Funzo - Voice Chat & Make Real Friend
          </p>
        </div>
        <GooglePlayButton />
      </div>
      <div className="relative flex">
        <div className="absolute top-[50%] left-[25%] hidden h-[80%] w-[80%] -translate-[50%] rounded-full bg-linear-to-r from-yellow-400 to-yellow-700 transition-transform duration-500 hover:rotate-180 lg:flex"></div>
        <Image
          className="z-10 scale-75 rounded-3xl transition-transform duration-500 hover:scale-[1.03] lg:scale-100"
          src={"/home_screen.png"}
          alt="home_screen_image"
          width={320}
          height={650}
        />
      </div>
    </div>
  );
}

export default HeroSection;

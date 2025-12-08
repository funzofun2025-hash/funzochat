import Image from "next/image";
import Link from "next/link";
import { BsGooglePlay } from "react-icons/bs";
import GooglePlayButton from "./HeroUI/GooglePlayButton";

function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[60%_auto] min-h-screen p-6 items-center">
      <div className="flex flex-col justify-center gap-3 lg:gap-7 ">
        <div className="text-center lg:w-[80%]">
          <p className="text-4xl lg:text-8xl  text-[#3a3a3a] font-semibold">
            Funzo - Voice Chat & Make Real Friend
          </p>
        </div>
        <GooglePlayButton />
      </div>
      <div className="flex relative">
        <div className="bg-linear-to-r hidden lg:flex hover:rotate-180 transition-transform duration-500 from-yellow-400 to-yellow-700  top-[50%] left-[25%]  -translate-[50%] absolute w-[80%] h-[80%] rounded-full "></div>
        <Image
          className="rounded-3xl scale-75 lg:scale-100 z-10 hover:scale-[1.03] transition-transform duration-500"
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

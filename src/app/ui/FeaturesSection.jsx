import Image from "next/image";
import { FaGamepad, FaGift, FaRegSmileWink } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import Feature from "./HeroUI/Feature";

function FeaturesSection() {
  return (
    <div
      id="features"
      className="grid min-h-screen grid-cols-1 items-center justify-around p-6 lg:grid-cols-[60%_auto]"
    >
      <div className="relative order-2 flex px-10 lg:order-1">
        <div className="absolute top-[50%] left-[25%] hidden h-[80%] w-[80%] -translate-[50%] rounded-r-full bg-linear-to-r from-yellow-400 to-yellow-700 lg:flex"></div>
        <Image
          className="z-10 scale-75 rounded-3xl transition-transform duration-500 hover:scale-[1.03] lg:scale-100"
          src={"/room_screen.png"}
          alt="Room screen image"
          width={320}
          height={650}
        />
      </div>
      <div className="order-1 grid justify-center gap-3 lg:order-2 lg:grid-cols-2 lg:gap-10">
        <Feature
          logo={<FaRegMessage />}
          title={"Chat"}
          description={
            "Voice or message, you can use to chat with your friends"
          }
        />
        <Feature
          logo={<FaGamepad />}
          title={"Game"}
          description={"Many small games you can play with your friends"}
        />
        <Feature
          logo={<FaGift />}
          title={"Gift"}
          description={
            "Many beautiful gifts you can send to or receive from your friends"
          }
        />
        <Feature
          logo={<FaRegSmileWink />}
          title={"Emotion"}
          description={"Many interesting emotions you can use to chat"}
        />
      </div>
    </div>
  );
}

export default FeaturesSection;

import Image from "next/image";
import Link from "next/link";

function GooglePlayButton() {
  return (
    <Link
      href={"https://play.google.com/store/games?hl=en"}
      className="text-start self-center px-4 py-2 scale-75 lg:scale-100 rounded-xl hover:text-[#dcdcdc] bg-black flex gap-1 lg:gap-3  text-white w-fit"
    >
      <Image
        src={"/playstore.png"}
        alt="Playstore icon"
        className="hover:scale-[1.1]  transition-transform duration-200"
        width={30}
        height={10}
      />
      <div>
        <p className="text-[0.6rem] lg:text-[0.7rem] ">GET IT ON</p>
        <p className="text-[1.1rem] font-bold lg:text-xl">Google Play</p>
      </div>
    </Link>
  );
}
export default GooglePlayButton;

import Image from "next/image";
import SideSectionUI from "./HeroUI/SideSectionUI";

function SideSection() {
  return (
    <SideSectionUI
      text={` " A chat room created for users all over the world, you can meet many interesting friends here "`}
    >
      <Image
        className="rounded-xl lg:scale-100 scale-75"
        src={"/funzo_logo.png"}
        alt="Funzo Logo"
        width={100}
        height={100}
      />
    </SideSectionUI>
  );
}
export default SideSection;

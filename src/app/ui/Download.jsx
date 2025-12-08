import GooglePlayButton from "./HeroUI/GooglePlayButton";
import SideSectionUI from "./HeroUI/SideSectionUI";
import SideSection from "./SideSection";

function Download() {
  return (
    <div id="download">
      <SideSectionUI text={"Get the app now!"}>
        <GooglePlayButton />
      </SideSectionUI>
    </div>
  );
}
export default Download;

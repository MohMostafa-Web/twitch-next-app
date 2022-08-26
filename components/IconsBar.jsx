import RemoteImg from "../public/assets/remote.png";
import MicImg from "../public/assets/mic.png";
import HeadphonesImg from "../public/assets/headphones.png";
import TrophyImg from "../public/assets/trophy.png";
import PaintImg from "../public/assets/paint.png";
import IconBarItem from "./IconBarItem";

const IconsBar = () => {
  return (
    <div className="p-2 md:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4 py-8 border-t border-gray-700">
        <IconBarItem title="Games" image={RemoteImg} />
        <IconBarItem title="IRL" image={MicImg} />
        <IconBarItem title="Music" image={HeadphonesImg} />
        <IconBarItem title="Esports" image={TrophyImg} />
        <IconBarItem title="Creative" image={PaintImg} />
      </div>
    </div>
  );
};

export default IconsBar;

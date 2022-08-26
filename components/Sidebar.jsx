import { recommeded_channels, top_channels } from "../data/mockaroo-data";
import { MdOutlineVideocam } from "react-icons/md";
import SideChannel from "./SideChannel";

const Sidebar = () => {
  return (
    <aside className="sidebar fixed w-14 sm:w-16 lg:w-[15rem] h-full pt-2 pb-20 bg-[#0e0e10] overflow-y-scroll">
      <div>
        <h3 className="hidden lg:block px-2 mb-4 font-bold uppercase text-sm">
          Recommeded Channels
        </h3>
        <div className="block lg:hidden mb-4">
          <MdOutlineVideocam className="mx-auto text-gray-400" size={20} />
        </div>
        {/* Recommended Channels List */}
        {recommeded_channels.map((channel) => (
          <SideChannel key={channel.id} {...channel} />
        ))}
      </div>
      <div>
        <h3 className="hidden lg:block my-4 font-bold uppercase text-sm">
          Top Channels
        </h3>
        <div className="block lg:hidden my-4">
          <MdOutlineVideocam className="mx-auto text-gray-400" size={20} />
        </div>
        {/* Top Channels List */}
        {top_channels.map((channel) => (
          <SideChannel key={channel.id} {...channel} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

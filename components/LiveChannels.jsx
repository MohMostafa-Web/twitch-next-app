import { live_channels } from "../data/usual-data";
import LiveChanneItem from "./LiveChanneItem";

const LiveChannels = () => {
  return (
    <div className="p-2 md:p-8" id="live">
      <h2 className="font-bold sm:text-xl mb-4">
        <span className="text-[#9147ff]">Live Channels</span> we think you'll
        like
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 2x:grid-cols-4 3xl:grid-cols-5 gap-4">
        {live_channels.map((channel) => <LiveChanneItem key={channel.id} {...channel}/>)}
      </div>
    </div>
  );
};

export default LiveChannels;

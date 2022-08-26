import Image from "next/image";

const LiveChanneItem = ({
  id,
  live,
  avatar,
  username,
  category,
  stream_name,
  viewers_count,
}) => {
  return (
    <div className="cursor-pointer">
      <Image
        src={live}
        alt={stream_name}
        width={320}
        height={179}
        layout="responsive"
      />
      <div className="flex pt-4 gap-2">
        <div>
          <Image
            className="rounded-full"
            src={avatar}
            alt={username}
            width={50}
            height={50}
            layout="fixed"
          />
        </div>
        <div className="flex flex-col text-sm">
          <h3 className="font-bold">
            {stream_name.length > 39
              ? `${stream_name.slice(0, 38)}...`
              : stream_name}
          </h3>
          <span className="text-gray-500">{username}</span>
          <span className="text-gray-500">{category}</span>
        </div>
      </div>
    </div>
  );
};

export default LiveChanneItem;

import Image from "next/image";

const SideChannel = ({ id, avatar, username, category, viewers_count }) => {
  return (
    <div className="flex items-center my-1 hover:bg-gray-700 cursor-pointer">
      <div className="mx-auto lg:mx-0">
        <Image
          className="rounded-full"
          src={avatar}
          alt={username}
          width={40}
          height={40}
        />
      </div>
      <div className="hidden lg:flex flex-col">
        <span className="text-lg">{username}</span>
        <span className="text-gray-400">{category}</span>
      </div>
      <div className="hidden lg:flex items-center ml-auto gap-3 pr-2">
        <span className="block w-2 h-2 bg-[red] rounded-full"></span>
        <span>{`${Math.round(viewers_count / 1000)}K`}</span>
      </div>
    </div>
  );
};

export default SideChannel;

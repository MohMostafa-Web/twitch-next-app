import Image from "next/image";

const IconBarItem = ({title, image}) => {
  return (
    <div className="h-[50px] bg-[#7f2aff] hover:bg-[#9c59ff] flex justify-between items-center px-4 rounded-md cursor-pointer">
      <h3 className="font-bold text-lg md:text-2xl">{title}</h3>
      <Image src={image} alt={title} />
    </div>
  );
};

export default IconBarItem;

import Image from "next/image";

const CategoryItem = ({ id, img, title, viewers_count, tags }) => {
  return (
    <div className="cursor-pointer">
      <Image src={img} alt={title} width={261} height={350} />
      <div>
        <h3 className="font-bold text-sm sm:text-base">{title}</h3>
        <p className="my-1 text-sm text-gray-500">
          {viewers_count > 1000
            ? `${(viewers_count / 1000).toFixed(1)}K`
            : viewers_count}{" "}
          viewers
        </p>
        <div className="flex">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white text-sm py-[2px] px-3 rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;

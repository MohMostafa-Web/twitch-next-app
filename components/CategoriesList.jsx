import { categories } from "data/usual-data";
import CategoryItem from "./CategoryItem";

const CategoriesList = () => {
  return (
    <div className="p-2 md:p-8" id="categories">
      <h2 className="font-bold sm:text-xl mb-4">
        <span className="text-[#9147ff]">Categories</span> we think you'll like
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category) => <CategoryItem key={category.id} {...category} />)}
      </div>
    </div>
  );
};

export default CategoriesList;

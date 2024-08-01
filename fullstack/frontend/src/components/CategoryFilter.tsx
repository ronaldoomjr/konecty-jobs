type CategoryFilterProps = {
    categories: string[];
    setSelectedCategory: (category: string) => void;
  };
  
  const CategoryFilter = ({ categories, setSelectedCategory }: CategoryFilterProps) => (
    <div className="grid gap-1 grid-cols-6 grid-rows-2">
      <button onClick={() => setSelectedCategory('')}  className="p-1 border rounded-md hover:bg-gray-200 duration-200">Todas</button>
      {categories.map((category) => (
        <button key={category} onClick={() => setSelectedCategory(category)}  className="p-1 border rounded-md hover:bg-gray-200 duration-200">
          {category}
        </button>
      ))}
    </div>
  );
  
  export default CategoryFilter;
interface ProductCategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProductCategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProductCategoryFilterProps) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
      className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-900"
    >
      <option value="All">All Categories</option>

      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ProductCategoryFilter;

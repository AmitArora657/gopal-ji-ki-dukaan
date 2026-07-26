interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const ProductSearch = ({ value, onChange }: ProductSearchProps) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-900"
    />
  );
};

export default ProductSearch;

import Container from "../common/Container";
import Heading from "../common/Heading/Heading";
import ProductCategoryFilter from "./ProductCategoryFilter";
import ProductSearch from "./ProductSearch";

interface ProductToolbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;

  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProductToolbar = ({
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
}: ProductToolbarProps) => {
  return (
    <section className="py-10">
      <Container>
        <Heading
          title="Our Products"
          subtitle="Discover our beautiful collection of Laddu Gopal accessories."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ProductSearch value={searchTerm} onChange={onSearchChange} />

          <ProductCategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        </div>
      </Container>
    </section>
  );
};

export default ProductToolbar;

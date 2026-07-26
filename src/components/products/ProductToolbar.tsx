import Container from "../common/Container";
import Heading from "../common/Heading/Heading";
import ProductSearch from "./ProductSearch";

interface ProductToolbarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const ProductToolbar = ({
  searchTerm,
  onSearchChange,
}: ProductToolbarProps) => {
  return (
    <section className="py-10">
      <Container>
        <Heading
          title="Our Products"
          subtitle="Discover our beautiful collection of Laddu Gopal accessories."
        />

        <div className="mt-8">
          <ProductSearch value={searchTerm} onChange={onSearchChange} />
        </div>
      </Container>
    </section>
  );
};

export default ProductToolbar;

import Container from "../common/Container";
import ProductGrid from "../products/ProductGrid";

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <Container>
        <h2 className="mb-10 text-center text-4xl font-bold text-red-900">
          Featured Products
        </h2>

        <ProductGrid />
      </Container>
    </section>
  );
};

export default FeaturedProducts;

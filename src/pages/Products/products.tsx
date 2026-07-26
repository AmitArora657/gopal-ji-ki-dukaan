import { useMemo, useState } from "react";

import Container from "../../components/common/Container";
import ProductGrid from "../../components/products/ProductGrid";
import ProductToolbar from "../../components/products/ProductToolbar";

import { products } from "../../data/products";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <>
      <ProductToolbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <section className="pb-20">
        <Container>
          <ProductGrid products={filteredProducts} />
        </Container>
      </section>
    </>
  );
};

export default Products;

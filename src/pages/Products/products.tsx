import { useMemo, useState } from "react";

import Container from "../../components/common/Container";
import ProductGrid from "../../components/products/ProductGrid";
import ProductToolbar from "../../components/products/ProductToolbar";

import { products } from "../../data/products";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    return [...new Set(products.map((product) => product.category))];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <ProductToolbar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <section className="pb-20">
        <Container>
          <ProductGrid products={filteredProducts} />
        </Container>
      </section>
    </>
  );
};

export default Products;

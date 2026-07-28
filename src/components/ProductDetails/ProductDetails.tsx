import { useParams } from "react-router-dom";

import Container from "../common/Container";
import { products } from "../../data/products";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>

        <p className="mt-2 text-gray-500">
          The product you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <section className="py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <ProductImage image={product.image} name={product.name} />

          <ProductInfo product={product} />
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;

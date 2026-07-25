// import Container from "../common/Container";
// import ProductGrid from "../products/ProductGrid";

// const FeaturedProducts = () => {
//   return (
//     <section className="py-20">
//       <Container>
//         <h2 className="mb-10 text-center text-4xl font-bold text-red-900">
//           Featured Products
//         </h2>

//         <ProductGrid />
//       </Container>
//     </section>
//   );
// };

// export default FeaturedProducts;

import Container from "../common/Container";
import Heading from "../common/Heading/Heading";
import ProductGrid from "../products/ProductGrid";
import { products } from "../../data/products";

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <Container>
        <Heading
          title="Featured Products"
          subtitle="Explore our best-selling Laddu Gopal collection."
        />

        <div className="mt-10">
          <ProductGrid products={products} />
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProducts;

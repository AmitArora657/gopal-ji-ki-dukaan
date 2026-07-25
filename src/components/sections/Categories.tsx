import Container from "../common/Container";
import Heading from "../common/Heading/Heading";
import CategoryCard from "../categories/CategoryCard";
import { categories } from "../../data/categories";

const Categories = () => {
  return (
    <section className="py-16">
      <Container>
        <Heading
          title="Shop by Category"
          subtitle="Discover our beautifully handcrafted collection for Laddu Gopal Ji."
        />

        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;

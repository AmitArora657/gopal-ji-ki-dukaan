import Container from "../common/Container";
import Heading from "../common/Heading/Heading";
import FeatureCard from "../features/FeatureCard";
import { features } from "../../data/features";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <Heading
          title="Why Choose Us"
          subtitle="Experience devotion, quality, and trust with every purchase."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;

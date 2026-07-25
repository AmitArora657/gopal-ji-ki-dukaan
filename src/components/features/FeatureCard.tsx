import type { Feature } from "../../types/feature";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="rounded-xl border bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
      <div className="mb-4 text-5xl">{feature.icon}</div>

      <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>

      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
}

const QuantitySelector = ({ quantity, onChange }: QuantitySelectorProps) => {
  const decrease = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  const increase = () => {
    onChange(quantity + 1);
  };

  return (
    <div className="mt-8 flex items-center gap-4">
      <button onClick={decrease} className="h-10 w-10 rounded border">
        -
      </button>

      <span className="text-xl font-semibold">{quantity}</span>

      <button onClick={increase} className="h-10 w-10 rounded border">
        +
      </button>
    </div>
  );
};

export default QuantitySelector;

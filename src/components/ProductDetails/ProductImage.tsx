interface ProductImageProps {
  image: string;
  name: string;
}

const ProductImage = ({ image, name }: ProductImageProps) => {
  return (
    <div>
      <img src={image} alt={name} className="w-full rounded-xl" />
    </div>
  );
};

export default ProductImage;

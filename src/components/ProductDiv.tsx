import React from "react";

interface ProductDivProps {
  placingLeft: number;
  placingTop: number;
  imageSrc: string;
  productName: string;
  productPrice: string;
}

const ProductDiv: React.FC<ProductDivProps> = ({
  placingLeft,
  placingTop,
  imageSrc,
  productName,
  productPrice,
}) => {
  return (
    <div
      className="w-[300px] h-[420px] relative bg-blue-200 rounded-lg" // Change to relative if you don't need flex
      style={{
        position: "absolute",
        left: `${placingLeft}px`,
        top: `${placingTop}px`,
      }}
    >
      <img
        src={imageSrc}
        alt="Product"
        className="w-[180px] h-[300px] object-cover mb-8 items-center"
      />
      {/* Add text-left to ensure left alignment */}
      <p className="mt-4 text-lg ml-4">{productName}</p>
      <p className="mt-4 text-lg ml-4">{productPrice}</p>
    </div>
  );
};

export default ProductDiv;

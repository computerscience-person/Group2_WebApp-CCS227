import React from "react";

interface ProductDivProps {
  // placingLeft: number;
  // placingTop: number;
  imageSrc: string;
  productName: string;
  productPrice: string;
}

const ProductDiv: React.FC<ProductDivProps> = ({
  // placingLeft,
  // placingTop,
  imageSrc,
  productName,
  productPrice,
}) => {
  return (
    <div className="transition-transform duration-700 ease-in-out hover:scale-105">
      <div className="w-[250px] h-[250px]  mx-auto mt-8">
        <img
          src={imageSrc}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mt-4 text-lg ml-4 font-bold font-poppins">{productName}</p>
      <p className="mt-1 text-lg ml-4 font-poppins">{productPrice}</p>
    </div>
  );
};

export default ProductDiv;

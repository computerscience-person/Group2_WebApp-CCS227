import React from "react";

interface ProductDivProps {
  imageSrc: string;
  productName: string;
  productPrice: string;
}

const ProductDiv: React.FC<ProductDivProps> = ({
  imageSrc,
  productName,
  productPrice,
}) => {
  return (
    <div
      className="m-8 rounded-3xl transition-transform duration-150 ease-in-out hover:scale-105 hover:shadow-xl"
      style={{ backgroundColor: "#CFE4F4" }}
    >
      <div className="w-56 lg:w-60 lg:h-64 mx-auto mt-8 flex justify-center items-center">
        <img
          src={imageSrc}
          alt="Product"
          className="w-auto h-56 object-cover"
        />
      </div>
      <p
        className="text-lg ml-4 font-bold font-poppins"
        style={{ color: "#7181A7" }}
      >
        {productName}
      </p>
      <p className="text-lg ml-4 font-poppins" style={{ color: "#7181A7" }}>
        {productPrice}
      </p>
    </div>
  );
};

export default ProductDiv;

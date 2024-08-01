// components/ProductCard.tsx
import React from 'react';

export interface ProductProps {
  name: string;
  price: number;
  imageUrl: string;
  brand: string;
  description: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, imageUrl, brand, description }) => {
  return (
    <div className="flex-initial w-64">
      <div className="">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{brand}</h2>
          <p className="text-gray-700 font-medium">{name} - {description}</p>
          <p className="text-gray-900 font-bold text-lg mt-2">${price}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

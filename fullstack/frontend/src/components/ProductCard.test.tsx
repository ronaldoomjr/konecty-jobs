import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
  it('renders correctly', () => {
    const product = {
      brand: 'Nike',
      name: 'Air Force 1 Jester XX Black Sonic Yellow...',
      price: 96,
      imageSrc: 'https://i.imgur.com/75sD79z.jpg',
      imageAlt: 'Nike Air Force 1 Jester XX Black Sonic Yellow',
    };

    const { getByText } = render(<ProductCard {...product} />);

    expect(getByText(product.brand)).toBeInTheDocument();
    expect(getByText(product.name)).toBeInTheDocument();
    expect(getByText(`$${product.price}`)).toBeInTheDocument();
  });
});
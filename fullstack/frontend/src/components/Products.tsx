
import ProductCard from './ProductCard';
import {Product} from "../types/product";

interface ProductsPageProps {
  productsList: Product[];
}

const ProductsPage = ({productsList} : ProductsPageProps) => {

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        {productsList.map((product: Product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

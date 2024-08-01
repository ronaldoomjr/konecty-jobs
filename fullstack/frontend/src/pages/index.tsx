import { useCallback, useEffect, useState } from 'react';
import ProductsPage from "../components/Products";
import {Product} from "../types/product";
import Head from "next/head";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Footer from "../components/Footer";


async function getAllCharacters() {
  const data = await fetch(`http://localhost:3000/api/products`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return data.json()
}


export default function Home() {
  const [productsList, setProductsList] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

    const handleLoadProducts = useCallback(async() => {
      const response = await getAllCharacters();

      setProductsList(response)
    }, [])
  
    useEffect(() =>{
      handleLoadProducts();
    }, [handleLoadProducts])

  const filteredProducts = productsList.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!selectedCategory || product.brand === selectedCategory)
    );

  const uniqueCategories = Array.from(new Set(productsList.map((product) => product.brand).filter(Boolean)));

  return (
      <div className="container mx-auto p-4">
      <SearchBar setSearchQuery={setSearchQuery} />
      <Head>
        <title>My Store</title>
      </Head>
      <h1 className="text-3xl font-bold mb-8">Tênis</h1>
      <CategoryFilter categories={uniqueCategories} setSelectedCategory={setSelectedCategory}  />

      <ProductsPage productsList={filteredProducts} />
      <Footer />
    </div>
  );
}

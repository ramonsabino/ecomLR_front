import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import api from '../axiosConfig';

interface Product {
  _id: string;
  name: string;
  category: string;
  subCategory: string;
  brand: string;
  price: number;
  description: string;
  image: string;
}

interface ProductContextProps {
  products: Product[];
  filteredProducts: Product[];
  setFilteredProducts: (products: Product[]) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const useProductContext = (): ProductContextProps => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/api/products');
        const productsWithImagePaths = response.data.map((product: Product) => ({
          ...product,
          image: getImagePath(product.image)
        }));
        setProducts(productsWithImagePaths);
        setFilteredProducts(productsWithImagePaths);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const getImagePath = (imagePath: string): string => {
    return `${imagePath}`;
  };

  return (
    <ProductContext.Provider value={{ products, filteredProducts, setFilteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

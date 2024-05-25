import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import products from './product'; // Importe os produtos do arquivo products.ts

interface Product {
  id: number;
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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products); // Inicialize filteredProducts com todos os produtos

  return (
    <ProductContext.Provider value={{ products, filteredProducts, setFilteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

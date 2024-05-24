import React, { createContext, useContext, ReactNode } from 'react';
import products from './product';

// Define a type for the ProductProvider props
interface ProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext(products);

export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

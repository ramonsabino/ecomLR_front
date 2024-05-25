import React, { createContext, useContext } from 'react';

interface DeliveryContextType {
  getDeliveryPrice: (cep: string) => number;
}

const DeliveryContext = createContext<DeliveryContextType | undefined>(undefined);

export const useDelivery = () => {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error('useDelivery must be used within a DeliveryProvider');
  }
  return context;
};

const cepTable = [
  { bairro: "Jardim Iracema", cepInicial: "60330", taxaEntrega: 3 },
  { bairro: "Floresta", cepInicial: "60310",  taxaEntrega: 3 },
  { bairro: "Barra do Ceará", cepInicial: "60320",  taxaEntrega: 10 },
  { bairro: "Vila Velha", cepInicial: "60340",  taxaEntrega: 8 },
  { bairro: "Antônio Bezerra", cepInicial: "60356", taxaEntrega: 10 },
  { bairro: "Presidente Kennedy", cepInicial: "60321",  taxaEntrega: 8 },
  // Adicione outros bairros conforme necessário
];

const calcularTaxaEntrega = (cep: string) => {
    const cepDigitos = cep.replace(/\D/g, "").substring(0, 5); // Extrai os primeiros 5 dígitos do CEP
    const bairro = cepTable.find((item) => cepDigitos === item.cepInicial);
    return bairro ? bairro.taxaEntrega : 0; // Retorna a taxa de entrega do bairro encontrado ou 0 se não houver correspondência
};
export const DeliveryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getDeliveryPrice = (cep: string) => {
    return calcularTaxaEntrega(cep);
  };

  return (
    <DeliveryContext.Provider value={{ getDeliveryPrice }}>
      {children}
    </DeliveryContext.Provider>
  );
};
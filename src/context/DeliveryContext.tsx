import React, { createContext, useContext } from 'react';
import axios from 'axios';

interface DeliveryContextType {
  getDeliveryPrice: (cep: string) => Promise<number>;
}

const DeliveryContext = createContext<DeliveryContextType | undefined>(undefined);

export const useDelivery = () => {
  const context = useContext(DeliveryContext);
  if (!context) {
    throw new Error('useDelivery must be used within a DeliveryProvider');
  }
  return context;
};

export const DeliveryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getDeliveryPrice = async (cep: string) => {
    const distanceInKm = await calculateDistance(cep);
    // A taxa de entrega aumenta em R$ 1 a cada quilômetro
    return distanceInKm;
  };

  const calculateDistance = async (cep: string) => {
    try {
      const originCoordinates = await getCoordinates('60340110'); // CEP fixo da loja
      const destinationCoordinates = await getCoordinates(cep);
      
      // Verifica se ambas as coordenadas foram obtidas com sucesso
      if (originCoordinates && destinationCoordinates) {
        // Calcula a distância entre os dois pontos (em linha reta)
        const distanceInKm = calculateDistanceInKm(originCoordinates, destinationCoordinates);
        
        // A taxa de entrega aumenta em R$ 2 a cada quilômetro
        const deliveryPrice = distanceInKm * 2;
        
        // Formata o valor do frete para exibir apenas dois decimais
        const formattedDeliveryPrice = Number(deliveryPrice.toFixed(2));
        console.log(formattedDeliveryPrice)
        return formattedDeliveryPrice;
      } else {
        throw new Error('Erro ao obter as coordenadas');
      }
    } catch (error) {
      console.error('Erro ao calcular a distância:', error);
      return 0; // Se houver algum erro, retorna 0
    }
  };
  

  const getCoordinates = async (cep: string) => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${cep}`);
      if (response.status === 200 && response.data.length > 0) {
        const { lat, lon } = response.data[0];
        return { lat: parseFloat(lat), lon: parseFloat(lon) };
      } else {
        throw new Error('Erro ao obter as coordenadas');
      }
    } catch (error) {
      console.error('Erro ao obter as coordenadas:', error);
      return null;
    }
  };

  const calculateDistanceInKm = (origin: { lat: number, lon: number }, destination: { lat: number, lon: number }) => {
    if (!origin || !destination) return 0;

    const earthRadiusKm = 6371;
    const dLat = degreesToRadians(destination.lat - origin.lat);
    const dLon = degreesToRadians(destination.lon - origin.lon);
    const lat1 = degreesToRadians(origin.lat);
    const lat2 = degreesToRadians(destination.lat);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadiusKm * c;

    return distance;
  };

  const degreesToRadians = (degrees: number) => {
    return degrees * (Math.PI / 180);
  };

  return (
    <DeliveryContext.Provider value={{ getDeliveryPrice }}>
      {children}
    </DeliveryContext.Provider>
  );
};

// products.ts

import airdotImage from '../assets/fones/foneAirDots.jpg';
import caixaJbl from '../assets/caixasDeSom/caixaJbl.jpg';
import carregador from '../assets/carregadores/carregadorIos.jpg';
import smartWatch from '../assets/smartWatch/smartWatch.jpg';

const products = [
  {
    id: 1,
    name: "Produto 1",
    price: 40.0,
    category: "Fones",
    image: airdotImage,
    brand: "Xiaomi",
  },
  {
    id: 2,
    name: "Produto 2",
    price: 120.0,
    category: "Caixas",
    image: caixaJbl,
    brand: "JBL",
  },
  {
    id: 3,
    name: "Produto 3",
    price: 40.0,
    category: "Carregador",
    image: carregador,
    brand: "OkGold",
  },
  {
    id: 4,
    name: "Produto 4",
    price: 90.0,
    category: "Smartwatch",
    image: smartWatch,
    brand: "WBS",
  },
  {
    id: 5,
    name: "Produto 5",
    price: 10.0,
    category: "Smartwatch",
    image: smartWatch,
    brand: "WBS",
  },
  // Add more products here
];

export default products;

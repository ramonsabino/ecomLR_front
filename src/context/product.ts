// products.ts
// Caixas de som
import caixaJBLExtreme from '../assets/Caixas/caixaJBLExtreme.jpeg'
import caixaLehmox from '../assets/Caixas/caixaLehmox.jpg'
import caixaInova from '../assets/Caixas/caixaInova.jpg'
import caixaMinifun from '../assets/Caixas/caixaMinifun.jpg'
import caixaLampada from '../assets/Caixas/lampadaCaixa.jpeg'
// Utilitarios
import balanca from '../assets/Utilitaries/balanca.jpeg'
import hubUsb from '../assets/Utilitaries/hubUsb.jpeg'
import globo from '../assets/Utilitaries/globo.jpeg'
import protetorCabo from '../assets/Utilitaries/protetorCabo.jpeg'
import ringLight from '../assets/Utilitaries/ringLight.jpeg'


// ---------------
const products = [
  // Inicio Fones
  {
    id: 25,
    name: "Caixa JBL Extreme",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Bluetooth',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: caixaJBLExtreme,
    brand: "JBL",
  },
  {
    id: 26,
    name: "Caixa de Som Lehmox",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Bluetooth',
    description: 'Caixa Lehmox com excelente qualidade de som',
    image: caixaLehmox,
    brand: "Lehmox",
  },
  {
    id: 27,
    name: "Caixa de Som Inova",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Radio',
    description: 'Caixa Lehmox com excelente qualidade de som, com Bluetooth',
    image: caixaInova,
    brand: "Inova",
  },
  {
    id: 28,
    name: "Caixinha de som MiniFun",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Bluetooth',
    description: 'Mini caixa de som bluetooth, com excelente qualidade de som',
    image: caixaMinifun,
    brand: "Minifun",
  },
  {
    id: 29,
    name: "Caixa de Som com Lampada de Led",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Bluetooth',
    description: 'Faça sua festa com apenas este produto onde é uma lampada de led com várias cores e também uma caixa de som bluetooth',
    image: caixaLampada,
    brand: "Lehmox",
  },
  // Fim dos Fones
  // Inicio dos utilitários
  {
    id: 30,
    name: "Balança de precisão até 7KG",
    price: 50.0,
    category: "Utilitaries",
    subCategory: 'Utilitaries',
    description: 'Balança de precisão de até 7kgs',
    image: balanca,
    brand: "Generic",
  },
  {
    id: 31,
    name: "Globo de luz para festa",
    price: 30.0,
    category: "Utilitaries",
    subCategory: 'Utilitaries',
    description: 'Faça sua festa com apenas este produto com uma variedades de efeitos e luzes',
    image: globo,
    brand: "Lehmox",
  },
  {
    id: 32,
    name: "HUB de USB com 7 Conexões",
    price: 50.0,
    category: "Utilitaries",
    subCategory: 'Utilitaries',
    description: 'Hub usb para 7 aparelhos simultaneos com chave de energia',
    image: hubUsb,
    brand: "Generic",
  },
  {
    id: 33,
    name: "Protetor para cabo",
    price: 5,
    category: "Utilitaries",
    subCategory: 'Utilitaries',
    description: 'Protetor para cabo',
    image: protetorCabo,
    brand: "Generic",
  },
  {
    id: 34,
    name: "Ring Light 6'' ",
    price: 50.0,
    category: "Utilitaries",
    subCategory: 'Utilitaries',
    description: 'Ring Light de 6" para melhorar a qualidade das suas imagens.',
    image: ringLight,
    brand: "Lehmox",
  },
 

];

export default products;

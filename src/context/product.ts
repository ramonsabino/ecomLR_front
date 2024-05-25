// products.ts
// Carregadores
import caboFoxcon from '../assets/Carregador/carregadorIos.jpg'
import caboIosKaidi from '../assets/Carregador/caboIosKaidi.jpeg'
import caboIosPrimeira from '../assets/Carregador/caboIosPrimeira.jpeg'
import caboLehmoxTipoC from '../assets/Carregador/caboLehmoxTipoC.jpeg'
import caboTipoCHRebos from '../assets/Carregador/caboTipoCHRebos.jpeg'
import carregadorInducao from '../assets/Carregador/carregadorInducao.jpeg'
import carregadorIos from '../assets/Carregador/carregadorIos.jpg'
import carregadorIOSHmaston from '../assets/Carregador/carregadorIOSHmaston.jpeg'
import carregadorTurboIOSHMaston from '../assets/Carregador/carregadorTurboIOSHMaston.jpeg'
import carregadorTurboIOSLehmox from '../assets/Carregador/carregadorTurboIOSLehmox.jpeg'
import carregadorTurboTC from '../assets/Carregador/carregadorTurboTC.jpeg'
import carregadorTurboV8 from '../assets/Carregador/carregadorTurboV8.jpeg'
import carregadorVeicular from '../assets/Carregador/carregadorVeicular.jpeg'
import fonteTurboLehmox from '../assets/Carregador/fonteTurboLehmox.jpeg'
import powerBank5000 from '../assets/Carregador/powerBank5000.jpeg'

// Fones de ouvido
import foneAirDots from '../assets/Fones/foneAirDots.jpg'
import foneHrebosIos from '../assets/Fones/foneHrebosIos.jpg'
import foneInovaBT from '../assets/Fones/foneInovaBT.jpeg'
import foneIntraHmaston from '../assets/Fones/foneIntraHmaston.jpeg'
import foneIntraPmCell from '../assets/Fones/foneIntraPmCell.jpeg'
import foneJblBT from '../assets/Fones/foneJblBT.jpeg'
import foneLehmox from '../assets/Fones/foneLehmox.jpg'
import foneLehmoxTipoS from '../assets/Fones/foneLehmoxTipoS.jpeg'
import fonePMTipoIOS from '../assets/Fones/fonePMTipoIOS.jpeg'
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
  // Inicio Carregadores
  {
    id: 1,
    name: "Cabo Foxconn",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Cabos',
    description: 'teste cabo',
    image: caboFoxcon,
    brand: "Foxcon",
  },
  {
    id: 2,
    name: "Cabo Kaidi",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Cabos',
    description: 'teste cabo',
    image: caboIosKaidi,
    brand: "JBL",
  },
  {
    id: 3,
    name: "TESTE DO CARREGADOR",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Cabos',
    description: 'teste cabo',
    image: caboIosPrimeira,
    brand: "JBL",
  },
  {
    id: 4,
    name: "TESTE DO CARREGADOR",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Cabos',
    description: 'teste cabo',
    image: caboLehmoxTipoC,
    brand: "JBL",
  },
  {
    id: 5,
    name: "TESTE DO CARREGADOR",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Cabos',
    description: 'teste cabo',
    image: caboTipoCHRebos,
    brand: "JBL",
  },
  {
    id: 6,
    name: "Carregador Indução",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Indução',
    description: 'teste carregador',
    image: carregadorInducao,
    brand: "JBL",
  },
  {
    id: 7,
    name: "TESTE DO CARREGADOR",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: carregadorIos,
    brand: "JBL",
  },
  {
    id: 8,
    name: "TESTE DO CARREGADOR",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: carregadorIOSHmaston,
    brand: "JBL",
  },
  {
    id: 9,
    name: "TESTE CARREGADOR",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: carregadorTurboIOSHMaston,
    brand: "JBL",
  },
  {
    id: 10,
    name: "TESTE CARREGADOR",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: carregadorTurboIOSLehmox,
    brand: "JBL",
  },
  {
    id: 11,
    name: "TESTE CARREGADOR",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: carregadorTurboTC,
    brand: "JBL",
  },
  {
    id: 12,
    name: "TESTE CARREGADOR",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: carregadorTurboV8,
    brand: "JBL",
  },
  {
    id: 13,
    name: "TESTE CARREGADOR",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Veiculares',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: carregadorVeicular,
    brand: "JBL",
  },
  {
    id: 14,
    name: "TESTE CARREGADOR",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: fonteTurboLehmox,
    brand: "JBL",
  },
  {
    id: 15,
    name: "TESTE CARREGADOR",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: powerBank5000,
    brand: "JBL",
  },
  //Inicio fones
  {
    id: 16,
    name: "Caixa JBL Extreme",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Bluetooth',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: foneAirDots,
    brand: "JBL",
  },
  {
    id: 17,
    name: "Caixa JBL Extreme",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Bluetooth',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: foneHrebosIos,
    brand: "JBL",
  },
  {
    id: 18,
    name: "Caixa JBL Extreme",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Bluetooth',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: foneInovaBT,
    brand: "JBL",
  },
  {
    id: 19,
    name: "Caixa JBL Extreme",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Bluetooth',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: foneIntraHmaston,
    brand: "JBL",
  },
  {
    id: 20,
    name: "Caixa JBL Extreme",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Bluetooth',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: foneIntraPmCell,
    brand: "JBL",
  },
  {
    id: 21,
    name: "Caixa JBL Extreme",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Bluetooth',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: foneJblBT,
    brand: "JBL",
  },
  {
    id: 22,
    name: "Caixa JBL Extreme",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Bluetooth',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: foneLehmox,
    brand: "JBL",
  },
  {
    id: 23,
    name: "Caixa JBL Extreme",
    price: 50.0,
    category: "Caixas",
    subCategory: 'Bluetooth',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: foneLehmoxTipoS,
    brand: "JBL",
  },
  {
    id: 24,
    name: "Caixa JBL Extreme",
    price: 50.0,
    category: "Fones",
    subCategory: 'Bluetooth',
    description: 'Caixa extreme JBL com excelente qualidade de som',
    image: fonePMTipoIOS,
    brand: "JBL",
  },
  // Fim Fones
  // Inicio Caixas
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

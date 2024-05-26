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
import smartWatch from '../assets/smartWatch/smartWatch.jpg'
import suporteCarro from '../assets/suportesVeiculares/suporteCarro.jpeg'
// Peliculas
import pelicula3D from '../assets/peliculas/pelicula3D.jpg'
import peliculaCeramica from '../assets/peliculas/peliculaCeramica.jpg'
import peliculaTraseira from '../assets/peliculas/peliculaTraseira.jpg'
import peliculaVidro from '../assets/peliculas/peliculaVidro.jpg'


// ---------------
const products = [
  // Inicio Carregadores
  {
    id: 1,
    name: "Cabo Foxconn",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Cabos',
    description: 'Cabo Original para iPhone Foxconn, Marca autorizada Apple',
    image: caboFoxcon,
    brand: "Foxcon",
  },
  {
    id: 2,
    name: "Cabo Kaidi para Iphone",
    price: 22.0,
    category: "Carregador",
    subCategory: 'Cabos',
    description: 'Cabo original da Kaidi modelo e design parecido com os da Apple mas pontas reforçadas assim evitando quebrar com facilidade 🛒🤩',
    image: caboIosKaidi,
    brand: "Kaidi",
  },
  {
    id: 3,
    name: "Cabos para Iphone Primeira Linha",
    price: 30.0,
    category: "Carregador",
    subCategory: 'Cabos',
    description: 'Cabo primeira linha para iPhone, super confiável e com alta durabilidade',
    image: caboIosPrimeira,
    brand: "Generic",
  },
  {
    id: 4,
    name: "Cabo USB C Lehmox",
    price: 25.0,
    category: "Carregador",
    subCategory: 'Cabos',
    description: 'Cabo usb C com saída tipo C ',
    image: caboLehmoxTipoC,
    brand: "Lehmox",
  },
  {
    id: 5,
    name: "Cabo USB C com saída tipo C",
    price: 25.0,
    category: "Carregador",
    subCategory: 'Cabos',
    description: 'Cabo usb C com saída tipo C ✅ Modelo turbo 3.0 original da marca hrebos, ótima qualidade e durabilidade e segurança ✨',
    image: caboTipoCHRebos,
    brand: "HRebos",
  },
  {
    id: 6,
    name: "Carregador Indução",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Indução',
    description: 'Carregue seu celular sem precisar de fios nele',
    image: carregadorInducao,
    brand: "JBL",
  },
  {
    id: 7,
    name: "Carregador completo para Iphone OkGold",
    price: 40.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Carregador completo para Iphone OkGold',
    image: carregadorIos,
    brand: "OkGold",
  },
  {
    id: 8,
    name: "Carregador completo para Iphone HMaston",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Carregador completo para Iphone',
    image: carregadorIOSHmaston,
    brand: "HMaston",
  },
  {
    id: 9,
    name: "Carregador completo Turbo para Iphone HMaston",
    price: 45.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Carregador completo turbo original da H’maston modelo super resistente e com ótima qualidade e durabilidade compatível com todos os modelos de iPhone 🤩',
    image: carregadorTurboIOSHMaston,
    brand: "HMaston",
  },
  {
    id: 10,
    name: "Carregador completo Turbo para Iphone Lehmox",
    price: 45.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Carregador completo turbo original da Lehmox modelo super resistente e com ótima qualidade e durabilidade compatível com todos os modelos de iPhone 🤩',
    image: carregadorTurboIOSLehmox,
    brand: "JBL",
  },
  {
    id: 11,
    name: "Carregador completo Turbo 6.4A Tipo C",
    price: 30.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Carregador Completo turbo 6.4 acompanha duas entradas usb. Modelo com a entrada tipo C compatível com todos os modelos de Android ✅',
    image: carregadorTurboTC,
    brand: "Altmax",
  },
  {
    id: 12,
    name: "Carregador completo Turbo Micro-USB/V8 Lehmox",
    price: 30.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Carregador Completo turbo com entrada micro-usb/V8',
    image: carregadorTurboV8,
    brand: "Lehmox",
  },
  {
    id: 13,
    name: "Carregador Veicular",
    price: 25.0,
    category: "Carregador",
    subCategory: 'Veiculares',
    description: 'Carregador Veicular',
    image: carregadorVeicular,
    brand: "Lehmox",
  },
  {
    id: 14,
    name: "Fonte Turbo Lehmox",
    price: 25.0,
    category: "Carregador",
    subCategory: 'Fontes',
    description: 'Fonte Lemox marca verificada pela Anatel ótima qualidade para seu celular. Compatível tanto com iOS como Android 🤩',
    image: fonteTurboLehmox,
    brand: "Lehmox",
  },
  {
    id: 15,
    name: "Bateria portátil de 5000mAH",
    price: 50.0,
    category: "Carregador",
    subCategory: 'Completo',
    description: 'Bateria portatil de até 3 recargas no seu celular, não fique mais com celular descarregado',
    image: powerBank5000,
    brand: "Pineng",
  },
  //Inicio fones
  {
    id: 16,
    name: "Fones AirDots Primeira Geração",
    price: 40.0,
    category: "Fones",
    subCategory: 'Bluetooth',
    description: 'Fones Bluetooth Xiaomi de primeira geração, escute músicas por até 6h.',
    image: foneAirDots,
    brand: "Xiaomi",
  },
  {
    id: 17,
    name: "Fones para iPhone HRebos",
    price: 30.0,
    category: "Fones",
    subCategory: 'Fio',
    description: 'Fones de ouvido para iPhone, excelente qualidade sonora',
    image: foneHrebosIos,
    brand: "HRebos",
  },
  {
    id: 18,
    name: "Fone Bluetooth Inova",
    price: 50.0,
    category: "Fones",
    subCategory: 'Bluetooth',
    description: 'Excelente headphone bluetooth inova, com almofadas e excelente qualidade sonora',
    image: foneInovaBT,
    brand: "Inova",
  },
  {
    id: 19,
    name: "Fones Intra-auricular Hmaston",
    price: 22.0,
    category: "Fones",
    subCategory: 'Fio',
    description: 'Fones de ouvido intra auricular,excelente qualidade sonora',
    image: foneIntraHmaston,
    brand: "HMaston",
  },
  {
    id: 20,
    name: "Fones Intra-auricular PMCell",
    price: 25.0,
    category: "Fones",
    subCategory: 'Fio',
    description: 'Fones de ouvido intra auricular,excelente qualidade sonora',
    image: foneIntraPmCell,
    brand: "PMCell",
  },
  {
    id: 21,
    name: "Fones Bluetooth JBL",
    price: 50.0,
    category: "Fones",
    subCategory: 'Bluetooth',
    description: 'Excelente Headphone Bluetooth JBL, com almofadas e excelente qualidade sonora',
    image: foneJblBT,
    brand: "JBL",
  },
  {
    id: 22,
    name: "Fones de ouvidos Lehmox Estilo Iphone",
    price: 22.0,
    category: "Fones",
    subCategory: 'Fio',
    description: 'Fones de ouvidos Lehmox, otima qualidade de som',
    image: foneLehmox,
    brand: "Lehmox",
  },
  {
    id: 23,
    name: "Fones de ouvidos Lehmox Estilo Samsung",
    price: 20.0,
    category: "Fones",
    subCategory: 'Fio',
    description: 'Fones de ouvidos Lehmox, otima qualidade de som',
    image: foneLehmoxTipoS,
    brand: "Lehmox",
  },
  {
    id: 24,
    name: "Fones de ouvidos PMCell Estilo Iphone",
    price: 30.0,
    category: "Fones",
    subCategory: 'Fio',
    description: 'Fones de ouvidos PMCell, otima qualidade de som',
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
  // Fim Utilitários
  // Inicio Smartwatch
  {
    id: 35,
    name: "Smartwatch WBS45 ",
    price: 120.0,
    category: "Smartwatch",
    subCategory: 'Smartwatch',
    description: 'Smartwatch WBS45',
    image: smartWatch,
    brand: "WBS",
  },
  // Fim Smartwatch
  // Inicio Suporte
  {
    id: 36,
    name: "Suporte de celular para carros",
    price: 28.0,
    category: "Suportes",
    subCategory: 'Carro',
    description: 'Suporte de celular para carros',
    image: suporteCarro,
    brand: "Generic",
  },
  // Fim Suporte
  // Inicio Pelicula
  {
    id: 37,
    name: "Pelicula de proteção 3D",
    price: 20.0,
    category: "Peliculas",
    subCategory: '3D',
    description: 'Pelicula de proteção em 3D, a melhor em quesito de segurança',
    image: pelicula3D,
    brand: "Generic",
  },
  {
    id: 38,
    name: "Pelicula de proteção 3D traseira",
    price: 20.0,
    category: "Peliculas",
    subCategory: '3D',
    description: 'Suporte de celular para carros',
    image: peliculaTraseira,
    brand: "Generic",
  },
  {
    id: 39,
    name: "Pelicula de proteção em Cerâmica",
    price: 20.0,
    category: "Peliculas",
    subCategory: 'Cerâmica',
    description: 'Pelicula de proteção em Cerâmica, a melhor em quesito de segurança e soft touch',
    image: peliculaCeramica,
    brand: "Generic",
  },
  {
    id: 40,
    name: "Pelicula de proteção em Vidro",
    price: 15.0,
    category: "Peliculas",
    subCategory: 'Vidro',
    description: 'Pelicula de proteção em Vidro',
    image: peliculaVidro,
    brand: "Generic",
  },

];

export default products;

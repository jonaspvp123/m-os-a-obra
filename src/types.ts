export interface ProductItem {
  id: string;
  name: string;
  description: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string; // name of Lucide icon
  popularItems: string[];
}

export interface PartnerBrand {
  name: string;
  logo: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export const PRODUCT_CATEGORIES: Category[] = [
  {
    id: "eletricas",
    title: "Ferramentas Elétricas",
    description: "Desempenho e produtividade para o seu trabalho. Furadeiras, parafusadeiras, marteletes e esmerilhadeiras das melhores marcas do mercado.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
    iconName: "Zap",
    popularItems: [
      "Parafusadeira Mobilidade Bateria 12V e 20V",
      "Furadeira de Impacto com Controle de Torque",
      "Esmerilhadeira Angular de Alta Performance",
      "Serra Circular e Tico-Tico Profissionais",
      "Soprador Térmico e Lixadeiras Roto-orbitais"
    ]
  },
  {
    id: "manuais",
    title: "Ferramentas Manuais",
    description: "Qualidade, ergonomia e precisão incomparáveis. Ampla linha de chaves, alicates, martelos, trenas, níveis e serrotes altamente resistentes.",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80",
    iconName: "Wrench",
    popularItems: [
      "Jogos de Chaves Combinadas e Fenda/Phillips",
      "Alicates de Pressão, Universal e de Corte",
      "Martelos de Unha e Marretas com Cabo de Fibra",
      "Níveis de Bolha, Prumo e Trenas Emborrachadas",
      "Arcos de Serra e Serrote para Madeira"
    ]
  },
  {
    id: "materiais-eletricos",
    title: "Materiais Elétricos",
    description: "Segurança e economia para as instalações da sua obra ou reforma. Cabos flexíveis, disjuntores, lâmpadas LED, interruptores e canaletas.",
    image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80",
    iconName: "Plug",
    popularItems: [
      "Cabos Elétricos Flexíveis de Várias Bitolas (2.5mm, 4mm, 6mm)",
      "Disjuntores NEMA/DIN de Proteção",
      "Lâmpadas LED, Painéis de Embutir e Refletores",
      "Fitas Isolantes de Alta Fusão para Proteção",
      "Tomadas, Interruptores e Caixas 4x2 / 4x4"
    ]
  },
  {
    id: "pintura",
    title: "Produtos para Pintura",
    description: "Tudo o que você precisa para dar vida e acabamento aos seus ambientes. Rolos, trinchas, bandejas, tintas spray, lixas e fitas crepe.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
    iconName: "Paintbrush",
    popularItems: [
      "Rolos de Lã Antigota, Espuma e Garfo Duplo",
      "Trinchas e Pincéis Macios para Acabamento Fino",
      "Tintas Spray de Uso Geral, Metálicas e Alta Temperatura",
      "Lixas para Parede, Madeira e Ferro (Grãos Variados)",
      "Fitas Crepe Azuis e Protetoras de Alta Performance"
    ]
  },
  {
    id: "ferragens",
    title: "Ferragens e Fixadores",
    description: "Segurança estrutural e fixação firme para qualquer projeto. Parafusos, pregos, buchas de nylon, dobradiças, fechaduras e cadeados.",
    image: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=800&q=80",
    iconName: "FolderHeart", // We will map this to a custom icon or generic folder/shield in the component
    popularItems: [
      "Parafusos Autobrocantes, Chipboard e de Madeira",
      "Buchas de Fixação Especializadas (Plasterboard/Tijolo)",
      "Fechaduras de Entrada, Banheiro e Portões",
      "Cadeados de Bronze Latonado Resistentes",
      "Dobradiças Reforçadas e Cantoneiras de Aço"
    ]
  }
];

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    name: "Makita",
    logo: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=300&q=80", // Will display logo badge stylishly
    description: "Líder mundial em ferramentas elétricas de alta tecnologia para uso industrial."
  },
  {
    name: "Bosch",
    logo: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=300&q=80",
    description: "Sinônimo de excelência e inovação tecnológica em engenharia alemã de ponta."
  },
  {
    name: "DeWalt",
    logo: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=300&q=80",
    description: "Ferramentas pesadas de alta durabilidade e confiabilidade garantida."
  },
  {
    name: "Vonder",
    logo: "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=300&q=80",
    description: "A marca mais completa do Brasil em ferramentas, ferragens e acessórios."
  },
  {
    name: "Tramontina",
    logo: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=300&q=80",
    description: "Tradição de qualidade incomparável, da cutelaria às ferramentas de obra."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Fachada da nossa Loja",
    category: "Estrutura",
    imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g2",
    title: "Mostruário de Ferramentas Elétricas",
    category: "Showroom",
    imageUrl: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g3",
    title: "Estoque Amplo de Ferragens",
    category: "Estoque",
    imageUrl: "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g4",
    title: "Linha Completa de Elétrica",
    category: "Produtos",
    imageUrl: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g5",
    title: "Atendimento Especializado Amigável",
    category: "Serviço",
    imageUrl: "https://images.unsplash.com/photo-1521791136368-1a46827d0505?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g6",
    title: "Novidades e Lançamentos",
    category: "Lançamentos",
    imageUrl: "https://images.unsplash.com/photo-1516216628859-9bccecad13ca?auto=format&fit=crop&w=800&q=80"
  }
];

export const STORE_CONTACT = {
  phone: "(62) 99846-2360",
  whatsappUrl: "https://wa.me/5562998462360",
  instagram: "@maosaobraferragista",
  instagramUrl: "https://instagram.com/maosaobraferragista",
  email: "ugo_natan@hotmail.com",
  historyYear: "2021",
};

export interface Product {
  id: string;
  name: string;
  category: "alimentos" | "cuidado-personal" | "accesorios" | "equipos" | "suplementos" | "licores" | "belleza-cosmeticos";
  categoryLabel: string;
  price: number;
  inStock?: boolean;
  status?: 'active' | 'coming-soon';
  rating: number;
  reviewsCount: number;
  tag?: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
  image: string;
  featured?: boolean;
}

export interface CompensationBonus {
  id: number;
  title: string;
  subtitle: string;
  percentage: string;
  description: string;
  icon: string;
}

export interface MembershipPlan {
  rank: string;
  points: number;
  discount: string;
  investmentApprox: string;
  dailyCap: string;
  recommended?: boolean;
  perks: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  authorPhoto?: string;
  category: string;
  image: string;
  videoUrl?: string;
  content: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "productos" | "envios" | "negocio";
}

export const DISTRIBUTOR_INFO = {
  name: "Yamilka Batista",
  pageTitle: "HGW Santiago de Veraguas, Panamá",
  title: "Distribuidor Independiente HGW Santiago de Veraguas",
  location: "HGW Santiago de Veraguas (Envíos a todo Panamá)",
  shippingInfo: "HGW ESTA DISPONIBLE PARA TODO PANAMÁ: BOCAS DEL TORO, COCLE, COLON, CHIRIQUI, DARIEN, HERRERA, LOS SANTOS, VERAGUAS, LA CHORRERA Y COMARCA, A TRAVES DE ENVIOS POR SERVIENTREGA.",
  officeTitle: "🇵🇦 PANAMÁ (Oficina Principal)",
  officeAddress: "Avenida Porras, Plaza Royal Blue, Local No. 6, Provincia de PANAMÁ, Corregimiento de San Francisco",
  officeHours: "Lunes a Viernes: 09:00 am a 06:00 pm | Sábados: 09:00 am a 01:00 pm | Domingo y Festivos: Cerrado",
  officePhone: "+507 392-8415",
  activeDistributorContact: "+507 6778-8375",
  whatsapp: "50767788375",
  phone: "+507 6778-8375",
  email: "info@hgwpanama.com",
  whatsappMessage: "Hola Yamilka, deseo información sobre los productos HGW y el Plan de Ganancia Mutua.",
  sponsorUsername: "Yamilka507",
  registrationUrl: "https://www.healthgreenworld.com/?userName=Yamilka507",
  officialOnlineStore: "https://www.healthgreenworld.com/?userName=Yamilka507",
  photo: "/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.39.52_PM__1__47cd7024.jpeg",
  disclaimer: "Disclaimer: Este es un sitio web no oficial de Health Green World (HGW). El contenido presentado en este blog es operado y mantenido por un socio independiente de HGW Latinoamérica. Toda la información y opiniones expresadas son de responsabilidad exclusiva del autor y no reflejan necesariamente las políticas o directrices oficiales de HGW. Para información oficial, visite el sitio web de la empresa.",
};

export const CATALOG_CONFIG = {
  catalogCoverImage: "https://hgwpanama.com/wp-content/uploads/2026/10/CATALOGO-PANAMA-2026_compressed-2toalla-imagenes-0-1.jpg",
  priceListPdfUrl: "https://hgwpanama.com/wp-content/uploads/2026/10/lp.pdf",
};

export const PRODUCT_CATEGORIES = [
  { id: "all", label: "Todos los Productos", count: 56 },
  { id: "alimentos", label: "Alimentos", count: 20 },
  { id: "cuidado-personal", label: "Cuidado personal", count: 15 },
  { id: "accesorios", label: "Accesorios funcionales", count: 6 },
  { id: "equipos", label: "Equipo", count: 5 },
  { id: "licores", label: "Licores", count: 1 },
  { id: "suplementos", label: "Suplementos", count: 3 },
  { id: "belleza-cosmeticos", label: "Belleza y cosméticos", count: 6 },
] as const;

export const PRODUCTS: Product[] = [
  {
    "id": "jabon-de-artemisa",
    "name": "Jabón de Artemisa",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 7.2,
    "rating": 4.8,
    "reviewsCount": 18,
    "tag": "Destacado",
    "shortDescription": "HGW Mugwort Soap – Jabón de Artemisa. Jabón facial, de manos y cuerpo elaborado con extracto y aceite de hoja de artemisa ( Artemisia argyi ). Limpia en profundidad, exfolia suavemente y deja una sensación fresca y calmante, sin residuos grasos.",
    "fullDescription": "HGW Mugwort Soap – Jabón de Artemisa De la sabiduría ancestral al cuidado moderno de la piel. Selección de hierbas naturales con aceite y extracto de hoja de artemisa, una planta usada durante siglos en la medicina tradicional china. Convierte tu limpieza diaria en un ritual fresco, herbal y relajante. Beneficios Limpieza profunda: elimina el exceso de sebo, las impurezas y el maquillaje ligero. Suave exfoliación física que deja la piel fresca y sin residuos grasos. Efecto calmante para la piel. Propiedades antioxidantes, gracias a los flavonoides y polisacáridos de la artemisa. Propiedades antibacterianas, por la acción del aceite de artemisa. Espuma rica y fina. Multiusos: rostro, manos y cuerpo. Presentación minimalista y duradera, más ecológica. Componentes principales Palmitato de sodio y cocoato de sodio: base jabonosa que aporta espuma rica y gran poder limpiador. Carbonato de calcio: exfoliación física suave. Aceite de hoja de artemisia: aroma herbal fresco, con acción calmante y antibacteriana. Extracto de hoja de artemisia: aporta antioxidantes y calma la piel. Sobre la artemisa Las hojas de Artemisia argyi se documentaron en la medicina tradicional china hace siglos y hoy figuran en la Farmacopea China. Son ricas en aceites esenciales, flavonoides, triterpenoides, polisacáridos y taninos. También se asocian a costumbres tradicionales como la moxibustión y los baños de pies. Tipos de piel recomendados Grasa: ideal para pieles propensas a brotes e inflamaciones leves. Mixta: enfocarse en la zona T y limpiar con suavidad el resto. Normal. Seca: se recomienda usarlo en verano. Modo de uso Crea espuma con una red de enjabonado o con las manos mojadas. Aplica solo la espuma sobre el rostro, sin frotar la pastilla directamente. Masajea suavemente con las yemas de los dedos, sin pasar de 60 segundos en la zona T. Aclara bien con agua tibia. Seca con una toalla limpia, con toques suaves. Aplica de inmediato tónico o sérum y después crema hidratante, durante los tres minutos posteriores a la limpieza. Precauciones En piel muy sensible o durante brotes de dermatitis, haz primero una prueba detrás de la oreja o en la parte interna del antebrazo. Evita el contacto con los ojos.",
    "benefits": [
      "Limpieza profunda: elimina el exceso de sebo, las impurezas y el maquillaje ligero.",
      "Suave exfoliación física que deja la piel fresca y sin residuos grasos.",
      "Efecto calmante para la piel.",
      "Propiedades antioxidantes, gracias a los flavonoides y polisacáridos de la artemisa.",
      "Propiedades antibacterianas, por la acción del aceite de artemisa."
    ],
    "ingredients": [
      "Palmitato de sodio y cocoato de sodio: base jabonosa que aporta espuma rica y gran poder limpiador.",
      "Carbonato de calcio: exfoliación física suave.",
      "Aceite de hoja de artemisia: aroma herbal fresco, con acción calmante y antibacteriana.",
      "Extracto de hoja de artemisia: aporta antioxidantes y calma la piel."
    ],
    "usage": "Consumir o aplicar diariamente según la recomendación del empaque y su preferencia personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Jabon-de-artemisa.jpeg",
    "featured": false
  },
  {
    "id": "jabon-de-turmalina",
    "name": "Jabón de turmalina",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 4.62,
    "rating": 4.9,
    "reviewsCount": 25,
    "shortDescription": "Es un Producto de Higiene y Cuidado personal, elaborado con Ingredientes naturales; Su materia prima principal es la Piedra de Turmalina, la cual es muy popular por tener propiedades pzioelectricas y piroelectricas. Se dice que al estar en contacto con el calor del cuerpo, se liberan iones negativos (aniones) o Rayos Infrarojos lejanos; una microenergía que brinda sensación de bienestar, equilibrio de las emociones, mejora la circulación, entre otros beneficios que se le atribuye a la Turmalina. Hay de diferentes colores: Negra, Verde, Rosa, Azul, Azul Neón, Amarillo y Marrón, Bicolor, Sandía y transparente. La utilizada en los jabones de turmalina HGW es la color Negro. La cual su beneficio principal es activar las celulas subcutaneas a traves de los aniones.",
    "fullDescription": "Beneficios del Jabón de Turmalina de HGW Protección electromagnetica: L ibera una gran cantidad de iones negativos, con proteccion contra las ondas magnéticas, Piel Sana: Mejora y previene efizcamente el acné y promueve la contracción de los poros, Construcción de una barrera: esterilización Bacteriana del espectro de activación emoliente. Lucha contra la infracción: Previene la inflamación leve. Limpieza profunda: Mejora los problemas de la piel, causados por el maquillaje. Limpia la suciedad de la piel con microenergía natural. Promueve la circulación Sanguínea. Inhibe el crecimiento bacteriano, limpia, aumenta la elasticidad de la piel. Previene y mejora el acné efectivamente. ¿Cual es el efecto de la turmalina en la piel? La turmalina es una piedra preciosa natural; es un mineral de silicato con boro, magnesio, hierro y otros minerales de composición compleja. Limpia los áfidos, de las bacterias que están en la piel, Puede mejorar la opacidad facial, la piel aspera y la pigmentación. Aumenta la elasticidad de la piel y activa las celulas subcutaneas. Mejora la circulación sanguínea y reduce los acaros, bacterianos, toxinas de la piel y sustancias nocivas contenidas en los cosmeticos. Fortalece el cuero cabelludo, Reduciendo la caida del cabello, y tambien las inflamaciones de la piel. Usado en zonas íntimas, elimina el mal olor. ¿Cómo comprar el Jabón de turmalina en mi país? Si deseas comprar este Jabón de turmalina y vives en cualquiera de los países arriba mencionados, Puedes registrarse como Miembro de HGW , ya sea como cliente o Socio distribuidor, Completando el formulario que esta en el link de tienda online de tu distribuidor activo autorizado mas cercano o quien te haya invitado a conocer este increible y maravilloso Jabón. Si aún no te haz registrado, te invito a que puedas hacerlo en el enlace que te dejo de este post y seguir el paso a paso del video tutorial, y puedes contactarme para más información. Marca: HEALTHY GREEN WORLD, Green World Group. Aviso importante: Este es un producto de higiene y cuidado personal, no es medicamento y no esta tratado para curar ni prevenir enfermedades, si usted presenta alguna enfermedad grave que afecta su piel, no dude en acudir a su medico de cabecera o pedir referencias para un dermatologo especializado, Este Jabon es un complemento a tu rutina de cuidado de la piel y no contiene medicamentos ni quimicos. Fuente informativa: www.healthgreenworld.com",
    "benefits": [
      "Protección electromagnetica: L ibera una gran cantidad de iones negativos, con proteccion contra las ondas magnéticas,",
      "Piel Sana: Mejora y previene efizcamente el acné y promueve la contracción de los poros,",
      "Construcción de una barrera: esterilización Bacteriana del espectro de activación emoliente.",
      "Lucha contra la infracción: Previene la inflamación leve.",
      "Limpieza profunda: Mejora los problemas de la piel, causados por el maquillaje."
    ],
    "ingredients": [
      "Limpia los áfidos, de las bacterias que están en la piel,",
      "Puede mejorar la opacidad facial, la piel aspera y la pigmentación. Aumenta la elasticidad de la piel y activa las celulas subcutaneas.",
      "Mejora la circulación sanguínea y reduce los acaros, bacterianos, toxinas de la piel y sustancias nocivas contenidas en los cosmeticos.",
      "Fortalece el cuero cabelludo, Reduciendo la caida del cabello, y tambien las inflamaciones de la piel.",
      "Usado en zonas íntimas, elimina el mal olor."
    ],
    "usage": "Consumir o aplicar diariamente según la recomendación del empaque y su preferencia personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Jabon-de-turmalina.jpeg",
    "featured": false
  },
  {
    "id": "olive-soap-jabon-de-oliva",
    "name": "Olive Soap – Jabón de Oliva",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 4.62,
    "rating": 5,
    "reviewsCount": 32,
    "shortDescription": "Jabón de Oliva con extracto natural de aceite de oliva, miel especial y vitamina E. Ofrece una limpieza suave, hidratante y no grasosa. Sus propiedades multiefecto hidratan, blanquean y limpian profundamente la piel, eliminando impurezas mientras la mantiene delicada y protegida del envejecimiento.",
    "fullDescription": "Extracto Natural de Aceite de Oliva, Miel Especial y Vitamina E Limpieza suave, hidratante y no grasosa. Información del Producto Nombre del producto: Jabón de Oliva País de origen: China Uso: — Contenido neto: 100g Características: — Fecha de producción: Ver empaque Fecha de caducidad: — Jabón de Oliva Multiefecto Hidratante Hidratante Blanqueamiento Limpieza Hidratante: agrega ingredientes naturales que bloquean el agua como el aceite de oliva y la miel para garantizar una piel suave durante la limpieza. Hidratante: contiene ingredientes naturales como el aceite de oliva y la miel para garantizar una piel suave durante la limpieza. Blanqueamiento: la vitamina E previene la formación de melanina y manchas marrones generando un efecto blanqueador. Limpieza: limpieza profunda de los poros de la piel, rejuvenece la piel. El aceite de oliva limpia la piel sin irritación. Adecuado para personas con cutículas delgadas o alergias en la piel. El valor de pH es débilmente alcalino. Lo mejor para la limpieza matutina. El Jabón de Oliva Cuida tu Piel y la Mantiene Delicada a Través de una Limpieza Profunda Limpieza profunda: El jabón de oliva limpia suave y profundamente la piel así como la suciedad de los poros. Ayuda a la piel a eliminar espinillas y puntos blancos. Hidratante: El aceite de oliva es rico en ácidos grasos y glicerina, ingredientes que se absorben rápidamente en la piel, hidratándola. Tiene un efecto reparador: Elimina las arrugas faciales y previene el envejecimiento de la piel. ¿Por qué elegir el Jabón de Oliva? El jabón de oliva tiene pH suave y sin conservantes, no irrita la piel. El aceite de oliva es rico en escualeno y ácidos grasos esenciales, elementos muy amigables con la piel, la cual absorbe de forma rápida y efectiva manteniendo la elasticidad y la humedad de la piel.",
    "benefits": [
      "Fórmula natural con ingredientes seleccionados de alta pureza",
      "Elaborado bajo estrictos estándares internacionales de calidad GMP",
      "Aporte de bienestar, vitalidad y equilibrio diario",
      "Apto para uso continuo sin aditivos perjudiciales"
    ],
    "ingredients": [
      "El aceite de oliva limpia la piel sin irritación.",
      "Adecuado para personas con cutículas delgadas o alergias en la piel.",
      "El valor de pH es débilmente alcalino.",
      "Lo mejor para la limpieza matutina."
    ],
    "usage": "Consumir o aplicar diariamente según la recomendación del empaque y su preferencia personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Jabon-de-Oliva.jpeg",
    "featured": false
  },
  {
    "id": "press-on-nails-unas-acrilicas",
    "name": "Press On Nails / Uñas acrilicas",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 8.58,
    "rating": 4.8,
    "reviewsCount": 39,
    "shortDescription": "Press On Nails HGW son uñas postizas diseñadas para transformar tu apariencia en minutos de forma rápida, práctica y elegante. Disponibles en diversos estilos y diseños modernos, ofrecen una solución ideal para lucir manos impecables sin necesidad de visitas frecuentes al salón. Son reutilizables con el cuidado adecuado y permiten cambiar tu estilo según cada ocasión.",
    "fullDescription": "Las Press On Nails HGW son uñas postizas listas para usar que combinan belleza, practicidad y versatilidad. Ideales para quienes desean una manicura elegante en pocos minutos, sin complicaciones y con resultados atractivos para cualquier ocasión. Ventajas Aplicación rápida y sencilla. Diseños modernos y elegantes. Variedad de estilos para diferentes ocasiones. Reutilizables con el cuidado adecuado. No dañan las uñas naturales cuando se utilizan correctamente. Perfectas para uso diario o eventos especiales. Beneficios Ahorra tiempo y dinero en manicuras frecuentes. Mantiene las manos con una apariencia cuidada y elegante. Permite cambiar de diseño según tu estilo o estado de ánimo. Ideal para viajes, reuniones y eventos de última hora. Fácil colocación desde la comodidad del hogar. Aporta confianza y realza tu imagen personal. Modo de uso Limpia y seca tus uñas naturales. Selecciona el tamaño adecuado para cada uña. Aplica el adhesivo incluido o pegamento especial. Presiona firmemente durante 10 a 15 segundos. Evita el contacto con agua durante la primera hora. Para retirar Remoja las uñas en agua tibia con jabón. Utiliza removedor especial para uñas postizas si es necesario. Retira cuidadosamente sin forzar. Guarda las uñas para futuros usos. Presentación 30 piezas por paquete Características Diseños variados. Aplicación rápida. Uso reutilizable. Incluye adhesivos y accesorios básicos. Adecuadas para diferentes tamaños de uñas.",
    "benefits": [
      "Aplicación rápida y sencilla.",
      "Diseños modernos y elegantes.",
      "Variedad de estilos para diferentes ocasiones.",
      "Reutilizables con el cuidado adecuado.",
      "No dañan las uñas naturales cuando se utilizan correctamente."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Limpia y seca tus uñas naturales. Selecciona el tamaño adecuado para cada uña. Aplica el adhesivo incluido o pegamento especial. Presiona firmemente durante 10 a 15 segundos. Evita el contacto con agua durante la primera hora.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Press-on-nails-HGW.png",
    "featured": false
  },
  {
    "id": "smilife-blueberry-essence",
    "name": "SMILIFE Blueberry Essence",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 49.29,
    "rating": 4.9,
    "reviewsCount": 46,
    "tag": "Destacado",
    "shortDescription": "SMILIFE Blueberry Essence es una esencia facial hidratante enriquecida con extracto de arándano, ácido hialurónico, colágeno y péptidos que nutren profundamente la piel. Su fórmula ayuda a combatir la sequedad, mejorando la firmeza, suavidad y elasticidad del rostro. Ideal para todo tipo de piel, deja una sensación radiante y delicada tras cada uso diario, gracias a sus ingredientes naturales de alta calidad.",
    "fullDescription": "Formulado con ingredientes naturales de alta calidad para hidratar la piel y protegerla de la sequedad dejando una sensación de piel firme, delicada, suave, elástica y radiante. Ingredientes Agua, glicerina, escualano, colágeno hidrolizado, ceramida 3, poliacriloildimetil taurato de sodio, betaína de glicina, acetato de tocoferilo, ácido aminobutírico, proteína de suero, acetil hexapéptido-8, tripéptido de palmito-1, oligopéptido-7 tetrapéptido de palmito-1, palmitopéptido-1 1, Palmitoil Pentapéptido-4, Dipéptido Diaminobutiroil Bencilamida Diacetato, Palmitoil Tripéptido-5, Palmitoil Tripéptido-8, Carnosina, Alantoína, Hialurnato de sodio, Carbómero, Extracto de Panax Ginseng, Extracto de Portulaca Oleracea, Extracto de fruta de Aloe Vera Callus Dicnierium Extracto de Raíz, Extracto de Fruta de Vaccinium Angustifolium, Extracto de Fruta de Zanthoxylum Bungeanum, Extracto de Fruta de Forsythia Suspensa, Hidróxido de Sodio, Fragancia. Modo de uso Después de la limpiarse el rostro, aplique una cantidad adecuada del producto en la cara, masajee suavemente con los dedos hasta que se absorba por completo. Aplicable para: Todo tipo de piel Precauciones Sólo para uso externo. Evite el contacto con los ojos. Las personas con piel sensible deben aplicarlo después de haber realizado una prueba de reacción aplicando el producto detrás de las orejas. Si observa alguna reacción desfavorable, suspenda su uso. Almacenamiento: Conserve el producto en un lugar fresco y seco y evite la luz directa del sol.",
    "benefits": [
      "Fórmula natural con ingredientes seleccionados de alta pureza",
      "Elaborado bajo estrictos estándares internacionales de calidad GMP",
      "Aporte de bienestar, vitalidad y equilibrio diario",
      "Apto para uso continuo sin aditivos perjudiciales"
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Consumir o aplicar diariamente según la recomendación del empaque y su preferencia personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/SMILIFE-Blueberry-Essence.jpg",
    "featured": false
  },
  {
    "id": "smilife-blueberry-eye-cream",
    "name": "SMILIFE Blueberry Eye Cream",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 35.94,
    "rating": 5,
    "reviewsCount": 18,
    "shortDescription": "SMILIFE Blueberry Eye Cream es una crema para el contorno de ojos formulada con ingredientes naturales como ácido hialurónico, tripéptidos, alantoína y extracto de arándano. Ayuda a hidratar la piel y protegerla de la sequedad, dejando una sensación firme, delicada, suave y elástica. Su textura en espuma facilita la aplicación y proporciona una piel radiante y renovada.",
    "fullDescription": "Crema para Contorno de Ojos Formulado con ingredientes naturales de alta calidad para hidratar la piel y protegerla de la sequedad dejando una sensación de piel firme, delicada, suave, elástica y radiante. Ingredientes Agua, glicerina, lisado de fermento bífido, alcohol cetearílico, extracto de silybum marianum, estearato de glicerilo, poliacriloildimetil taurato de sodio, acetil tetrapéptido-5, dimeticona, coco-glicéridos hidrogenados, isononil isononanoato, extracto de zantoxilo de fruta, extracto de zantoxilo. Glucósidos de paja de trigo cetearil, arginina, triglicérido caprílico / cáprico / mirístico / esteárico, mantequilla de butyrospermum parkii, extracto de prunella vulgaris, acetil hexapéptido-8, dipéptido diaminobutiroil bencilamida diacetato, hialuronato de sodio, hialuronato de sodio cruzado, hialuronato de sodio, hialuronato de sodio, hialuronato de sodio. , Extracto de raíz de Paeonia Albiflora, Poliacilidipato de bis-diglicerilo-2, Escualano, Acetato de tocoferilo, Alantoína, Carnosina, Tripéptido de palmitoilo-5, Tripéptido de palmitoilo-8, Extracto de Centella asiática, Extracto de astrágalo Membranaceus raíz de colágeno Extracto de fruta, tripéptido de cobre-1, fragancia. Modo de uso Aplique una cantidad adecuada del producto en su palma de la mano, frote para producir espuma, luego aplique la espuma en la cara y masajee suavemente durante aproximadamente 1 minuto y enjuague bien con abundante agua. Aplicable para: Todo tipo de piel Precauciones Sólo para uso externo. Evite el contacto con los ojos. Las personas con piel sensible deben aplicarlo después de haber realizado una prueba de reacción aplicando el producto detrás de las orejas. Si observa alguna reacción desfavorable, suspenda su uso. Almacenamiento: Conserve el producto en un lugar fresco y seco y evite la luz directa del sol.",
    "benefits": [
      "Fórmula natural con ingredientes seleccionados de alta pureza",
      "Elaborado bajo estrictos estándares internacionales de calidad GMP",
      "Aporte de bienestar, vitalidad y equilibrio diario",
      "Apto para uso continuo sin aditivos perjudiciales"
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Aplique una cantidad adecuada del producto en su palma de la mano, frote para producir espuma, luego aplique la espuma en la cara y masajee suavemente durante aproximadamente 1 minuto y enjuague bien con abundante agua. Aplicable para: Todo tipo de piel",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/SMILIFE-Blueberry-Eye-Cream.jpg",
    "featured": false
  },
  {
    "id": "smilife-blueberry-lotion",
    "name": "SMILIFE Blueberry Lotion",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 35,
    "rating": 4.8,
    "reviewsCount": 25,
    "shortDescription": "SMILIFE Blueberry Lotion es una loción facial hidratante formulada con ingredientes naturales de alta calidad como ácido hialurónico, colágeno y extractos vegetales de arándano. Ayuda a hidratar la piel y protegerla de la sequedad, dejando una sensación firme, delicada, suave y elástica. Ideal para todo tipo de piel, proporciona hidratación duradera y radiante.",
    "fullDescription": "Loción Facial Hidratante Formulado con ingredientes naturales de alta calidad para hidratar la piel y protegerla de la sequedad dejando una sensación de piel firme, delicada, suave, elástica y radiante. Ingredientes Agua, glicerina, lisado de fermento bífido, extracto de fruta de Zanthoxylum Bungeanum, extracto de fruta de Forsythia suspensa, poliacriloildimetil taurato de sodio, isononanoato de isononilo, mantequilla de butyrospermum parkii, extracto de hoja de eucalipto globulus, extracto de hoja de Salvia Miltiorrhiza, extracto de hoja de Salvia Miltiorrhiza, extracto de hoja de Salvia Miltiorrhiza. Extracto de fruta de Australis, glucósidos de paja de trigo cetearilo, triglicérido caprílico / cáprico / mirístico / esteárico, escualano, poliacilidipato-2 de bis-diglicerilo, polímero cruzado de hialuronato de sodio, hialuronato acetilado de sodio, hialuronato de sodio hidrolizado, 3 de arginina hialuronia Extracto, acetato de tocoferilo, alantoína, carbómero, ácido poliglutámico, acetil hexapéptido-8, carnosina, oligopéptido-1, palmitoil tetrapéptido-7, palmitoil tripéptido-1, palmitoil pentapéptido-4, ectoína, vaccinio angustifolio, extracto de fruta, extracto de levadura Acetil glucosamina, gliceril glucósido, fragancia. Modo de uso Después de la limpiarse el rostro, aplique una cantidad adecuada del producto en la cara, masajee suavemente hasta que se absorba por completo. Aplicable para: Todo tipo de piel Precauciones Sólo para uso externo. Evite el contacto con los ojos. Las personas con piel sensible deben aplicarlo después de haber realizado una prueba de reacción aplicando el producto detrás de las orejas. Si observa alguna reacción desfavorable, suspenda su uso. Almacenamiento: Conserve el producto en un lugar fresco y seco y evite la luz directa del sol.",
    "benefits": [
      "Fórmula natural con ingredientes seleccionados de alta pureza",
      "Elaborado bajo estrictos estándares internacionales de calidad GMP",
      "Aporte de bienestar, vitalidad y equilibrio diario",
      "Apto para uso continuo sin aditivos perjudiciales"
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Después de la limpiarse el rostro, aplique una cantidad adecuada del producto en la cara, masajee suavemente hasta que se absorba por completo. Aplicable para: Todo tipo de piel",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/SMILIFE-Blueberry-Lotion.jpg",
    "featured": false
  },
  {
    "id": "smilife-blueberry-moisturizer",
    "name": "SMILIFE Blueberry Moisturizer",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 38,
    "rating": 4.9,
    "reviewsCount": 32,
    "shortDescription": "SMILIFE Blueberry Moisturizer es una crema facial hidratante formulada con ingredientes naturales de alta calidad como ácido hialurónico, ceramida, colágeno y extracto de arándano. Ayuda a proteger la piel de la sequedad, dejando una sensación firme, delicada, suave y elástica. Ideal para todo tipo de piel, aporta hidratación profunda y un aspecto radiante con el uso diario.",
    "fullDescription": "Crema Facial Hidratante Formulado con ingredientes naturales de alta calidad para hidratar la piel y protegerla de la sequedad dejando una sensación de piel firme, delicada, suave, elástica y radiante. Ingredientes Agua, glicerina, lisado de fermento bifido, estearato de glicerilo, poliacriloildimetil taurato de sodio, mantequilla de butyrospermum parkii, coco-glicéridos hidrogenados, isononanoato de isononilo, ceramida 3, dimeticona, zanthoxylum bungeanum, extracto de fruta de fresa, extracto de fructosa, extracto de cítricos de fresa / Triglicérido cáprico / mirístico / esteárico, polímero cruzado de hialuronato sódico, hialuronato sódico, hialuronato acetilado sódico, hialuronato sódico hidrolizado, carbómero, extracto de raíz de Paeonia Albiflora, escualano, poliacilo-diglicerilo, acetato de bis-diglicerilo, biacilacantotato-2, fibrosacantotato de estriacilo Extracto de raíz, ácido 3-O-etil ascórbico, extracto de Chondrus crispus, extracto de corteza de Salix Alba, extracto de hoja de Morus alba, ácido poliglutámico, acetil hexapéptido-8, carnosina, oligopéptido-1, palmitoil tetrapéptido-7, palmitoil tripéptido-1, palmitoil Pentapéptido-4, Ectoína, Extracto de fruta de Vaccinium Angustifolium, Colágeno, Extracto de levadura, Acetilglucosamina, Glyceril glucósido, fragancia. Modo de uso Después de la limpiarse el rostro, aplique una cantidad adecuada del producto en la cara, masajee suavemente hasta que se absorba por completo. Aplicable para: Todo tipo de piel Precauciones Sólo para uso externo. Evite el contacto con los ojos. Las personas con piel sensible deben aplicarlo después de haber realizado una prueba de reacción aplicando el producto detrás de las orejas. Si observa alguna reacción desfavorable, suspenda su uso. Almacenamiento: Conserve el producto en un lugar fresco y seco y evite la luz directa del sol.",
    "benefits": [
      "Fórmula natural con ingredientes seleccionados de alta pureza",
      "Elaborado bajo estrictos estándares internacionales de calidad GMP",
      "Aporte de bienestar, vitalidad y equilibrio diario",
      "Apto para uso continuo sin aditivos perjudiciales"
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Consumir o aplicar diariamente según la recomendación del empaque y su preferencia personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/SMILIFE-Blueberry-Moisturizer.jpg",
    "featured": false
  },
  {
    "id": "smilife-blueberry-toner",
    "name": "SMILIFE Blueberry Toner",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 30.8,
    "rating": 5,
    "reviewsCount": 39,
    "tag": "Destacado",
    "shortDescription": "SMILIFE Blueberry Toner es un tónico facial hidratante formulado con ingredientes naturales de alta calidad como ácido hialurónico, colágeno y extracto de arándano. Ayuda a hidratar la piel y protegerla de la sequedad, dejando una sensación firme, delicada, suave y elástica. Ideal para todo tipo de piel, aporta frescura y luminosidad con cada uso.",
    "fullDescription": "Tónico Facial Hidratante Formulado con ingredientes naturales de alta calidad para hidratar la piel y protegerla de la sequedad dejando una sensación de piel firme, delicada, suave, elástica y radiante. Ingredientes Agua, lisado de fermento bífido, glicerina, extracto de fruta de Zanthoxylum Bungeanum, extracto de fruta de Forsythia suspensa, extracto de raíz de Paeonia Albiflora, polímero cruzado de hialuronato de sodio, hialuronato de sodio, hialuronato acetilado de sodio, hialuronato de sodio hidrolizado, extracto de fibrosa de roothalet 3, hialuronato de sodio hidrolizado, extracto de filo-estrilanta -Ácido etil ascórbico, extracto de Chondrus Crispus, extracto de corteza de Salix Alba, extracto de hoja de Morus Alba, colágeno, extracto de levadura, extracto de fruta de Vaccinium angustifolium, acetil hexapéptido-8, carnosina, oligopéptido-1, palmitoil tetrapéptido-7, palmitoil tripéptido-1, Palmitoil pentapéptido-4, ectoína, poliglutamato de sodio, acetil glucosamina, gliceril glucósido, aceite de ricino hidrogenado Peg-40, fragancia. Modo de uso Después de la limpiarse el rostro, aplique una cantidad adecuada del producto en la cara, masajee suavemente hasta que se absorba por completo. Aplicable para: Todo tipo de piel",
    "benefits": [
      "Fórmula natural con ingredientes seleccionados de alta pureza",
      "Elaborado bajo estrictos estándares internacionales de calidad GMP",
      "Aporte de bienestar, vitalidad y equilibrio diario",
      "Apto para uso continuo sin aditivos perjudiciales"
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Después de la limpiarse el rostro, aplique una cantidad adecuada del producto en la cara, masajee suavemente hasta que se absorba por completo. Aplicable para: Todo tipo de piel",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/SMILIFE-Blueberry-Toner.jpg",
    "featured": false
  },
  {
    "id": "smilife-deodorant-man",
    "name": "SMILIFE Deodorant Man",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 22.15,
    "rating": 4.8,
    "reviewsCount": 46,
    "shortDescription": "SMILIFE Deodorant Man es un desodorante corporal en spray con protección contra el mal olor y confort para él. Su fórmula suave con extractos naturales cuida y protege la piel masculina, neutralizando y previniendo olores desagradables. Deja la piel ligeramente perfumada, con una sensación de frescura, humectación y comodidad todo el día.",
    "fullDescription": "Deodorant Man Desodorante corporal en Spray. Protección contra el mal olor y Confort para él. Fórmula suave con extractos naturales para el cuidado y protección de la piel en hombres. Actúa neutralizando y previniendo los olores desagradables del cuerpo, dejándola ligeramente perfumada, con una sensación de frescura, humectación y comodidad en la piel. Ingredientes Agua, aceite de ricino hidrogenado Peg-40, fenolsulfonato de zinc, isopentildiol, PCA de zinc, glicerina, perfume, extracto de fruta de Vaccinium Angustifolium (arándano), etilhexilglicerina, extracto de Hamamelis Virginiana, O-cimen-5-ol, fenoxietanol, hialuronato de sodio. Modo de Uso Aplique directamente sobre la piel limpia y seca. Agite el frasco y retire la tapa. Colóquelo entre 10 cm a 15 cm de distancia de la axila. Presione la válvula entre 1 a 3 veces para rociar el desodorante sobre toda la superficie de la piel de las axilas o en áreas corporales que requieran protección contra el mal olor. Recomendado para su uso diario. Precauciones Dado que el producto contiene varios ingredientes, las personas con piel sensible deben aplicarlo después de probarlo en la piel detrás de las orejas. Deje de usarlo si se produce alguna molestia o reacción alérgica. Evite el contacto con los ojos, zonas íntimas y/o mucosas. Enjuague inmediatamente con agua limpia si entra en contacto con estas áreas. Mantenga el producto fuera del alcance de bebés y niños pequeños para evitar su ingestión accidental. Evite aplicar el producto sobre piel dañada o irritada. Almacenamiento Conservar el producto en un lugar fresco, evitar las altas temperaturas y la luz solar directa.",
    "benefits": [
      "Fórmula natural con ingredientes seleccionados de alta pureza",
      "Elaborado bajo estrictos estándares internacionales de calidad GMP",
      "Aporte de bienestar, vitalidad y equilibrio diario",
      "Apto para uso continuo sin aditivos perjudiciales"
    ],
    "ingredients": [
      "Agite el frasco y retire la tapa.",
      "Colóquelo entre 10 cm a 15 cm de distancia de la axila.",
      "Presione la válvula entre 1 a 3 veces para rociar el desodorante sobre toda la superficie de la piel de las axilas o en áreas corporales que requieran protección contra el mal olor."
    ],
    "usage": "Aplique directamente sobre la piel limpia y seca. Agite el frasco y retire la tapa. Colóquelo entre 10 cm a 15 cm de distancia de la axila. Presione la válvula entre 1 a 3 veces para rociar el desodorante sobre toda la superficie de la piel de las axilas o en áreas corporales que requieran protección contra el mal olor. Recomendado para su uso diario.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/DESODORANTE-HOMBRE-HGW.webp",
    "featured": false
  },
  {
    "id": "smilife-deodorant-woman",
    "name": "SMILIFE Deodorant Woman",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 22.15,
    "rating": 4.9,
    "reviewsCount": 18,
    "shortDescription": "SMILIFE Deodorant Woman es un desodorante corporal en spray con protección contra el mal olor y confort para ella. Su fórmula suave con extractos naturales cuida y protege la piel femenina, neutralizando y previniendo olores desagradables. Deja la piel ligeramente perfumada, con una sensación de frescura, humectación y comodidad todo el día.",
    "fullDescription": "Desodorante corporal en Spray. Protección contra el mal olor y Confort para ella. Fórmula suave con extractos naturales para el cuidado y protección de la piel en mujeres. Actúa neutralizando y previniendo los olores desagradables del cuerpo, dejándola ligeramente perfumada, con una sensación de frescura, humectación y comodidad en la piel. Ingredientes Agua, aceite de ricino hidrogenado Peg-40, fenolsulfonato de zinc, isopentildiol, PCA de zinc, glicerina, perfume, extracto de fruta de Vaccinium Angustifolium (arándano), etilhexilglicerina, extracto de Hamamelis Virginiana, O-cimen-5-ol, fenoxietanol, hialuronato de sodio. Modo de Uso Aplique directamente sobre la piel limpia y seca. Agite el frasco y retire la tapa. Colóquelo entre 10 cm a 15 cm de distancia de la axila. Presione la válvula entre 1 a 3 veces para rociar el desodorante sobre toda la superficie de la piel de las axilas o en áreas corporales que requieran protección contra el mal olor. Recomendado para su uso diario. Precauciones Dado que el producto contiene varios ingredientes, las personas con piel sensible deben aplicarlo después de probarlo en la piel detrás de las orejas. Deje de usarlo si se produce alguna molestia o reacción alérgica. Evite el contacto con los ojos, zonas íntimas y/o mucosas. Enjuague inmediatamente con agua limpia si entra en contacto con estas áreas. Mantenga el producto fuera del alcance de bebés y niños pequeños para evitar su ingestión accidental. Evite aplicar el producto sobre piel dañada o irritada. Almacenamiento Conservar el producto en un lugar fresco, evitar las altas temperaturas y la luz solar directa.",
    "benefits": [
      "Fórmula natural con ingredientes seleccionados de alta pureza",
      "Elaborado bajo estrictos estándares internacionales de calidad GMP",
      "Aporte de bienestar, vitalidad y equilibrio diario",
      "Apto para uso continuo sin aditivos perjudiciales"
    ],
    "ingredients": [
      "Agite el frasco y retire la tapa.",
      "Colóquelo entre 10 cm a 15 cm de distancia de la axila.",
      "Presione la válvula entre 1 a 3 veces para rociar el desodorante sobre toda la superficie de la piel de las axilas o en áreas corporales que requieran protección contra el mal olor."
    ],
    "usage": "Aplique directamente sobre la piel limpia y seca. Agite el frasco y retire la tapa. Colóquelo entre 10 cm a 15 cm de distancia de la axila. Presione la válvula entre 1 a 3 veces para rociar el desodorante sobre toda la superficie de la piel de las axilas o en áreas corporales que requieran protección contra el mal olor. Recomendado para su uso diario.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/DESODORANTE-MUJER-HGW.webp",
    "featured": false
  },
  {
    "id": "smilife-facial-cleanser",
    "name": "SMILIFE Facial Cleanser",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 16.43,
    "rating": 5,
    "reviewsCount": 25,
    "shortDescription": "SMILIFE Facial Cleanser es un limpiador facial formulado con ingredientes naturales de alta calidad que genera abundante y delicada espuma. Limpia suavemente la piel, retirando la suciedad y el exceso de grasa del rostro, dejando una sensación de piel firme, suave, hidratada y elástica. Ideal para el cuidado diario de todo tipo de piel.",
    "fullDescription": "Propiedades Formulado con ingredientes naturales de alta calidad que generan abundante y delicada espuma para limpiar suavemente la piel, retirando la suciedad y el exceso de grasa del rostro, dejando una sensación de piel firme, suave, hidratada y elástica. Ingredientes Aqua, Disodium Lauryl Sulfosuccinate, Glycerin, Sodium Cocoyl Glycinate, Sodium Methyl Cocoyl Taurate, Sodium Cocoyl Sarcosinate, Acrylates Copolymer, Sodium Chloride, Zanthoxylum Bungeanum Fruit Extract, Forsythia Suspensa Fruit Extract, Paeonia Albiflora Root Extract, Eucalyptus Globulus Leaf Extract, Salvia Miltiorrhiza Root Extract, Bambusa Vulgaris Leaf Extract, Salix Alba Bark Extract, Gleditsia Australis Fruit Extract, Anthemis Nobilis Flower Extract, Glyceryl Glucoside, Disodium EDTA, Ceramide 3, Vaccinium Angustifolium Fruit Extract, Acetyl Glucosamine, Fragrance. Modo de uso Aplique una cantidad adecuada del producto en la palma de la mano, frote para producir espuma, luego aplique la espuma en la cara y masajee suavemente durante aproximadamente 1 minuto. Enjuague bien con abundante agua. Aplicable para: Todo tipo de piel. Precauciones Sólo para uso externo. Evite el contacto con los ojos. Las personas con piel sensible deben aplicarlo después de realizar una prueba detrás de las orejas. Si observa alguna reacción desfavorable, suspenda su uso. Almacenamiento Conserve el producto en un lugar fresco y seco, evitando la luz directa del sol.",
    "benefits": [
      "Sólo para uso externo.",
      "Evite el contacto con los ojos.",
      "Las personas con piel sensible deben aplicarlo después de realizar una prueba detrás de las orejas.",
      "Si observa alguna reacción desfavorable, suspenda su uso."
    ],
    "ingredients": [
      "Sólo para uso externo.",
      "Evite el contacto con los ojos.",
      "Las personas con piel sensible deben aplicarlo después de realizar una prueba detrás de las orejas.",
      "Si observa alguna reacción desfavorable, suspenda su uso."
    ],
    "usage": "Aplique una cantidad adecuada del producto en la palma de la mano, frote para producir espuma, luego aplique la espuma en la cara y masajee suavemente durante aproximadamente 1 minuto. Enjuague bien con abundante agua. Aplicable para: Todo tipo de piel.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/SMILIFE-Facial-Cleanser.jpg",
    "featured": false
  },
  {
    "id": "smilife-keratin-shampoo",
    "name": "SMILIFE Keratin Shampoo",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 16,
    "rating": 4.8,
    "reviewsCount": 32,
    "tag": "Destacado",
    "shortDescription": "SMILIFE Keratin Shampoo está fortificado con múltiples ingredientes para el cuidado del cabello, como queratina hidrolizada y combinación de plantas chinas para mejorar las puntas abiertas y la sequedad del cabello. Limpia y nutre, reparando de la raíz a las puntas, dejando el cabello limpio, hidratado, sedoso y nutrido.",
    "fullDescription": "Limpia – Nutre – Repara de la raíz a las puntas Fortificado con múltiples ingredientes para el cuidado del cabello, como queratina hidrolizada y combinación de plantas chinas para mejorar las puntas abiertas y la sequedad del cabello, dejando el cabello limpio, hidratado, sedoso y nutrido. Ingredientes Laureth sulfato de sodio, cocamidopropil betaína, estearato de propilenglicol, queratina hidrolizada, agua, fructooligosacáridos, ácido cítrico, cloruro de guar hidroxipropiltrimonio, Dmdm hidantoína, alcohol cetearílico, cocamida dea, polisilicona-10, laureth-23 Extracto de fruta de Monnieri, Extracto de Polygonum Multiflorum, Extracto de hoja de Thuja Orientalis, Extracto de raíz de Zingiber officinale, Parfum, Fenoxietanol, Polyquaternium-7, CI 19140, CI 42090, CI 16185, CI 15985. Modo de uso Tome una cantidad adecuada del producto y aplique uniformemente sobre el cabello húmedo, masajee suavemente hasta formar abundante espuma y enjuague bien con agua limpia. Ideal para uso diario. Precauciones Este producto es solo para uso externo, evite el contacto con los ojos. Conserve el producto fuera del alcance de los niños. Almacenamiento: Conservar el producto en un lugar fresco, evitar las altas temperaturas y la luz solar directa.",
    "benefits": [
      "Fórmula natural con ingredientes seleccionados de alta pureza",
      "Elaborado bajo estrictos estándares internacionales de calidad GMP",
      "Aporte de bienestar, vitalidad y equilibrio diario",
      "Apto para uso continuo sin aditivos perjudiciales"
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Tome una cantidad adecuada del producto y aplique uniformemente sobre el cabello húmedo, masajee suavemente hasta formar abundante espuma y enjuague bien con agua limpia. Ideal para uso diario.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/shampoo-p-500-1.webp",
    "featured": false
  },
  {
    "id": "smilife-tourmaline-shower-gel",
    "name": "SMILIFE Tourmaline Shower Gel",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 12,
    "rating": 4.9,
    "reviewsCount": 39,
    "shortDescription": "SMILIFE Tourmaline Shower Gel es un gel de ducha para todo tipo de piel que elimina las impurezas mientras conecta con tu energía. Formulado con extracto de turmalina y otros ingredientes de calidad, deja la piel limpia, tersa y fresca. Genera una espuma rica y cremosa ideal para el uso diario en todo el cuerpo.",
    "fullDescription": "Gel de Ducha para Todo Tipo de Piel Elimina las impurezas de tu piel mientras conectas con tu energía dejando una piel limpia, tersa y fresca. Ingredientes Agua, laureth sulfato de sodio, cocamidopropil betaína, cocamida DEA, estearato de glicol, DMDM hidantoína, ácido cítrico, alcohol cetearílico, fenoxietanol, extracto de turmalina, CI 19140, CI 42090, CI 16185, CI 15985, perfume. Modo de uso Tome una cantidad adecuada del producto directamente en las palmas de las manos o mediante una esponja de baño y aplique suavemente con masajes en todo el cuerpo formando una espuma rica y cremosa. Enjuague con abundante agua limpia. Ideal para el uso diario. Precauciones Evite el contacto con los ojos. Enjuague inmediatamente con agua limpia si es que entra en contacto con los ojos. Después del uso, si se observa alguna reacción alérgica o algún malestar, deje de usarlo inmediatamente. Mantenga el producto fuera del alcance de bebés y los niños pequeños para evitar ingerir por error. Almacenamiento: Conservar el producto en un lugar fresco, evitar las altas temperaturas y la luz solar directa.",
    "benefits": [
      "Fórmula natural con ingredientes seleccionados de alta pureza",
      "Elaborado bajo estrictos estándares internacionales de calidad GMP",
      "Aporte de bienestar, vitalidad y equilibrio diario",
      "Apto para uso continuo sin aditivos perjudiciales"
    ],
    "ingredients": [
      "Evite el contacto con los ojos. Enjuague inmediatamente con agua limpia si es que entra en contacto con los ojos.",
      "Después del uso, si se observa alguna reacción alérgica o algún malestar, deje de usarlo inmediatamente.",
      "Mantenga el producto fuera del alcance de bebés y los niños pequeños para evitar ingerir por error."
    ],
    "usage": "Tome una cantidad adecuada del producto directamente en las palmas de las manos o mediante una esponja de baño y aplique suavemente con masajes en todo el cuerpo formando una espuma rica y cremosa. Enjuague con abundante agua limpia. Ideal para el uso diario.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/SMILIFE-Tourmaline-Shower-Gel.webp",
    "featured": false
  },
  {
    "id": "almohada-magnetica-de-turmalina",
    "name": "Almohada magnética de turmalina",
    "category": "equipos",
    "categoryLabel": "Tecnología & Hogar",
    "price": 89,
    "rating": 5,
    "reviewsCount": 46,
    "shortDescription": "La Almohada Magnética de Turmalina HGW está diseñada para brindar confort y apoyo a la zona cervical durante el descanso. Gracias a la combinación de turmalina e imanes, proporciona una agradable sensación de calor suave y relajación. Su diseño ergonómico favorece el bienestar diario, ayudando a reducir la tensión muscular y promoviendo un descanso más cómodo y reparador.",
    "fullDescription": "La Almohada Magnética de Turmalina de HGW es un accesorio diseñado para brindar soporte y confort en la zona cervical. Gracias a la combinación de imanes y turmalina, ayuda a proporcionar una sensación de calor suave y relajación, convirtiéndose en una opción práctica para quienes buscan mayor bienestar y descanso diario. Ventajas Diseño ergonómico adaptable al cuello. Material cómodo y agradable al tacto. No requiere electricidad ni baterías. Fácil de usar en casa, oficina o durante viajes. Reutilizable y de larga duración. Beneficios Ayuda a aliviar la tensión en el cuello y zona cervical. Puede contribuir a la relajación muscular. Favorece una mejor calidad de descanso. La turmalina puede ayudar a mantener una sensación de calor suave y constante. Puede apoyar la circulación en la zona de contacto. Modo de uso Colocar la almohada en la zona cervical o en el área donde se necesite apoyo. Utilizar durante el descanso, al dormir o en momentos de relajación. Puede usarse diariamente según necesidad. Mantener limpia y conservar en un lugar seco. Contenido Neto 1 Unidad",
    "benefits": [
      "Diseño ergonómico adaptable al cuello.",
      "Material cómodo y agradable al tacto.",
      "No requiere electricidad ni baterías.",
      "Fácil de usar en casa, oficina o durante viajes.",
      "Reutilizable y de larga duración."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Colocar la almohada en la zona cervical o en el área donde se necesite apoyo. Utilizar durante el descanso, al dormir o en momentos de relajación. Puede usarse diariamente según necesidad. Mantener limpia y conservar en un lugar seco.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Almohada-de-turmalina.png",
    "featured": false
  },
  {
    "id": "collar-de-turmalina",
    "name": "Collar de turmalina",
    "category": "accesorios",
    "categoryLabel": "Turmalina & Bioenergía",
    "price": 40,
    "rating": 4.8,
    "reviewsCount": 18,
    "shortDescription": "El Collar de Turmalina HGW es una pieza artesanal elaborada con piedras naturales que combina elegancia y bienestar en un solo accesorio. Su diseño adaptable y ligero permite usarlo cómodamente todos los días. Según la información del fabricante, la turmalina es valorada por su capacidad para generar iones negativos y ayudar a crear una sensación de equilibrio, protección y armonía en el entorno.",
    "fullDescription": "Ventajas Sencillo y elegante. Hecho a mano con piedras naturales. Adaptable a las medidas. Presente en varios y mágicos colores. La turmalina es venerada como un importante talismán de protección y protege contra la radiación y los contaminantes ambientales. Beneficios La Turmalina: La medicina holística refiere que es uno de los minerales más potentes para absorber la radiación, es excelente para la protección contra la emisión de ondas electromagnéticas de teléfonos celulares, computadoras y otros aparatos electrónicos. Con una piedra turmalina limpiarás y purificarás la energía más densa del entorno haciéndola ligera y equilibrada. Por eso, la turmalina se considera como el mejor aliado para purificar los estados de ánimo. Composición Básica Piedras de turmalina. Sugerencia de Limpieza Prepare una solución salina, para ello deberá verter 1 cuchara de sal de mar en 500 ml de agua. La solución salina deberá indicar un pH entre 7 – 7.5. Coloque el collar de turmalina en la solución salina por un tiempo de 4 horas aproximadamente. Retírelo y séquelo con un paño desechable limpio. Modo de uso Como collar.",
    "benefits": [
      "Sencillo y elegante.",
      "Hecho a mano con piedras naturales.",
      "Adaptable a las medidas.",
      "Presente en varios y mágicos colores.",
      "La turmalina es venerada como un importante talismán de protección y protege contra la radiación y los contaminantes ambientales."
    ],
    "ingredients": [
      "Piedras de turmalina."
    ],
    "usage": "Como collar.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Collar-de-turmalina-No.-15.png",
    "featured": false
  },
  {
    "id": "colgante-piedra-energetica",
    "name": "Colgante Piedra Energética",
    "category": "accesorios",
    "categoryLabel": "Turmalina & Bioenergía",
    "price": 50,
    "rating": 4.9,
    "reviewsCount": 25,
    "tag": "Destacado",
    "shortDescription": "El Colgante de Piedra Energética HGW combina turmalina y tecnología de iones negativos en un accesorio elegante y portátil. Está diseñado para acompañarte diariamente, ayudando a promover una sensación de bienestar, equilibrio y vitalidad. Inspirado en principios de la medicina tradicional oriental, favorece la relajación, la concentración y un estilo de vida más armonioso y saludable.",
    "fullDescription": "La Medicina Tradicional China, sugiere que contribuye a: Mejorar la circulación sanguínea Aliviar el dolor Mejorar la concentración Aliviar la fatiga Estabilizar el sistema nervioso autónomo Mejorar el metabolismo activando la función de la célula FUNCIONES DE LOS IONES NEGATIVOS «Los iones negativos podrían aumentar el flujo de oxígeno al cerebro humano, lo cual contribuye a mejorar la lucidez, reducir la somnolencia y mejorar la energía mental». «Los iones negativos tienen capacidad de protección contra algunos gérmenes que se encuentran en el aire y también contra varias partículas que causan estornudos, tos e irritación de garganta». Por Pierre J. Howard, Ph. D., autor de «The Owners Manual for The Brain»; Director (Investigación) del Centro de Investigación del Cerebro Mental y Ciencia Cognitiva Aplicada, Charlotte, N.C. «Los iones negativos se crean en la naturaleza con moléculas de aire separadas de la luz solar, la radiación, el aire en movimiento o el agua. Los aniones de alta concentración generalmente existen en entornos naturales como bosques, cascadas, etc., que podrían mejorar la energía mental, aliviar la presión y mantener la salud la mente en gran medida». Por Michael Terman, Ph. D., Investigador de la Universidad de Columbia, Nueva York. INFLUENCIA DE LA ENERGÍA EN EL CUERPO HUMANO POR GDV Después de haber usado Energy Stone Pendant, podría sentir que la radiación de la energía es mucho más equitativa y la circulación de energía es mucho mejor. Se concluye que la radiación de la energía viva del cuerpo humano es más fuerte y la circulación interna es mucho mejor. Después de 20 días de uso Probado por Il Kwang Tech, Corea.",
    "benefits": [
      "Fórmula natural con ingredientes seleccionados de alta pureza",
      "Elaborado bajo estrictos estándares internacionales de calidad GMP",
      "Aporte de bienestar, vitalidad y equilibrio diario",
      "Apto para uso continuo sin aditivos perjudiciales"
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Consumir o aplicar diariamente según la recomendación del empaque y su preferencia personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Colgante-de-Piedra-Energetica.webp",
    "featured": false
  },
  {
    "id": "plantillas-de-turmalina",
    "name": "Plantillas de turmalina",
    "category": "accesorios",
    "categoryLabel": "Turmalina & Bioenergía",
    "price": 9,
    "rating": 5,
    "reviewsCount": 32,
    "shortDescription": "Las Plantillas de Turmalina HGW están diseñadas para brindar comodidad y bienestar durante todo el día. Gracias a las propiedades asociadas a la turmalina, ayudan a proporcionar una agradable sensación térmica y confort al caminar o permanecer de pie por largos períodos. Son ideales para el uso diario, se adaptan fácilmente al calzado y pueden acompañarte en el trabajo, actividades físicas o jornadas prolongadas.",
    "fullDescription": "Diseñadas para brindarte una experiencia de confort y equilibrio energético durante todo el día. Gracias a las propiedades naturales de la turmalina, estas plantillas ayudan a estimular puntos clave de reflexología, mejorando la circulación y reduciendo la fatiga. Ventajas Uso discreto, cómodo y diario. Estimula el bienestar de forma natural y sin químicos. Disponible en diferentes tallas. Material duradero y fácil de limpiar. Beneficios Efecto térmico natural. Estimulación de puntos energéticos. Mejora la circulación sanguínea. Reducción del cansancio. Modo de uso Retira las plantillas originales de tu calzado, si es necesario. Coloca las plantillas de turmalina HGW en tus zapatos, con el lado de la turmalina hacia arriba. Si es necesario, recorta las plantillas siguiendo la guía de tallas marcada para un ajuste perfecto. Úsalas todos los días, especialmente durante actividades prolongadas o jornadas laborales. Para mejores resultados, úsalas por un mínimo de 6 a 8 horas diarias. Presentación Contenido: 1 par",
    "benefits": [
      "Uso discreto, cómodo y diario.",
      "Estimula el bienestar de forma natural y sin químicos.",
      "Disponible en diferentes tallas.",
      "Material duradero y fácil de limpiar."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Retira las plantillas originales de tu calzado, si es necesario. Coloca las plantillas de turmalina HGW en tus zapatos, con el lado de la turmalina hacia arriba. Si es necesario, recorta las plantillas siguiendo la guía de tallas marcada para un ajuste perfecto. Úsalas todos los días, especialmente durante actividades prolongadas o jornadas laborales. Para mejores resultados, úsalas por un mínimo de 6 a 8 horas diarias.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Plantillas-de-turmalina-HGW.webp",
    "featured": false
  },
  {
    "id": "protector-de-cintura-de-turmalina",
    "name": "Protector de cintura de turmalina",
    "category": "accesorios",
    "categoryLabel": "Turmalina & Bioenergía",
    "price": 69,
    "rating": 4.8,
    "reviewsCount": 39,
    "shortDescription": "El Protector de Cintura de Turmalina HGW está diseñado para brindar soporte lumbar, comodidad y bienestar diario. Incorpora nanoturmalina y piedras magnéticas que generan calor natural para ayudar a relajar la zona baja de la espalda. Su diseño ajustable, resistente y transpirable favorece una mejor postura, apoyo lumbar y mayor confort durante las actividades cotidianas.",
    "fullDescription": "Soporte Natural y Alivio Diario Genera calor natural gracias a la nanoturmalina y piedras magnéticas. Diseñado para brindarte confort, estabilidad y bienestar en tu rutina diaria. Fabricado con materiales de alta calidad y piedras magnéticas, este cinturón. Ventajas Materiales resistentes, transpirables y duraderos. No requiere electricidad ni batería. Fácil de usar en cualquier momento del día. Diseño ergonómico y ajustable para mayor comodidad y soporte. Beneficios Activa un calor terapéutico natural que alivia molestias y relaja la zona lumbar, gracias a la nanoturmalina y piedras magnéticas que incorpora. Ayuda a corregir la postura. Mejora la circulación sanguínea y reduce la inflamación. Alivia dolores musculares y articulares. Brinda soporte y estabilidad a la zona lumbar. Modo de uso Coloca el protector directamente sobre la piel seca en la zona lumbar. Ajusta con las tiras elásticas hasta sentir firmeza y comodidad. Para activar el efecto térmico de la turmalina, se recomienda friccionar ligeramente el área con la mano durante unos segundos al colocarlo. Úsalo por períodos de 30 minutos a 2 horas al día, según la necesidad y tolerancia.",
    "benefits": [
      "Materiales resistentes, transpirables y duraderos.",
      "No requiere electricidad ni batería.",
      "Fácil de usar en cualquier momento del día.",
      "Diseño ergonómico y ajustable para mayor comodidad y soporte."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Coloca el protector directamente sobre la piel seca en la zona lumbar. Ajusta con las tiras elásticas hasta sentir firmeza y comodidad. Para activar el efecto térmico de la turmalina, se recomienda friccionar ligeramente el área con la mano durante unos segundos al colocarlo. Úsalo por períodos de 30 minutos a 2 horas al día, según la necesidad y tolerancia.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/protector_de_cintura_hgw-removebg-preview.png",
    "featured": false
  },
  {
    "id": "protector-de-cuello-autocalentable-de-turmalina",
    "name": "Protector de cuello autocalentable de turmalina",
    "category": "accesorios",
    "categoryLabel": "Turmalina & Bioenergía",
    "price": 16,
    "rating": 4.9,
    "reviewsCount": 46,
    "shortDescription": "El Protector de Cuello de Turmalina HGW está diseñado para brindar soporte, confort y una agradable sensación térmica en la zona cervical. Gracias a sus partículas de turmalina, ayuda a estimular la circulación local, relajar la musculatura y reducir la tensión acumulada por largas jornadas de trabajo, estudio o uso de dispositivos electrónicos. Su diseño ajustable y ligero permite un uso cómodo en casa, la oficina o durante el descanso.",
    "fullDescription": "Alivio, soporte y confort térmico en la zona cervical. Gracias a la inclusión de partículas de turmalina, este accesorio estimula suavemente la circulación sanguínea y genera un efecto de calor que ayuda a relajar los músculos y liberar tensiones acumuladas en el cuello y la parte superior de la espalda. Ventajas Turmalina activa: al contacto con la piel y la fricción, emite calor natural e infrarrojo lejano. Diseño ajustable, ligero y ergonómico que se adapta perfectamente al cuello. No requiere electricidad ni baterías para funcionar. Ideal para usar en casa, en el trabajo o en momentos de descanso. Beneficios Alivio de tensión y rigidez en la zona cervical. Mejora de la circulación sanguínea local. Relajación muscular y reducción del estrés. Ayuda a prevenir molestias por malas posturas o largas horas frente a pantallas. Promueve una sensación general de bienestar y descanso. Modo de uso Coloca el protector alrededor del cuello, ajustándolo suavemente con el cierre de velcro. Para activar el calor natural de la turmalina, fricciona ligeramente con la mano durante unos segundos antes de colocarlo. Se recomienda usarlo entre 15 y 45 minutos al día, según la necesidad y siempre sobre la piel seca.",
    "benefits": [
      "Turmalina activa: al contacto con la piel y la fricción, emite calor natural e infrarrojo lejano.",
      "Diseño ajustable, ligero y ergonómico que se adapta perfectamente al cuello.",
      "No requiere electricidad ni baterías para funcionar.",
      "Ideal para usar en casa, en el trabajo o en momentos de descanso."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Coloca el protector alrededor del cuello, ajustándolo suavemente con el cierre de velcro. Para activar el calor natural de la turmalina, fricciona ligeramente con la mano durante unos segundos antes de colocarlo. Se recomienda usarlo entre 15 y 45 minutos al día, según la necesidad y siempre sobre la piel seca.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Protector_de_cuello_con_turmalina_HGW-removebg-preview.png",
    "featured": true
  },
  {
    "id": "protector-intimo-diario-con-turmalina",
    "name": "Protector Intimo diario con Turmalina",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 5.5,
    "rating": 5,
    "reviewsCount": 18,
    "tag": "Destacado",
    "shortDescription": "Enjoyable Panty Liner HGW es un protector diario con banda de turmalina generadora de aniones y suave capa de algodón diseñada para brindar comodidad, frescura y protección durante el día. Su estructura multicapa ayuda a mantener una sensación de limpieza y bienestar, mientras su diseño ultrafino permite un uso discreto y confortable para acompañar la rutina diaria femenina.",
    "fullDescription": "Protector diario femenino elaborado con materiales suaves y tecnología de turmalina. Diseñado para proporcionar comodidad, frescura y protección diaria, ayudando a mantener una agradable sensación de bienestar durante todo el día. Ventajas Textura suave y ultrafina. Diseño discreto y cómodo. Alta capacidad de absorción. Elaborado con materiales de calidad. Banda aniónica con turmalina. Ideal para uso diario. Beneficios Ayuda a mantener una sensación de frescura e higiene. Contribuye al confort diario femenino. Su capa de algodón proporciona suavidad al contacto con la piel. Diseño anatómico para mayor comodidad. Favorece una sensación de protección durante el día. Material ligero y transpirable para uso prolongado. Características Banda aniónica de turmalina. Capa suave de algodón. Diseño multicapa. Uso discreto y confortable. Protector diario femenino. Modo de uso Retire una unidad del empaque. Quite el envoltorio protector. Fije la parte adhesiva a la ropa interior. Ajuste para una colocación cómoda y segura. Reemplace cuando sea necesario. Composición Celulosa Tela no tejida Extracto de turmalina Polipropileno Presentación 30 unidades por paquete Precauciones Solo para uso externo. No utilizar si el empaque está abierto o dañado. No desechar en el inodoro.",
    "benefits": [
      "Textura suave y ultrafina.",
      "Diseño discreto y cómodo.",
      "Alta capacidad de absorción.",
      "Elaborado con materiales de calidad.",
      "Banda aniónica con turmalina."
    ],
    "ingredients": [
      "Celulosa",
      "Tela no tejida",
      "Extracto de turmalina",
      "Polipropileno"
    ],
    "usage": "Retire una unidad del empaque. Quite el envoltorio protector. Fije la parte adhesiva a la ropa interior. Ajuste para una colocación cómoda y segura. Reemplace cuando sea necesario.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Protectores-intimos-HGW.png",
    "featured": false
  },
  {
    "id": "protector-de-rodilla-de-turmalina",
    "name": "Protector de Rodilla de Turmalina",
    "category": "accesorios",
    "categoryLabel": "Turmalina & Bioenergía",
    "price": 55,
    "rating": 4.8,
    "reviewsCount": 25,
    "shortDescription": "El Protector de Rodilla de Turmalina HGW está diseñado para brindar soporte, estabilidad y confort a las articulaciones durante las actividades diarias. Gracias a su tecnología basada en partículas de turmalina, genera una agradable sensación de calor natural al contacto con la piel. Su diseño ajustable, ligero y transpirable favorece la movilidad, ayudando a mantener las rodillas cómodas y protegidas.",
    "fullDescription": "Brinda alivio natural, estabilidad y confort a las articulaciones de la rodilla. Su tecnología basada en partículas de turmalina activa un efecto térmico suave al contacto con la piel, ayudando a estimular la circulación sanguínea, relajar los músculos y reducir molestias. Ventajas Turmalina activa: al contacto con la piel y la fricción, emite calor natural e infrarrojo lejano. Diseño ajustable, ligero y ergonómico, que se adapta perfectamente a la rodilla. No requiere electricidad ni baterías para funcionar. Ligero, flexible y transpirable, permite libertad de movimiento. Beneficios Alivio de molestias, rigidez o inflamación en la zona de la rodilla. Mejora la circulación sanguínea local gracias al calor natural. Apoyo articular que ayuda a mantener la estabilidad durante el movimiento. Favorece la relajación muscular y la recuperación física. Contribuye al bienestar diario en personas con desgaste articular. Modo de uso Colocar el protector directamente sobre la rodilla, con la piel limpia y seca. Ajustar con firmeza pero sin apretar. Para activar el calor natural de la turmalina, fricciona ligeramente con la mano durante unos segundos al colocarlo. Se recomienda usar de 30 minutos a 2 horas por día, según la necesidad y la sensibilidad personal. Enviar por correo electrónico Escribe un blog Compartir en X Compartir con Facebook Compartir en Pinterest",
    "benefits": [
      "Turmalina activa: al contacto con la piel y la fricción, emite calor natural e infrarrojo lejano.",
      "Diseño ajustable, ligero y ergonómico, que se adapta perfectamente a la rodilla.",
      "No requiere electricidad ni baterías para funcionar.",
      "Ligero, flexible y transpirable, permite libertad de movimiento."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Colocar el protector directamente sobre la rodilla, con la piel limpia y seca. Ajustar con firmeza pero sin apretar. Para activar el calor natural de la turmalina, fricciona ligeramente con la mano durante unos segundos al colocarlo. Se recomienda usar de 30 minutos a 2 horas por día, según la necesidad y la sensibilidad personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/protector_de_rodilla_hgw-removebg-preview.png",
    "featured": false
  },
  {
    "id": "toalla-sanitaria-dia-con-turmalina",
    "name": "Toalla Sanitaria Día con Turmalina",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 5.5,
    "rating": 4.9,
    "reviewsCount": 32,
    "shortDescription": "Enjoyable Day Use HGW es una toalla sanitaria de uso diurno elaborada con una suave capa de algodón y banda de turmalina generadora de aniones. Diseñada para brindar comodidad, absorción y protección durante el día, ayuda a mantener una sensación de frescura y bienestar. Su diseño anatómico y materiales de alta calidad ofrecen una experiencia cómoda para el cuidado íntimo femenino.",
    "fullDescription": "Toalla sanitaria femenina para uso diurno, desarrollada con tecnología de turmalina y materiales suaves que proporcionan protección, comodidad y absorción durante las actividades diarias. Ventajas Textura suave y ultrafina. Excelente capacidad de absorción. Diseño anatómico y confortable. Elaborada con materiales de alta calidad. Banda aniónica con turmalina. Empaque seguro e higiénico. Beneficios Ayuda a mantener una sensación de frescura durante el día. Favorece el confort y bienestar femenino. La capa de algodón proporciona suavidad al contacto con la piel. Diseño cómodo para acompañar la rutina diaria. Contribuye a una sensación de protección durante el período menstrual. Materiales ligeros y transpirables para mayor comodidad. Características Banda aniónica de turmalina. Capa suave de algodón. Diseño multicapa. Uso diurno. Ajuste anatómico. Modo de uso Retire una unidad del empaque. Quite el envoltorio y las cintas protectoras. Adhiera la toalla a la ropa interior. Ajuste para una colocación cómoda y segura. Reemplace cuando sea necesario. Composición Celulosa Tela no tejida Extracto de turmalina Polipropileno Presentación 10 unidades por paquete Precauciones Solo para uso externo. No utilizar si el empaque está abierto o dañado. No desechar en el inodoro.",
    "benefits": [
      "Textura suave y ultrafina.",
      "Excelente capacidad de absorción.",
      "Diseño anatómico y confortable.",
      "Elaborada con materiales de alta calidad.",
      "Banda aniónica con turmalina."
    ],
    "ingredients": [
      "Celulosa",
      "Tela no tejida",
      "Extracto de turmalina",
      "Polipropileno"
    ],
    "usage": "Retire una unidad del empaque. Quite el envoltorio y las cintas protectoras. Adhiera la toalla a la ropa interior. Ajuste para una colocación cómoda y segura. Reemplace cuando sea necesario.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Toalla-sanitaria-con-turmalina-HGW-uso-dia.png",
    "featured": false
  },
  {
    "id": "toalla-sanitaria-noche-con-turmalina",
    "name": "Toalla Sanitaria Noche con Turmalina",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 4.5,
    "rating": 5,
    "reviewsCount": 39,
    "shortDescription": "Enjoyable Night Use HGW es una toalla sanitaria para uso nocturno elaborada con una suave capa de algodón y banda de turmalina generadora de aniones. Diseñada para brindar comodidad, absorción y protección durante las horas de descanso, ayuda a mantener una sensación de frescura y bienestar. Su diseño anatómico y materiales de calidad ofrecen mayor confianza y confort durante la noche.",
    "fullDescription": "Toalla sanitaria femenina especialmente diseñada para el uso nocturno. Combina una suave capa de algodón con tecnología de turmalina para proporcionar comodidad, protección y tranquilidad durante el descanso. Ventajas Textura suave y ultrafina. Excelente capacidad de absorción. Diseño anatómico para mayor comodidad. Elaborada con materiales de alta calidad. Banda aniónica con turmalina. Empaque seguro e higiénico. Beneficios Ayuda a mantener una sensación de frescura durante la noche. Brinda comodidad y protección durante el descanso. La capa de algodón proporciona suavidad al contacto con la piel. Favorece una experiencia más cómoda durante el período menstrual. Diseño pensado para uso nocturno. Material ligero y confortable para mayor tranquilidad. Características Banda aniónica de turmalina. Capa suave de algodón. Diseño multicapa. Uso nocturno. Ajuste anatómico y confortable. Modo de uso Retire una unidad del empaque. Quite el envoltorio y las cintas protectoras. Fije la toalla a la ropa interior. Ajuste para una colocación cómoda y segura. Reemplace cuando sea necesario. Composición Celulosa Tela no tejida Extracto de turmalina Polipropileno Presentación 8 unidades por paquete Precauciones Solo para uso externo. No utilizar si el empaque está abierto o dañado. No desechar en el inodoro.",
    "benefits": [
      "Textura suave y ultrafina.",
      "Excelente capacidad de absorción.",
      "Diseño anatómico para mayor comodidad.",
      "Elaborada con materiales de alta calidad.",
      "Banda aniónica con turmalina."
    ],
    "ingredients": [
      "Celulosa",
      "Tela no tejida",
      "Extracto de turmalina",
      "Polipropileno"
    ],
    "usage": "Retire una unidad del empaque. Quite el envoltorio y las cintas protectoras. Fije la toalla a la ropa interior. Ajuste para una colocación cómoda y segura. Reemplace cuando sea necesario.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Toalla-sanitaria-con-turmalina-HGW-uso-nocturno.png",
    "featured": false
  },
  {
    "id": "berry-juice-high-vc",
    "name": "Berry Juice HIGH VC",
    "category": "suplementos",
    "categoryLabel": "Nutrición & Suplementos",
    "price": 25,
    "rating": 4.8,
    "reviewsCount": 46,
    "tag": "Destacado",
    "shortDescription": "Berry Juice High VC HGW es una deliciosa bebida en polvo rica en vitamina C, elaborada con una combinación de arándanos, uvas, moras, cerezas y frambuesas. Su fórmula concentra antioxidantes naturales, vitaminas y compuestos vegetales que complementan una alimentación equilibrada. De agradable sabor frutal y fácil preparación, es ideal para disfrutar diariamente y apoyar el bienestar general.",
    "fullDescription": "Jugo de uva en polvo rico en vitamina C, el sabor y la nutrición son más atractivos si están presentes en un solo producto. ¡Una explosión de arándanos, frambuesas, moras y cerezas! Ventajas Protege la salud visual de los niños. Antioxidante, antiinflamatorio y antibacteriano. Promueve la producción de colágeno. Ayuda a regular la inmunidad. Contiene una variedad de frutas ricas en nutrientes y alto contenido de antioxidantes. Beneficios Arándano : Enriquecido con un gran grupo de nutrientes antioxidantes: antocianinas de arándano, flavonoides, polifenoles, betacaroteno, resveratrol, pterostilbeno, SOD, antocianina, antiinflamatorios, brindando una protección ocular, antioxidante y cerebral. Alto contenido de vitaminas y minerales como potasio, magnesio, manganeso y selenio. Moras : Conocido también como fruto de la vida y diamante negro gracias a sus propiedades antioxidantes, antiinflamatorias y antivirales. Aumenta la vitalidad celular gracias a la vitamina C y betacaroteno que contiene. Cereza : Ayuda a mejorar la calidad del sueño por su rico contenido en melatonina vegetal y su aporte nutritivo por la presencia de betacaroteno, hierro, calcio y fósforo. Uva : Excelente antioxidante natural que reduce la viscosidad de la sangre e inhibe la actividad plaquetaria. Modo de uso Vierta el contenido de 1 sachet del producto en un vaso o taza, agregue aproximadamente 150 ml de agua tibia, revuelva uniformemente y disfrute de un sabor agradable. Ingredientes Jugo de arándano en polvo Jugo de uva en polvo Extracto de arándanos en polvo Extracto de cereza en polvo Extracto de frambuesa en polvo Extracto de mora en polvo Tiempo de Vida Útil 24 meses Precaución Almacenar a temperatura no mayor a 30°C. Conservar el producto a temperatura ambiente en un lugar fresco y seco. Contenido Contenido Neto: 6 g Número de Sachets: 30",
    "benefits": [
      "Protege la salud visual de los niños.",
      "Antioxidante, antiinflamatorio y antibacteriano.",
      "Promueve la producción de colágeno.",
      "Ayuda a regular la inmunidad.",
      "Contiene una variedad de frutas ricas en nutrientes y alto contenido de antioxidantes."
    ],
    "ingredients": [
      "Jugo de arándano en polvo",
      "Jugo de uva en polvo",
      "Extracto de arándanos en polvo",
      "Extracto de cereza en polvo",
      "Extracto de frambuesa en polvo",
      "Extracto de mora en polvo"
    ],
    "usage": "Vierta el contenido de 1 sachet del producto en un vaso o taza, agregue aproximadamente 150 ml de agua tibia, revuelva uniformemente y disfrute de un sabor agradable.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/berry-juice-p-500.png",
    "featured": false
  },
  {
    "id": "blacktea-coffee",
    "name": "BlackTea Coffee",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 20,
    "rating": 4.9,
    "reviewsCount": 18,
    "shortDescription": "Black Tea Coffee HGW combina café y té negro en una práctica bebida instantánea sin azúcar, endulzada naturalmente. Su fórmula ofrece una experiencia aromática y de agradable sabor, ideal para quienes buscan una bebida energética y funcional. Gracias a la combinación de café y té negro, ayuda a mantener la concentración, reducir la fatiga y complementar un estilo de vida activo con una preparación rápida y sencilla.",
    "fullDescription": "Ventajas Sin azúcar y endulzado naturalmente. Práctico e instantáneo. De suave textura, agradable aroma y sabor delicioso. Altamente benéfico para la salud cerebral. Beneficios Café Reduce la fatiga muscular y promueve la secreción de jugo digestivo, favoreciendo la función renal y digestiva, previniendo la distensión gástrica y aliviando el estreñimiento. Té Negro Coadyuva con la digestión gastrointestinal, promueve el apetito, tiene un efecto diurético, elimina el edema y fortalece la función cardíaca. Elimina la fatiga, promueve la reacción del pensamiento más rápido y mejora la memoria al estimular la corteza cerebral. Modo de uso Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente, beba a una temperatura adecuada y disfrute de su sabor agradable. Componentes y aditivos Pacientes con cálculos, anemia o psicastenia no deben beber té negro. Las personas que toman medicamentos no se les permite beber té negro. El té negro destruye el efecto pesticida. Presentación 3.5 g x 12 sobres Tiempo de Vida Útil 24 meses Contenido Contenido Neto: 42 g Número de Sachets: 12",
    "benefits": [
      "Sin azúcar y endulzado naturalmente.",
      "Práctico e instantáneo.",
      "De suave textura, agradable aroma y sabor delicioso.",
      "Altamente benéfico para la salud cerebral."
    ],
    "ingredients": [
      "Contenido Neto: 42 g",
      "Número de Sachets: 12"
    ],
    "usage": "Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente, beba a una temperatura adecuada y disfrute de su sabor agradable.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/black-tea-p-500.png",
    "featured": false
  },
  {
    "id": "coffee-ceps",
    "name": "Coffee Ceps",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 20,
    "rating": 5,
    "reviewsCount": 25,
    "shortDescription": "Coffee Ceps HGW es una bebida instantánea sin azúcar que combina café con micelio fermentado de Cordyceps sinensis, un ingrediente tradicionalmente valorado en la cultura oriental. Su fórmula ofrece una experiencia aromática y de agradable sabor, ideal para quienes buscan energía y practicidad en su día a día. Es fácil de preparar y una excelente opción para acompañar un estilo de vida activo y equilibrado.",
    "fullDescription": "Ventajas Sin azúcar y endulzado naturalmente. Práctico e instantáneo. De suave textura, agradable aroma y sabor delicioso. Fortificado con el milenario Cordyceps sinensis. Beneficios Reduce la fatiga muscular y promueve la secreción de jugo digestivo, favorece la función renal y digestiva, previene la distensión gástrica y ayuda a aliviar el estreñimiento. Promueve la salud del riñón y el pulmón, es capaz de detener el sangrado y reducir la flema. Coadyuva a aliviar los síntomas de la menopausia. Tiene efectos que complementan la fuerza física, mejoran la capacidad del ejercicio y promueven la recuperación ante enfermedades cardiovasculares y cerebrovasculares. Micelio Cordyceps fermentado Rico en aminoácidos y vitaminas. Su uso a largo plazo puede mejorar significativamente la inmunidad funcional y reducir la incidencia de infecciones y tumores. Modo de uso Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente, beba a una temperatura adecuada y disfrute de su sabor agradable. Presentación 3.5 g x 12 sobres Tiempo de Vida Útil 24 meses Contenido Contenido Neto: 42 g Número de Sachets: 12",
    "benefits": [
      "Sin azúcar y endulzado naturalmente.",
      "Práctico e instantáneo.",
      "De suave textura, agradable aroma y sabor delicioso.",
      "Fortificado con el milenario Cordyceps sinensis."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente, beba a una temperatura adecuada y disfrute de su sabor agradable.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/cofee-ceps-p-500.png",
    "featured": false
  },
  {
    "id": "blueberry-coffee-hgw",
    "name": "Blueberry Coffee HGW",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 23,
    "rating": 4.8,
    "reviewsCount": 32,
    "shortDescription": "Blue Berry Coffee HGW combina café soluble con arándanos, creando una bebida funcional de agradable sabor y aroma. Su fórmula aporta antioxidantes naturales provenientes de los arándanos, conocidos por su contenido de antocianinas, junto con las propiedades estimulantes del café. Es una opción práctica para quienes buscan disfrutar de una bebida energética mientras complementan su alimentación diaria.",
    "fullDescription": "HGW combina el café soluble con el superalimento a base de arándanos, ofreciendo a sus consumidores un alimento funcional para el cuidado de su salud. Ventajas Práctico e instantáneo. Nutritivo, saludable y fortificado con arándanos. De suave textura, agradable aroma y un sabor delicioso. Elaborado con ingredientes cuidadosamente seleccionados, seguros, funcionales y de alta calidad. Beneficios Es rico en antocianinas, moléculas más pequeñas que la procianidina y de mejores efectos de ósmosis y antioxidantes. La actividad antioxidante de las antocianinas es 50 veces mayor que la vitamina E y 200 veces mayor que la vitamina C. Tiene un 100% de biodisponibilidad para el cuerpo humano y actúa en la sangre 20 minutos después de ser tomado. Arándanos (Vaccinium corymbosum L.) Es un potente aliado que ayuda a potenciar el sistema inmunológico y a la vez ayuda a quemar grasas. Disminuye la posibilidad de sufrir enfermedades neurodegenerativas gracias a su alto contenido de nutrientes y antioxidantes. Ayuda a reforzar el sistema inmunológico, potencia el trabajo de la vista, los riñones y mejora la memoria; también favorece la absorción del hierro en el cuerpo y promueve la reducción del colesterol. Modo de uso Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente, beba a una temperatura adecuada y disfrute de su sabor agradable. Presentación 15 g x 12 sobres Tiempo de Vida Útil 12 meses Ingredientes Crema no láctea Café instantáneo en polvo Arándanos en polvo Precauciones No consumir si es alérgico a alguno de los ingredientes. Contenido Contenido Neto: 180 g Número de Sachets: 12",
    "benefits": [
      "Práctico e instantáneo.",
      "Nutritivo, saludable y fortificado con arándanos.",
      "De suave textura, agradable aroma y un sabor delicioso.",
      "Elaborado con ingredientes cuidadosamente seleccionados, seguros, funcionales y de alta calidad."
    ],
    "ingredients": [
      "Crema no láctea",
      "Café instantáneo en polvo",
      "Arándanos en polvo"
    ],
    "usage": "Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente, beba a una temperatura adecuada y disfrute de su sabor agradable.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/blueberry-coffee-p-500.png",
    "featured": false
  },
  {
    "id": "cafe-de-ashwagandha",
    "name": "Café de Ashwagandha",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 23,
    "rating": 4.9,
    "reviewsCount": 39,
    "tag": "Destacado",
    "shortDescription": "Ashwaganda Coffee HGW combina café instantáneo con extracto de ashwagandha, una planta adaptógena utilizada tradicionalmente en la medicina oriental. Su fórmula ofrece una bebida práctica y de agradable sabor que ayuda a complementar la energía diaria mientras favorece la concentración y el bienestar general. Es una excelente alternativa para quienes buscan disfrutar del café con ingredientes funcionales de origen natural.",
    "fullDescription": "El café ashwaganda es una variante especial del café que combina las propiedades estimulantes de la cafeína con los beneficios relajantes y adaptógenos de la ashwaganda. La ashwaganda es una planta medicinal que se ha utilizado durante siglos en la medicina oriental debido a sus propiedades terapéuticas de relajación para el cuerpo humano. Ventajas Práctico e instantáneo. Fortalece al sistema inmunológico. Ayuda a mejorar la concentración y claridad mental. Beneficios Reducción del Estrés y la Ansiedad: Uno de los beneficios clave de la ashwaganda es su capacidad para reducir el estrés y la ansiedad. Cuando se combina con el café, proporciona una sensación de energía sostenible sin la estimulación excesiva. Mejora del Enfoque y la Concentración: La cafeína del café y la ashwaganda pueden ayudar a mejorar la concentración y la claridad mental. Potencial para la Regulación del Sueño: Algunas personas han informado que el café ashwaganda les ayuda a mantener la energía durante el día y a conciliar el sueño más fácilmente por la noche. Propiedades Antiinflamatorias: La ashwaganda tiene propiedades antiinflamatorias que pueden ser beneficiosas para la salud en general. Apoyo a la Salud Inmunológica: Algunas investigaciones sugieren que la ashwaganda puede fortalecer el sistema inmunológico, lo que podría ser beneficioso en la prevención de enfermedades. Modo de uso Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua tibia, mezcle homogéneamente y disfrute de su sabor agradable. Ingredientes Crema no láctea Café instantáneo en polvo Extracto de ginseng indio (ashwagandha) Extracto de ostra Extracto de flor masculina de Eucommia Extracto de frambuesa Precauciones No recomendable para mujeres embarazadas ni bebés. Este producto también incluye ingredientes herbales naturales. No consumir si el sellado está roto o el producto está dañado. Es normal que se formen grumos después de la adición inicial de agua. Mezcle bien para romper los grumos del producto. Presentación 15 g x 12 sobres Tiempo de vida útil 24 meses Contenido Contenido Neto: 15 g Número de Sachets: 12",
    "benefits": [
      "Práctico e instantáneo.",
      "Fortalece al sistema inmunológico.",
      "Ayuda a mejorar la concentración y claridad mental."
    ],
    "ingredients": [
      "Crema no láctea",
      "Café instantáneo en polvo",
      "Extracto de ginseng indio (ashwagandha)",
      "Extracto de ostra",
      "Extracto de flor masculina de Eucommia",
      "Extracto de frambuesa"
    ],
    "usage": "Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua tibia, mezcle homogéneamente y disfrute de su sabor agradable.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/aswaganda-coffee.png",
    "featured": false
  },
  {
    "id": "cafe-soluble-de-ganoderma",
    "name": "GANODERMA SOLUBLE COFFEE",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 23,
    "rating": 5,
    "reviewsCount": 46,
    "shortDescription": "Ganoderma Soluble Coffee HGW combina café instantáneo con extracto de Ganoderma lucidum, un hongo utilizado tradicionalmente en la cultura oriental. Su fórmula ofrece una bebida práctica, aromática y de agradable sabor que puede disfrutarse en cualquier momento del día. La combinación de café y ganoderma brinda una experiencia energizante, ayudando a complementar un estilo de vida activo y equilibrado.",
    "fullDescription": "HGW combina el café soluble con el milenario superalimento Ganoderma lucidum, ofreciendo así a sus consumidores un alimento funcional que ayude y garantice el cuidado de su salud. Ventajas Práctico e instantáneo. Nutritivo y saludable. De suave textura, agradable aroma y sabor delicioso. Elaborado con ingredientes cuidadosamente seleccionados, seguros, funcionales y de alta calidad. Fortificado con extracto de Ganoderma lucidum. Beneficios Café “Estimulante”, “energizante”, mejora la atención y concentración del individuo, reduce la sensación de fatiga mental y física y consigue retardar la aparición del Alzheimer. Ganoderma lucidum Reduce el estrés oxidativo de las células, regula el sistema inmune, inhibe la angiogénesis y la formación de tumores. Favorece las respuestas antiinflamatorias en el organismo. Modo de uso Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente, beba a una temperatura adecuada y disfrute de su sabor agradable. Presentación 15 g x 12 sobres Tiempo de Vida Útil 24 meses Ingredientes Café instantáneo en polvo Crema no láctea Ganoderma Azúcar granulada blanca Aromatizantes Precauciones No consumir si es alérgico a alguno de los ingredientes. Contenido Contenido Neto: 180 g Número de Sachets: 12",
    "benefits": [
      "Práctico e instantáneo.",
      "Nutritivo y saludable.",
      "De suave textura, agradable aroma y sabor delicioso.",
      "Elaborado con ingredientes cuidadosamente seleccionados, seguros, funcionales y de alta calidad.",
      "Fortificado con extracto de Ganoderma lucidum."
    ],
    "ingredients": [
      "Café instantáneo en polvo",
      "Crema no láctea",
      "Ganoderma",
      "Azúcar granulada blanca",
      "Aromatizantes"
    ],
    "usage": "Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente, beba a una temperatura adecuada y disfrute de su sabor agradable.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/ganoderma-p-500.png",
    "featured": false
  },
  {
    "id": "cafe-trebol",
    "name": "Café Trébol",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 23,
    "rating": 4.8,
    "reviewsCount": 18,
    "shortDescription": "Trébol Coffee HGW es una bebida instantánea elaborada con extracto de trébol rojo (Trifolium pratense) y otros ingredientes herbales cuidadosamente seleccionados. Su agradable sabor y práctica presentación la convierten en una alternativa diferente al café tradicional. Es ideal para quienes buscan disfrutar una bebida reconfortante que combine tradición herbal, comodidad y bienestar en su rutina diaria.",
    "fullDescription": "El Trifolium pratense, o trébol rojo, es una planta que se encuentra comúnmente en todo el mundo. Sus flores rosadas a rojas han sido utilizadas durante siglos por diversas culturas por sus propiedades medicinales y su potencial en la preparación de infusiones. El café de trifolium pratense es una bebida que se elabora a partir de estas flores secas y ofrece una alternativa interesante al café tradicional. Ventajas Presentación práctica de consumo. Agradable sabor. Tiene propiedades antiinflamatorias. Contribuye a mejorar la digestión. Coadyuva a elevar el busto en las mujeres. Beneficios Reducción de síntomas de la menopausia: Se ha utilizado tradicionalmente para ayudar a aliviar los sofocos y otros síntomas asociados con la menopausia. Potencial antiinflamatorio : El trébol rojo tiene propiedades antiinflamatorias que pueden ser útiles para ciertas condiciones. Apoyo al sistema inmunológico: Algunos estudios sugieren que el trébol rojo puede fortalecer el sistema inmunológico, ayudando al cuerpo a combatir infecciones. Ayuda a la digestión: Puede contribuir a la mejora de la digestión y aliviar problemas gastrointestinales menores. Relajación y alivio del estrés: El café de trifolium pratense se utiliza a menudo como una bebida relajante que puede ayudar a aliviar el estrés y la ansiedad. Modo de uso Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua tibia, mezcle homogéneamente y disfrute de su sabor agradable. Ingredientes Crema no láctea Café instantáneo en polvo Extracto de rosa Extracto de semilla de lino Extracto de raíz de pueraria Extracto de Trifolium pratense Precauciones No recomendable para mujeres embarazadas ni bebés. Este producto también incluye ingredientes herbales naturales. No consumir si el sellado está roto o el producto está dañado. Es normal que se formen grumos después de la adición inicial de agua. Mezcle bien para romper los grumos del producto. Presentación 15 g x 12 sobres Tiempo de vida útil 24 meses Contenido Contenido Neto: 15 g Número de Sachets: 12",
    "benefits": [
      "Presentación práctica de consumo.",
      "Agradable sabor.",
      "Tiene propiedades antiinflamatorias.",
      "Contribuye a mejorar la digestión.",
      "Coadyuva a elevar el busto en las mujeres."
    ],
    "ingredients": [
      "Crema no láctea",
      "Café instantáneo en polvo",
      "Extracto de rosa",
      "Extracto de semilla de lino",
      "Extracto de raíz de pueraria",
      "Extracto de Trifolium pratense"
    ],
    "usage": "Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua tibia, mezcle homogéneamente y disfrute de su sabor agradable.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/trebol.png",
    "featured": true
  },
  {
    "id": "choco-blue",
    "name": "Choco Blue",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 40,
    "rating": 4.9,
    "reviewsCount": 25,
    "shortDescription": "Choco Blue HGW es una deliciosa bebida en polvo elaborada con cacao natural, leche descremada y arándanos. Su combinación aporta un sabor reconfortante y una fuente natural de antioxidantes, proteínas y nutrientes esenciales. Ideal para disfrutar en el desayuno, la merienda o como una bebida caliente en cualquier momento del día, brindando una experiencia nutritiva, práctica y agradable para toda la familia.",
    "fullDescription": "La mezcla perfecta de cacao natural, leche descremada y arándanos, una bebida en polvo nutritiva y reconfortante que combina energía, sabor y bienestar. Ideal para disfrutar en cualquier momento del día: desayuno, merienda o una pausa dulce. Ventajas Sabor delicioso, reconfortante y natural. Versátil: se puede disfrutar con agua caliente o leche, según tu preferencia. Formato que facilita su preparación rápida, ideal para el hogar o la oficina. Beneficios El cacao natural es fuente de antioxidantes, que ayudan a proteger las células del estrés oxidativo. La leche descremada aporta proteínas y calcio, con bajo contenido de grasa, siendo una opción balanceada y nutritiva. El componente de arándano aporta antioxidantes y nutrientes naturales que favorecen la salud cardiovascular, el bienestar general y pueden contribuir al cuidado celular. Modo de Uso Disuelve el producto en una taza de agua caliente o leche, mezcla bien y disfruta. Perfecto en desayuno, merienda o como bebida reconfortante en cualquier momento del día. Contenido Neto 660 g (33 g x 20 sachets)",
    "benefits": [
      "Sabor delicioso, reconfortante y natural.",
      "Versátil: se puede disfrutar con agua caliente o leche, según tu preferencia.",
      "Formato que facilita su preparación rápida, ideal para el hogar o la oficina."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Disuelve el producto en una taza de agua caliente o leche, mezcla bien y disfruta. Perfecto en desayuno, merienda o como bebida reconfortante en cualquier momento del día.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Choco_Blue_HGW-removebg-preview.png",
    "featured": false
  },
  {
    "id": "choco-gano",
    "name": "CHOCO GANO",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 40,
    "rating": 5,
    "reviewsCount": 32,
    "tag": "Destacado",
    "shortDescription": "Choco Gano HGW es una deliciosa bebida instantánea que combina cacao, leche descremada y Ganoderma en una práctica presentación en sobres. Su sabor suave y reconfortante la convierte en una excelente opción para disfrutar a cualquier hora del día. Además de aportar energía y nutrición, incorpora Ganoderma, un ingrediente reconocido por sus compuestos antioxidantes que complementan una alimentación equilibrada.",
    "fullDescription": "Ventajas Listo en instantes: disolución inmediata en agua fría o caliente. Práctico y portátil: sobres individuales ideales para llevar a cualquier lugar. Bienestar integral: aporta energía con los beneficios antioxidantes del Ganoderma. Descripción del producto CHOCO GANO, la exquisita mezcla en polvo para preparar una bebida instantánea que combina el reconfortante sabor del cacao con la suavidad de la leche descremada y el valioso aporte del Ganoderma. Diseñado para quienes buscan un momento de placer y bienestar en su día a día, este producto no solo deleita el paladar, sino que también incorpora propiedades beneficiosas gracias a su composición única. Entre sus principales características destaca su práctica presentación en sobres individuales, que garantizan frescura, dosificación perfecta y máxima comodidad donde quiera que vayas. Cada caja contiene 20 porciones de 33 gramos, ideal para disfrutar de forma regular sin complicaciones. El beneficio más apreciado de CHOCO GANO es su capacidad para ofrecer energía y nutrición con un perfil bajo en grasa gracias a la leche descremada. Además, el Ganoderma, un ingrediente reconocido por sus propiedades antioxidantes y de apoyo al sistema inmunológico, enriquece esta fórmula, brindando una experiencia que cuida de tu bienestar. Preparación Preparar Choco Gano es tan fácil como disfrutarlo: Vacía el contenido de un sachet de 35 g en una taza. Añade aproximadamente 180 ml de agua o leche caliente. Mezcla bien hasta obtener una textura suave y homogénea. Contenido Neto 660 g 20 sachets de 33 g",
    "benefits": [
      "Listo en instantes: disolución inmediata en agua fría o caliente.",
      "Práctico y portátil: sobres individuales ideales para llevar a cualquier lugar.",
      "Bienestar integral: aporta energía con los beneficios antioxidantes del Ganoderma."
    ],
    "ingredients": [
      "Vacía el contenido de un sachet de 35 g en una taza.",
      "Añade aproximadamente 180 ml de agua o leche caliente.",
      "Mezcla bien hasta obtener una textura suave y homogénea."
    ],
    "usage": "Preparar Choco Gano es tan fácil como disfrutarlo: Vacía el contenido de un sachet de 35 g en una taza. Añade aproximadamente 180 ml de agua o leche caliente. Mezcla bien hasta obtener una textura suave y homogénea.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Choco-Gano-HGW.webp",
    "featured": false
  },
  {
    "id": "fresh-drink-chang-jing-jing",
    "name": "Fresh Drink Chang Jing Jing",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 13,
    "rating": 4.8,
    "reviewsCount": 39,
    "shortDescription": "Fresh Drink Chang Jing Jing HGW es una bebida digestiva elaborada con una selección de plantas y fibras naturales que ayudan a promover el bienestar intestinal. Su fórmula refrescante combina ingredientes tradicionales como cebada, bayas de goji, gan cao y diente de león, ofreciendo una experiencia agradable y funcional. Es ideal para complementar hábitos saludables y apoyar el tránsito intestinal de forma natural.",
    "fullDescription": "Es una selecta mezcla herbal de preparación instantánea en una deliciosa bebida refrescante, digestiva y natural capaz de ofrecer una limpieza amigable pero profunda del colon, previniendo cuadros de intoxicación severa y cuidados contra el cáncer del intestino. Siente el poder de la naturaleza y recupera tu vitalidad. Ventajas Instantáneo y de fácil disolución. Bebida verde, refrescante y digestiva. Elaborado con la más cuidadosa selección de plantas fitonutritivas y funcionales. Rico en fibra y cero en grasas. Contiene un fresco y agradable sabor a hierba natural. Con un empaque seguro y práctico. Beneficios Hierba de cebada: Es rica en nutrientes, tales como vitaminas, minerales, proteínas y fibra soluble, necesarias para la dieta humana junto a la clorofila. Bayas de goji: Son muy ricas en antioxidantes naturales que mejoran nuestro sistema inmunitario. Raíz de gan cao o regaliz: Es un agente saborizante utilizado en la preparación de algunos alimentos y tradicionalmente manejado por la cultura china para aliviar algunos malestares digestivos. Diente de león: Apreciado como ingrediente culinario, puede ser añadido a sopas, ensaladas e infusiones. Tradicionalmente se utiliza para favorecer el rendimiento hepático. Clorofila: Consumida tradicionalmente como un buen tónico vital por su efecto alcalinizante que ayuda a equilibrar el pH del cuerpo humano, mejorando el rendimiento físico e intelectual. Ingesta de fibra: Contribuye a regular el tránsito intestinal y el estreñimiento. Modo de uso Vierta el contenido de un sachet en 500 ml de agua, agite suavemente hasta disolver, beba y disfrute su refrescante sabor a hierba verde. Ingredientes Cebada en polvo, bayas de goji (fruto), Gan Cao (raíz), diente de león (flor y hojas), crisantemo (flor), ácido cítrico (E330) Precauciones No consumir si es alérgico a alguno de los ingredientes. Presentación Contenido por sobre: 21 g Número de sachets: 6 Tiempo de Vida Útil 24 meses",
    "benefits": [
      "Instantáneo y de fácil disolución.",
      "Bebida verde, refrescante y digestiva.",
      "Elaborado con la más cuidadosa selección de plantas fitonutritivas y funcionales.",
      "Rico en fibra y cero en grasas.",
      "Contiene un fresco y agradable sabor a hierba natural."
    ],
    "ingredients": [
      "Contenido por sobre: 21 g",
      "Número de sachets: 6"
    ],
    "usage": "Vierta el contenido de un sachet en 500 ml de agua, agite suavemente hasta disolver, beba y disfrute su refrescante sabor a hierba verde.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/fresh-drink-p-500.png",
    "featured": false
  },
  {
    "id": "vino-de-arandanos",
    "name": "Vino de arándanos",
    "category": "licores",
    "categoryLabel": "Bebidas Exclusivas",
    "price": 36,
    "rating": 4.9,
    "reviewsCount": 46,
    "shortDescription": "Blueberry Wine HGW es un vino elaborado a base de arándanos, reconocido por su agradable sabor y por los compuestos antioxidantes naturalmente presentes en esta fruta. Su contenido de antocianinas y otros fitonutrientes lo convierten en una bebida especial para disfrutar en reuniones, celebraciones o momentos de relajación. Se recomienda servir a temperatura adecuada para apreciar mejor su aroma y características.",
    "fullDescription": "El vino de arándano aumenta el sistema neuronal. Los arándanos utilizados para hacer este vino producen compuestos que protegen nuestro sistema inmunológico. Puede reducir el colesterol e incluso reducir las tasas inflamatorias en el cuerpo. Ventajas Es ideal contra la diabetes y enfermedades neurodegenerativas. Tiene un potente efecto antiinflamatorio. Es efectivo para combatir el envejecimiento. Modo de uso Deje reposar la botella al menos una hora antes de abrirla. Descorche media hora antes de su consumo y déjelo «respirar» para aumentar su aroma y potenciar su sabor. Precauciones Conservar el producto a temperatura ambiente en un lugar fresco y seco. Mantener fuera del alcance de los niños. Temperatura de servicio 12 a 14 °C Ingredientes Frutos de arándanos. Contiene sulfitos. Presentación Contenido Neto: 750 ml Advertencia El consumo excesivo de alcohol es dañino para la salud. Venta prohibida a menores de 18 años de edad.",
    "benefits": [
      "Es ideal contra la diabetes y enfermedades neurodegenerativas.",
      "Tiene un potente efecto antiinflamatorio.",
      "Es efectivo para combatir el envejecimiento."
    ],
    "ingredients": [
      "Frutos de arándanos.",
      "Contiene sulfitos."
    ],
    "usage": "Consumir o aplicar diariamente según la recomendación del empaque y su preferencia personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Vino-de-arandanos-HGW.jpg",
    "featured": false
  },
  {
    "id": "capsula-spirulina-plus",
    "name": "Cápsula Spirulina Plus",
    "category": "suplementos",
    "categoryLabel": "Nutrición & Suplementos",
    "price": 25,
    "rating": 5,
    "reviewsCount": 18,
    "shortDescription": "Spirulina Plus HGW es un suplemento nutricional elaborado a base de espirulina, una microalga reconocida por su alto contenido de vitaminas, minerales, proteínas y antioxidantes. Su fórmula está diseñada para complementar la alimentación diaria, apoyando la energía, vitalidad y bienestar general. Es una opción práctica para quienes buscan reforzar su nutrición con ingredientes de origen natural.",
    "fullDescription": "Excelente fuente de antioxidantes, vitaminas, minerales y otros nutrientes que son esenciales para el cuidado de la salud. Las pastillas de Spirulina Plus son un suplemento nutricional basado en espirulina, una microalga considerada un superalimento. Beneficios Aumenta la energía y vitalidad. Refuerza el sistema inmunológico. Mejora la nutrición diaria. Apoya la desintoxicación del organismo. Contribuye al control del peso y el apetito. Vía de Administración Oral. Dosificación Adultos: Tomar 1 o 2 cápsulas al día. Precauciones y advertencias Si está embarazada o amamantando, consulte a un profesional de la salud antes de consumir el producto. No usar en caso de gota y/o fenilcetonuria. Condiciones de venta Sin receta médica. Contenido Contenido Neto: 500 mg Número de Cápsulas: 60",
    "benefits": [
      "Aumenta la energía y vitalidad.",
      "Refuerza el sistema inmunológico.",
      "Mejora la nutrición diaria.",
      "Apoya la desintoxicación del organismo.",
      "Contribuye al control del peso y el apetito."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Consumir o aplicar diariamente según la recomendación del empaque y su preferencia personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Spirulina-en-capsulas-Plus-con-Gingseng-HGW.jpg",
    "featured": false
  },
  {
    "id": "lactiberry",
    "name": "Lactiberry",
    "category": "suplementos",
    "categoryLabel": "Nutrición & Suplementos",
    "price": 25,
    "rating": 4.8,
    "reviewsCount": 25,
    "tag": "Destacado",
    "shortDescription": "Lactiberry HGW es una deliciosa mezcla en polvo elaborada con arándanos, producto lácteo y té negro, diseñada para complementar la nutrición diaria. Su fórmula combina antioxidantes naturales, proteínas lácteas y compuestos bioactivos del té negro en una bebida práctica y de agradable sabor. Ideal para quienes buscan una opción nutritiva, fácil de preparar y adecuada para disfrutar en cualquier momento del día.",
    "fullDescription": "HGW ha desarrollado una agradable, instantánea y nutritiva fórmula a base de arándanos, producto lácteo y té negro para contribuir a la nutrición diaria de sus consumidores. Ventajas Elaborado con el mayor cuidado para conservar su valor nutricional. Con nutrientes que aportan a la dieta diaria requerida en el consumo humano. Puede presentar trozos de la fruta de arándanos. Con un delicioso aroma y un sabor natural. Nutritiva y saludable. Con producto lácteo derivado de la producción de leche de Nueva Zelanda. Beneficios Los Arándanos El alto contenido antioxidante de los arándanos ayuda a regular la respuesta inmune, promueve la actividad antiinflamatoria y fortalece las membranas celulares, entre otras funciones importantes. La Antocianina Es uno de los principales bioactivos contenidos en los arándanos y en la actualidad existen diversos estudios que presentan evidencia científica de que los extractos ricos en antocianinas pueden mejorar la agudeza visual. Suero de Leche Es una fuente de proteínas que podría mejorar el contenido de los nutrientes en la dieta y tener efectos beneficiosos sobre el sistema inmunológico. Té Negro Disminuye el riesgo de fractura de cadera en mujeres y hombres ancianos; también contiene antioxidantes y otras sustancias que podrían ayudar a proteger el corazón y los vasos sanguíneos. Modo de Uso Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente y beba a una temperatura adecuada. Tiempo de Vida Útil 12 meses Ingredientes Crema no láctea Azúcar blanca granulada Arándanos en polvo (1.5%) Suero de leche Té negro (Camellia sinensis) Leche descremada en polvo Precauciones No consumir si es alérgico a alguno de los ingredientes. Contenido Contenido Neto: 300 g Número de Sachets: 10",
    "benefits": [
      "Elaborado con el mayor cuidado para conservar su valor nutricional.",
      "Con nutrientes que aportan a la dieta diaria requerida en el consumo humano.",
      "Puede presentar trozos de la fruta de arándanos.",
      "Con un delicioso aroma y un sabor natural.",
      "Nutritiva y saludable."
    ],
    "ingredients": [
      "Crema no láctea",
      "Azúcar blanca granulada",
      "Arándanos en polvo (1.5%)",
      "Suero de leche",
      "Té negro (Camellia sinensis)",
      "Leche descremada en polvo"
    ],
    "usage": "Vierta el contenido de 1 sachet del producto en una taza, agregue aproximadamente 150 ml de agua caliente, mezcle homogéneamente y beba a una temperatura adecuada.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/lactiberry-p-500.png",
    "featured": false
  },
  {
    "id": "peptido-de-colageno-de-arandano",
    "name": "Péptido de colágeno de arándano",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 29,
    "rating": 4.9,
    "reviewsCount": 32,
    "shortDescription": "El Péptido de Colágeno y Arándanos HGW es una fórmula nutricional que combina colágeno hidrolizado, vitaminas, minerales y concentrados de frutas y verduras. Destaca por su aporte de arándanos ricos en antioxidantes y nutrientes que contribuyen al cuidado de la piel, huesos y articulaciones. Su práctica presentación facilita el consumo diario como complemento para una alimentación equilibrada",
    "fullDescription": "Nutritivo y funcional a base de mezcla de jugo concentrado de frutas y verduras; fortalecido con péptidos de colágeno, vitaminas y minerales. Ventajas Consistencia blanda para la fácil digestión. Con fresco y agradable sabor a fruta natural. Elaborado con jugo concentrado de frutas y verduras. Fortificado con péptido de colágeno, vitaminas y minerales. Empaque seguro y práctico. Beneficios Elaborado con ingredientes naturales, nutritivos y funcionales regenerativos enfocados en restaurar y rejuvenecer las células del cuerpo, en especial cartílagos, huesos, articulaciones y elasticidad de la piel. Las frutas y verduras son las principales fuentes de alimentación saludable del colágeno HGW . Son una fuente versátil de proteínas y elementos importantes de la nutrición moderna indispensable para el cuerpo. El colágeno por sus propiedades nutricionales y fisiológicas contribuye al cuidado de la salud previniendo el desgaste natural del paso del tiempo sobre el sistema óseo, piel, órganos y células de todo el organismo. Las vitaminas y minerales son micronutrientes que regulan el funcionamiento del organismo ayudando a prevenir diferentes enfermedades. Componentes Jugo compuesto de frutas y verduras: Cereza Arándanos Manzana Piña Papaya Kiwi Limón Naranja sanguina Acerola Acaí Uva Fortificado con: Péptido y tripéptido de colágeno Vitaminas (A, C, B1, B6, B12, D, E) Minerales (calcio, magnesio, hierro, zinc) Extracto de levadura Fructooligosacáridos (FOS) Otros componentes de grado alimentario aprobados para el consumo humano por el CODEX ALIMENTARIUS y la FDA. Precauciones No consumir si es alérgico a los componentes del producto. Contenido Contenido por sobre: 300 g Número de sachets: 12",
    "benefits": [
      "Consistencia blanda para la fácil digestión.",
      "Con fresco y agradable sabor a fruta natural.",
      "Elaborado con jugo concentrado de frutas y verduras.",
      "Fortificado con péptido de colágeno, vitaminas y minerales.",
      "Empaque seguro y práctico."
    ],
    "ingredients": [
      "Cereza",
      "Arándanos",
      "Manzana",
      "Piña",
      "Papaya",
      "Kiwi"
    ],
    "usage": "Consumir o aplicar diariamente según la recomendación del empaque y su preferencia personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/colageno-p-500.png",
    "featured": false
  },
  {
    "id": "biolacti-candy",
    "name": "Biolacti Candy",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 5.8,
    "rating": 5,
    "reviewsCount": 39,
    "shortDescription": "Biolacti Candy HGW es un caramelo duro enriquecido con probióticos que ayuda a mantener el equilibrio natural de la flora intestinal de forma práctica y deliciosa. Su agradable sabor a leche descremada permite disfrutar los beneficios de cepas probióticas activas en cualquier momento del día. Además, contiene bajo contenido de azúcares, convirtiéndose en una opción conveniente para el bienestar digestivo diario.",
    "fullDescription": "Innovador caramelo duro elaborado con probióticos, diseñado para apoyar el equilibrio de la flora intestinal de manera práctica y agradable. Cada unidad aporta cepas probióticas cuidadosamente seleccionadas para contribuir al bienestar digestivo diario. Ventajas Soporte digestivo portátil y práctico. Aporta probióticos esenciales para el equilibrio intestinal. Bajo en azúcares. Delicioso sabor a leche descremada. Fácil de llevar y consumir en cualquier momento. Combina bienestar digestivo y practicidad en un solo producto. Beneficios Ayuda a mantener el equilibrio de la microbiota intestinal. Favorece una digestión saludable. Contribuye al bienestar general del organismo. Apoya las defensas naturales del cuerpo. Aporta cepas probióticas activas de uso diario. Permite disfrutar de los beneficios de los probióticos en un formato cómodo y agradable. Ingredientes destacados Lactobacillus acidophilus Bifidobacterium lactis Streptococcus thermophilus Lactosa Leche descremada en polvo Modo de uso Retire el precinto y abra el envase. Consuma una o más unidades según preferencia. Puede disfrutarse en cualquier momento del día como complemento para el bienestar digestivo. Presentación Contenido neto: 30 g Aproximadamente 60 unidades Sabor: Leche descremada",
    "benefits": [
      "Soporte digestivo portátil y práctico.",
      "Aporta probióticos esenciales para el equilibrio intestinal.",
      "Bajo en azúcares.",
      "Delicioso sabor a leche descremada.",
      "Fácil de llevar y consumir en cualquier momento."
    ],
    "ingredients": [
      "Lactobacillus acidophilus",
      "Bifidobacterium lactis",
      "Streptococcus thermophilus",
      "Lactosa",
      "Leche descremada en polvo"
    ],
    "usage": "Retire el precinto y abra el envase. Consuma una o más unidades según preferencia. Puede disfrutarse en cualquier momento del día como complemento para el bienestar digestivo.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Biolacti-candy-HGW-1-scaled-1.png",
    "featured": false
  },
  {
    "id": "blueberry-candy",
    "name": "Blueberry Candy",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 5.8,
    "rating": 4.8,
    "reviewsCount": 46,
    "shortDescription": "Los Caramelos de Arándano HGW son una forma práctica, deliciosa y conveniente de disfrutar el sabor de los arándanos en cualquier momento del día. Elaborados con polvo de arándano y cuidadosamente formulados para conservar sus características, ofrecen una alternativa dulce para llevar contigo a donde vayas. Su agradable sabor natural los convierte en el acompañante ideal para compartir o disfrutar como un pequeño gusto diario.",
    "fullDescription": "Los caramelos con Arándanos de HGW son una dulce y divertida forma de no dejar de aprovechar los beneficios nutritivos de los arándanos. Ventajas Nutritivos y saludables. Elaborados con el mayor cuidado para conservar su valor nutricional. Una dulce forma de llevar los arándanos contigo a todos lados. Con un aroma y sabor deliciosamente naturales. Ideal para endulzar tu día sin culpas. Beneficios Los Arándanos El alto contenido antioxidante de los arándanos ayuda a regular la respuesta inmune, promueve la actividad antiinflamatoria y fortalece las membranas celulares, entre otras funciones importantes. La Antocianina Es uno de los principales compuestos bioactivos contenidos en los arándanos. Diversos estudios sugieren que los extractos ricos en antocianinas pueden contribuir al cuidado de la salud visual y aportar actividad antioxidante. Ingredientes Polvo de arándanos (Blueberry) Modo de uso Retire el precinto y levante la tapa del frasco. Tome la porción requerida (una o más unidades) y disfrute de su agradable sabor. Precauciones No consumir si es alérgico a alguno de los ingredientes. Tiempo de Vida Útil 24 meses Presentación Contenido Neto: 30 g Número de Unidades: 60 caramelos",
    "benefits": [
      "Nutritivos y saludables.",
      "Elaborados con el mayor cuidado para conservar su valor nutricional.",
      "Una dulce forma de llevar los arándanos contigo a todos lados.",
      "Con un aroma y sabor deliciosamente naturales.",
      "Ideal para endulzar tu día sin culpas."
    ],
    "ingredients": [
      "Polvo de arándanos (Blueberry)"
    ],
    "usage": "Retire el precinto y levante la tapa del frasco. Tome la porción requerida (una o más unidades) y disfrute de su agradable sabor.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Blueberry-Candy.png",
    "featured": false
  },
  {
    "id": "coffee-candy",
    "name": "Coffee Candy",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 5.8,
    "rating": 4.9,
    "reviewsCount": 18,
    "tag": "Destacado",
    "shortDescription": "Coffee Candy HGW combina el delicioso sabor del café con la practicidad de un caramelo duro, ideal para disfrutar en cualquier momento del día. Su formato portátil permite llevarlo fácilmente al trabajo, viajes o reuniones, ofreciendo una alternativa cómoda para quienes buscan un impulso de energía y concentración. Una forma agradable y práctica de disfrutar el sabor del café dondequiera que estés.",
    "fullDescription": "Combina el gusto delicioso del café con la practicidad de un caramelo: una forma innovadora y agradable de llevar contigo energía, buen ánimo y bienestar, ideal para esos momentos en que necesitas un impulso extra. Ventajas Combinación práctica de sabor y energía en formato de caramelo. Ideal para cuando no puedes preparar café tradicional, pero necesitas un estímulo rápido. Portátil y discreto: lo puedes llevar en el bolso, cartera o auto, listo para consumir. Beneficios Gracias a su contenido de café, ofrece un efecto estimulante y energizante. Ayuda a mejorar la concentración, la atención y a reducir la fatiga mental o física. Puede aportar protección celular y beneficio al sistema inmune. Presentación Caramelo duro con café y leche descremada. Contenido Neto: 30 g Aproximadamente 60 unidades de 0.5 g cada una.",
    "benefits": [
      "Combinación práctica de sabor y energía en formato de caramelo.",
      "Ideal para cuando no puedes preparar café tradicional, pero necesitas un estímulo rápido.",
      "Portátil y discreto: lo puedes llevar en el bolso, cartera o auto, listo para consumir."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Consumir o aplicar diariamente según la recomendación del empaque y su preferencia personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Coffee-Candy-HGW-scaled.png",
    "featured": false
  },
  {
    "id": "ganubi-candy",
    "name": "GANUBI CANDY",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 8.3,
    "rating": 5,
    "reviewsCount": 25,
    "shortDescription": "Ganubi Candy HGW es un caramelo duro elaborado con Ganoderma lucidum, ñame y acerola, diseñado para ofrecer una forma práctica y agradable de disfrutar estos ingredientes en cualquier momento del día. Su sabor dulce y natural lo convierte en una opción ideal para llevar al trabajo, reuniones o viajes. Cada caramelo combina conveniencia y bienestar en una presentación fácil de consumir y transportar.",
    "fullDescription": "Te ofrece la forma más dulce y práctica de integrar los beneficios del hongo medicinal Ganoderma lucidum en tu rutina diaria. Disfruta de su sabor suave y natural, mientras cuidas tu bienestar desde el primer bocado. Ventajas Práctico y fácil de consumir en cualquier momento del día. Sabor natural, dulce y agradable. Formato conveniente para llevar contigo: perfecto para el trabajo, viajes o reuniones. Beneficios Aporta antioxidantes naturales gracias al Ganoderma, ayudando a reducir el estrés oxidativo en las células. Contribuye a fortalecer el sistema inmune, favoreciendo una protección integral. Puede ayudar a mejorar el equilibrio general del organismo, apoyando procesos naturales de bienestar. Presentación Caramelo duro sabor a Ganoderma, ñame y acerola. Contenido neto: 30 g Aproximadamente 60 unidades de 0.5 g cada una.",
    "benefits": [
      "Práctico y fácil de consumir en cualquier momento del día.",
      "Sabor natural, dulce y agradable.",
      "Formato conveniente para llevar contigo: perfecto para el trabajo, viajes o reuniones."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Consumir o aplicar diariamente según la recomendación del empaque y su preferencia personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Ganubi-Candy-HGW-scaled.png",
    "featured": false
  },
  {
    "id": "gestifruit-candy",
    "name": "Gestifruit Candy",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 5.8,
    "rating": 4.8,
    "reviewsCount": 32,
    "shortDescription": "Gestifrut Candy HGW es un caramelo duro con delicioso sabor a mandarina, diseñado para brindar una experiencia refrescante y agradable en cualquier momento del día. Su práctico formato permite llevarlo fácilmente al trabajo, viajes o reuniones. Elaborado con ingredientes seleccionados y extractos naturales, combina sabor, comodidad y bienestar en una opción ideal para disfrutar diariamente.",
    "fullDescription": "Caramelo duro sabor a mandarina elaborado para quienes buscan una alternativa práctica y deliciosa para disfrutar durante el día. Su refrescante sabor cítrico lo convierte en una excelente opción para llevar contigo a cualquier lugar. Ventajas Sabor vibrante y refrescante a mandarina. Práctico y fácil de transportar. Ideal para consumir en cualquier momento del día. Formato conveniente para bolso, oficina o viajes. Dulce con propósito y agradable sabor natural. Presentación cómoda para compartir. Beneficios Proporciona una agradable sensación refrescante. Ayuda a disfrutar un sabor cítrico natural y duradero. El extracto de mandarina aporta vitamina C de origen natural. Formato práctico para acompañarte durante el día. Puede ser una alternativa conveniente a los caramelos tradicionales. Ideal para quienes buscan sabor y comodidad en un solo producto. Ingredientes destacados Extracto de mandarina (Citrus reticulata) Extracto de espino blanco Extracto de melena de león (Hericium erinaceus) Extracto de ñame silvestre Extracto de cebada Fucoidan Sorbitol Modo de uso Retire el precinto y levante la tapa del envase. Consuma una o más unidades según preferencia y disfrute de su agradable sabor a mandarina. Presentación Contenido neto: 30 g Aproximadamente 60 unidades Sabor: Mandarina",
    "benefits": [
      "Sabor vibrante y refrescante a mandarina.",
      "Práctico y fácil de transportar.",
      "Ideal para consumir en cualquier momento del día.",
      "Formato conveniente para bolso, oficina o viajes.",
      "Dulce con propósito y agradable sabor natural."
    ],
    "ingredients": [
      "Extracto de mandarina (Citrus reticulata)",
      "Extracto de espino blanco",
      "Extracto de melena de león (Hericium erinaceus)",
      "Extracto de ñame silvestre",
      "Extracto de cebada",
      "Fucoidan"
    ],
    "usage": "Retire el precinto y levante la tapa del envase. Consuma una o más unidades según preferencia y disfrute de su agradable sabor a mandarina.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Gestifruit-Candy-HGW.jpg",
    "featured": false
  },
  {
    "id": "mermelada-de-arandanos",
    "name": "Mermelada de Arandanos",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 12,
    "rating": 4.9,
    "reviewsCount": 39,
    "shortDescription": "La Mermelada Frutada HGW es una deliciosa preparación elaborada con arándanos seleccionados, conservando su sabor natural y parte de sus propiedades nutricionales. Su textura suave y agradable la convierte en una excelente opción para acompañar desayunos, meriendas, panes, galletas y postres. Puede contener trozos de arándano, ofreciendo una experiencia más auténtica y deliciosa para toda la familia.",
    "fullDescription": "La Mermelada HGW es una deliciosa concentración de arándanos, elaborada con el mayor cuidado para preservar todos sus valores nutricionales. Ventajas Una dulce forma de presentar los arándanos en la mesa familiar para disfrutar los desayunos. Nutritiva y saludable. De suave textura, agradable aroma y sabor deliciosamente natural. Puede contener trozos de arándanos. Elaborado con el mayor cuidado y de forma tradicional. Beneficios – Arándanos El alto contenido antioxidante de los arándanos ayuda a regular la respuesta inmune, promueve la actividad antiinflamatoria y fortalece las membranas celulares, entre otras funciones importantes. – Antocianinas Son uno de los principales compuestos bioactivos presentes en los arándanos. Diversos estudios sugieren que los extractos ricos en antocianinas pueden contribuir al cuidado de la salud visual y aportar actividad antioxidante. Modo de uso Retire el precinto de seguridad del producto, destape y tome la porción según necesidad. Disfrute de su agradable sabor natural. Ingredientes Arándano Azúcar blanca granulada Jarabe de malta Pectina Ácido cítrico Precauciones No consumir si es alérgico a alguno de los ingredientes. Tiempo de Vida Útil 12 meses Presentación Contenido Neto: 200 g",
    "benefits": [
      "Una dulce forma de presentar los arándanos en la mesa familiar para disfrutar los desayunos.",
      "Nutritiva y saludable.",
      "De suave textura, agradable aroma y sabor deliciosamente natural.",
      "Puede contener trozos de arándanos.",
      "Elaborado con el mayor cuidado y de forma tradicional."
    ],
    "ingredients": [
      "Arándano",
      "Azúcar blanca granulada",
      "Jarabe de malta",
      "Pectina",
      "Ácido cítrico"
    ],
    "usage": "Retire el precinto de seguridad del producto, destape y tome la porción según necesidad. Disfrute de su agradable sabor natural.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/mermelada-p-500.png",
    "featured": false
  },
  {
    "id": "herbal-fresh-candy",
    "name": "Herbal Fresh Candy",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 5.8,
    "rating": 5,
    "reviewsCount": 46,
    "tag": "Destacado",
    "shortDescription": "Herbal Fresh Candy HGW es un caramelo duro con agradable sabor floral y extractos herbales, ideal para disfrutar una sensación de frescura en cualquier momento del día. Su práctico formato permite llevarlo fácilmente en el bolso, oficina o automóvil. Diseñado para refrescar el aliento y brindar una experiencia agradable después de las comidas o antes de reuniones y actividades sociales.",
    "fullDescription": "Herbal Fresh Candy combina un refrescante sabor floral con ingredientes de origen herbal en un práctico caramelo duro. Es una excelente opción para quienes desean mantener una agradable sensación de frescura durante el día de forma cómoda y portátil. Ventajas Sabor agradable y refrescante. Elaborado con ingredientes de origen natural. Fácil de llevar y consumir en cualquier lugar. Ideal después de las comidas. Práctico para el trabajo, viajes y reuniones. Formato compacto y conveniente. Beneficios Promueve una sensación de frescura en la boca. Ayuda a mantener el aliento fresco durante el día. Puede contribuir a una sensación general de bienestar. Alternativa práctica para refrescarse en cualquier momento. Elaborado con extractos herbales seleccionados. Permite disfrutar un momento agradable sin sensación pesada. Modo de uso Consumir 1 caramelo cuando desees refrescar el aliento. Repetir según preferencia y consumo responsable. Disolver lentamente en la boca. Ideal después de las comidas o antes de reuniones y eventos sociales. Presentación Contenido neto: 30 g Aproximadamente 60 unidades Sabor: Flor de Camelia",
    "benefits": [
      "Sabor agradable y refrescante.",
      "Elaborado con ingredientes de origen natural.",
      "Fácil de llevar y consumir en cualquier lugar.",
      "Ideal después de las comidas.",
      "Práctico para el trabajo, viajes y reuniones."
    ],
    "ingredients": [
      "Sabor agradable y refrescante.",
      "Elaborado con ingredientes de origen natural.",
      "Fácil de llevar y consumir en cualquier lugar.",
      "Ideal después de las comidas.",
      "Práctico para el trabajo, viajes y reuniones.",
      "Formato compacto y conveniente."
    ],
    "usage": "Consumir 1 caramelo cuando desees refrescar el aliento. Repetir según preferencia y consumo responsable. Disolver lentamente en la boca. Ideal después de las comidas o antes de reuniones y eventos sociales.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/HERBAL-FRESH-CANDY-HGW.png",
    "featured": false
  },
  {
    "id": "moruva-candy",
    "name": "Moruva Candy",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 5.8,
    "rating": 4.8,
    "reviewsCount": 18,
    "shortDescription": "Moruva Candy HGW combina el sabor de la moringa y la uva en un práctico caramelo duro diseñado para disfrutar en cualquier momento del día. Su formato portátil facilita llevarlo al trabajo, viajes o actividades diarias. Elaborado con ingredientes de origen vegetal, aporta una alternativa agradable para complementar la alimentación mientras disfrutas de un sabor dulce y refrescante.",
    "fullDescription": "Moruva Candy es un caramelo duro elaborado con moringa y uva, dos ingredientes ampliamente apreciados por su aporte nutricional. Su práctico formato permite disfrutarlo fácilmente en cualquier lugar, ofreciendo una experiencia agradable y conveniente para toda la familia. Ventajas Presentación práctica y fácil de transportar. Formato en caramelo duro de fácil consumo. Sabor agradable para el consumo diario. Ideal para llevar en bolso, oficina o automóvil. Elaborado con ingredientes de origen vegetal. Práctico para cualquier momento del día. Beneficios Aporta antioxidantes naturales gracias a la uva. La moringa es reconocida por su riqueza nutricional. Puede contribuir al bienestar general. Ayuda a complementar la alimentación diaria. Puede apoyar los niveles naturales de energía. Alternativa dulce elaborada con ingredientes vegetales. Ingredientes destacados Moringa Uva Modo de uso Consumir de 1 a 3 caramelos al día. Dejar disolver lentamente en la boca. Puede consumirse en cualquier momento del día. Conservar en un lugar fresco y seco. Presentación Contenido neto: 30 g Aproximadamente 60 unidades Sabor: Moringa y Uva",
    "benefits": [
      "Presentación práctica y fácil de transportar.",
      "Formato en caramelo duro de fácil consumo.",
      "Sabor agradable para el consumo diario.",
      "Ideal para llevar en bolso, oficina o automóvil.",
      "Elaborado con ingredientes de origen vegetal."
    ],
    "ingredients": [
      "Presentación práctica y fácil de transportar.",
      "Formato en caramelo duro de fácil consumo.",
      "Sabor agradable para el consumo diario.",
      "Ideal para llevar en bolso, oficina o automóvil.",
      "Elaborado con ingredientes de origen vegetal.",
      "Práctico para cualquier momento del día."
    ],
    "usage": "Consumir de 1 a 3 caramelos al día. Dejar disolver lentamente en la boca. Puede consumirse en cualquier momento del día. Conservar en un lugar fresco y seco.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Moruva-candy-HGW-scaled.png",
    "featured": false
  },
  {
    "id": "peptipro-candy",
    "name": "Peptipro Candy",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 5.8,
    "rating": 4.9,
    "reviewsCount": 25,
    "shortDescription": "Peptipro Candy HGW combina péptidos de colágeno y ginseng en un práctico caramelo duro diseñado para acompañarte durante el día. Su formato portátil permite disfrutar sus ingredientes sin necesidad de preparación. Con agradable sabor a ginseng, es una alternativa conveniente para quienes buscan incorporar colágeno a su rutina diaria de manera fácil, deliciosa y práctica.",
    "fullDescription": "Peptipro Candy es un innovador caramelo duro elaborado con péptidos de colágeno y extracto de ginseng. Diseñado para brindar una forma práctica y agradable de disfrutar estos ingredientes, puede llevarse fácilmente en el bolso, oficina o durante viajes. Ventajas Fácil de consumir en cualquier momento. Contiene péptidos de colágeno de alta biodisponibilidad. Delicioso sabor a ginseng. Formato portátil y práctico. No requiere preparación ni mezclas. Ideal para llevar contigo durante el día. Beneficios Contribuye al cuidado de la piel. Ayuda a mantener la apariencia saludable del cabello y las uñas. Los péptidos de colágeno son de fácil absorción. El ginseng es tradicionalmente utilizado para apoyar la vitalidad. Puede ayudar a disminuir la sensación de cansancio ocasional. Formato cómodo para complementar tu rutina diaria. Ingredientes destacados Péptidos de colágeno Ginseng (Panax ginseng) Rosa mosqueta Soya Frijol mungo Guisante Sorbitol Modo de uso Retire el precinto y abra el envase. Consuma una o más unidades según su preferencia y disfrute de su agradable sabor. Presentación Contenido neto: 30 g Aproximadamente 60 unidades Sabor: Ginseng",
    "benefits": [
      "Fácil de consumir en cualquier momento.",
      "Contiene péptidos de colágeno de alta biodisponibilidad.",
      "Delicioso sabor a ginseng.",
      "Formato portátil y práctico.",
      "No requiere preparación ni mezclas."
    ],
    "ingredients": [
      "Fácil de consumir en cualquier momento.",
      "Contiene péptidos de colágeno de alta biodisponibilidad.",
      "Delicioso sabor a ginseng.",
      "Formato portátil y práctico.",
      "No requiere preparación ni mezclas.",
      "Ideal para llevar contigo durante el día."
    ],
    "usage": "Retire el precinto y abra el envase. Consuma una o más unidades según su preferencia y disfrute de su agradable sabor.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Peptipro-Candy-HGW-scaled.png",
    "featured": false
  },
  {
    "id": "green-world-herbs-toothpaste",
    "name": "Green World Herbs Toothpaste",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 8.8,
    "rating": 5,
    "reviewsCount": 32,
    "shortDescription": "Green World Herbs Toothpaste es una pasta de dientes a base de hierbas chinas especialmente diseñada para el cuidado diario de los dientes de toda la familia. Rica en esencia activa de Lycium chinense, promueve la inmunidad oral, lucha contra la fatiga de las encías y elimina el mal aliento, dejando los dientes fuertes y una sensación de frescura.",
    "fullDescription": "Pasta de Dientes a Base de Hierbas Chinas para Tener Dientes Fuertes Especialmente diseñada para el cuidado diario de los dientes de la familia. Multiefectos y multiprotección. Información del Producto Nombre del producto: Green World Herbs Toothpaste País de origen: China Contenido neto: 100g Fecha de producción: Ver empaque Fecha de caducidad: — Características Pasta de dientes a base de hierbas chinas para tener dientes fuerte Especialista en cuidado diario de los dientes de la familia Multiefectos y multiprotección La Pasta Dental China a Base de Hierbas es Rica en Esencia de Lycium Chinense Promover la inmunidad oral. Eficaz contra la peroxidación de radicales libres. Lucha contra la fatiga de las encías. Mejora la capacidad de las encías para absorber nutrientes. Eliminar el mal aliento: las hierbas de la pasta dental son ricas en hojas de arce y esencia activa de Lycium chinense, acude al rescate de tu salud oral, alivia la inflamación y el dolor de las encías, cuida las encías y disminuye su sangrado, reduce el mal aliento de la boca y genera una sensación de frescura, reduce los microbios orales. Pasta de Dientes Elaborada en Base a Hierbas Tradicionales Formulada con hierbas chinas como ingredientes activos para tratar eficazmente la salud oral. Aspecto: sin pigmento añadido, color herbal, viscosidad moderada, suave y delicada. Olor: la fragancia natural de la medicina herbal china mezclada con fragancia de menta. Pasta de Dientes Rica en Esencia Activa de Lycium Chinense El polisacárido Lycium barbarum es un polisacárido soluble en agua y es el ingrediente activo más importante en los lomberos de tierra. El polisacárido de Lycium barbarum tiene las funciones de promover inmunidad, antienvejecimiento, antitumoral, eliminación de radicales libres y antifatiga.",
    "benefits": [
      "Fórmula natural con ingredientes seleccionados de alta pureza",
      "Elaborado bajo estrictos estándares internacionales de calidad GMP",
      "Aporte de bienestar, vitalidad y equilibrio diario",
      "Apto para uso continuo sin aditivos perjudiciales"
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Consumir o aplicar diariamente según la recomendación del empaque y su preferencia personal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Pasta-de-Dientes-a-Base-de-Hierbas-Chinas-para-Tener-Dientes-Fuertes.jpg",
    "featured": false
  },
  {
    "id": "pasta-dental-con-probioticos",
    "name": "Pasta dental con Probioticos",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 8,
    "rating": 4.8,
    "reviewsCount": 39,
    "tag": "Destacado",
    "shortDescription": "La Pasta Dental HGW con Probióticos combina higiene bucal avanzada con los beneficios de lisados de Lactobacillus y compuestos derivados de fermentación láctica. Su fórmula libre de flúor y triclosán ayuda a mantener el equilibrio de la microbiota oral, favorece encías saludables, combate bacterias dañinas, refresca el aliento y contribuye a una protección integral de dientes y tejidos bucales.",
    "fullDescription": "Ventajas Fórmula libre de flúor. Fórmula libre de triclosán. Contiene lisado de Lactobacillus para la salud bucal. Contiene filtrado de leche fermentada con Lactobacillus. Refresca el aliento. Favorece el equilibrio natural de la flora oral. Ayuda a prevenir la proliferación de bacterias dañinas. Beneficios Equilibrio de la microbiota oral: Los metabolitos derivados de los probióticos ayudan a mantener una flora oral equilibrada, creando un entorno menos favorable para bacterias perjudiciales. Apoyo al sistema inmunológico bucal : Los componentes derivados de Lactobacillus pueden estimular las defensas naturales de la mucosa oral, fortaleciendo la protección local. Acción antibacteriana natural: Contribuye a inhibir microorganismos asociados con problemas bucales como caries, placa bacteriana y alteraciones gingivales. Salud de encías y mucosas: Los aminoácidos, polisacáridos y compuestos bioactivos favorecen el mantenimiento y la recuperación de los tejidos bucales. Acción antioxidante: Los ingredientes provenientes de la fermentación láctica ayudan a reducir el estrés oxidativo provocado por radicales libres. Frescura prolongada: Su contenido de menta proporciona una sensación refrescante y ayuda a combatir el mal aliento. Ingredientes funcionales destacados Lisado de Lactobacillus: Contenido celular obtenido tras la lisis de bacterias beneficiosas. Contribuye a: Estimular la inmunidad oral, Favorecer el equilibrio bacteriano, Ayudar a proteger encías y mucosas, Reducir factores inflamatorios locales. Filtrado de leche fermentada con Lactobacillus: Ingrediente obtenido mediante fermentación y posterior filtración. Beneficios potenciales: Ayuda a regular el equilibrio microbiano, Favorece la reparación de la mucosa oral, Aporta compuestos antioxidantes, Contribuye a una boca más saludable. ¿Quién puede utilizarla? Niños. Adolescentes. Adultos. Personas mayores. Mujeres embarazadas. Mujeres en período de lactancia. Modo de uso Aplicar una cantidad adecuada sobre el cepillo dental. Cepillar dientes, encías y lengua durante 2 a 3 minutos. Utilizar después de cada comida o al menos dos veces al día. Enjuagar con abundante agua. Mantener una rutina diaria de higiene bucal. Características destacadas Sin flúor. Sin triclosán. Con probióticos para la salud oral. Frescura natural a menta. Higiene bucal avanzada. Apta para uso diario. Ayuda a mantener dientes y encías saludables.",
    "benefits": [
      "Fórmula libre de flúor.",
      "Fórmula libre de triclosán.",
      "Contiene lisado de Lactobacillus para la salud bucal.",
      "Contiene filtrado de leche fermentada con Lactobacillus.",
      "Refresca el aliento."
    ],
    "ingredients": [
      "Lisado de Lactobacillus: Contenido celular obtenido tras la lisis de bacterias beneficiosas. Contribuye a: Estimular la inmunidad oral, Favorecer el equilibrio bacteriano, Ayudar a proteger encías y mucosas, Reducir factores inflamatorios locales.",
      "Filtrado de leche fermentada con Lactobacillus: Ingrediente obtenido mediante fermentación y posterior filtración. Beneficios potenciales: Ayuda a regular el equilibrio microbiano, Favorece la reparación de la mucosa oral, Aporta compuestos antioxidantes, Contribuye a una boca más saludable."
    ],
    "usage": "Aplicar una cantidad adecuada sobre el cepillo dental. Cepillar dientes, encías y lengua durante 2 a 3 minutos. Utilizar después de cada comida o al menos dos veces al día. Enjuagar con abundante agua. Mantener una rutina diaria de higiene bucal.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Pasta-dental-con-probioticos-HGW-1.jpg",
    "featured": false
  },
  {
    "id": "pasta-dental-de-turmalina-version-blanca",
    "name": "PASTA DENTAL DE TURMALINA (Versión Blanca)",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 8,
    "rating": 4.9,
    "reviewsCount": 46,
    "shortDescription": "Tourmaline Toothpaste HGW (Versión Blanca) es una pasta dental formulada con turmalina, menta y extractos vegetales cuidadosamente seleccionados para brindar una limpieza profunda y una sensación de frescura duradera. Su fórmula libre de flúor y triclosán ayuda a mantener una adecuada higiene bucal, favoreciendo la salud de dientes y encías mientras combate el mal aliento y contribuye al equilibrio de la flora oral.",
    "fullDescription": "Ventajas Producto libre de flúor. Libre de triclosán. Potente frescura a menta. Cuidadosamente formulada con hierbas chinas tradicionales. Promueve una salud dental excepcional. Beneficios Péptidos de soya: Los péptidos antimicrobianos destruyen membranas bacterianas e inhiben patógenos orales. Cardenólidos de la materia prima de xilitol: Inhiben el metabolismo de bacterias cariogénicas, Reducen la erosión ácida, Estimulan la secreción de saliva. Extracto de menta: Activa receptores TRPM8, Produce sensación refrescante, Ayuda a combatir temporalmente el mal aliento. Extracto de raíz de regaliz: Propiedades antiinflamatorias y antibacterianas, Ayuda a aliviar el sangrado de encías. Extracto de diente de león: Contribuye a reducir enrojecimiento e hinchazón de las encías. Características de la Turmalina Libera iones negativos. Ayuda a reducir la adhesión de la placa dental. Modo de Uso Cepille sus dientes diariamente con Tourmaline Toothpaste. Utilice el producto al menos tres veces al día o según las indicaciones de su odontólogo. Aplique la pasta sobre un cepillo dental. Realice una limpieza profunda. Enjuague con abundante agua. Presentación Tubo de 120 gramos .",
    "benefits": [
      "Producto libre de flúor.",
      "Libre de triclosán.",
      "Potente frescura a menta.",
      "Cuidadosamente formulada con hierbas chinas tradicionales.",
      "Promueve una salud dental excepcional."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Cepille sus dientes diariamente con Tourmaline Toothpaste. Utilice el producto al menos tres veces al día o según las indicaciones de su odontólogo. Aplique la pasta sobre un cepillo dental. Realice una limpieza profunda. Enjuague con abundante agua.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Pasta-dental-con-turmalina-blanca.jpg",
    "featured": false
  },
  {
    "id": "tourmaline-toothpaste-version-negra",
    "name": "TOURMALINE TOOTHPASTE (Versión Negra)",
    "category": "cuidado-personal",
    "categoryLabel": "Cuidado Personal & Belleza",
    "price": 8,
    "rating": 5,
    "reviewsCount": 18,
    "shortDescription": "La Pasta Dental HGW con Turmalina Negra está formulada para brindar una limpieza profunda y una protección integral de la salud bucal. Combina turmalina, menta, xilitol y extractos vegetales cuidadosamente seleccionados para ayudar a combatir bacterias, reducir la placa dental, fortalecer encías y esmalte, y mantener un aliento fresco. Su fórmula libre de flúor y triclosán favorece una higiene oral más natural y efectiva.",
    "fullDescription": "Ventajas Producto libre de flúor. Libre de triclosán. Potente frescura a menta. Cuidadosamente formulada con hierbas chinas tradicionales. Promueve una salud dental excepcional. Beneficios Limpieza profunda y natural: La turmalina posee propiedades abrasivas suaves que ayudan a remover manchas y placa dental sin dañar el esmalte. Propiedades antibacterianas: Ayuda a inhibir el crecimiento bacteriano en la boca, Contribuye a una mejor higiene bucal., Favorece la prevención de caries y mal aliento. Fortalece encías y esmalte: Ayuda a mantener dientes y encías saludables. Blanqueamiento natural: Contribuye a una sonrisa más limpia sin químicos agresivos. Ingredientes destacados Menta: Ayuda a combatir el mal aliento y aporta frescura duradera. Turmalina: Contribuye a la higiene bucal gracias a sus propiedades naturales. Madreselva: Tradicionalmente utilizada por sus propiedades antibacterianas y antiinflamatorias. Xilitol: Ayuda a prevenir la formación de caries. Raíz de Bletilla striata: Utilizada tradicionalmente para el cuidado de las encías. Modo de uso Cepille sus dientes diariamente con Tourmaline Toothpaste. Utilice después de cada comida o al menos tres veces al día. Aplique una cantidad adecuada sobre el cepillo dental. Realice una limpieza profunda de dientes y encías. Enjuague con abundante agua. Presentación Contenido Neto: 120 g",
    "benefits": [
      "Producto libre de flúor.",
      "Libre de triclosán.",
      "Potente frescura a menta.",
      "Cuidadosamente formulada con hierbas chinas tradicionales.",
      "Promueve una salud dental excepcional."
    ],
    "ingredients": [
      "Menta: Ayuda a combatir el mal aliento y aporta frescura duradera.",
      "Turmalina: Contribuye a la higiene bucal gracias a sus propiedades naturales.",
      "Madreselva: Tradicionalmente utilizada por sus propiedades antibacterianas y antiinflamatorias.",
      "Xilitol: Ayuda a prevenir la formación de caries.",
      "Raíz de Bletilla striata: Utilizada tradicionalmente para el cuidado de las encías."
    ],
    "usage": "Cepille sus dientes diariamente con Tourmaline Toothpaste. Utilice después de cada comida o al menos tres veces al día. Aplique una cantidad adecuada sobre el cepillo dental. Realice una limpieza profunda de dientes y encías. Enjuague con abundante agua.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Pasta-dental-con-turmalina-negra.jpg",
    "featured": false
  },
  {
    "id": "hervidor-electrico",
    "name": "Hervidor Eléctrico",
    "category": "equipos",
    "categoryLabel": "Tecnología & Hogar",
    "price": 60,
    "rating": 4.8,
    "reviewsCount": 25,
    "shortDescription": "El Hervidor Eléctrico HGW es un práctico aliado para preparar bebidas calientes de forma rápida y segura. Su diseño moderno permite hervir agua en pocos minutos, facilitando la preparación de café, té, infusiones y otras bebidas funcionales. Compacto, eficiente y fácil de usar, es ideal para el hogar u oficina, ayudando a ahorrar tiempo mientras disfrutas de tus bebidas favoritas a la temperatura adecuada.",
    "fullDescription": "El complemento ideal para tu estilo de vida moderno: práctico, rápido y seguro. Diseñado para calentar agua en segundos, facilita la preparación de tus bebidas favoritas: té, café, infusiones o chocolate, con solo pulsar un botón. Ventajas Velocidad y practicidad: hierve el agua en minutos. Diseño moderno y funcional. Diseño moderno y práctico: fácil de usar, limpiar y llevar a diferentes espacios del hogar u oficina. Beneficios Hierve agua en pocos minutos: optimiza el tiempo y facilita la preparación de bebidas en la rutina diaria. Ahorro de energía y eficiencia: tecnología diseñada para calentar rápidamente con un consumo eléctrico controlado. Ideal para bebidas HGW : perfecto para preparar café, tés, infusiones y bebidas funcionales como Choco Blue de manera rápida y segura. Modo de Uso Llena el hervidor con agua hasta el nivel indicado. Conecta a la corriente y enciéndelo. En pocos minutos, el agua estará lista para preparar tu bebida favorita. Vierte en tu taza, añade tu producto HGW favorito (café, chocolate, etc.) y disfruta.",
    "benefits": [
      "Velocidad y practicidad: hierve el agua en minutos.",
      "Diseño moderno y funcional.",
      "Diseño moderno y práctico: fácil de usar, limpiar y llevar a diferentes espacios del hogar u oficina."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Llena el hervidor con agua hasta el nivel indicado. Conecta a la corriente y enciéndelo. En pocos minutos, el agua estará lista para preparar tu bebida favorita. Vierte en tu taza, añade tu producto HGW favorito (café, chocolate, etc.) y disfruta.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Hervidor-electrico.png",
    "featured": false
  },
  {
    "id": "taza-de-cafe-termica-hgw",
    "name": "Taza de café termica HGW",
    "category": "equipos",
    "categoryLabel": "Tecnología & Hogar",
    "price": 26,
    "rating": 4.9,
    "reviewsCount": 32,
    "tag": "Destacado",
    "shortDescription": "El Coffee Cup HGW es un vaso térmico reutilizable diseñado para mantener tus bebidas frías o calientes por más tiempo. Su diseño moderno, ligero y portátil lo convierte en el compañero ideal para la oficina, viajes, actividades al aire libre o el hogar. Cuenta con tapa hermética para evitar derrames y materiales resistentes que facilitan su limpieza, brindando comodidad, estilo y practicidad en el día a día.",
    "fullDescription": "Vaso térmico Coffee Cup HGW . Diseñado para conservar la temperatura de tus bebidas favoritas —calientes o frías— por horas, este práctico y elegante vaso es perfecto para acompañarte en la oficina, en tus viajes o simplemente en casa. Ventajas Reutilizable y ecológico. Fácil de limpiar y resistente a olores. Estilo elegante disponible en varios colores. Apto para bebidas frías y calientes. Beneficios Conserva la temperatura: mantiene las bebidas calientes. Diseño moderno y práctico: compacto, liviano y fácil de transportar. Materiales seguros y de calidad. Tapa hermética antifugas: evita derrames accidentales y mantiene la bebida segura en cualquier movimiento. Ideal para tus cafés saludables HGW . Modo de uso Lava el vaso antes del primer uso con agua tibia y jabón. Vierte tu bebida preferida, caliente o fría. Cierra bien la tapa para asegurar el sellado térmico. Disfruta tu bebida en cualquier momento y lugar, manteniendo su temperatura por horas. Lava después de cada uso para conservar su higiene y durabilidad. Especificaciones Capacidad: 390 ml",
    "benefits": [
      "Reutilizable y ecológico.",
      "Fácil de limpiar y resistente a olores.",
      "Estilo elegante disponible en varios colores.",
      "Apto para bebidas frías y calientes."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Lava el vaso antes del primer uso con agua tibia y jabón. Vierte tu bebida preferida, caliente o fría. Cierra bien la tapa para asegurar el sellado térmico. Disfruta tu bebida en cualquier momento y lugar, manteniendo su temperatura por horas. Lava después de cada uso para conservar su higiene y durabilidad.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Tazas-de-Cafe.jpg",
    "featured": false
  },
  {
    "id": "tourmaline-thermo-waterson",
    "name": "Tourmaline Thermo (WATERSON)",
    "category": "equipos",
    "categoryLabel": "Tecnología & Hogar",
    "price": 95,
    "rating": 5,
    "reviewsCount": 39,
    "shortDescription": "Es un artículo fabricado a base de turmalina lo que le confiere un efecto electromagnético que proporciona beneficios importantes para el cuidado de la salud. La Turmalina es bastante estudiada por los esotéricos como la piedra energética que tiene la capacidad de convertir el agua ácida en agua alcalina de forma natural.",
    "fullDescription": "Ventajas: Cuenta con un diseño anatómico, elegante y color neutro natural. Elaborado con acero inoxidable, un material no tóxico, cuenta con la piedra natural de turmalina en su interior. Peso liviano y portátil. Capacidad suficiente para almacenamiento de: 500 ml. Beneficios: La Turmalina: La medicina holística refiere que es uno de los minerales más potentes para absorber la radiación, es excelente para la protección contra la emisión de ondas electromagnéticas de teléfonos celulares, computadoras y otros aparatos electrónicos. La principal propiedad de la turmalina es que es un potente catalizador de energía, transformando la energía negativa en positiva. Una piedra de turmalina podría limpiar y purificar la energía más densa del entorno haciéndola ligera y equilibrada. Por eso, la turmalina es considerada como el mejor aliado para mejorar los estados de ánimos. El agua alcalina es capaz de neutralizar la acidez del cuerpo, eliminando las toxinas y desechos del cuerpo. Modo de uso: Vaso portátil. Composición Básica: Piedras de turmalina y acero inoxidable. Conservación: Secar bien el frasco antes de guardarlo.",
    "benefits": [
      "Cuenta con un diseño anatómico, elegante y color neutro natural.",
      "Elaborado con acero inoxidable, un material no tóxico, cuenta con la piedra natural de turmalina en su interior.",
      "Peso liviano y portátil.",
      "Capacidad suficiente para almacenamiento de: 500 ml."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Vaso portátil.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/Thermo-de-turmalina.jpg",
    "featured": false
  },
  {
    "id": "vaso-termico-hgw",
    "name": "Vaso Térmico HGW",
    "category": "equipos",
    "categoryLabel": "Tecnología & Hogar",
    "price": 36,
    "rating": 4.8,
    "reviewsCount": 46,
    "shortDescription": "El Vaso Térmico HGW está diseñado para acompañarte en tu rutina diaria, ayudando a mantener tus bebidas frías o calientes por más tiempo. Su diseño moderno, resistente y reutilizable combina funcionalidad y estilo, siendo ideal para el hogar, la oficina, el gimnasio o los viajes. Cuenta con tapa de ajuste seguro para reducir derrames y facilitar el transporte de tus bebidas favoritas.",
    "fullDescription": "Diseñados para acompañarte a donde vayas, los vasos térmicos HGW mantienen tus bebidas a la temperatura adecuada por más tiempo. Su estructura resistente y estilo versátil los convierte en una opción práctica para el día a día, ya sea en casa, en la oficina o en movimiento. Ventajas Uso reutilizable. Diseño funcional con estilo moderno. Fácil mantenimiento y limpieza. Compatibles con bebidas frías y calientes. Beneficios Ayudan a conservar el calor o el frío de tus bebidas. Formato cómodo que facilita su transporte. Materiales durables pensados para el uso diario. Tapa con ajuste seguro que reduce derrames. Ideales para acompañar tu rutina y hábitos saludables. Modo de uso Limpie el vaso antes de utilizarlo por primera vez. Agregue la bebida de su preferencia. Ajuste correctamente la tapa para un mejor cierre. Disfrute tu bebida manteniendo su temperatura por más tiempo. Lave el vaso después de cada uso para prolongar su vida útil.",
    "benefits": [
      "Uso reutilizable.",
      "Diseño funcional con estilo moderno.",
      "Fácil mantenimiento y limpieza.",
      "Compatibles con bebidas frías y calientes."
    ],
    "ingredients": [
      "Extractos botánicos naturales",
      "Minerales bioactivos",
      "Antioxidantes naturales"
    ],
    "usage": "Limpie el vaso antes de utilizarlo por primera vez. Agregue la bebida de su preferencia. Ajuste correctamente la tapa para un mejor cierre. Disfrute tu bebida manteniendo su temperatura por más tiempo. Lave el vaso después de cada uso para prolongar su vida útil.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/VASO-TERMICO-AZUL-NEGRO.jpg",
    "featured": false
  },
  {
    "id": "pro-shaping-tea",
    "name": "Pro Shaping Tea",
    "category": "alimentos",
    "categoryLabel": "Cafés, Té & Snacks",
    "price": 24,
    "rating": 4.9,
    "reviewsCount": 18,
    "shortDescription": "Pro-Shaping Tea HGW es una mezcla de hierbas seleccionadas para preparar una infusión aromática, digestiva y revitalizante. Elaborado con ingredientes tradicionales como té verde, ginseng, espino y semillas de casia, ofrece una bebida de sabor agradable que complementa un estilo de vida saludable. Su práctica presentación en bolsitas filtrantes facilita su preparación y consumo diario en cualquier momento.",
    "fullDescription": "HGW ha combinado una selecta mezcla para la preparación instantánea de una aromática bebida digestiva, tonificante y natural capaz de eliminar tejidos lípidos del organismo o grasas localizadas, así como reducir los niveles elevados de colesterol en la sangre. ¡Siente el poder de la naturaleza y recupera tu vitalidad! Ventajas Concentrado de hierbas en bolsita filtrante. Mezcla digestiva, tonificante y aromática. Con ingredientes milenarios, tradicionales y naturales. Elaborado con el mayor cuidado para conservar su valor nutricional. Con un empaque seguro y práctico. Beneficios Té Verde: Diferentes estudios realizados refieren su uso como antioxidante, en casos de asma e hiperlipemias, así como coadyuvante en el tratamiento del sobrepeso. Semillas de Casia: Tradicionalmente usadas por la cultura china para ayudar a mejorar la circulación y activar el flujo sanguíneo. Espino Blanco: Tradicionalmente usado en infusiones para contribuir a mejorar el funcionamiento del sistema circulatorio. Ginseng: Tradicionalmente usado en infusiones para contribuir a mejorar el funcionamiento del sistema circulatorio. Arroz Rojo: En la medicina tradicional china lo han utilizado para solucionar problemas digestivos y circulatorios. Modo de Uso Coloque una bolsita filtrante en una taza y agregue 250 ml de agua hirviendo, deje reposar por 5 minutos aproximadamente. Disfrute del aromático y suave sabor de la infusión. Ingredientes Espino (Crataegus spp.) Sang Ye (Folium mori) Té verde (Camellia sinensis) Semen Cassiae Ginseng (Panax ginseng) Arroz (Oriza sativa) Tiempo de Vida Útil 36 meses Precauciones No consumir si es alérgico a alguno de los ingredientes. Contenido Contenido Neto: 72 g Número de Sachets: 24",
    "benefits": [
      "Concentrado de hierbas en bolsita filtrante.",
      "Mezcla digestiva, tonificante y aromática.",
      "Con ingredientes milenarios, tradicionales y naturales.",
      "Elaborado con el mayor cuidado para conservar su valor nutricional.",
      "Con un empaque seguro y práctico."
    ],
    "ingredients": [
      "Té Verde: Diferentes estudios realizados refieren su uso como antioxidante, en casos de asma e hiperlipemias, así como coadyuvante en el tratamiento del sobrepeso.",
      "Semillas de Casia: Tradicionalmente usadas por la cultura china para ayudar a mejorar la circulación y activar el flujo sanguíneo.",
      "Espino Blanco: Tradicionalmente usado en infusiones para contribuir a mejorar el funcionamiento del sistema circulatorio.",
      "Ginseng: Tradicionalmente usado en infusiones para contribuir a mejorar el funcionamiento del sistema circulatorio.",
      "Arroz Rojo: En la medicina tradicional china lo han utilizado para solucionar problemas digestivos y circulatorios."
    ],
    "usage": "Coloque una bolsita filtrante en una taza y agregue 250 ml de agua hirviendo, deje reposar por 5 minutos aproximadamente. Disfrute del aromático y suave sabor de la infusión.",
    "image": "https://hgwpanama.com/wp-content/uploads/2026/10/TE-QUEMADOR-DE-GRAS-HGW.jpeg",
    "featured": false
  }
];

export const COMPENSATION_BONUSES: CompensationBonus[] = [
  {
    id: 1,
    title: "Bono de Venta Directa",
    subtitle: "Ganancia inmediata por menudeo",
    percentage: "30% al 52%",
    description: "Compra productos a precio de distribuidor mayorista con descuentos de hasta el 52% (según rango Master) y genera una rentabilidad neta superior al 100% en la reventa directa a clientes.",
    icon: "BadgeDollarSign"
  },
  {
    id: 2,
    title: "Bono de Patrocinio",
    subtitle: "Comisión por cada nuevo afiliado",
    percentage: "Hasta 50%",
    description: "Cada vez que compartes la oportunidad e integras un nuevo socio que adquiere un paquete de inicio (Pre-Junior, Junior, Senior o Master), recibes una bonificación de hasta el 50% de los puntos pts generados.",
    icon: "UserPlus"
  },
  {
    id: 3,
    title: "Bono de Ganancia Mutua (50-50)",
    subtitle: "El corazón del modelo HGW",
    percentage: "50% - 50%",
    description: "El sistema más justo de la industria: el patrocinador y el afiliado ganan en partes exactamente iguales. Si tu patrocinado directo gana un bono de equipo, tú recibes un porcentaje idéntico sin recortes.",
    icon: "Handshake"
  },
  {
    id: 4,
    title: "Bono de Equipo / Desarrollo",
    subtitle: "Crecimiento por volumen binario balanceado",
    percentage: "10% al 15%",
    description: "Gana comisiones continuas por el volumen de ventas acumulado en tu organización de menor volumen, con topes diarios que aumentan conforme asciendes de rango.",
    icon: "Users"
  },
  {
    id: 5,
    title: "Bono de Recompra Residual",
    subtitle: "Ingreso pasivo mensual sin candados",
    percentage: "Hasta 10 niveles",
    description: "Con una calificación mensual sumamente accesible de tan solo 10 pts (aproximadamente $20 USD), desbloqueas comisiones residuales por las compras recurrentes de toda tu red.",
    icon: "Repeat"
  },
  {
    id: 6,
    title: "Bono de Liderazgo",
    subtitle: "Para constructores de equipos",
    percentage: "Generaciones 1 a 4",
    description: "Premia tu dedicación mentoreando a nuevos líderes. Recibe un porcentaje adicional sobre las ganancias del bono de equipo de todos los directores y diamantes formados en tu organización.",
    icon: "Award"
  },
  {
    id: 7,
    title: "Bono de Élite, Autos y Viajes",
    subtitle: "Reconocimientos internacionales",
    percentage: "Fondo Mundial",
    description: "HGW distribuye un fondo global entre los rangos altos para viajes de capacitación todo pagado en resorts de lujo, bonos para adquisición de vehículo 0 km y premios en efectivo.",
    icon: "Plane"
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    rank: "Pre-Junior",
    points: 50,
    discount: "30% Descuento",
    investmentApprox: "$100 - $120 USD",
    dailyCap: "$50 USD / día",
    perks: [
      "Código internacional HGW activo",
      "Tienda virtual y oficina virtual",
      "Precios mayoristas con 30% descuento",
      "Gana por patrocinio y venta directa",
      "Mantenimiento mensual mínimo de solo 10 pts"
    ]
  },
  {
    rank: "Junior",
    points: 100,
    discount: "30% Descuento",
    investmentApprox: "$200 - $240 USD",
    dailyCap: "$120 USD / día",
    perks: [
      "Todos los beneficios de Pre-Junior",
      "Tope diario aumentado a $120 USD",
      "Mayor acumulación de puntos de equipo",
      "Participación en bonos de ganancia mutua"
    ]
  },
  {
    rank: "Senior",
    points: 300,
    discount: "30% Descuento",
    investmentApprox: "$600 - $650 USD",
    dailyCap: "$360 USD / día",
    perks: [
      "Tope diario ampliado a $360 USD",
      "Stock surtido para demostraciones y clientes",
      "Capacitaciones exclusivas de liderazgo",
      "Acumulación sin pérdida de puntos excedentes"
    ]
  },
  {
    rank: "Master",
    points: 600,
    discount: "52% Descuento Máximo",
    investmentApprox: "$1,200 - $1,300 USD",
    dailyCap: "$720 USD / día",
    recommended: true,
    perks: [
      "¡El rango más rentable de HGW!",
      "52% de descuento vitalicio en todas tus compras",
      "Máximo tope diario de $720 USD ($21,600/mes)",
      "Acceso directo a todos los 7 Bonos del Plan de Ganancia Mutua",
      "Mantenimiento activo mensual con solo 10 pts",
      "Acumulable: puedes empezar con menos y ascender pagando la diferencia"
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "beneficios-ganoderma-lucidum-hgw-panama",
    title: "Ganoderma Lucidum: El Rey de las Hierbas y su impacto en la salud en Panamá",
    slug: "beneficios-ganoderma-lucidum-hgw-panama",
    excerpt: "Conoce por qué el Ganoderma Lucidum es el hongo más valorado en la medicina tradicional y cómo disfrutar sus beneficios con los productos exclusivos de HGW en Panamá.",
    date: "10 Nov 2026",
    readTime: "8 min",
    author: "Yamilka Batista",
    category: "Salud y Bienestar",
    image: "/src/assets/images/ganoderma_lucidum_hgw_panama_1794288044502.jpg",
    content: [
      "## ¿Qué es el Ganoderma Lucidum?",
      "El Ganoderma Lucidum, también conocido como Reishi o el 'Hongo de la Inmortalidad', es el hongo más valorado en la medicina tradicional asiática. En HGW Panamá, hemos seleccionado las mejores variedades para ofrecerte una nutrición celular de élite, procesada con nanotecnología para una absorción inmediata.",
      "### LOS PRODUCTOS CON GANODERMA DE HGW SON:",
      "• **GANODERMA SOLUBLE COFFEE:** Café gourmet instantáneo con extracto puro de Ganoderma, ideal para iniciar el día con vitalidad, energía y equilibrio digestivo.",
      "• **CHOCO GANO:** La mezcla perfecta de cacao premium y Ganoderma, una bebida deliciosa, cremosa y nutritiva para toda la familia.",
      "• **GANUBI CANDY:** Caramelos duros con Ganoderma, prácticos para llevar y proteger tus defensas en cualquier momento del día.",
      "## RECOMENDACIÓN DE ORO: COMBINARLO CON ARÁNDANOS",
      "La sinergia más potente que puedes experimentar en HGW es **combinar los productos con Ganoderma con nuestros productos de Arándanos**. Mientras el Ganoderma equilibra tu sistema inmunológico y modula la inflamación, los Arándanos aportan una carga masiva de antocianinas y antioxidantes para tu sistema circulatorio y salud visual.",
      "### ¿Cómo realizar la combinación en Panamá?",
      "Recomendamos tomar un **GANODERMA SOLUBLE COFFEE** o un **CHOCO GANO** en el desayuno, y complementar con un **BERRY JUICE HIGH VC** a media mañana o tarde. Esta combinación potencia los efectos regenerativos y protege tus células del estrés oxidativo diario.",
      "### ¿Por qué elegir Ganoderma HGW?",
      "Nuestros procesos de extracción limpia garantizan una alta concentración de triterpenos y polisacáridos. Además, nuestro café es alcalino, lo que significa que no irrita el estómago y ayuda a equilibrar el pH de tu cuerpo mientras disfrutas de un sabor excepcional.",
      "**Nota:** Si tienes alguna condición médica especial o estás embarazada, siempre es recomendable consultar con un profesional de la salud antes de iniciar cualquier suplementación."
    ]
  },
  {
    id: "propiedades-curativas-turmalina",
    title: "La Turmalina: El mineral bioeléctrico que revoluciona el bienestar",
    slug: "propiedades-curativas-turmalina",
    excerpt: "Descubre cómo los iones negativos y los rayos infrarrojos lejanos de la turmalina reactivan la circulación y alivian el dolor articular.",
    date: "10 Nov 2026",
    readTime: "5 min",
    author: "Yamilka Batista",
    category: "Bioenergía",
    image: "https://hgwpanama.com/wp-content/uploads/2026/10/Collar-de-turmalina-No.-15.png",
    content: [
      "La turmalina es un mineral de silicato complejo de boro y aluminio que posee una propiedad física extraordinaria: la piezoelectricidad y la piroelectricidad. Esto significa que es capaz de generar una carga electrostática natural al ser sometida a ligeras variaciones de presión o temperatura corporal.",
      "En HGW, la turmalina se microniza mediante nanotecnología para incorporarla en fibras textiles, pastas dentales, protectores ortopédicos y jabones. Al contacto con la piel humana, emite permanentemente dos beneficios terapéuticos cruciales:",
      "1. Rayos Infrarrojos Lejanos (FIR): Penetran hasta 4-5 centímetros en el tejido muscular, produciendo una dilatación de los capilares sanguíneos, estimulando el flujo de oxígeno y disipando el ácido láctico acumulado.",
      "2. Aniones o Iones Negativos: Neutralizan los radicales libres, purifican la sangre y crean un entorno desinflamatorio en la zona aplicada.",
      "Desde dolores lumbares hasta problemas de inflamación en encías, la turmalina ofrece una alternativa no invasiva y de origen 100% natural para recuperar la vitalidad diaria."
    ]
  },
  {
    id: "el-poder-antioxidante-del-arandano",
    title: "29 Razones científicas para consumir Arándanos Azules a diario",
    slug: "el-poder-antioxidante-del-arandano",
    excerpt: "Conocido como el Rey de las Frutas Antioxidantes, el arándano silvestre es el pilar nutricional de la gama antienvejecimiento de HGW.",
    date: "04 Nov 2026",
    readTime: "6 min",
    author: "Yamilka Batista",
    category: "Nutrición",
    image: "https://hgwpanama.com/wp-content/uploads/2026/10/berry-juice-p-500.png",
    content: [
      "Los arándanos azules (Blueberries) han sido calificados por la Organización Mundial de la Salud como uno de los cinco alimentos más saludables para la humanidad. Esto se debe a su extraordinaria concentración de antocianinas, pterostilbeno y proantocianidinas de tipo A.",
      "¿Por qué son tan indispensables para el cuerpo humano?",
      "• Salud Ocular: Mejoran la regeneración de la rodopsina retiniana, protegiendo contra la fatiga visual provocada por monitores y luz azul artificial.",
      "• Protección Cardiovascular: Evitan la oxidación del colesterol LDL en las arterias, favoreciendo una presión arterial equilibrada.",
      "• Tracto Urinario: Impiden la adherencia de la bacteria Escherichia coli en las paredes de la vejiga y uréteres.",
      "• Belleza de la Piel: Neutralizan las enzimas colagenasa y elastasa, evitando la pérdida de firmeza dérmica.",
      "En HGW Panamá ponemos a tu alcance concentrados liofilizados como Berry Juice High VC, Lactiberry y caramelos masticables que conservan intactas todas sus propiedades enzimáticas."
    ]
  },
  {
    id: "los-7-bonos-de-hgw",
    title: "LOS 7 BONOS DE HGW: El Plan de Ganancia Mutua 50-50",
    slug: "los-7-bonos-de-hgw",
    excerpt: "Descubre cómo funciona el revolucionario Plan de Ganancia Mutua de Health Green World: 7 formas de ganar donde patrocinador y socio crecen juntos.",
    date: "09 Nov 2026",
    readTime: "10 min",
    author: "Yamilka Batista",
    category: "Negocio",
    image: "https://hgwpanama.com/wp-content/uploads/2026/10/CATALOGO-PANAMA-2026_compressed-2toalla-imagenes-0-1.jpg",
    content: [
      "## LOS 7 BONOS DE HGW",
      "### BONO DE VENTA AL PÚBLICO",
      "• Es la diferencia entre el precio Distribuidor y precio de venta al público. Este tendrá un valor de 30%.",
      "• Tiene la opción de compartirlo el link, vinculado al código del vendedor independiente, para la compra de los productos bajo el precio al público.",
      "• El puntaje generado por esta venta es tomado en cuenta para la recompra mensual.",
      "• El vendedor independiente tendrá acceso a una tienda virtual (carrito de compra).",
      "• Si el cliente efectúa bajo ese link, una compra de producto(s), el diferencial entre el precio de venta al público y precio del distribuidor (30%), quedara abonado al distribuidor como 'Bono de venta al público'.",
      "[TABLE]\nPRECIO PÚBLICO | PRECIO DISTRIBUIDOR | GANA\n$100 | $70 | $30\n$100 | $48 | $52",
      "### BONO DE INICIO RÁPIDO",
      "• Este bono reparte un 20% de acuerdo a los puntos de la primera compra del vendedor independiente hasta completar la membresía master (600 pts). Siempre y cuando las compras sean de 50 o 100 pts cada vez hasta llegar a 600 pts.",
      "• Este 20% se distribuye de la siguiente manera: 10% para el patrocinador y 10% para el patrocinado. (Mitad y Mitad – 50% y 50% del 20%)",
      "• Este bono se paga de tu primera generación y segunda generación. Quiere decir que tú también ganas de los afiliados de tus directos hasta 2 niveles. (no tiene límite de anchura)",
      "Estructura de distribución:\n• Patrocinador: 10%\n• Línea descendente: 10%\n• Segunda generación: 10%",
      "### BONO DE DESARROLLO",
      "• Este bono se gana de la primera compra del vendedor independiente de la línea directa y de la línea del patrocinador hasta diez niveles descendentes.",
      "• Para el cálculo del bono depende del tipo de membresía que tiene el vendedor independiente y los nuevos vendedores independientes hasta el décimo nivel.",
      "• Se calcula en base a la tabla anexa a continuación y con el resultado se le aplica ganancia mutua (50% patrocinado y 50% patrocinador):",
      "[TABLE]\nMEMBRESÍA | PRE-JUNIOR | JUNIOR | SENIOR | MASTER\nPRE-JUNIOR | 0.2 pts | 0.2 pts | 0.2 pts | 0.2 pts\nJUNIOR | 0.2 pts | 0.5 pts | 0.5 pts | 0.5 pts\nSENIOR | 0.2 pts | 0.5 pts | 1.5 pts | 1.5 pts\nMASTER | 0.2 pts | 0.5 pts | 1.5 pts | 3.0 pts",
      "### BONO DE EQUIPO",
      "• Este bono es el resultado del balance (puntos acumulados de las líneas) entre la línea del patrocinador y de la línea del patrocinado.",
      "• Se paga el bono de acuerdo a la membresía del patrocinador, según tabla anexa.",
      "• Se aplica ganancia mutua (50% para el patrocinador y del 50% para el patrocinado).",
      "• Para el cálculo del bono se toma como base la línea más baja de puntos acumulados.",
      "• Tiene tope máximo de 720 pts diarios, su cálculo es diario y se paga semanal.",
      "[TABLE]\nMEMBRESÍA | PRE-JUNIOR | JUNIOR | SENIOR | MASTER\nPORCENTAJE | 5% | 7% | 8% | 10%\nTOPE DIARIO | 50 pts | 120 pts | 360 pts | 720 pts",
      "Nota: El valor del bono será pagado en la moneda local del país.",
      "### BONO DE ÉLITE",
      "• Este bono se calcula con base a la ganancia generada del bono de equipo.",
      "• Solo participan los vendedores independientes que tengan membresía Senior o Master.",
      "• La membresía Senior se calcula el bono hasta su tercera generación y Master hasta su sexta generación.",
      "• Obteniendo el 4% por cada generación, teniendo múltiples generaciones.",
      "[TABLE]\nGENERACIÓN | SENIOR | MASTER\n1a G | 4% | 4%\n2a G | 4% | 4%\n3a G | 4% | 4%\n4a G | — | 4%\n5a G | — | 4%\n6a G | — | 4%",
      "### BONO DE RECOMPRA",
      "• Este bono reparte el 5% de la compra que realiza el vendedor independiente hasta diez niveles por cada una de sus líneas directas e incluso las líneas de su patrocinador y también se aplica ganancia Mutua.",
      "• El 5% de las ganancias obtenidas de los bonos se asigna en la tienda virtual como valor para adquirir productos.",
      "**Condición:** Debe comprar productos de más de 10 pts por mes.",
      "### BONO DE MÉRITO PERSONAL",
      "• Este bono reconoce al vendedor independiente el esfuerzo y crecimiento de su red, cuando al realizar el cálculo del Bono de Equipo la base de la línea más baja de puntos acumulados corresponde a la línea de su patrocinador.",
      "**Condiciones de calificación:**\n1. Recompra personal mensual de 20 pts mínimo.\n2. Mínimo 3 afiliados directos con 500 pts acumulados cada uno.\n3. Rendimiento total de línea directa de 3,000 pts al mes.\n4. Rendimiento total acumulado superior a 100,000 pts.",
      "La acumulación de puntos se da por:\na) Activación de nuevos vendedores independientes.\nb) Ascensos de membresía en tu línea directa.\nc) Recompra personal del vendedor independiente.\nd) Quienes cumplan las 4 condiciones disfrutan el bono el mes actual y el siguiente.\ne) Se calcula según membresía y comparte límite con el Bono de Equipo.",
      "[TABLE]\nRANGO | PRE-JUNIOR | JUNIOR | SENIOR | MÁSTER\nPORCENTAJE | 2.50% | 3.50% | 4.00% | 5.00%\nMÁX/DÍA | 25 pts | 60 pts | 180 pts | 360 pts",
      "### MÉTODO DE PAGO",
      "**BONOS SEMANALES:** Bono de Venta, Inicio Rápido, Desarrollo, Equipo, Élite y Mérito Personal.",
      "**BONOS MENSUALES:** Bono de Recompra.",
      "### RANGOS DE HONOR",
      "• **PLATA:** Acumulas en ganancias $500 - $1499.\n• **ORO:** Acumulas en ganancias $1500 - $2999.99.\n• **PLATINIUM:** Acumulas en ganancias $3000.",
      "#### NIVEL DIAMANTE",
      "• **DIAMANTE:** Ganancia acumulada de $5,000.\n• **1 DIAMANTE:** Un directo con $5,000 de ganancia.\n• **2 DIAMANTES:** Dos directos con $5,000 de ganancia.\n• **3 DIAMANTES:** Tres directos con $5,000. **Premio:** Viaje internacional (US$3,000).\n• **7 DIAMANTES:** Siete directos con $5,000. **Premio:** Segundo viaje internacional (US$3,000).",
      "#### NIVEL DIAMANTE AZUL",
      "• **DIAMANTE AZUL (Niveles 1-5):** Requiere ser Diamante 7 Estrellas y tener entre 1 y 5 afiliados directos calificados como Diamante 7 Estrellas. Participas en un porcentaje (0.1% a 0.5%) del margen neto de la empresa en toda América.",
      "#### NIVEL CORONA",
      "• **CORONA (Niveles 1-3):** Requiere ser Diamante Azul y tener entre 1 y 3 afiliados directos calificados como Diamante Azul. Participas en un porcentaje (0.2% a 0.5%) de la facturación de la empresa en toda América.",
      "### GANANCIA MUTUA",
      "El concepto de ganancia mutua consiste en ganar donde todos los vendedores independientes se beneficien. Es un modelo que permite ganar por cada uno de los vendedores independientes y de las líneas de tu patrocinador.",
      "**Características principales:**\n1. Toda la vida se trabaja una sola línea.\n2. Toda la vida se trabaja un solo punto.\n3. A partir de membresía Senior/Master con recompra de 10 pts, cobras todos los bonos sin importar rango."
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "envios",
    question: "¿Hacen entregas en todas las provincias de Panamá?",
    answer: "¡Sí! Realizamos envíos a nivel nacional a través de Servientrega con cobertura en Ciudad de Panamá, Colón, Chiriquí, Coclé, Veraguas, Herrera, Los Santos, Bocas del Toro, Darién y Panamá Oeste. El tiempo estimado de entrega es de 24 a 48 horas hábiles."
  },
  {
    category: "general",
    question: "¿Quién es el distribuidor responsable y cómo puedo contactarlo?",
    answer: "La atención y distribución en este portal está a cargo de Yamilka Batista, Distribuidor Independiente autorizado de HGW en Panamá. Puedes escribirnos directamente al correo info@hgwpanama.com o vía WhatsApp al +507 6778-8375 de lunes a viernes de 9:00 AM a 6:00 PM."
  },
  {
    category: "productos",
    question: "¿Los productos HGW tienen registro y son seguros para la salud?",
    answer: "Todos los productos Health Green World (HGW) son elaborados bajo estrictos estándares internacionales de calidad farmacéutica GMP (Buenas Prácticas de Manufactura), certificaciones ISO y cuentan con registros sanitarios vigentes para su comercialización legal en Panamá."
  },
  {
    category: "negocio",
    question: "¿Qué es el Plan de Ganancia Mutua 50-50 de HGW?",
    answer: "Es un revolucionario plan de compensación donde no existe la competencia desleal: el patrocinador y el nuevo socio afiliado ganan en una proporción 50%-50% compartida. Con membresías accesibles desde 50 pts y un mantenimiento mensual de solo 10 pts (unos $20 USD), es el plan más justo y rentable del mercado."
  },
  {
    category: "negocio",
    question: "¿Cómo me afilio como distribuidor para obtener hasta el 52% de descuento?",
    answer: "Puedes afiliarte directamente desde nuestra web con el código de patrocinador Yamilka507 en el enlace oficial de registro de Health Green World (https://www.healthgreenworld.com/?userName=Yamilka507) o enviarnos un mensaje por WhatsApp para guiarte paso a paso en la selección de tu paquete de membresía."
  },
  {
    category: "productos",
    question: "¿Puedo comprar productos sin afiliarme al negocio?",
    answer: "Totalmente. Puedes adquirir cualquier producto a precio de cliente final directamente en esta tienda. Solo añade los productos deseados al carrito y presiona 'Pedir por WhatsApp' para coordinar tu pago (Yappy, transferencia bancaria o depósito) y entrega."
  }
];

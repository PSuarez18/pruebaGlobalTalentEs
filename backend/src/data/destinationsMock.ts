import { Destination, DestinationType } from "../domain/destination";

/*
 * Dataset de destinos de prueba, fuente de la verdad del mock de destinos.
 */
export const DESTINATIONS_MOCK: Destination[] = [
  {
    id: 1,
    name: "Barcelona",
    description:
      "Ciudad mediterránea con playa urbana, barrios históricos y una vida cultural muy activa durante todo el año.",
    countryCode: "ES",
    type: DestinationType.City,
    lastModified: new Date("2024-01-01T00:00:00.000Z"),
  },
  {
    id: 2,
    name: "Bahamas",
    description:
      "Islas caribeñas de arena blanca, mar turquesa y numerosos resorts ideales para descansar y practicar deportes acuáticos.",
    countryCode: "BS",
    type: DestinationType.Beach,
    lastModified: new Date("2024-01-02T00:00:00.000Z"),
  },
  {
    id: 3,
    name: "Zúrich",
    description:
      "Ciudad suiza junto a un lago, rodeada de montañas y conocida por su casco antiguo cuidado y su alta calidad de vida.",
    countryCode: "CH",
    type: DestinationType.Lake,
    lastModified: new Date("2024-01-03T00:00:00.000Z"),
  },
  {
    id: 4,
    name: "Tokio",
    description:
      "Enorme metrópolis japonesa que combina rascacielos modernos, barrios tradicionales, templos y una gastronomía muy variada.",
    countryCode: "JP",
    type: DestinationType.City,
    lastModified: new Date("2024-01-04T00:00:00.000Z"),
  },
  {
    id: 5,
    name: "Santorini",
    description:
      "Isla griega con casas blancas frente al mar Egeo, pequeñas callejuelas y famosos atardeceres sobre los acantilados.",
    countryCode: "GR",
    type: DestinationType.Island,
    lastModified: new Date("2024-01-05T00:00:00.000Z"),
  },
  {
    id: 6,
    name: "Patagonia",
    description:
      "Región del sur de Sudamérica con montañas, lagos, glaciares y grandes espacios naturales ideales para aventura y senderismo.",
    countryCode: "AR",
    type: DestinationType.Mountain,
    lastModified: new Date("2024-01-06T00:00:00.000Z"),
  },
  {
    id: 7,
    name: "Marrakech",
    description:
      "Ciudad histórica marroquí cercana al desierto, con zocos llenos de color, plazas animadas y palacios tradicionales.",
    countryCode: "MA",
    type: DestinationType.Desert,
    lastModified: new Date("2024-01-07T00:00:00.000Z"),
  },
  {
    id: 8,
    name: "Orlando",
    description:
      "Ciudad de Estados Unidos conocida por sus grandes parques temáticos, centros comerciales y oferta de ocio familiar.",
    countryCode: "US",
    type: DestinationType.ThemePark,
    lastModified: new Date("2024-01-08T00:00:00.000Z"),
  },
  {
    id: 9,
    name: "Roma",
    description:
      "Ciudad italiana con monumentos antiguos como el Coliseo y el Foro Romano, plazas elegantes y una gran tradición gastronómica.",
    countryCode: "IT",
    type: DestinationType.Historical,
    lastModified: new Date("2024-01-09T00:00:00.000Z"),
  },
  {
    id: 10,
    name: "Whistler",
    description:
      "Estación de montaña canadiense famosa por sus pistas de esquí, paisajes alpinos y actividades al aire libre en invierno y verano.",
    countryCode: "CA",
    type: DestinationType.Ski,
    lastModified: new Date("2024-01-10T00:00:00.000Z"),
  },
  {
    id: 11,
    name: "Serengeti",
    description:
      "Parque nacional africano conocido por sus grandes llanuras, la migración de animales y las clásicas experiencias de safari.",
    countryCode: "TZ",
    type: DestinationType.Safari,
    lastModified: new Date("2024-01-11T00:00:00.000Z"),
  },
  {
    id: 12,
    name: "Aspen",
    description:
      "Destino de esquí en las Montañas Rocosas de Estados Unidos, con hoteles exclusivos y ambiente invernal muy animado.",
    countryCode: "US",
    type: DestinationType.Ski,
    lastModified: new Date("2024-01-12T00:00:00.000Z"),
  },
  {
    id: 13,
    name: "Sídney",
    description:
      "Ciudad australiana junto al mar, famosa por la Ópera, el Harbour Bridge y sus amplias playas urbanas.",
    countryCode: "AU",
    type: DestinationType.City,
    lastModified: new Date("2024-01-13T00:00:00.000Z"),
  },
  {
    id: 14,
    name: "Cancún",
    description:
      "Destino turístico mexicano de playa con arena blanca, mar turquesa, resorts todo incluido y fácil acceso a ruinas mayas.",
    countryCode: "MX",
    type: DestinationType.Beach,
    lastModified: new Date("2024-01-14T00:00:00.000Z"),
  },
  {
    id: 15,
    name: "Edimburgo",
    description:
      "Ciudad escocesa con un castillo medieval en lo alto de una colina, calles empedradas y una intensa vida cultural.",
    countryCode: "GB",
    type: DestinationType.Historical,
    lastModified: new Date("2024-01-15T00:00:00.000Z"),
  },
  {
    id: 16,
    name: "Queenstown",
    description:
      "Localidad neozelandesa junto a un lago y rodeada de montañas, conocida por los deportes de aventura y los paisajes de película.",
    countryCode: "NZ",
    type: DestinationType.Lake,
    lastModified: new Date("2024-01-16T00:00:00.000Z"),
  },
  {
    id: 17,
    name: "Banff",
    description:
      "Pueblo de montaña en las Rocosas canadienses, rodeado de bosques de coníferas, lagos turquesa y rutas de senderismo.",
    countryCode: "CA",
    type: DestinationType.Mountain,
    lastModified: new Date("2024-01-17T00:00:00.000Z"),
  },
  {
    id: 18,
    name: "Maldivas",
    description:
      "Islas tropicales del océano Índico con villas sobre el agua, arrecifes de coral y aguas cristalinas ideales para bucear.",
    countryCode: "MV",
    type: DestinationType.Island,
    lastModified: new Date("2024-01-18T00:00:00.000Z"),
  },
  {
    id: 19,
    name: "Yellowstone",
    description:
      "Parque nacional de Estados Unidos con géiseres, fuentes termales de colores, bosques extensos y abundante vida salvaje.",
    countryCode: "US",
    type: DestinationType.Forest,
    lastModified: new Date("2024-01-19T00:00:00.000Z"),
  },
  {
    id: 20,
    name: "Dunas del Sahara",
    description:
      "Zona de grandes dunas de arena en el norte de África, perfecta para excursiones en camello y noches bajo las estrellas.",
    countryCode: "DZ",
    type: DestinationType.Desert,
    lastModified: new Date("2024-01-20T00:00:00.000Z"),
  },
  {
    id: 21,
    name: "Viena",
    description:
      "Capital de Austria con elegantes edificios clásicos, palacios imperiales y una larga tradición musical.",
    countryCode: "AT",
    type: DestinationType.City,
    lastModified: new Date("2024-01-21T00:00:00.000Z"),
  },
  {
    id: 22,
    name: "Phuket",
    description:
      "Isla tailandesa con playas tropicales, miradores panorámicos, mercados nocturnos y una animada vida nocturna.",
    countryCode: "TH",
    type: DestinationType.Island,
    lastModified: new Date("2024-01-22T00:00:00.000Z"),
  },
  {
    id: 23,
    name: "Ciudad del Cabo",
    description:
      "Ciudad costera de Sudáfrica al pie de la Montaña de la Mesa, con playas, viñedos cercanos y barrios históricos.",
    countryCode: "ZA",
    type: DestinationType.City,
    lastModified: new Date("2024-01-23T00:00:00.000Z"),
  },
  {
    id: 24,
    name: "Ibiza",
    description:
      "Isla española del Mediterráneo conocida por sus calas de aguas claras, pueblos blancos y una vida nocturna muy intensa.",
    countryCode: "ES",
    type: DestinationType.Island,
    lastModified: new Date("2024-01-24T00:00:00.000Z"),
  },
  {
    id: 25,
    name: "Chiang Mai",
    description:
      "Ciudad del norte de Tailandia rodeada de montañas y bosques, con templos, mercados nocturnos y clima agradable.",
    countryCode: "TH",
    type: DestinationType.Forest,
    lastModified: new Date("2024-01-25T00:00:00.000Z"),
  },
  {
    id: 26,
    name: "Granada",
    description:
      "Ciudad andaluza famosa por la Alhambra, sus barrios históricos en la colina y las vistas a Sierra Nevada.",
    countryCode: "ES",
    type: DestinationType.Historical,
    lastModified: new Date("2024-01-26T00:00:00.000Z"),
  },
  {
    id: 27,
    name: "Zermatt",
    description:
      "Pueblo alpino suizo al pie de una montaña icónica, ideal para esquiar, hacer senderismo y disfrutar del paisaje.",
    countryCode: "CH",
    type: DestinationType.Ski,
    lastModified: new Date("2024-01-27T00:00:00.000Z"),
  },
  {
    id: 28,
    name: "Parque Kruger",
    description:
      "Gran parque nacional sudafricano especializado en safaris, donde se pueden observar los cinco grandes animales.",
    countryCode: "ZA",
    type: DestinationType.Safari,
    lastModified: new Date("2024-01-28T00:00:00.000Z"),
  },
  {
    id: 29,
    name: "Niza",
    description:
      "Ciudad francesa de la Costa Azul con paseo marítimo, playas, barrios antiguos y un clima suave.",
    countryCode: "FR",
    type: DestinationType.Beach,
    lastModified: new Date("2024-01-29T00:00:00.000Z"),
  },
  {
    id: 30,
    name: "Oporto",
    description:
      "Ciudad portuguesa a orillas del Duero, con bodegas de vino, puentes emblemáticos y un centro histórico muy fotogénico.",
    countryCode: "PT",
    type: DestinationType.Historical,
    lastModified: new Date("2024-01-30T00:00:00.000Z"),
  },
  {
    id: 31,
    name: "Reikiavik",
    description:
      "Capital de Islandia con arquitectura moderna, aguas termales cercanas y fácil acceso a paisajes naturales espectaculares.",
    countryCode: "IS",
    type: DestinationType.City,
    lastModified: new Date("2024-02-01T00:00:00.000Z"),
  },
  {
    id: 32,
    name: "Bali",
    description:
      "Isla indonesia con playas, templos, arrozales en terrazas y una fuerte cultura espiritual y artística.",
    countryCode: "ID",
    type: DestinationType.Island,
    lastModified: new Date("2024-02-02T00:00:00.000Z"),
  },
  {
    id: 33,
    name: "Los Ángeles",
    description:
      "Gran ciudad de California con barrios costeros, estudios de cine, museos y un clima templado todo el año.",
    countryCode: "US",
    type: DestinationType.City,
    lastModified: new Date("2024-02-03T00:00:00.000Z"),
  },
  {
    id: 34,
    name: "Río de Janeiro",
    description:
      "Ciudad brasileña entre montañas y mar, conocida por sus playas, el Cristo Redentor y el Pan de Azúcar.",
    countryCode: "BR",
    type: DestinationType.Beach,
    lastModified: new Date("2024-02-04T00:00:00.000Z"),
  },
  {
    id: 35,
    name: "Cusco",
    description:
      "Ciudad histórica de los Andes peruanos, antigua capital del Imperio inca y puerta de entrada a Machu Picchu.",
    countryCode: "PE",
    type: DestinationType.Historical,
    lastModified: new Date("2024-02-05T00:00:00.000Z"),
  },
  {
    id: 36,
    name: "Interlaken",
    description:
      "Localidad suiza situada entre dos lagos y rodeada de montañas, popular para deportes de aventura.",
    countryCode: "CH",
    type: DestinationType.Lake,
    lastModified: new Date("2024-02-06T00:00:00.000Z"),
  },
  {
    id: 37,
    name: "Chamonix",
    description:
      "Pueblo alpino francés a los pies de una cumbre muy alta, con estaciones de esquí y rutas de montaña.",
    countryCode: "FR",
    type: DestinationType.Mountain,
    lastModified: new Date("2024-02-07T00:00:00.000Z"),
  },
  {
    id: 38,
    name: "Punta Cana",
    description:
      "Destino caribeño con largas playas de arena clara, palmeras, resorts todo incluido y mar cálido.",
    countryCode: "DO",
    type: DestinationType.Beach,
    lastModified: new Date("2024-02-08T00:00:00.000Z"),
  },
  {
    id: 39,
    name: "Sevilla",
    description:
      "Ciudad del sur de España con barrios tradicionales, monumentos como la Giralda y una fuerte tradición flamenca.",
    countryCode: "ES",
    type: DestinationType.Historical,
    lastModified: new Date("2024-02-09T00:00:00.000Z"),
  },
  {
    id: 40,
    name: "Yosemite",
    description:
      "Parque nacional de Estados Unidos con valles profundos, grandes paredes de granito, cascadas y frondosos bosques.",
    countryCode: "US",
    type: DestinationType.Forest,
    lastModified: new Date("2024-02-10T00:00:00.000Z"),
  },
  {
    id: 41,
    name: "Dubái",
    description:
      "Ciudad moderna en el desierto con rascacielos icónicos, centros comerciales gigantes y lujosos hoteles.",
    countryCode: "AE",
    type: DestinationType.Desert,
    lastModified: new Date("2024-02-11T00:00:00.000Z"),
  },
  {
    id: 42,
    name: "Venecia",
    description:
      "Ciudad italiana construida sobre canales, con palacios, puentes famosos y paseos en góndola.",
    countryCode: "IT",
    type: DestinationType.Historical,
    lastModified: new Date("2024-02-12T00:00:00.000Z"),
  },
  {
    id: 43,
    name: "Lago Tahoe",
    description:
      "Lago de montaña entre California y Nevada, rodeado de bosques y estaciones de esquí muy concurridas.",
    countryCode: "US",
    type: DestinationType.Lake,
    lastModified: new Date("2024-02-13T00:00:00.000Z"),
  },
  {
    id: 44,
    name: "Queen Mary Falls",
    description:
      "Zona natural australiana con cascadas, senderos entre bosques y miradores para disfrutar del paisaje.",
    countryCode: "AU",
    type: DestinationType.Forest,
    lastModified: new Date("2024-02-14T00:00:00.000Z"),
  },
  {
    id: 45,
    name: "Míkonos",
    description:
      "Isla griega con pequeñas calas, casas blancas y una animada vida nocturna junto al mar.",
    countryCode: "GR",
    type: DestinationType.Island,
    lastModified: new Date("2024-02-15T00:00:00.000Z"),
  },
  {
    id: 46,
    name: "Tulum",
    description:
      "Destino mexicano de playa con arena clara, ruinas mayas frente al océano y cenotes en los alrededores.",
    countryCode: "MX",
    type: DestinationType.Beach,
    lastModified: new Date("2024-02-16T00:00:00.000Z"),
  },
  {
    id: 47,
    name: "Heidelberg",
    description:
      "Ciudad alemana junto a un río, conocida por su histórica universidad, su castillo y su casco antiguo.",
    countryCode: "DE",
    type: DestinationType.Historical,
    lastModified: new Date("2024-02-17T00:00:00.000Z"),
  },
  {
    id: 48,
    name: "Whakapapa",
    description:
      "Área de montaña en Nueva Zelanda con pistas de esquí, rutas de senderismo y paisajes volcánicos.",
    countryCode: "NZ",
    type: DestinationType.Ski,
    lastModified: new Date("2024-02-18T00:00:00.000Z"),
  },
  {
    id: 49,
    name: "Masai Mara",
    description:
      "Reserva de Kenia muy conocida por sus abundantes animales salvajes y las experiencias de safari africano.",
    countryCode: "KE",
    type: DestinationType.Safari,
    lastModified: new Date("2024-02-19T00:00:00.000Z"),
  },
  {
    id: 50,
    name: "Foz do Iguaçu",
    description:
      "Ciudad brasileña cercana a las famosas cataratas, punto de partida para visitar el parque nacional.",
    countryCode: "BR",
    type: DestinationType.Forest,
    lastModified: new Date("2024-02-20T00:00:00.000Z"),
  },
  {
    id: 51,
    name: "Lisboa",
    description:
      "Capital de Portugal con miradores, tranvías históricos, barrios tradicionales y vistas al estuario del Tajo.",
    countryCode: "PT",
    type: DestinationType.City,
    lastModified: new Date("2024-02-21T00:00:00.000Z"),
  },
  {
    id: 52,
    name: "Salvador",
    description:
      "Ciudad brasileña costera con fuerte herencia africana, centro histórico colorido y playas cercanas.",
    countryCode: "BR",
    type: DestinationType.Historical,
    lastModified: new Date("2024-02-22T00:00:00.000Z"),
  },
  {
    id: 53,
    name: "Panama City Beach",
    description:
      "Destino de playa en Florida con arena clara, mar cálido y un ambiente vacacional típico de la costa del golfo.",
    countryCode: "US",
    type: DestinationType.Beach,
    lastModified: new Date("2024-02-23T00:00:00.000Z"),
  },
  {
    id: 54,
    name: "Mount Cook Village",
    description:
      "Pequeña localidad neozelandesa a los pies de altas montañas, ideal para rutas y observación de estrellas.",
    countryCode: "NZ",
    type: DestinationType.Mountain,
    lastModified: new Date("2024-02-24T00:00:00.000Z"),
  },
  {
    id: 55,
    name: "Lofoten",
    description:
      "Islas noruegas de paisajes dramáticos, picos escarpados, pueblos pesqueros y fiordos muy fotogénicos.",
    countryCode: "NO",
    type: DestinationType.Island,
    lastModified: new Date("2024-02-25T00:00:00.000Z"),
  },
  {
    id: 56,
    name: "Helsinki",
    description:
      "Capital de Finlandia junto al mar Báltico, con diseño moderno, saunas y parques abiertos al público.",
    countryCode: "FI",
    type: DestinationType.City,
    lastModified: new Date("2024-02-26T00:00:00.000Z"),
  },
  {
    id: 57,
    name: "Lake Bled",
    description:
      "Lago esloveno de aguas tranquilas con una pequeña isla en el centro y un castillo en lo alto.",
    countryCode: "SI",
    type: DestinationType.Lake,
    lastModified: new Date("2024-02-27T00:00:00.000Z"),
  },
  {
    id: 58,
    name: "Sapa",
    description:
      "Región montañosa de Vietnam con terrazas de arroz, pueblos tradicionales y clima fresco buena parte del año.",
    countryCode: "VN",
    type: DestinationType.Mountain,
    lastModified: new Date("2024-02-28T00:00:00.000Z"),
  },
  {
    id: 59,
    name: "Big Sur",
    description:
      "Tramo de costa californiana con acantilados, bosques y miradores espectaculares sobre el océano Pacífico.",
    countryCode: "US",
    type: DestinationType.Forest,
    lastModified: new Date("2024-02-29T00:00:00.000Z"),
  },
  {
    id: 60,
    name: "Krabi",
    description:
      "Provincia tailandesa con playas rodeadas de acantilados de piedra caliza, islas cercanas y aguas de color esmeralda.",
    countryCode: "TH",
    type: DestinationType.Beach,
    lastModified: new Date("2024-03-01T00:00:00.000Z"),
  },
  {
    id: 61,
    name: "Valencia",
    description:
      "Ciudad española con playas urbanas, un moderno complejo cultural y un centro histórico lleno de vida y gastronomía.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-03-02T00:00:00.000Z"),
  },
  {
    id: 62,
    name: "Bilbao",
    description:
      "Ciudad del norte de España que combina arquitectura moderna como el museo Guggenheim con barrios tradicionales y buena cocina.",
    countryCode: "ES",
    type: DestinationType.City,
    lastModified: new Date("2024-03-03T00:00:00.000Z"),
  },
  {
    id: 63,
    name: "Alicante",
    description:
      "Ciudad mediterránea con castillo en lo alto, paseo marítimo, playas amplias y un clima suave durante casi todo el año.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-03-04T00:00:00.000Z"),
  },
  {
    id: 64,
    name: "Málaga",
    description:
      "Destino de la Costa del Sol con museos, casco antiguo peatonal, puerto renovado y largas playas urbanas.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-03-05T00:00:00.000Z"),
  },
  {
    id: 65,
    name: "Cádiz",
    description:
      "Antigua ciudad portuaria rodeada casi por completo por el mar, con playas abiertas y ambiente andaluz muy marcado.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-03-06T00:00:00.000Z"),
  },
  {
    id: 66,
    name: "La Coruña",
    description:
      "Ciudad gallega en la costa atlántica, con paseo marítimo, faro romano y una fuerte cultura del mar y el marisco.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-03-07T00:00:00.000Z"),
  },
  {
    id: 67,
    name: "San Sebastián",
    description:
      "Ciudad vasca famosa por su bahía en forma de concha, su gastronomía de pintxos y su festival internacional de cine.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-03-08T00:00:00.000Z"),
  },
  {
    id: 68,
    name: "Zaragoza",
    description:
      "Ciudad española bañada por el río Ebro, con la basílica del Pilar, palacios y una destacada tradición gastronómica.",
    countryCode: "ES",
    type: DestinationType.City,
    lastModified: new Date("2024-03-09T00:00:00.000Z"),
  },
  {
    id: 69,
    name: "Oviedo",
    description:
      "Capital de Asturias con casco antiguo cuidado, monumentos prerrománicos cercanos y una gastronomía basada en la sidra y la fabada.",
    countryCode: "ES",
    type: DestinationType.City,
    lastModified: new Date("2024-03-10T00:00:00.000Z"),
  },
  {
    id: 70,
    name: "Gijón",
    description:
      "Ciudad costera asturiana con playas urbanas, paseo marítimo, barrios marineros y ambiente local durante todo el año.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-03-11T00:00:00.000Z"),
  },
  {
    id: 71,
    name: "Toledo",
    description:
      "Ciudad histórica castellana situada sobre una colina, con murallas, sinagogas, mezquitas y una gran catedral gótica.",
    countryCode: "ES",
    type: DestinationType.Historical,
    lastModified: new Date("2024-03-12T00:00:00.000Z"),
  },
  {
    id: 72,
    name: "Segovia",
    description:
      "Ciudad de Castilla y León famosa por su acueducto romano, su alcázar y sus asados tradicionales.",
    countryCode: "ES",
    type: DestinationType.Historical,
    lastModified: new Date("2024-03-13T00:00:00.000Z"),
  },
  {
    id: 73,
    name: "Burgos",
    description:
      "Ciudad del norte de España con una imponente catedral gótica, paseos fluviales y tramos del Camino de Santiago.",
    countryCode: "ES",
    type: DestinationType.Historical,
    lastModified: new Date("2024-03-14T00:00:00.000Z"),
  },
  {
    id: 74,
    name: "León",
    description:
      "Ciudad castellanoleonesa con una catedral de vidrieras coloridas, barrios de tapas y restos de muralla romana.",
    countryCode: "ES",
    type: DestinationType.Historical,
    lastModified: new Date("2024-03-15T00:00:00.000Z"),
  },
  {
    id: 75,
    name: "Santiago de Compostela",
    description:
      "Destino final del Camino de Santiago, con una gran catedral, plazas de piedra y ambiente peregrino durante todo el año.",
    countryCode: "ES",
    type: DestinationType.Historical,
    lastModified: new Date("2024-03-16T00:00:00.000Z"),
  },
  {
    id: 76,
    name: "Pamplona",
    description:
      "Ciudad navarra conocida por los encierros de San Fermín, sus murallas y su casco antiguo lleno de bares.",
    countryCode: "ES",
    type: DestinationType.City,
    lastModified: new Date("2024-03-17T00:00:00.000Z"),
  },
  {
    id: 77,
    name: "Logroño",
    description:
      "Ciudad riojana atravesada por el Ebro, famosa por sus calles de tapas y su cultura del vino.",
    countryCode: "ES",
    type: DestinationType.City,
    lastModified: new Date("2024-03-18T00:00:00.000Z"),
  },
  {
    id: 78,
    name: "Girona",
    description:
      "Ciudad catalana con murallas medievales, barrio judío bien conservado y un río que atraviesa el centro histórico.",
    countryCode: "ES",
    type: DestinationType.Historical,
    lastModified: new Date("2024-03-19T00:00:00.000Z"),
  },
  {
    id: 79,
    name: "Tarragona",
    description:
      "Ciudad mediterránea con restos romanos junto al mar, playas urbanas y un casco antiguo con mucho encanto.",
    countryCode: "ES",
    type: DestinationType.Historical,
    lastModified: new Date("2024-03-20T00:00:00.000Z"),
  },
  {
    id: 80,
    name: "Huesca",
    description:
      "Ciudad aragonesa cercana a los Pirineos, punto de partida para explorar valles, montañas y pueblos de alta montaña.",
    countryCode: "ES",
    type: DestinationType.Mountain,
    lastModified: new Date("2024-03-21T00:00:00.000Z"),
  },
  {
    id: 81,
    name: "Jaca",
    description:
      "Localidad pirenaica con ciudadela, pistas cercanas de esquí y una importante tradición histórica y militar.",
    countryCode: "ES",
    type: DestinationType.Mountain,
    lastModified: new Date("2024-03-22T00:00:00.000Z"),
  },
  {
    id: 82,
    name: "Formigal",
    description:
      "Estación de esquí en el Pirineo aragonés, con múltiples pistas, alojamientos turísticos y ambiente joven en temporada.",
    countryCode: "ES",
    type: DestinationType.Ski,
    lastModified: new Date("2024-03-23T00:00:00.000Z"),
  },
  {
    id: 83,
    name: "Sierra Nevada",
    description:
      "Macizo montañoso en Andalucía con estación de esquí, rutas de alta montaña y vistas hacia el Mediterráneo.",
    countryCode: "ES",
    type: DestinationType.Ski,
    lastModified: new Date("2024-03-24T00:00:00.000Z"),
  },
  {
    id: 84,
    name: "Picos de Europa",
    description:
      "Parque nacional de montañas calizas, desfiladeros y pueblos rurales en el norte de España, ideal para senderismo.",
    countryCode: "ES",
    type: DestinationType.Mountain,
    lastModified: new Date("2024-03-25T00:00:00.000Z"),
  },
  {
    id: 85,
    name: "Islas Cíes",
    description:
      "Pequeño archipiélago gallego con playas de arena blanca, aguas frías y un entorno natural muy protegido.",
    countryCode: "ES",
    type: DestinationType.Island,
    lastModified: new Date("2024-03-26T00:00:00.000Z"),
  },
  {
    id: 86,
    name: "Menorca",
    description:
      "Isla balear tranquila con calas de agua transparente, pueblos blancos y un ritmo de vida pausado.",
    countryCode: "ES",
    type: DestinationType.Island,
    lastModified: new Date("2024-03-27T00:00:00.000Z"),
  },
  {
    id: 87,
    name: "Lanzarote",
    description:
      "Isla canaria de origen volcánico con paisajes casi lunares, playas, viñedos y obras de César Manrique.",
    countryCode: "ES",
    type: DestinationType.Island,
    lastModified: new Date("2024-03-28T00:00:00.000Z"),
  },
  {
    id: 88,
    name: "Tenerife",
    description:
      "Isla canaria con el pico más alto de España, playas variadas y una amplia oferta de ocio turístico.",
    countryCode: "ES",
    type: DestinationType.Island,
    lastModified: new Date("2024-03-29T00:00:00.000Z"),
  },
  {
    id: 89,
    name: "Gran Canaria",
    description:
      "Isla del archipiélago canario con dunas, playas familiares, pueblos de interior y clima templado todo el año.",
    countryCode: "ES",
    type: DestinationType.Island,
    lastModified: new Date("2024-03-30T00:00:00.000Z"),
  },
  {
    id: 90,
    name: "Fuerteventura",
    description:
      "Isla canaria con largas playas abiertas, viento constante y muy buenas condiciones para deportes acuáticos.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-03-31T00:00:00.000Z"),
  },
  {
    id: 91,
    name: "La Palma",
    description:
      "Isla verde de Canarias con bosques de laurisilva, rutas de senderismo y cielos muy valorados para astronomía.",
    countryCode: "ES",
    type: DestinationType.Forest,
    lastModified: new Date("2024-04-01T00:00:00.000Z"),
  },
  {
    id: 92,
    name: "La Gomera",
    description:
      "Isla canaria pequeña con barrancos profundos, senderos tradicionales y un parque nacional envuelto a menudo en niebla.",
    countryCode: "ES",
    type: DestinationType.Mountain,
    lastModified: new Date("2024-04-02T00:00:00.000Z"),
  },
  {
    id: 93,
    name: "El Hierro",
    description:
      "Isla más occidental de Canarias, con paisajes volcánicos, carreteras estrechas y un turismo muy tranquilo.",
    countryCode: "ES",
    type: DestinationType.Island,
    lastModified: new Date("2024-04-03T00:00:00.000Z"),
  },
  {
    id: 94,
    name: "Formentera",
    description:
      "Isla balear pequeña con playas de aguas claras, senderos y un ambiente relajado ligado al mar.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-04-04T00:00:00.000Z"),
  },
  {
    id: 95,
    name: "Marbella",
    description:
      "Ciudad de la Costa del Sol con paseos marítimos, puerto deportivo de lujo y campos de golf cercanos.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-04-05T00:00:00.000Z"),
  },
  {
    id: 96,
    name: "Benidorm",
    description:
      "Destino turístico levantino con rascacielos junto al mar, amplias playas y una fuerte orientación al turismo de sol y playa.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-04-06T00:00:00.000Z"),
  },
  {
    id: 97,
    name: "Salou",
    description:
      "Municipio costero de Cataluña con playas, paseos arbolados y un gran parque temático cercano muy popular.",
    countryCode: "ES",
    type: DestinationType.ThemePark,
    lastModified: new Date("2024-04-07T00:00:00.000Z"),
  },
  {
    id: 98,
    name: "Puerto de la Cruz",
    description:
      "Ciudad del norte de Tenerife con jardines, costa rocosa, piscinas naturales y climatología suave durante todo el año.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-04-08T00:00:00.000Z"),
  },
  {
    id: 99,
    name: "Roquetas de Mar",
    description:
      "Localidad almeriense con playas amplias, paseos marítimos y una importante oferta hotelera para familias.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-04-09T00:00:00.000Z"),
  },
  {
    id: 100,
    name: "Torremolinos",
    description:
      "Municipio de la Costa del Sol con tradición turística, paseos marítimos, chiringuitos y ambiente nocturno.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-04-10T00:00:00.000Z"),
  },
  {
    id: 101,
    name: "París",
    description:
      "Capital francesa conocida por la Torre Eiffel, museos de primer nivel, avenidas elegantes y cafés en casi cada esquina.",
    countryCode: "FR",
    type: DestinationType.City,
    lastModified: new Date("2024-04-11T00:00:00.000Z"),
  },
  {
    id: 102,
    name: "Londres",
    description:
      "Capital británica junto al río Támesis con monumentos icónicos, barrios diversos y una gran oferta cultural.",
    countryCode: "GB",
    type: DestinationType.City,
    lastModified: new Date("2024-04-12T00:00:00.000Z"),
  },
  {
    id: 103,
    name: "Berlín",
    description:
      "Ciudad alemana con historia reciente muy presente, museos, arte urbano y una intensa vida nocturna.",
    countryCode: "DE",
    type: DestinationType.City,
    lastModified: new Date("2024-04-13T00:00:00.000Z"),
  },
  {
    id: 104,
    name: "Ámsterdam",
    description:
      "Ciudad de canales en los Países Bajos, con bicicletas por todas partes y museos de renombre internacional.",
    countryCode: "NL",
    type: DestinationType.City,
    lastModified: new Date("2024-04-14T00:00:00.000Z"),
  },
  {
    id: 105,
    name: "Bruselas",
    description:
      "Capital belga y sede de instituciones europeas, con plazas históricas, chocolaterías y una cultura cervecera consolidada.",
    countryCode: "BE",
    type: DestinationType.City,
    lastModified: new Date("2024-04-15T00:00:00.000Z"),
  },
  {
    id: 106,
    name: "Praga",
    description:
      "Ciudad checa con castillo, puentes sobre el río y un casco antiguo muy bien conservado y animado.",
    countryCode: "CZ",
    type: DestinationType.Historical,
    lastModified: new Date("2024-04-16T00:00:00.000Z"),
  },
  {
    id: 107,
    name: "Budapest",
    description:
      "Capital húngara dividida por el Danubio, conocida por sus balnearios, edificios monumentales y puentes iluminados.",
    countryCode: "HU",
    type: DestinationType.Historical,
    lastModified: new Date("2024-04-17T00:00:00.000Z"),
  },
  {
    id: 108,
    name: "Varsovia",
    description:
      "Capital de Polonia con zonas modernas, barrio antiguo reconstruido y una historia marcada por la Segunda Guerra Mundial.",
    countryCode: "PL",
    type: DestinationType.City,
    lastModified: new Date("2024-04-18T00:00:00.000Z"),
  },
  {
    id: 109,
    name: "Cracovia",
    description:
      "Ciudad polaca con casco histórico medieval, plazas amplias, castillo junto al río y un ambiente muy universitario.",
    countryCode: "PL",
    type: DestinationType.Historical,
    lastModified: new Date("2024-04-19T00:00:00.000Z"),
  },
  {
    id: 110,
    name: "Dubrovnik",
    description:
      "Ciudad amurallada de Croacia junto al Adriático, con murallas, mar azul intenso y gran atractivo turístico.",
    countryCode: "HR",
    type: DestinationType.Historical,
    lastModified: new Date("2024-04-20T00:00:00.000Z"),
  },
  {
    id: 111,
    name: "Split",
    description:
      "Ciudad croata costera con palacio romano integrado en las calles y puerto con conexiones a islas cercanas.",
    countryCode: "HR",
    type: DestinationType.Beach,
    lastModified: new Date("2024-04-21T00:00:00.000Z"),
  },
  {
    id: 112,
    name: "Santander",
    description:
      "Ciudad del norte de España con bahía amplia, playas urbanas y un palacio junto al mar.",
    countryCode: "ES",
    type: DestinationType.Beach,
    lastModified: new Date("2024-04-22T00:00:00.000Z"),
  },
  {
    id: 113,
    name: "Zanzíbar",
    description:
      "Isla tanzana con cascos históricos de piedra, playas de arena blanca y aguas cálidas llenas de vida marina.",
    countryCode: "TZ",
    type: DestinationType.Island,
    lastModified: new Date("2024-04-23T00:00:00.000Z"),
  },
  {
    id: 114,
    name: "Siem Reap",
    description:
      "Ciudad camboyana puerta de entrada a los templos de Angkor, con mercados nocturnos y ambiente viajero.",
    countryCode: "KH",
    type: DestinationType.Historical,
    lastModified: new Date("2024-04-24T00:00:00.000Z"),
  },
  {
    id: 115,
    name: "Luang Prabang",
    description:
      "Ciudad laosiana junto a un río, con templos dorados, cascadas cercanas y un ritmo de vida muy tranquilo.",
    countryCode: "LA",
    type: DestinationType.Historical,
    lastModified: new Date("2024-04-25T00:00:00.000Z"),
  },
  {
    id: 116,
    name: "Hanoi",
    description:
      "Capital de Vietnam con lagos, barrios antiguos llenos de motos, templos y cafés escondidos en las fachadas.",
    countryCode: "VN",
    type: DestinationType.City,
    lastModified: new Date("2024-04-26T00:00:00.000Z"),
  },
  {
    id: 117,
    name: "Ho Chi Minh",
    description:
      "Gran ciudad del sur de Vietnam con mercados, rascacielos, tráfico intenso y vestigios de la historia reciente.",
    countryCode: "VN",
    type: DestinationType.City,
    lastModified: new Date("2024-04-27T00:00:00.000Z"),
  },
  {
    id: 118,
    name: "Singapur",
    description:
      "Ciudad estado en el sudeste asiático con rascacielos, jardines futuristas y barrios multiculturales muy cuidados.",
    countryCode: "SG",
    type: DestinationType.City,
    lastModified: new Date("2024-04-28T00:00:00.000Z"),
  },
  {
    id: 119,
    name: "Bangkok",
    description:
      "Capital tailandesa con templos ornamentados, mercados flotantes, tráfico intenso y una vida nocturna muy activa.",
    countryCode: "TH",
    type: DestinationType.City,
    lastModified: new Date("2024-04-29T00:00:00.000Z"),
  },
  {
    id: 120,
    name: "Seúl",
    description:
      "Capital de Corea del Sur con palacios, barrios tradicionales, rascacielos y una cultura tecnológica muy avanzada.",
    countryCode: "KR",
    type: DestinationType.City,
    lastModified: new Date("2024-04-30T00:00:00.000Z"),
  },
];

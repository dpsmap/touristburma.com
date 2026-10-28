/**
 * Tourist Burma 2.0: AI-Native Spatial Travel Platform
 * Vanilla JavaScript Engine (Spatial PostGIS Simulation, Generative AI Concierge, Cartography)
 * Ref: tourist_burma_2_0_architectural_vision.md & design.md
 */

// ============================================================================
// 1. DATA REPOSITORY: VERIFIED LOCAL MYANMAR PROVIDERS & SPATIAL POIs
// ============================================================================

const FALLBACK_HERITAGE_IMAGE = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'><defs><linearGradient id='bg' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%232b1d14'/><stop offset='100%' stop-color='%23160e09'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23bg)'/><circle cx='150' cy='130' r='55' fill='none' stroke='%23d4af37' stroke-width='1.5' opacity='0.3'/><g fill='%23d4af37' opacity='0.85' transform='translate(134,100)'><path d='M16 2L14 8h4L16 2zM12 9l-2 3h12l-2-3H12zm-3 4l-3 4h20l-3-4H9zm-4 5l-3 5h24l-3-5H5zm-3 6l-2 5h26l-2-5H2z'/></g><text x='50%' y='210' fill='%23d4af37' font-family='sans-serif' font-size='11' font-weight='600' text-anchor='middle' letter-spacing='2'>TOURIST BURMA</text><text x='50%' y='228' fill='%23a89078' font-family='sans-serif' font-size='9' text-anchor='middle'>VERIFIED HERITAGE</text></svg>";

const INITIAL_PROVIDERS = [
  {
    id: "poi-bagan-ananda",
    name: "Ananda Temple",
    category: "LOCAL_GUIDE",
    region: "Bagan",
    latitude: 21.1708,
    longitude: 94.8677,
    rating: 4.7,
    isVerified: true,
    image: "images/ananda-temple.jpg",

    tours: [
        {
            title: "Ananda Temple Historical Tour",
            description: "Ananda Temple was built around 1105 AD during the reign of King Kyansittha. Located in Old Bagan, it is one of the most famous and well-preserved temples in Myanmar. The temple is renowned for its magnificent architectural design, blending Mon and Indian influences. It features four large standing Buddha statues facing the four cardinal directions, representing the Buddhas Kakusandha, Konagamana, Kassapa, and Gautama. The temple also contains beautiful stone sculptures, intricate carvings, and ancient religious artwork. Ananda Temple is considered one of the finest architectural masterpieces of the Bagan Kingdom.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Remove your shoes and socks before entering the temple. Dress respectfully by covering your shoulders and knees. Avoid touching ancient Buddha images, sculptures, and historical structures. Maintain silence during religious activities and respect worshippers. Follow local temple regulations and photography restrictions."
},
  {
    id: "poi-bagan-dhammayangyi",
    name: "Dhammayangyi Temple",
    category: "LOCAL_GUIDE",
    region: "Bagan",
    latitude: 21.1612,
    longitude: 94.8725,
    rating: 4.6,
    isVerified: true,
    image: "images/dhammayangyi-temple.jpg",

    tours: [
        {
            title: "Dhammayangyi Temple Historical Tour",
            description: "Dhammayangyi Temple was built during the reign of King Narathu in the 12th century, approximately between 1167 and 1170 AD. Located in the Bagan Archaeological Zone, it is the largest temple in Bagan by volume. The temple is famous for its massive brick structure, remarkable brickwork, and mysterious history. According to local legends, King Narathu ordered extremely precise brick construction, and workers were severely punished for imperfections. The temple features long corridors, Buddha images, and impressive architectural details. Although parts of the interior remain inaccessible, Dhammayangyi Temple is one of the most significant historical monuments in Bagan.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Remove your shoes and socks before entering the temple. Dress respectfully by covering your shoulders and knees. Avoid touching ancient brick walls, Buddha images, and historical structures. Some interior corridors may be closed for safety and preservation. Do not enter restricted areas or climb the temple. Follow local regulations and respect religious activities."
},
 {
    id: "poi-bagan-bupaya",
    name: "Bupaya Pagoda",
    category: "LOCAL_GUIDE",
    region: "Bagan",
    latitude: 21.1750,
    longitude: 94.8561,
    rating: 4.5,
    isVerified: true,
    image: "images/bupaya-pagoda.jpg",

    tours: [
        {
            title: "Bupaya Pagoda Historical Tour",
            description: "Bupaya Pagoda is a famous Buddhist pagoda located on the banks of the Ayeyarwady River in Old Bagan, Myanmar. According to traditional accounts, the original pagoda was built during the reign of King Pyusawhti, although its exact construction date remains uncertain. The pagoda is known for its distinctive gourd-shaped golden stupa, which gives it the name Bupaya, meaning 'Gourd Pagoda.' The original structure was destroyed during the 1975 Bagan earthquake and was later reconstructed. Its beautiful riverside location offers scenic views of the Ayeyarwady River, especially during sunset. Bupaya Pagoda is a popular destination for pilgrims and tourists visiting Bagan.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Remove your shoes and socks before entering the pagoda compound. Dress respectfully by covering your shoulders and knees. Respect Buddhist customs and avoid disturbing worshippers. Be careful near the riverbank, especially during the rainy season. Avoid climbing sacred structures and follow local regulations. Photography is generally permitted in public areas unless otherwise indicated."
},
  {
    id: "poi-bagan-shwezigon",
    name: "Shwezigon Pagoda",
    category: "LOCAL_GUIDE",
    region: "Bagan",
    latitude: 21.1950,
    longitude: 94.8939,
    rating: 4.6,
    isVerified: true,
    image: "images/shwezigon-pagoda.jpg",

    tours: [
        {
            title: "Shwezigon Pagoda Historical Tour",
            description: "Shwezigon Pagoda is one of the most important Buddhist religious monuments in Bagan, Myanmar. Construction began during the reign of King Anawrahta in the 11th century and was completed during the reign of King Kyansittha. Located near Nyaung-U, the pagoda is famous for its magnificent golden bell-shaped stupa, which became a model for many later Burmese pagodas. According to religious tradition, the pagoda enshrines sacred relics of the Buddha. The surrounding complex includes smaller shrines, Buddha images, and traditional Burmese architectural decorations. Shwezigon Pagoda remains an important pilgrimage destination for Buddhist devotees and visitors.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Remove your shoes and socks before entering the pagoda compound. Wear respectful clothing that covers your shoulders and knees. Avoid touching sacred objects and historical structures. Respect Buddhist traditions and maintain silence during prayers. Photography may be restricted in certain areas. Follow local rules and respect worshippers."
},
  {
    id: "poi-bagan-sulamani",
    name: "Sulamani Temple",
    category: "LOCAL_GUIDE",
    region: "Bagan",
    latitude: 21.1647,
    longitude: 94.8956,
    rating: 4.6,
    isVerified: true,
    image: "images/Sulamani 7.png",

    tours: [
        {
            title: "Sulamani Temple Historical Tour",
            description: "Sulamani Temple was built in 1183 AD during the reign of King Narapatisithu. It is one of the most beautiful temples in Bagan, famous for its elegant brick architecture, intricate stucco decorations, and ancient mural paintings. The temple features a two-story structure with beautifully decorated terraces, arched entrances, and Buddha images. Sulamani Temple is an outstanding example of Bagan's architectural achievements during the 12th century.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Remove your shoes and socks before entering the temple. Dress respectfully by covering your shoulders and knees. Avoid touching ancient wall paintings, Buddha images, and historical structures. Photography restrictions may apply in certain areas. Follow local regulations and respect restricted areas during restoration work."
},
  {
    id: "poi-bagan-manuha",
    name: "Manuha Temple",
    category: "LOCAL_GUIDE",
    region: "Bagan",
    latitude: 21.1549,
    longitude: 94.8607,
    rating: 4.5,
    isVerified: true,
    image: "images/Manuha 8.png",

    tours: [
        {
            title: "Manuha Temple Historical Tour",
            description: "Manuha Temple was built in 1067 AD by King Manuha, the last king of the Mon Kingdom of Thaton. Located in Myinkaba Village, south of Old Bagan, the temple is one of the oldest surviving temples in Bagan. It is famous for its four massive Buddha images, including three seated Buddha statues and one reclining Buddha statue. The large Buddha images are housed in relatively small chambers, creating a feeling of confinement. According to local tradition, this architectural design symbolizes King Manuha's experience of captivity after being defeated by King Anawrahta. Manuha Temple is an important historical and religious landmark that reflects the cultural heritage of the Bagan Kingdom.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Remove your shoes and socks before entering the temple. Dress respectfully by covering your shoulders and knees. Avoid touching Buddha images, ancient walls, and historical structures. Maintain silence and respect worshippers during religious activities. Photography restrictions may apply in certain areas. Follow local regulations and temple guidelines."
},
  {
    id: "poi-bagan-htilominlo",
    name: "Htilominlo Temple",
    category: "LOCAL_GUIDE",
    region: "Bagan",
    latitude:  21.178531,
    longitude: 94.879398,
    address: "Htilominlo Temple, Old Bagan, Nyaung-U Township, Mandalay Region, Myanmar",
    rating: 4.6,
    isVerified:true,
    image: "images/Htilo 5.png",
    tours: [
      {
        title: "Htilominlo Temple Historical Tour",
        description: "Htilominlo Temple was built in 1218 AD during the reign of King Htilominlo. The temple is approximately 46 meters tall and is famous for its beautiful brick architecture, detailed stucco decorations, and ancient Buddha images. It is one of the most impressive temples of the late Bagan period.",
        priceUsd: 0
      }
    ],
    culturalNotes:  "Remove your shoes and socks before entering the temple. Dress respectfully and avoid touching ancient wall paintings.",
  },
  {
    
    id: "poi-bagan-thatbyinnyu",
    name: "Thatbyinnyu Temple",
    category: "LOCAL_GUIDE",
    region: "Bagan",
    latitude: 21.16875,
    longitude: 94.86295,
    rating: 4.5,
    isVerified: true,
    image: "images/That byinyut 6.png",
    tours: [
        {
            title: "Thatbyinnyu Temple Historical Tour",
            description: "Thatbyinnyu Temple was constructed between 1144 and 1151 AD during the reign of King Alaungsithu (Sithu I). Standing approximately 61 meters tall, it is the tallest temple in Bagan. The temple is famous for its magnificent multi-tiered architecture, whitewashed exterior, ancient Buddha images, and impressive vaulted corridors. Its name, Thatbyinnyu, means 'Omniscience,' representing the infinite wisdom of the Buddha. The temple is one of the most significant architectural masterpieces of the Bagan Kingdom.",
            priceUsd: 0
        }
    ],

   culturalNotes: "Remove your shoes and socks before entering the temple. Dress respectfully by covering your shoulders and knees. Avoid touching ancient Buddha images, wall paintings, and historical structures. Climbing the temple is prohibited. Follow local regulations and respect restricted areas during restoration work."
},
  {
    id: "poi-inle-paw-khone-lotus-thread",
    name: "Paw Khone Sacred Lotus Thread Guild",
    category: "CULTURAL_HERITAGE",
    region: "Inle Lake",
    latitude: 20.44606,
longitude: 96.89657,
rating: 4.5,
isVerified: true,
    image: "images/Paw Khowne 10.png",

    tours: [
        {
            title: "Paw Khone Traditional Lotus Weaving Tour",
            description: "Paw Khone Sacred Lotus Thread Guild represents the traditional lotus fiber weaving heritage of Inpawkhon Village, located on Inle Lake in Shan State, Myanmar. Inpawkhon Village is famous for its unique lotus thread production and traditional handwoven textiles. Local artisans carefully extract delicate fibers from fresh lotus stems, roll them together to form threads, and weave them into beautiful fabrics using traditional wooden looms. This rare weaving technique has been practiced for generations and is an important part of the cultural identity of the Intha people. Lotus fabrics are traditionally used to create scarves, shawls, robes, and other handmade textile products. Visitors can observe the lotus fiber extraction process, learn about traditional weaving techniques, and explore locally produced textiles. The village offers an opportunity to experience the craftsmanship, cultural traditions, and daily lives of the communities living around Inle Lake.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Respect local artisans and traditional weaving practices during your visit. Ask for permission before taking photographs of workers or their workshops. Avoid touching weaving equipment, lotus fibers, or finished textiles without permission. Dress respectfully and follow workshop guidelines. Support local craftsmanship by purchasing authentic handmade products when possible. Be careful when walking on wooden platforms and traveling by boat. Keep the environment clean and respect the local community."
},
  {
    id: "poi-inle-phaung-daw-oo",
    name: "Phaung Daw Oo Pagoda",
    category: "LOCAL_GUIDE",
    region: "Inle Lake",
    latitude: 20.4756,
    longitude: 96.8904,
    rating: 4.4,
    isVerified: false,
    image: "images/Phaung Daw Oo 9.png",

    tours: [
        {
            title: "Phaung Daw Oo Pagoda Historical Tour",
            description: "Phaung Daw Oo Pagoda is one of the most famous Buddhist religious sites in the Inle Lake region of Shan State, Myanmar. The pagoda is located in the southern part of Inle Lake and is an important spiritual center for local communities. It houses five sacred Buddha images that have been covered with layers of gold leaf by Buddhist devotees over many generations. According to local tradition, the Buddha images are associated with the Bagan period, although their exact origins remain uncertain. The pagoda is especially famous for the annual Phaung Daw Oo Pagoda Festival, during which four of the five sacred Buddha images are traditionally carried around the lake on an elaborately decorated royal barge. The festival features traditional boat races, religious ceremonies, and cultural celebrations. Visitors can explore the beautiful architecture, observe Buddhist traditions, and experience the unique cultural heritage of the Inle Lake region.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Remove your shoes and socks before entering the pagoda compound. Dress respectfully by covering your shoulders and knees. Respect Buddhist customs and avoid disturbing worshippers. Follow local rules regarding photography and access to sacred areas. Women are traditionally not permitted to apply gold leaf directly to the sacred Buddha images. Avoid touching religious objects without permission. Follow safety instructions when traveling by boat to the pagoda."
},
  {
    id: "poi-inle-floating-gardens",
    name: "Floating Gardens",
    category: "LOCAL_GUIDE",
    region: "Inle Lake",
    latitude: 20.50998,
    longitude: 96.90208,
    rating: 4.5,
    isVerified: true,
    image: "images/Floating garden 12.png",

    tours: [
        {
            title: "Inle Lake Floating Gardens Cultural and Nature Tour",
            description: "The Floating Gardens of Inle Lake are one of the most remarkable agricultural and cultural attractions in Shan State, Myanmar. These unique gardens are cultivated by the Intha people, who have developed traditional farming techniques adapted to life on the lake. The gardens are created using floating layers of aquatic plants, water hyacinths, and organic materials, which are anchored to the lakebed with long bamboo poles. Local farmers grow a variety of vegetables and flowers, especially tomatoes, using these floating agricultural platforms. This traditional farming system reflects the creativity, knowledge, and sustainable practices developed by local communities over generations. Visitors can explore the floating gardens by traditional wooden boat, observe farmers working on their crops, and learn about the agricultural techniques used in the region. The surrounding scenery features beautiful mountains, traditional stilt houses, peaceful waterways, and lush green vegetation. The Floating Gardens provide visitors with an opportunity to experience the natural beauty, traditional livelihoods, and cultural heritage of Inle Lake.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Respect local farmers and their traditional agricultural practices during your visit. Ask permission before photographing farmers or entering private farming areas. Avoid touching crops, bamboo supports, or floating garden structures without permission. Do not throw rubbish or plastic waste into the lake. Follow boat safety instructions and wear a life jacket when traveling by boat. Avoid damaging aquatic plants and disturbing local wildlife. Support local communities by purchasing locally grown products when appropriate. Respect the natural environment and help preserve the unique floating garden ecosystem of Inle Lake."
},
  {
    id: "poi-inle-nga-phe-kyaung",
    name: "Nga Phe Kyaung Monastery",
    category: "LOCAL_GUIDE",
    region: "Inle Lake",
    latitude: 20.5167,
    longitude: 96.8978,
    rating: 4.3,
    isVerified: true,
    image: "images/Nga Phe Kyaung 11.png",

    tours: [
        {
            title: "Nga Phe Kyaung Monastery Historical Tour",
            description: "Nga Phe Kyaung Monastery is one of the oldest and most famous wooden Buddhist monasteries located on Inle Lake in Shan State, Myanmar. The monastery was established during the 19th century and is known for its traditional wooden architecture built on stilts above the lake. It is also popularly known as the Jumping Cat Monastery because monks historically trained cats to jump through small hoops. However, these performances are no longer a regular attraction. The monastery houses an impressive collection of ancient Buddha images representing different artistic styles, including Shan, Bagan, Inwa, and Tibetan influences. Its beautiful wooden pillars, intricate carvings, and peaceful surroundings reflect the rich religious and cultural heritage of the Inle Lake region. Visitors can explore the monastery, admire traditional Buddhist artwork, and enjoy scenic views of the lake and nearby floating gardens. Nga Phe Kyaung Monastery remains an important religious and cultural landmark for local communities and tourists visiting Inle Lake.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Remove your shoes and socks before entering the monastery. Dress respectfully by covering your shoulders and knees. Respect Buddhist monks and local worshippers. Avoid making loud noises inside religious buildings. Ask permission before photographing monks or religious ceremonies. Do not touch sacred Buddha images or historical artifacts. Follow monastery rules and local regulations. Be careful when walking on wooden platforms and traveling by boat. Keep the monastery clean and respect its peaceful environment."
},
  {
    id: "poi-yangon-shwedagon",
    name: "Shwedagon Pagoda",
    category: "LOCAL_GUIDE",
    region: "Yangon",
    latitude: 16.7984,
    longitude: 96.1496,
    rating: 4.7,
    isVerified: true,
    image: "images/Shwedagon 13.png",

    tours: [
        {
            title: "Shwedagon Pagoda Historical and Cultural Tour",
            description: "Shwedagon Pagoda is one of the most famous and sacred Buddhist landmarks in Myanmar, located on Singuttara Hill in Yangon. The magnificent golden pagoda stands approximately 99 meters tall and is considered one of the most important religious monuments in the country. According to Buddhist tradition, the pagoda enshrines sacred relics of four Buddhas, including eight strands of hair believed to belong to Gautama Buddha. The exact date of its original construction remains uncertain, although traditional accounts trace its history back more than 2,500 years. The pagoda is renowned for its golden stupa, beautiful architecture, precious gemstones, and numerous surrounding shrines and prayer halls. Thousands of Buddhist devotees and tourists visit Shwedagon Pagoda to offer prayers, meditate, and admire its religious and cultural significance. The pagoda is especially beautiful during sunrise and sunset when its golden surface reflects the changing colors of the sky. Visitors can explore traditional Myanmar Buddhist architecture, observe religious ceremonies, and experience the spiritual atmosphere of this iconic landmark.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Remove your shoes and socks before entering the pagoda compound. Dress respectfully by covering your shoulders and knees. Respect Buddhist monks, worshippers, and religious ceremonies. Avoid loud conversations and inappropriate behavior inside sacred areas. Do not climb sacred structures or touch religious objects without permission. Photography is generally permitted in public areas, but visitors should follow posted restrictions. Be respectful when taking photographs of monks and worshippers. Follow local regulations and keep the pagoda compound clean."
},
  {
    id: "poi-yangon-secretariat",
    name: "The Secretariat Yangon (Ministers' Office)",
    category: "LOCAL_GUIDE",
    region: "Yangon",
    latitude: 16.7758,
    longitude: 96.1656,
    address: "The Secretariat Yangon, Thein Phyu Road, Botahtaung Township, Yangon, Myanmar",
    rating:  4.5,
isVerified: true,
  
    image: "images/Secretariat Yangon 14.png",

    tours: [
        {
            title: "The Secretariat Yangon Historical Tour",
            description: "The Secretariat Yangon, also known as the Ministers' Office, is one of Myanmar's most significant historical landmarks. Constructed during the British colonial period in the late 19th and early 20th centuries, the complex is famous for its magnificent red-brick architecture, elegant arches, spacious courtyards, and historic corridors. On July 19, 1947, General Aung San and several other national leaders were assassinated here during a cabinet meeting. This tragic event is commemorated annually as Martyrs' Day in Myanmar. The Secretariat is an important symbol of Myanmar's struggle for independence and national history. Today, the historic complex is preserved as a cultural heritage site where visitors can explore its architecture and learn about the country's past.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Respect the historical significance of the Secretariat, especially the areas associated with General Aung San and the martyrs. Avoid touching or damaging historic walls, artifacts, and architectural features. Follow visitor guidelines and respect restricted areas. Photography may be limited in certain sections. Maintain respectful behavior during commemorative events."
},
  {
    id: "poi-mandalay-palace-moat",
    name: "Mandalay Palace Moat",
    category: "CULTURAL_HERITAGE",
    region: "Mandalay",
    latitude: 21.9925,
    longitude: 96.0950,
    address: "Mandalay Palace Moat, Aungmyaythazan Township, Mandalay Region, Myanmar",
    rating: 4.5,
    isVerified: true,
    image: "images/Mandalay Palace 16.png",

    tours: [
        {
            title: "Mandalay Palace Moat Historical and Sightseeing Tour",
            description: "Mandalay Palace Moat is one of the most famous historical landmarks in Mandalay, Myanmar. The moat surrounds the Mandalay Royal Palace, which was constructed between 1857 and 1859 during the reign of King Mindon, the founder of Mandalay. The palace complex is enclosed by massive red-brick walls and a wide moat, reflecting the traditional architecture of Myanmar's last royal dynasty. The moat forms a large square around the palace grounds and offers beautiful views of the historic fortress walls, traditional watchtowers, and surrounding landscapes. Visitors can enjoy sightseeing, photography, and peaceful walks along the moat, especially during sunrise and sunset. Mandalay Palace Moat remains an important symbol of Myanmar's royal heritage and cultural history.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Respect the historical and cultural significance of Mandalay Palace and its surrounding moat. Avoid littering or damaging historical structures. Follow local regulations and security instructions, as some areas around the palace may have restricted access. Be careful near the water and avoid entering prohibited areas. Photography restrictions may apply in certain locations. Visitors are encouraged to preserve the natural beauty and historical environment of the site."
},
  {
    id: "poi-mandalay-u-bein-bridge",
    name: "U Bein Bridge",
    category: "CULTURAL_HERITAGE",
    region: "Mandalay",
    latitude: 21.8917,
    longitude: 96.0586,
    address: "U Bein Bridge, Amarapura, Mandalay Region, Myanmar",
    rating: 4.5,
    isVerified: true,
    image: "images/U Bein 15.png",

    tours: [
        {
            title: "U Bein Bridge Historical and Sunset Tour",
            description: "U Bein Bridge is one of Myanmar's most famous historical landmarks, located in Amarapura near Mandalay. Built around 1850 during the reign of King Bagan Min, the bridge stretches approximately 1.2 kilometers across Taungthaman Lake. It is widely recognized as one of the oldest and longest teakwood bridges in the world. The bridge was constructed using teakwood, traditionally believed to have been reclaimed from the former royal palace at Inwa. Named after U Bein, a local official associated with its construction, the bridge is an important symbol of Myanmar's cultural heritage. Visitors can enjoy scenic lake views, traditional village life, and breathtaking sunsets. U Bein Bridge is especially popular for photography, sightseeing, and experiencing the peaceful atmosphere of Amarapura.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Respect local traditions and communities when visiting U Bein Bridge. Walk carefully because some sections of the wooden bridge may be uneven or slippery. Avoid damaging the historic teakwood structure. Do not litter or disturb local residents and fishermen. Be cautious during crowded sunset hours and the rainy season. Follow local safety guidelines and respect restricted areas."
},
  {
    id: "poi-shan-pindaya-caves",
    name: "Pindaya Caves",
    category: "LOCAL_GUIDE",
    
    region: "Shan State",
    latitude: 20.9244,
    longitude: 96.6506,
    address: "Shwe Oo Min Natural Cave Pagoda, Pindaya Township, Southern Shan State, Myanmar",
    rating: 4.5,
    isVerified: true, 
    image: "images/Pindaya 17.png",

    tours: [
        {
            title: "Pindaya Caves Historical and Cultural Tour",
            description: "Pindaya Caves, also known as Shwe Oo Min Natural Cave Pagoda, is one of the most famous Buddhist pilgrimage sites in Shan State, Myanmar. Located near Pindaya town, the limestone cave complex is renowned for its thousands of Buddha images, with more than 8,000 statues of different sizes, styles, and historical periods. Many of these Buddha images were donated by Buddhist devotees over several centuries. The caves feature beautiful golden Buddha statues, natural limestone formations, narrow passages, and sacred chambers. Visitors can explore the cave interiors, admire traditional Buddhist artwork, and learn about the religious traditions of the region. Pindaya Caves is an important cultural and spiritual landmark that attracts pilgrims and tourists from around the world.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Remove your shoes and socks before entering the cave pagoda. Dress respectfully by covering your shoulders and knees. Avoid touching Buddha images, ancient sculptures, and natural limestone formations. Walk carefully because some cave passages and steps may be slippery. Maintain silence and respect worshippers during religious activities. Follow local regulations and photography restrictions."
},
  {
    id: "poi-shan-kalaw-hill-station",
    name: "Kalaw Hill Station",
    category: "NATURAL_ATTRACTION",
    region: "Shan State",
    latitude: 20.6294,
    longitude: 96.5658,
    address: "Kalaw, Kalaw Township, Southern Shan State, Myanmar",
    rating: 4.5,
    isVerified: true,
    image: "images/Kalaw Hill 18.png",

    tours: [
        {
            title: "Kalaw Hill Station Nature and Cultural Tour",
            description: "Kalaw Hill Station is a charming mountain town located in Southern Shan State, Myanmar. Situated at an elevation of approximately 1,320 meters above sea level, Kalaw is famous for its cool climate, beautiful pine forests, rolling green hills, and peaceful natural surroundings. Originally developed as a hill station during the British colonial period, the town features colonial-era buildings, traditional markets, and diverse local cultures. Visitors can enjoy trekking through scenic mountain trails, exploring pine forests, visiting nearby ethnic villages, and experiencing traditional Shan cuisine. Kalaw is also a popular starting point for trekking adventures through the Shan Highlands. Its refreshing mountain atmosphere and breathtaking landscapes make it one of the most attractive destinations in Shan State.",
            priceUsd: 0
        }
    ],

    culturalNotes: "Respect local traditions and ethnic communities when visiting Kalaw. Dress appropriately when entering religious sites and villages. Avoid littering and damaging the natural environment. Stay on designated trekking trails and follow local safety guidelines. Ask permission before photographing local residents. Be prepared for cool temperatures, especially during early mornings and evenings. Respect wildlife, forests, and local cultural practices."
},
];

// Region coordinates for quick camera navigation
const REGION_COORDINATES = {
  all: { center: [20.5, 96.0], zoom: 6 },
  bagan: { center: [21.1720, 94.8720], zoom: 13 },
  inle: { center: [20.545, 96.910], zoom: 12 },
  yangon: { center: [16.780, 96.160], zoom: 13 },
  mandalay: { center: [21.940, 96.070], zoom: 12 },
  shan: { center: [21.600, 96.900], zoom: 9 }
};

// ============================================================================
// 2. APPLICATION STATE
// ============================================================================

const AppState = {
  providers: [],
  filteredProviders: [],
  activeCategory: "ALL",
  activeRegion: "all",
  searchQuery: "",
  searchRadiusKm: 50,
  userLocation: { latitude: 21.1708, longitude: 94.8679 }, // Defaults to Ananda Temple in Bagan Heritage Zone
  currency: "USD", // "USD" or "MMK"
  exchangeRateMmK: 3500, // 1 USD = 3,500 MMK
  language: "EN", // "EN" or "MY"
  offlineSimulated: false,
  selectedProvider: null,
  activeMapMarkers: new Map(),
  itineraryPolyline: null
};

// ============================================================================
// 3. SPATIAL POSTGIS SIMULATION (Haversine ST_Distance & ST_DWithin)
// ============================================================================

/**
 * Calculates great-circle distance between two coordinates in kilometers.
 * Simulates PostGIS ST_Distance(geography, geography)
 */
function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// ============================================================================
// 4. MAP ENGINE (LEAFLET + CUSTOM CARTOGRAPHIC STYLING)
// ============================================================================

let mapInstance = null;
let tileLayerInstance = null;

const MAP_TILE_THEMES = {
  dark: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    options: {
      attribution: 'Tiles &copy; Esri &mdash; Sources: Esri, HERE, Garmin, Intermap, increment P Corp., GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), (c) OpenStreetMap contributors, and the GIS User Community',
      maxZoom: 19,
      className: 'map-dark-tiles'
    }
  },
  heritage: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    options: {
      attribution: 'Tiles &copy; Esri &mdash; Sources: Esri, HERE, Garmin, Intermap, increment P Corp., GEBCO, USGS, FAO, NPS, NRCAN, GeoBase, IGN, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), (c) OpenStreetMap contributors, and the GIS User Community',
      maxZoom: 19
    }
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    options: {
      attribution: '&copy; Esri &mdash; Earthstar Geographics',
      maxZoom: 18
    }
  }
};

function initMap() {
  const mapContainer = document.getElementById("map");
  if (!mapContainer) return;

  // Initialize Leaflet Map centered on Myanmar
  mapInstance = L.map("map", {
    center: REGION_COORDINATES.all.center,
    zoom: REGION_COORDINATES.all.zoom,
    zoomControl: true
  });

  // Default to Dark Teak style
  setMapTheme("dark");

  // Handle map click for vendor coordinate picking
  mapInstance.on("click", (e) => {
    const { lat, lng } = e.latlng;
    const vendorLatInput = document.getElementById("vendorLat");
    const vendorLngInput = document.getElementById("vendorLng");
    if (vendorLatInput && vendorLngInput && document.getElementById("vendorModal").classList.contains("active")) {
      vendorLatInput.value = lat.toFixed(6);
      vendorLngInput.value = lng.toFixed(6);
      showToast(`Selected map point: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);
    }
  });
}

function setMapTheme(themeKey) {
  if (!mapInstance || !MAP_TILE_THEMES[themeKey]) return;
  if (tileLayerInstance) {
    mapInstance.removeLayer(tileLayerInstance);
  }
  const theme = MAP_TILE_THEMES[themeKey];
  tileLayerInstance = L.tileLayer(theme.url, theme.options).addTo(mapInstance);
}

function getCategoryColor(category) {
  switch (category) {
    case "SACRED_HERITAGE": return "var(--color-heritage-gold)";
    case "LOCAL_GUIDE": return "var(--color-inle-azure)";
    case "ECO_LODGE": return "var(--color-shan-jade)";
    case "ARTISAN": return "var(--color-bagan-terracotta)";
    case "SUSTAINABLE_TRANSPORT": return "var(--color-heritage-gold)";
    default: return "var(--color-heritage-gold)";
  }
}

function getCategoryIcon(category) {
  switch (category) {
    case "SACRED_HERITAGE": return "🛕";
    case "LOCAL_GUIDE": return "🧭";
    case "ECO_LODGE": return "🏡";
    case "ARTISAN": return "🏺";
    case "SUSTAINABLE_TRANSPORT": return "🚲";
    default: return "📍";
  }
}

/**
 * Render Leaflet Markers for active filtered POIs
 */
function renderMapMarkers() {
  if (!mapInstance) return;

  // Clear existing markers
  AppState.activeMapMarkers.forEach((marker) => {
    mapInstance.removeLayer(marker);
  });
  AppState.activeMapMarkers.clear();

  AppState.filteredProviders.forEach((poi) => {
    const iconColor = getCategoryColor(poi.category);
    const iconSymbol = getCategoryIcon(poi.category);

    // Create custom HTML icon
    const customIcon = L.divIcon({
      className: "custom-leaflet-marker",
      html: `
        <div class="marker-pin-outer" style="background: ${iconColor};">
          <div class="marker-pin-inner">${iconSymbol}</div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -30]
    });

    const marker = L.marker([poi.latitude, poi.longitude], { icon: customIcon });

    // Custom popup
    const formattedPrice = formatPrice(poi.tours[0].priceUsd);
    const popupHtml = `
      <div class="map-popup-card">
        <div class="map-popup-category">${poi.category.replace('_', ' ')}</div>
        <div class="map-popup-title">${poi.name}</div>
        <div class="map-popup-price">From ${formattedPrice}</div>
        <button class="map-popup-btn" onclick="openProviderDetailModal('${poi.id}')">View Experience & Verification</button>
      </div>
    `;

    marker.bindPopup(popupHtml);

    // Hover interactions
    marker.on("mouseover", () => {
      highlightPoiCard(poi.id, true);
    });
    marker.on("mouseout", () => {
      highlightPoiCard(poi.id, false);
    });

    marker.addTo(mapInstance);
    AppState.activeMapMarkers.set(poi.id, marker);
  });
}

function highlightPoiCard(poiId, isHighlighted) {
  const card = document.getElementById(`card-${poiId}`);
  if (card) {
    if (isHighlighted) {
      card.classList.add("highlighted");
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      card.classList.remove("highlighted");
    }
  }
}

// ============================================================================
// 5. POI FEED & SEARCH FILTERING ENGINE
// ============================================================================

function filterAndRenderProviders() {
  const query = AppState.searchQuery.toLowerCase().trim();
  const category = AppState.activeCategory;
  const region = AppState.activeRegion;

  let results = AppState.providers.filter((p) => {
    // 1. Category check
    if (category !== "ALL" && p.category !== category) return false;

    // 2. Region check
    if (region !== "all") {
      const regionMatch = p.region.toLowerCase().includes(region.toLowerCase());
      if (!regionMatch) return false;
    }

    // 3. Search query check
    if (query) {
      const matchName = p.name.toLowerCase().includes(query);
      const matchAddress = p.address.toLowerCase().includes(query);
      const matchTour = p.tours.some(t => 
        t.title.toLowerCase().includes(query) || t.description.toLowerCase().includes(query)
      );
      if (!matchName && !matchAddress && !matchTour) return false;
    }

    return true;
  });

  // Calculate distance relative to active user location
  results = results.map((p) => {
    const dist = calculateDistanceKm(
      AppState.userLocation.latitude,
      AppState.userLocation.longitude,
      p.latitude,
      p.longitude
    );
    return { ...p, distanceKm: dist };
  });

  // Sort by verified first, then closest distance
  results.sort((a, b) => a.distanceKm - b.distanceKm);

  AppState.filteredProviders = results;

  // Update UI counter
  const resultsCountEl = document.getElementById("resultsCount");
  if (resultsCountEl) {
    resultsCountEl.textContent = results.length;
  }

  renderPoiList();
  renderMapMarkers();
}

function renderPoiList() {
  const container = document.getElementById("poiList");
  if (!container) return;

  if (AppState.filteredProviders.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">☸</div>
        <div class="empty-title">No verified providers found</div>
        <p>Try broadening your search keywords, increasing your radius, or resetting category filters.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = AppState.filteredProviders
    .map((poi) => {
      const primaryTour = poi.tours[0] || { title: "Custom Experience", description: "", priceUsd: 25 };
      const formattedPrice = formatPrice(primaryTour.priceUsd);
      const distStr = poi.distanceKm !== undefined ? `${poi.distanceKm.toFixed(1)} km away` : "";

      return `
        <article 
          class="poi-card" 
          id="card-${poi.id}" 
          onmouseenter="highlightMapMarker('${poi.id}', true)"
          onmouseleave="highlightMapMarker('${poi.id}', false)"
        >
          <div class="poi-thumb-wrap" onclick="openProviderDetailModal('${poi.id}')">
            <img 
              class="poi-thumb" 
              src="${poi.image}" 
              alt="${poi.name}" 
              loading="lazy" 
              onerror="this.onerror=null; this.src=FALLBACK_HERITAGE_IMAGE;"
            />
            <span class="poi-category-tag cat-tag-${poi.category}">
              ${poi.category.replace('_', ' ')}
            </span>
          </div>

          <div class="poi-body">
            <div>
              <div class="poi-meta-row">
                <span class="poi-region">${poi.region}</span>
                <span class="poi-distance">${distStr}</span>
              </div>
              <h3 class="poi-title" onclick="openProviderDetailModal('${poi.id}')">${poi.name}</h3>
              <div class="poi-tour-title">"${primaryTour.title}"</div>
              <p class="poi-snippet">${primaryTour.description}</p>
            </div>

            <div class="poi-footer-row">
              <div class="poi-rating">
                <span>★</span>
                <span>${poi.rating.toFixed(2)}</span>
                <span style="color:var(--color-shan-jade); margin-left:4px;" title="Ethically Audited">✓ Verified</span>
              </div>
              <div class="poi-price-wrap">
                <div class="poi-price">${formattedPrice}</div>
                <div class="poi-price-sub">${poi.category === "SACRED_HERITAGE" ? "archaeological zone pass" : "direct community price"}</div>
              </div>
            </div>

            <div class="poi-actions-row">
              <button class="btn-card-action btn-card-map" onclick="flyToPoiCoordinates(${poi.latitude}, ${poi.longitude}, '${poi.id}')">
                📍 Map
              </button>
              <button class="btn-card-action btn-card-book" onclick="openProviderDetailModal('${poi.id}')">
                ${poi.category === "SACRED_HERITAGE" ? "✦ Heritage Details" : "✦ Details & Direct Inquiry"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function highlightMapMarker(poiId, isHighlighted) {
  const marker = AppState.activeMapMarkers.get(poiId);
  if (marker && mapInstance) {
    if (isHighlighted) {
      marker.openPopup();
    }
  }
}

function flyToPoiCoordinates(lat, lng, poiId) {
  if (!mapInstance) return;
  if (window.innerWidth <= 900) {
    setMobileView("map");
  }
  mapInstance.flyTo([lat, lng], 15, { duration: 1.2 });
  const marker = AppState.activeMapMarkers.get(poiId);
  if (marker) {
    marker.openPopup();
  }
}

function setMobileView(mode) {
  const viewport = document.querySelector(".split-viewport");
  const toggleBtn = document.getElementById("btnMobileViewToggle");
  const toggleText = document.getElementById("mobileToggleText");
  if (!viewport) return;

  if (mode === "map") {
    viewport.classList.add("mobile-map-active");
    if (toggleText) toggleText.textContent = "View List";
    if (toggleBtn) {
      const icon = toggleBtn.querySelector(".toggle-icon");
      if (icon) icon.textContent = "📋";
    }
    setTimeout(() => {
      if (mapInstance) {
        mapInstance.invalidateSize();
      }
    }, 250);
  } else {
    viewport.classList.remove("mobile-map-active");
    if (toggleText) toggleText.textContent = "View Map";
    if (toggleBtn) {
      const icon = toggleBtn.querySelector(".toggle-icon");
      if (icon) icon.textContent = "🗺️";
    }
  }
}

// ============================================================================
// 6. CURRENCY & LANGUAGE LOCALIZATION
// ============================================================================

function formatPrice(usdAmount) {
  if (usdAmount === 0) {
    return "Heritage Zone Pass";
  }
  if (AppState.currency === "USD") {
    return `$${usdAmount} USD`;
  } else {
    const mmk = Math.round(usdAmount * AppState.exchangeRateMmK);
    return `${mmk.toLocaleString()} Ks`;
  }
}

function toggleCurrency() {
  AppState.currency = AppState.currency === "USD" ? "MMK" : "USD";
  const currencyLabel = document.getElementById("currencyLabel");
  const currencyIndicator = document.querySelector(".currency-indicator");
  if (currencyLabel && currencyIndicator) {
    if (AppState.currency === "USD") {
      currencyLabel.textContent = "USD ($)";
      currencyIndicator.textContent = "$";
    } else {
      currencyLabel.textContent = "MMK (Ks)";
      currencyIndicator.textContent = "Ks";
    }
  }

  // Re-render price displays
  renderPoiList();
  renderMapMarkers();
  showToast(`Switched currency to ${AppState.currency}`);
}

function toggleLanguage() {
  AppState.language = AppState.language === "EN" ? "MY" : "EN";
  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    if (AppState.language === "EN") {
      langBtn.querySelector(".lang-code").textContent = "EN";
      langBtn.querySelector(".lang-alt").textContent = "မြန်မာ";
    } else {
      langBtn.querySelector(".lang-code").textContent = "မြန်မာ";
      langBtn.querySelector(".lang-alt").textContent = "EN";
    }
  }
  showToast(AppState.language === "EN" ? "Switched to English interface" : "မြန်မာဘာသာသို့ ပြောင်းလဲပြီးပါပြီ");
}

// ============================================================================
// 7. AI CONCIERGE (STREAMING & GENERATIVE ITINERARY ENGINE)
// ============================================================================

const CURATED_AI_RESPONSES = {
  bagan: {
    text: `Here is a **3-Day Low-Carbon, Culturally Conscious Itinerary for Bagan**. It connects Bagan's most revered monuments—**Ananda Temple**, **Shwezigon Pagoda**, **Dhammayangyi Temple**, and **Bupaya Pagoda**—using silent e-bikes and verified local guides while protecting ancient terracotta brickwork:`,
    itinerary: {
      title: "3-Day Conscious Bagan Heritage & Pagoda Circuit",
      days: [
        {
          day: "Day 1: Sacred Shwezigon & Ananda's Golden Spire",
          steps: [
            "06:30 AM — Silent e-bike ride to Shwezigon Pagoda (Nyaung-U) for quiet morning meditation before crowds arrive.",
            "10:00 AM — Explore Ananda Temple with Daw Khin Myo, admiring four 9.5m colossal standing Buddhas and glazed Jatakas.",
            "03:00 PM — Traditional spun yarn and natural dyeing workshop at Minnanthu Women's Cooperative ($25 USD)."
          ],
          waypoints: [[21.1953, 94.8939], [21.1708, 94.8679], [21.1610, 94.8875]]
        },
        {
          day: "Day 2: Dhammayangyi Masonry & Myinkaba Lacquerware",
          steps: [
            "07:30 AM — Witness dawn mist over the immense mortarless brickwork of Dhammayangyi Temple.",
            "11:00 AM — Master lacquerware workshop tour and bamboo carving in historic Myinkaba village.",
            "04:00 PM — Rest and organic Shan tea tasting at Bagan Teak Sanctuary Eco-Lodge."
          ],
          waypoints: [[21.1620, 94.8729], [21.1550, 94.8720]]
        },
        {
          day: "Day 3: Rural Plain & Bupaya Ayeyarwady River Sunset",
          steps: [
            "08:00 AM — Silent e-bike trail through sandy village paths and hidden 12th-century stupas with U Min Lha E-Bikes.",
            "01:30 PM — Farm-to-table lunch at Sanon Social Enterprise restaurant.",
            "05:00 PM — Golden hour and twilight meditation at Bupaya Pagoda watching traditional wooden boats on the Ayeyarwady River."
          ],
          waypoints: [[21.1718, 94.8585], [21.1764, 94.8581]]
        }
      ],
      culturalNote: "Remember: Footwear and socks must be removed before entering any pagoda archway or sacred enclosure."
    }
  },
  inle: {
    text: `Here is a **Curated Sustainable Inle Lake Journey**. This plan deliberately avoids commercial souvenir factories and supports independent Intha family craftspeople and silent paddling:`,
    itinerary: {
      title: "Eco-Conscious Inle Lake & Lotus Weavers Route",
      days: [
        {
          day: "Day 1: Silent Canals & Sacred Lotus Weaving",
          steps: [
            "07:00 AM — Board a silent wooden paddle canoe with Thitpar Cooperative ($22 USD).",
            "10:00 AM — Visit Paw Khone village to witness rare sacred lotus fiber extraction with master weavers.",
            "01:30 PM — Traditional steamed Inle fish lunch wrapped in fresh banana leaves at a stilt homestay."
          ],
          waypoints: [[20.5510, 96.9150], [20.5312, 96.9021]]
        },
        {
          day: "Day 2: Wetlands Sanctuary & Shan Highland Ridge",
          steps: [
            "06:30 AM — Biodiversity birding expedition spotting endangered Sarus cranes with Ko San Win ($40 USD).",
            "12:00 PM — Stroll through the rotating 5-day mountain market in floating Ywama.",
            "04:00 PM — Sunset tea over the stilt gardens at Inle Bamboo Eco-Resort."
          ],
          waypoints: [[20.5600, 96.9180], [20.5420, 96.9080]]
        }
      ],
      culturalNote: "Avoid purchasing antique items or endangered wildlife products. Support living, certified artisans directly."
    }
  },
  etiquette: {
    text: `### Sacred Cultural Etiquette for Travelers in Myanmar

1. **Footwear Protocol (Pha-nat Chut):** Always remove both shoes and socks at the outer precinct of any pagoda, temple, monastery, or private home.
2. **Sacred Attire:** Shoulders and knees must be covered. Wearing a traditional Burmese **Longyi** is appreciated and comfortable in the climate.
3. **Respect for Sangha (Monks & Nuns):** Never touch or pat monks, nuns, or novices on the head. Give way on walkways. Women should never hand objects directly to a monk (place it on a cloth or table instead).
4. **Photography Manners:** Ask polite permission (*"Dat-pone yite-lo ya-ma-la?"*) before taking close-up portraits of monks, pilgrims, and artisans. Never climb stupas or pose irreverently next to Buddha statues.
5. **Direct Economic Impact:** Choose community-owned homestays and certified local guides so your travel funds sustain local livelihoods.`,
    itinerary: null
  },
  shan: {
    text: `Here is a **2-Day Shan Mountain & Ancient Tea Trail** based around organic farming communities:`,
    itinerary: {
      title: "Highland Shan Tea & Homestay Circuit",
      days: [
        {
          day: "Day 1: Pine Ridge Trail to Palaung Village",
          steps: [
            "07:00 AM — Depart trailhead with Kalaw Indigenous Mountain Guide ($60 USD).",
            "12:30 PM — Organic Danu village vegetarian lunch with fresh mountain herbs and roasted sesame.",
            "04:30 PM — Arrival at Palaung Mountain Tea Cooperative Homestay; participate in evening tea leaf steaming."
          ],
          waypoints: [[20.6280, 96.5650], [22.6180, 97.3010]]
        },
        {
          day: "Day 2: Ancient Wild Tea Forests",
          steps: [
            "06:30 AM — Early morning walk through centuries-old wild tea canopies shrouded in misty mountain clouds.",
            "11:00 AM — Traditional Shan noodle soup tasting at family trail stop.",
            "03:00 PM — Return descent with panoramic valley views of the Shan plateau."
          ],
          waypoints: [[22.6180, 97.3010], [20.6280, 96.5650]]
        }
      ],
      culturalNote: "Carry a reusable canteen; do not leave single-use plastic bottles in tribal highland sanctuaries."
    }
  }
};

function initAiConcierge() {
  const btnOpen = document.getElementById("btnOpenAiDrawer");
  const btnClose = document.getElementById("btnCloseAiDrawer");
  const drawer = document.getElementById("aiDrawer");
  const backdrop = document.getElementById("aiDrawerBackdrop");
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const btnClear = document.getElementById("btnClearChatHistory");

  if (!btnOpen || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add("active");
    backdrop.classList.add("active");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");
    if (chatInput) chatInput.focus();
  }

  function closeDrawer() {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");
  }

  btnOpen.addEventListener("click", openDrawer);
  btnClose.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  // Clear chat history
  if (btnClear) {
    btnClear.addEventListener("click", () => {
      const messagesContainer = document.getElementById("chatMessages");
      if (messagesContainer) {
        messagesContainer.innerHTML = `
          <div class="chat-bubble ai-bubble">
            <div class="bubble-sender">
              <span class="bubble-tag">Tourist Burma AI</span>
              <span class="bubble-time">Just now</span>
            </div>
            <div class="bubble-content">
              <p><strong>Mingalaba!</strong> Conversation cleared. How can I assist your mindful journey today?</p>
            </div>
          </div>
        `;
      }
    });
  }

  // Handle prompt chips
  document.querySelectorAll(".prompt-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const promptText = chip.getAttribute("data-prompt");
      if (promptText) {
        submitUserChatMessage(promptText);
      }
    });
  });

  // Handle chat form submit
  if (chatForm && chatInput) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const message = chatInput.value.trim();
      if (!message) return;
      chatInput.value = "";
      submitUserChatMessage(message);
    });

    // Enter key submits (without shift)
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        chatForm.dispatchEvent(new Event("submit"));
      }
    });
  }
}

function submitUserChatMessage(userText) {
  const messagesContainer = document.getElementById("chatMessages");
  if (!messagesContainer) return;

  // Append user message bubble
  const userBubble = document.createElement("div");
  userBubble.className = "chat-bubble user-bubble";
  userBubble.innerHTML = `
    <div class="bubble-sender">
      <span class="bubble-tag">You</span>
      <span class="bubble-time">Just now</span>
    </div>
    <div class="bubble-content">
      <p>${escapeHtml(userText)}</p>
    </div>
  `;
  messagesContainer.appendChild(userBubble);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Simulate streaming AI response
  simulateStreamingAiResponse(userText);
}

function simulateStreamingAiResponse(promptText) {
  const messagesContainer = document.getElementById("chatMessages");
  if (!messagesContainer) return;

  const lower = promptText.toLowerCase();
  let responseData = CURATED_AI_RESPONSES.bagan;

  if (lower.includes("inle") || lower.includes("lake") || lower.includes("boat") || lower.includes("lotus")) {
    responseData = CURATED_AI_RESPONSES.inle;
  } else if (lower.includes("etiquette") || lower.includes("shwedagon") || lower.includes("pagoda") || lower.includes("temple") || lower.includes("dress")) {
    responseData = CURATED_AI_RESPONSES.etiquette;
  } else if (lower.includes("shan") || lower.includes("tea") || lower.includes("hsipaw") || lower.includes("kalaw") || lower.includes("trek")) {
    responseData = CURATED_AI_RESPONSES.shan;
  }

  // Create empty AI response bubble
  const aiBubble = document.createElement("div");
  aiBubble.className = "chat-bubble ai-bubble";
  aiBubble.innerHTML = `
    <div class="bubble-sender">
      <span class="bubble-tag">Tourist Burma AI Concierge</span>
      <span class="bubble-time">Synthesizing PostGIS RAG...</span>
    </div>
    <div class="bubble-content">
      <p class="stream-text-target"></p>
    </div>
  `;
  messagesContainer.appendChild(aiBubble);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  const targetTextEl = aiBubble.querySelector(".stream-text-target");
  const fullText = responseData.text;
  let charIndex = 0;

  // Simulate typewriter streaming
  const streamInterval = setInterval(() => {
    charIndex += 4;
    targetTextEl.innerHTML = formatMarkdownToHtml(fullText.slice(0, charIndex));
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    if (charIndex >= fullText.length) {
      clearInterval(streamInterval);
      targetTextEl.innerHTML = formatMarkdownToHtml(fullText);

      // If response includes generative itinerary card, render it
      if (responseData.itinerary) {
        renderGenerativeItineraryCard(aiBubble.querySelector(".bubble-content"), responseData.itinerary);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }
    }
  }, 18);
}

function renderGenerativeItineraryCard(parentEl, itinerary) {
  const cardEl = document.createElement("div");
  cardEl.className = "itinerary-gen-card";

  const allWaypoints = [];
  itinerary.days.forEach(d => {
    if (d.waypoints) allWaypoints.push(...d.waypoints);
  });

  const waypointsJson = JSON.stringify(allWaypoints);

  const daysHtml = itinerary.days
    .map((day) => `
      <div class="itinerary-day">
        <div class="day-badge">${day.day}</div>
        <div class="day-steps">
          ${day.steps.map(s => `<div class="day-item-step"><span>•</span> <span>${s}</span></div>`).join("")}
        </div>
      </div>
    `)
    .join("");

  cardEl.innerHTML = `
    <div class="itinerary-header">
      <div class="itinerary-title">✦ ${itinerary.title}</div>
      <span style="font-size:0.7rem; color:var(--color-shan-jade); font-weight:700;">Zero-Trap Audited</span>
    </div>
    <div class="itinerary-days-list">
      ${daysHtml}
    </div>
    <div style="font-size:0.725rem; color:#E29B7E; margin-top:8px;">
      <strong>Cultural Tip:</strong> ${itinerary.culturalNote}
    </div>
    <div class="itinerary-actions-row">
      <button class="btn-itinerary-map" onclick='flyCameraToWaypoints(${waypointsJson})'>
        📍 View Waypoints on Map
      </button>
      <button class="btn-itinerary-save" onclick="saveItineraryToVault('${itinerary.title}')">
        ✦ Save Itinerary Offline
      </button>
    </div>
  `;

  parentEl.appendChild(cardEl);
}

function flyCameraToWaypoints(coords) {
  if (!mapInstance || !coords || coords.length === 0) return;

  // Clear existing polyline
  if (AppState.itineraryPolyline) {
    mapInstance.removeLayer(AppState.itineraryPolyline);
  }

  // Draw connecting polyline
  AppState.itineraryPolyline = L.polyline(coords, {
    color: "#D4AF37",
    weight: 3.5,
    dashArray: "6, 8",
    opacity: 0.9
  }).addTo(mapInstance);

  // Fit bounds to include all waypoints
  const bounds = L.latLngBounds(coords);
  mapInstance.fitBounds(bounds, { padding: [60, 60], maxZoom: 14 });

  showToast("Map camera framed to itinerary waypoints.");

  // If on mobile screen, close AI drawer so map is visible
  if (window.innerWidth < 1024) {
    const drawer = document.getElementById("aiDrawer");
    const backdrop = document.getElementById("aiDrawerBackdrop");
    if (drawer) drawer.classList.remove("active");
    if (backdrop) backdrop.classList.remove("active");
  }
}

function saveItineraryToVault(title) {
  const saved = JSON.parse(localStorage.getItem("tb_saved_itineraries") || "[]");
  saved.push({ title, savedAt: new Date().toISOString() });
  localStorage.setItem("tb_saved_itineraries", JSON.stringify(saved));
  showToast(`Saved "${title}" to your offline itinerary vault.`);
}

// ============================================================================
// 8. VENDOR ONBOARDING / SPATIAL GEOTAGGING MODAL
// ============================================================================

function initVendorModal() {
  const btnOpen = document.getElementById("btnOpenVendorModal");
  const btnClose = document.getElementById("btnCloseVendorModal");
  const btnCancel = document.getElementById("btnCancelVendor");
  const modal = document.getElementById("vendorModal");
  const backdrop = document.getElementById("vendorModalBackdrop");
  const form = document.getElementById("vendorForm");
  const btnDetect = document.getElementById("btnDetectVendorCoords");
  const regionSelect = document.getElementById("vendorRegion");

  if (!btnOpen || !modal || !backdrop) return;

  function openModal() {
    modal.classList.add("active");
    backdrop.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("active");
    backdrop.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");
  }

  btnOpen.addEventListener("click", openModal);
  btnClose.addEventListener("click", closeModal);
  if (btnCancel) btnCancel.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  // Auto-fill coordinates based on selected region
  if (btnDetect && regionSelect) {
    btnDetect.addEventListener("click", () => {
      const region = regionSelect.value;
      const latInput = document.getElementById("vendorLat");
      const lngInput = document.getElementById("vendorLng");

      switch (region) {
        case "Bagan":
          latInput.value = (21.1680 + (Math.random() - 0.5) * 0.02).toFixed(6);
          lngInput.value = (94.8620 + (Math.random() - 0.5) * 0.02).toFixed(6);
          break;
        case "Inle Lake":
          latInput.value = (20.5450 + (Math.random() - 0.5) * 0.02).toFixed(6);
          lngInput.value = (96.9100 + (Math.random() - 0.5) * 0.02).toFixed(6);
          break;
        case "Yangon":
          latInput.value = (16.7800 + (Math.random() - 0.5) * 0.02).toFixed(6);
          lngInput.value = (96.1600 + (Math.random() - 0.5) * 0.02).toFixed(6);
          break;
        case "Mandalay":
          latInput.value = (21.9400 + (Math.random() - 0.5) * 0.02).toFixed(6);
          lngInput.value = (96.0700 + (Math.random() - 0.5) * 0.02).toFixed(6);
          break;
        case "Shan Highlands":
          latInput.value = (20.6300 + (Math.random() - 0.5) * 0.02).toFixed(6);
          lngInput.value = (96.5700 + (Math.random() - 0.5) * 0.02).toFixed(6);
          break;
      }
      showToast(`Set coordinates for ${region}`);
    });
  }

  // Handle form submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("vendorName").value.trim();
      const category = document.getElementById("vendorCategory").value;
      const region = document.getElementById("vendorRegion").value;
      const priceUsd = parseFloat(document.getElementById("vendorPriceUsd").value) || 25;
      const address = document.getElementById("vendorAddress").value.trim();
      const lat = parseFloat(document.getElementById("vendorLat").value);
      const lng = parseFloat(document.getElementById("vendorLng").value);
      const tourTitle = document.getElementById("vendorTourTitle").value.trim();
      const description = document.getElementById("vendorDescription").value.trim();

      const newProvider = {
        id: `custom-poi-${Date.now()}`,
        name,
        category,
        region,
        latitude: lat,
        longitude: lng,
        address,
        rating: 5.0,
        isVerified: true,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=700&q=80",
        tours: [
          {
            title: tourTitle,
            description,
            priceUsd
          }
        ],
        culturalNotes: "Registered via Tourist Burma 2.0 Community Self-Certification Audit."
      };

      // Add to state and re-render
      AppState.providers.unshift(newProvider);
      filterAndRenderProviders();

      // Persist custom providers in localStorage
      const customSaved = JSON.parse(localStorage.getItem("tb_custom_providers") || "[]");
      customSaved.unshift(newProvider);
      localStorage.setItem("tb_custom_providers", JSON.stringify(customSaved));

      closeModal();
      form.reset();

      // Pan to new provider
      flyToPoiCoordinates(lat, lng, newProvider.id);
      showToast(`Successfully registered and verified "${name}"!`);
    });
  }
}

// ============================================================================
// 9. PROVIDER DETAIL & BOOKING INQUIRY MODAL
// ============================================================================

function openProviderDetailModal(poiId) {
  const poi = AppState.providers.find(p => p.id === poiId);
  if (!poi) return;

  AppState.selectedProvider = poi;

  const modal = document.getElementById("detailModal");
  const backdrop = document.getElementById("detailModalBackdrop");
  const coverImage = document.getElementById("detailCoverImage");
  const categoryBadge = document.getElementById("detailCategoryBadge");
  const title = document.getElementById("detailTitle");
  const locationSub = document.getElementById("detailLocation");
  const priceVal = document.getElementById("detailPriceVal");
  const desc = document.getElementById("detailDescription");
  const etiquette = document.getElementById("detailEtiquette");

  if (!modal || !backdrop) return;

  coverImage.style.backgroundImage = `url('${poi.image}'), url("${FALLBACK_HERITAGE_IMAGE}")`;
  coverImage.style.backgroundColor = "var(--color-teak-950)";
  coverImage.style.backgroundSize = "cover";
  coverImage.style.backgroundPosition = "center";
  categoryBadge.textContent = poi.category.replace('_', ' ');
  title.textContent = poi.name;
  locationSub.textContent = `${poi.address} · ${poi.region}, Myanmar`;
  
  const priceBoxLabel = document.querySelector(".detail-price-label");
  if (priceBoxLabel) {
    priceBoxLabel.textContent = poi.category === "SACRED_HERITAGE" ? "ENTRY ACCESS" : "DIRECT PRICE";
  }
  priceVal.textContent = formatPrice(poi.tours[0].priceUsd);
  desc.textContent = `${poi.tours[0].title} — ${poi.tours[0].description}`;

  if (poi.culturalNotes) {
    etiquette.innerHTML = `
      <p>• ${poi.culturalNotes}</p>
      <p>• Remove all footwear, including socks, before entering sacred precincts.</p>
      <p>• ${poi.category === "SACRED_HERITAGE" ? "Protect 1,000-year-old terracotta brickwork and mural plaster." : "Direct community booking guarantees zero commission leakages."}</p>
    `;
  }

  modal.classList.add("active");
  backdrop.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  backdrop.setAttribute("aria-hidden", "false");

  // Wire modal action buttons
  const btnFly = document.getElementById("btnFlyToMapFromDetail");
  if (btnFly) {
    btnFly.onclick = () => {
      closeDetailModal();
      flyToPoiCoordinates(poi.latitude, poi.longitude, poi.id);
    };
  }

  const btnInquire = document.getElementById("btnDirectInquiry");
  if (btnInquire) {
    if (poi.category === "SACRED_HERITAGE") {
      btnInquire.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        <span>Temple Etiquette & Pilgrimage Guide</span>
      `;
      btnInquire.onclick = () => {
        showToast(`Cultural etiquette and archaeological notes loaded for ${poi.name}.`);
        closeDetailModal();
      };
    } else {
      btnInquire.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <span>Direct Inquiry (No Booking Fees)</span>
      `;
      btnInquire.onclick = () => {
        showToast(`Inquiry sent directly to ${poi.name}. Zero middlemen.`);
        closeDetailModal();
      };
    }
  }
}

function closeDetailModal() {
  const modal = document.getElementById("detailModal");
  const backdrop = document.getElementById("detailModalBackdrop");
  if (modal) modal.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
}

function initDetailModal() {
  const btnClose = document.getElementById("btnCloseDetailModal");
  const backdrop = document.getElementById("detailModalBackdrop");

  if (btnClose) btnClose.addEventListener("click", closeDetailModal);
  if (backdrop) backdrop.addEventListener("click", closeDetailModal);
}

// ============================================================================
// 10. TOAST NOTIFICATIONS & UTILITY FUNCTIONS
// ============================================================================

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✦</span> <span>${escapeHtml(message)}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(12px)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}

function formatMarkdownToHtml(markdown) {
  let html = markdown
    .replace(/^### (.*$)/gim, '<h3 style="color:var(--color-heritage-gold); font-size:0.95rem; margin-top:8px;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 style="color:var(--color-heritage-gold); font-size:1.05rem; margin-top:10px;">$1</h2>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/\n\n/gim, '</p><p>')
    .replace(/\n/gim, '<br />');
  return `<p>${html}</p>`;
}

// ============================================================================
// 11. EVENT LISTENERS & SETUP
// ============================================================================

function setupEventListeners() {
  // Region Buttons in Header
  document.querySelectorAll(".region-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".region-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const regionKey = btn.getAttribute("data-region");
      AppState.activeRegion = regionKey;

      if (REGION_COORDINATES[regionKey] && mapInstance) {
        const { center, zoom } = REGION_COORDINATES[regionKey];
        mapInstance.flyTo(center, zoom, { duration: 1.5 });
      }

      filterAndRenderProviders();
    });
  });

  // Category Filter Pills
  document.querySelectorAll(".cat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".cat-pill").forEach(p => {
        p.classList.remove("active");
        p.setAttribute("aria-selected", "false");
      });
      pill.classList.add("active");
      pill.setAttribute("aria-selected", "true");

      AppState.activeCategory = pill.getAttribute("data-category");
      filterAndRenderProviders();
    });
  });

  // Search input live filtering
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = e.target.value ? "block" : "none";
      }
      filterAndRenderProviders();
    });
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      AppState.searchQuery = "";
      clearSearchBtn.style.display = "none";
      filterAndRenderProviders();
    });
  }

  // Radius Slider
  const radiusSlider = document.getElementById("radiusSlider");
  const radiusValue = document.getElementById("radiusValue");
  if (radiusSlider && radiusValue) {
    radiusSlider.addEventListener("input", (e) => {
      const val = e.target.value;
      radiusValue.textContent = val;
      AppState.searchRadiusKm = parseInt(val, 10);
      filterAndRenderProviders();
    });
  }

  // GPS Locate Simulation
  const btnGeoLocate = document.getElementById("btnGeoLocate");
  if (btnGeoLocate) {
    btnGeoLocate.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            AppState.userLocation = {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            };
            showToast(`GPS Position Locked: ${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`);
            filterAndRenderProviders();
          },
          () => {
            // Fallback simulation toggle
            AppState.userLocation = { latitude: 20.5450, longitude: 96.9100 }; // Inle Lake
            showToast("Location unavailable. Showing nearby results around Inle Lake as a preview.");
            filterAndRenderProviders();
          }
        );
      }
    });
  }

  // Currency & Language Buttons
  const currencyBtn = document.getElementById("currencyToggleBtn");
  if (currencyBtn) currencyBtn.addEventListener("click", toggleCurrency);

  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) langBtn.addEventListener("click", toggleLanguage);

  // Map Style Buttons
  document.querySelectorAll(".map-style-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".map-style-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const styleKey = btn.getAttribute("data-style");
      setMapTheme(styleKey);
    });
  });

  // Recenter Myanmar Button
  const btnRecenter = document.getElementById("btnRecenterMyanmar");
  if (btnRecenter && mapInstance) {
    btnRecenter.addEventListener("click", () => {
      mapInstance.flyTo(REGION_COORDINATES.all.center, REGION_COORDINATES.all.zoom, { duration: 1.2 });
    });
  }

  // Mobile Floating View Switcher (List vs Map)
  const mobileToggleBtn = document.getElementById("btnMobileViewToggle");
  const splitViewport = document.querySelector(".split-viewport");
  if (mobileToggleBtn && splitViewport) {
    mobileToggleBtn.addEventListener("click", () => {
      const isMapActive = splitViewport.classList.contains("mobile-map-active");
      setMobileView(isMapActive ? "list" : "map");
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && splitViewport) {
      splitViewport.classList.remove("mobile-map-active");
      if (mapInstance) mapInstance.invalidateSize();
    }
  });

  // Offline Simulation Banner Toggle
  const btnOffline = document.getElementById("btnToggleSimulatedOffline");
  if (btnOffline) {
    btnOffline.addEventListener("click", () => {
      AppState.offlineSimulated = !AppState.offlineSimulated;
      const statusText = document.getElementById("bannerStatusText");
      if (statusText) {
        if (AppState.offlineSimulated) {
          statusText.innerHTML = `<strong>Offline Mode Preview</strong> · Interface preview only; live offline caching is not connected`;
          showToast("Offline mode is a preview only; live offline caching is not connected.");
        } else {
          statusText.innerHTML = `<strong>Discover Myanmar</strong> · Explore cultural sites and local experiences`;
          showToast("Returned to the standard browsing view.");
        }
      }
    });
  }
}

// ============================================================================
// 12. INITIALIZATION
// ============================================================================

window.addEventListener("DOMContentLoaded", () => {
  // Load initial providers & restore custom stored ones
  const customProviders = JSON.parse(localStorage.getItem("tb_custom_providers") || "[]");
  AppState.providers = [...customProviders, ...INITIAL_PROVIDERS];

  // Initialize Map
  initMap();

  // Setup UI Interactions
  setupEventListeners();
  initAiConcierge();
  initVendorModal();
  initDetailModal();

  // Initial Filter & Render
  filterAndRenderProviders();

  console.log("Tourist Burma 2.0 Engine Initialized successfully.");
});

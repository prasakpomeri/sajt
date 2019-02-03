const cities = ["niš", "beograd", "subotica", "novi sad"];
const fabrics = ["pamuk", "poliester", "elastin", "sintetika", "vuna", "svila"];
const clothingTypes = ["bluza", "majica", "helanke", "pantalone", "haljina", "džemper", "košulja"];
const data = [
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/ariel-color-style-20-pranja-2kg--1005869-medium.jpg",
    "name": "ARIEL Color &amp; style 20 pranja (2kg)",
    "price": 499.99,
    "fabric": "poliester",
    "fabricPercent": 30,
    "distributor": "Idea",
    "city": "beograd",
    "clothingType": "haljina"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/ariel-lenor-fresh-20-pranja-2kg--1005873-medium.jpg",
    "name": "ARIEL Lenor fresh 20 pranja (2kg)",
    "price": 499.99,
    "fabric": "pamuk",
    "fabricPercent": 35,
    "distributor": "Idea",
    "city": "niš",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/ariel-mountain-spring-20-pranja-2kg--1005881-medium.jpg",
    "name": "ARIEL Mountain spring 20 pranja (2kg)",
    "price": 499.99,
    "fabric": "sintetika",
    "fabricPercent": 10,
    "distributor": "Idea",
    "city": "beograd",
    "clothingType": "helanke"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/faks-aquamarine-20-pranja-2kg--1005924-medium.jpg",
    "name": "FAKS Aquamarine 20 pranja (2kg)",
    "price": 379.99,
    "fabric": "poliester",
    "fabricPercent": 95,
    "distributor": "Idea",
    "city": "niš",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/tecni-deterdzent-faks-lavanda-i-smilje-2kg-1010317-medium.jpg",
    "name": "FAKS lavanda i smilje 20 pranja (2kg)",
    "price": 379.99,
    "fabric": "sintetika",
    "fabricPercent": 45,
    "distributor": "Idea",
    "city": "novi sad",
    "clothingType": "helanke"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/faks-natural-sensitive-20-pranja-2kg--1005926-medium.jpg",
    "name": "FAKS Natural sensitive 20 pranja (2kg)",
    "price": 598.99,
    "fabric": "elastin",
    "fabricPercent": 60,
    "distributor": "DIS",
    "city": "niš",
    "clothingType": "bluza"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/merix-deciji-sapun-20-pranja-2kg--1005927-medium.jpg",
    "name": "MERIX Dečiji sapun 20 pranja (2kg)",
    "price": 309.99,
    "fabric": "svila",
    "fabricPercent": 100,
    "distributor": "Tempo",
    "city": "niš",
    "clothingType": "pantalone"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/merix-gorska-svezina-20-pranja-2kg--1005931-medium.jpg",
    "name": "MERIX Gorska svežina 20 pranja (2kg)",
    "price": 329.99,
    "fabric": "elastin",
    "fabricPercent": 40,
    "distributor": "Roda",
    "city": "beograd",
    "clothingType": "helanke"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-jorgovan-2kg-1005939-medium.jpg",
    "name": "MERIX Jorgovan 20 pranja (2kg)",
    "price": 309.99,
    "fabric": "svila",
    "fabricPercent": 95,
    "distributor": "Tempo",
    "city": "niš",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-lavanda-paculi-2kg-1005943-medium.jpg",
    "name": "MERIX Lavanda &amp; Pačuli 20 pranja (2kg)",
    "price": 309.99,
    "fabric": "elastin",
    "fabricPercent": 35,
    "distributor": "Tempo",
    "city": "niš",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-miris-mora-2kg-1009112-medium.jpg",
    "name": "MERIX Miris mora 20 pranja (2kg)",
    "price": 329.99,
    "fabric": "sintetika",
    "fabricPercent": 50,
    "distributor": "Roda",
    "city": "beograd",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-poljsko-cvece-2kg-1009113-medium.jpg",
    "name": "MERIX Poljsko cveće 20 pranja (2kg)",
    "price": 309.99,
    "fabric": "vuna",
    "fabricPercent": 95,
    "distributor": "Tempo",
    "city": "beograd",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/persil-expert-20-pranja-2kg--1005960-medium.jpg",
    "name": "PERSIL Expert 20 pranja (2kg)",
    "price": 479.99,
    "fabric": "pamuk",
    "fabricPercent": 30,
    "distributor": "Maxi",
    "city": "subotica",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-persil-expert-lavanda-2kg-1005964-medium.jpg",
    "name": "PERSIL Expert Lavanda 20 pranja (2kg)",
    "price": 479.99,
    "fabric": "sintetika",
    "fabricPercent": 55,
    "distributor": "Maxi",
    "city": "beograd",
    "clothingType": "haljina"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-persil-expert-sensitive-2kg-1005959-medium.jpg",
    "name": "PERSIL Expert Sensitive 20 pranja (2kg)",
    "price": 479.99,
    "fabric": "pamuk",
    "fabricPercent": 50,
    "distributor": "Maxi",
    "city": "subotica",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-persil-expert-silan-2kg-1005953-medium.jpg",
    "name": "PERSIL Expert Silan 20 pranja (2kg)",
    "price": 479.99,
    "fabric": "vuna",
    "fabricPercent": 5,
    "distributor": "Maxi",
    "city": "subotica",
    "clothingType": "haljina"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/rubel-nature-fresh-20-pranja-2kg--1005967-medium.jpg",
    "name": "RUBEL Nature fresh 20 pranja (2kg)",
    "price": 382.99,
    "fabric": "svila",
    "fabricPercent": 25,
    "distributor": "Tempo",
    "city": "subotica",
    "clothingType": "bluza"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/rubel-power-fresh-20-pranja-2kg--1005970-medium.jpg",
    "name": "RUBEL Power fresh 20 pranja (2kg)",
    "price": 429.99,
    "fabric": "vuna",
    "fabricPercent": 60,
    "distributor": "Gomex",
    "city": "niš",
    "clothingType": "pantalone"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/savex-color-royal-orchid-20-pranja-2kg--1007773-medium.jpg",
    "name": "SAVEX color royal orchid 20 pranja (2kg)",
    "price": 319.99,
    "fabric": "sintetika",
    "fabricPercent": 65,
    "distributor": "Roda",
    "city": "niš",
    "clothingType": "haljina"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/savex-summer-time-20-pranja-2kg--1007774-medium.jpg",
    "name": "SAVEX summer time 20 pranja (2kg)",
    "price": 319.99,
    "fabric": "vuna",
    "fabricPercent": 80,
    "distributor": "Roda",
    "city": "subotica",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/savex-white-brilliant-20-pranja-2kg--1007772-medium.jpg",
    "name": "SAVEX white brilliant 20 pranja (2kg)",
    "price": 412.99,
    "fabric": "elastin",
    "fabricPercent": 70,
    "distributor": "Roda",
    "city": "niš",
    "clothingType": "košulja"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/savex-white-tiara-flow-20-pranja-2kg--1007775-medium.jpg",
    "name": "SAVEX white tiara flow 20 pranja (2kg)",
    "price": 319.99,
    "fabric": "pamuk",
    "fabricPercent": 75,
    "distributor": "Roda",
    "city": "beograd",
    "clothingType": "košulja"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/tide-alpine-fresh-20-pranja-2kg--1005973-medium.jpg",
    "name": "TIDE Alpine fresh 20 pranja (2kg)",
    "price": 399.99,
    "fabric": "pamuk",
    "fabricPercent": 85,
    "distributor": "Maxi",
    "city": "beograd",
    "clothingType": "helanke"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/tide-lenor-20-pranja-2kg--1005977-medium.jpg",
    "name": "TIDE Lenor 20 pranja (2kg)",
    "price": 399.99,
    "fabric": "pamuk",
    "fabricPercent": 85,
    "distributor": "Maxi",
    "city": "niš",
    "clothingType": "džemper"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-deciji-sapun-3kg-1005928-medium.jpg",
    "name": "MERIX Dečiji sapun 30 pranja (3kg)",
    "price": 429.99,
    "fabric": "vuna",
    "fabricPercent": 70,
    "distributor": "Univerexport",
    "city": "subotica",
    "clothingType": "džemper"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-gorska-svezina-3kg-1005932-medium.jpg",
    "name": "MERIX Gorska svežina 30 pranja (3kg)",
    "price": 429.99,
    "fabric": "poliester",
    "fabricPercent": 35,
    "distributor": "Univerexport",
    "city": "novi sad",
    "clothingType": "džemper"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-jorgovan-3kg-1005940-medium.jpg",
    "name": "MERIX Jorgovan 30 pranja (3kg)",
    "price": 429.99,
    "fabric": "svila",
    "fabricPercent": 95,
    "distributor": "Univerexport",
    "city": "novi sad",
    "clothingType": "haljina"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/merix-lavanda-paculi-30-pranja-3kg--1005944-medium.jpg",
    "name": "MERIX Lavanda &amp; Pačuli 30 pranja (3kg)",
    "price": 429.99,
    "fabric": "poliester",
    "fabricPercent": 85,
    "distributor": "Roda",
    "city": "beograd",
    "clothingType": "helanke"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-miris-mora-3kg-1009114-medium.jpg",
    "name": "MERIX Miris mora 30 pranja (3kg)",
    "price": 473.99,
    "fabric": "vuna",
    "fabricPercent": 85,
    "distributor": "DIS",
    "city": "niš",
    "clothingType": "helanke"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-poljsko-cvece-3kg-1009115-medium.jpg",
    "name": "MERIX Poljsko cveće 30 pranja (3kg)",
    "price": 429.99,
    "fabric": "elastin",
    "fabricPercent": 5,
    "distributor": "Univerexport",
    "city": "beograd",
    "clothingType": "pantalone"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-persil-expert-3kg-1005961-medium.jpg",
    "name": "PERSIL Expert 30 pranja (3kg)",
    "price": 699.99,
    "fabric": "svila",
    "fabricPercent": 20,
    "distributor": "Idea",
    "city": "subotica",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-persil-expert-lavanda-3kg-1005965-medium.jpg",
    "name": "PERSIL Expert Lavanda 30 pranja (3kg)",
    "price": 699.99,
    "fabric": "vuna",
    "fabricPercent": 20,
    "distributor": "Idea",
    "city": "subotica",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/rubel-active-fresh-30-pranja-3kg--1005972-medium.jpg",
    "name": "RUBEL Active fresh 30 pranja (3kg)",
    "price": 339.99,
    "fabric": "sintetika",
    "fabricPercent": 5,
    "distributor": "Tempo",
    "city": "niš",
    "clothingType": "bluza"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-ariel-lenor-fresh-4kg-1005874-medium.jpg",
    "name": "ARIEL Lenor fresh 40 pranja (4kg)",
    "price": 1122.99,
    "fabric": "pamuk",
    "fabricPercent": 10,
    "distributor": "Roda",
    "city": "niš",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/ariel-mountain-spring-40-pranja-4kg--1005882-medium.jpg",
    "name": "ARIEL Mountain spring 40 pranja (4kg)",
    "price": 1179.99,
    "fabric": "pamuk",
    "fabricPercent": 35,
    "distributor": "Roda",
    "city": "beograd",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/ariel-lenor-fresh-60-pranja-6kg--1005875-medium.jpg",
    "name": "ARIEL Lenor fresh 60 pranja (6kg)",
    "price": 1099,
    "fabric": "elastin",
    "fabricPercent": 75,
    "distributor": "Roda",
    "city": "subotica",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/ariel-mountain-spring-60-pranja-6kg--1005883-medium.jpg",
    "name": "ARIEL Mountain spring 60 pranja (6kg)",
    "price": 1099,
    "fabric": "pamuk",
    "fabricPercent": 85,
    "distributor": "Roda",
    "city": "subotica",
    "clothingType": "bluza"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-gorska-svezina-6kg-1007583-medium.jpg",
    "name": "MERIX Gorska svežina 60 pranja (6kg)",
    "price": 729.99,
    "fabric": "svila",
    "fabricPercent": 30,
    "distributor": "Univerexport",
    "city": "subotica",
    "clothingType": "helanke"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/merix-jorgovan-60-pranja-6kg--1005941-medium.jpg",
    "name": "MERIX Jorgovan 60 pranja (6kg)",
    "price": 699.99,
    "fabric": "poliester",
    "fabricPercent": 15,
    "distributor": "Idea",
    "city": "niš",
    "clothingType": "helanke"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/merix-lavanda-paculi-60-pranja-6kg--1005945-medium.jpg",
    "name": "MERIX Lavanda &amp; Pačuli 60 pranja (6kg)",
    "price": 729.99,
    "fabric": "pamuk",
    "fabricPercent": 20,
    "distributor": "Roda",
    "city": "subotica",
    "clothingType": "helanke"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-persil-expert-6kg-1006275-medium.jpg",
    "name": "PERSIL expert 60 pranja (6kg)",
    "price": 1049,
    "fabric": "elastin",
    "fabricPercent": 30,
    "distributor": "Roda",
    "city": "subotica",
    "clothingType": "haljina"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/persil-lavander-60-pranja-6kg--1006277-medium.jpg",
    "name": "PERSIL lavander 60 pranja (6kg)",
    "price": 1049,
    "fabric": "vuna",
    "fabricPercent": 25,
    "distributor": "Roda",
    "city": "subotica",
    "clothingType": "košulja"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-persil-silan-6kg-1006278-medium.jpg",
    "name": "PERSIL Silan 60 pranja (6kg)",
    "price": 1049,
    "fabric": "elastin",
    "fabricPercent": 70,
    "distributor": "Roda",
    "city": "niš",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/ariel-lenor-fresh-80-pranja-8kg--1005876-medium.jpg",
    "name": "ARIEL Lenor fresh 80 pranja (8kg)",
    "price": 1899.99,
    "fabric": "sintetika",
    "fabricPercent": 10,
    "distributor": "Idea",
    "city": "subotica",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/ariel-mountain-spring-80-pranja-8kg--1005884-medium.jpg",
    "name": "ARIEL Mountain spring 80 pranja (8kg)",
    "price": 1449.99,
    "fabric": "svila",
    "fabricPercent": 60,
    "distributor": "Univerexport",
    "city": "novi sad",
    "clothingType": "pantalone"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/ariel-white-color-80-pranja-8kg--1010482-medium.jpg",
    "name": "ARIEL White&amp;Color 80 pranja (8kg)",
    "price": 1099,
    "fabric": "vuna",
    "fabricPercent": 100,
    "distributor": "Maxi",
    "city": "beograd",
    "clothingType": "bluza"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/bonux-80-pranja-8kg--1006272-medium.jpg",
    "name": "BONUX 80 pranja (8kg)",
    "price": 1666.99,
    "fabric": "poliester",
    "fabricPercent": 60,
    "distributor": "DIS",
    "city": "novi sad",
    "clothingType": "bluza"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/faks-lavanda-i-silje-70-pranja-7kg--1010319-medium.jpg",
    "name": "FAKS lavanda i silje 70 pranja (7kg)",
    "price": 999.99,
    "fabric": "pamuk",
    "fabricPercent": 90,
    "distributor": "Idea",
    "city": "beograd",
    "clothingType": "helanke"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/merix-deciji-sapun-80-pranja-8kg--1005930-medium.jpg",
    "name": "MERIX Dečiji sapun 80 pranja (8kg)",
    "price": 849.99,
    "fabric": "elastin",
    "fabricPercent": 80,
    "distributor": "Roda",
    "city": "novi sad",
    "clothingType": "bluza"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/merix-jorgovan-80-pranja-8kg--1005942-medium.jpg",
    "name": "MERIX Jorgovan 80 pranja (8kg)",
    "price": 799,
    "fabric": "poliester",
    "fabricPercent": 75,
    "distributor": "Maxi",
    "city": "subotica",
    "clothingType": "pantalone"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-lavanda-paculi-8kg-1005946-medium.jpg",
    "name": "MERIX Lavanda &amp; Pačuli 80 pranja (8kg)",
    "price": 849.99,
    "fabric": "vuna",
    "fabricPercent": 25,
    "distributor": "Roda",
    "city": "beograd",
    "clothingType": "džemper"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-miris-mora-8kg-1009116-medium.jpg",
    "name": "MERIX Miris mora 80 pranja (8kg)",
    "price": 1292.99,
    "fabric": "pamuk",
    "fabricPercent": 45,
    "distributor": "DIS",
    "city": "subotica",
    "clothingType": "džemper"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-poljsko-cvece-8kg-1009117-medium.jpg",
    "name": "MERIX Poljsko cveće 80 pranja (8kg)",
    "price": 849.99,
    "fabric": "pamuk",
    "fabricPercent": 20,
    "distributor": "Roda",
    "city": "subotica",
    "clothingType": "bluza"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/persil-expert-80-pranja-8kg--1005963-medium.jpg",
    "name": "PERSIL Expert 80 pranja (8kg)",
    "price": 1399,
    "fabric": "elastin",
    "fabricPercent": 10,
    "distributor": "Roda",
    "city": "niš",
    "clothingType": "helanke"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/persil-regular-70-pranja-7kg--1009328-medium.jpg",
    "name": "PERSIL Regular 70 pranja (7kg)",
    "price": 999,
    "fabric": "pamuk",
    "fabricPercent": 40,
    "distributor": "Tempo",
    "city": "beograd",
    "clothingType": "haljina"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/tide-lenor-80-pranja-8kg--1005979-medium.jpg",
    "name": "TIDE Lenor 80 pranja (8kg)",
    "price": 999.99,
    "fabric": "vuna",
    "fabricPercent": 95,
    "distributor": "Gomex",
    "city": "novi sad",
    "clothingType": "bluza"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-faks-aquamarine-12kg-1009119-medium.jpg",
    "name": "FAKS aquamarine 120 pranja (12kg)",
    "price": 1399,
    "fabric": "pamuk",
    "fabricPercent": 80,
    "distributor": "Tempo",
    "city": "beograd",
    "clothingType": "haljina"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-jorgovan-10kg-1007416-medium.jpg",
    "name": "MERIX jorgovan 100 pranja (10kg)",
    "price": 979.99,
    "fabric": "sintetika",
    "fabricPercent": 80,
    "distributor": "DIS",
    "city": "beograd",
    "clothingType": "haljina"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-persil-expert-10kg-1006276-medium.jpg",
    "name": "PERSIL expert 100 pranja (10kg)",
    "price": 1599.99,
    "fabric": "pamuk",
    "fabricPercent": 30,
    "distributor": "DIS",
    "city": "niš",
    "clothingType": "haljina"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/rubel-active-fresh-90-pranja-9kg--1006279-medium.jpg",
    "name": "RUBEL Active Fresh 90 pranja (9kg)",
    "price": 819,
    "fabric": "pamuk",
    "fabricPercent": 45,
    "distributor": "Tempo",
    "city": "beograd",
    "clothingType": "bluza"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-rubel-power-fresh-12kg-1006280-medium.jpg",
    "name": "RUBEL Power Fresh 120 pranja (12kg)",
    "price": 1099.99,
    "fabric": "pamuk",
    "fabricPercent": 70,
    "distributor": "Univerexport",
    "city": "novi sad",
    "clothingType": "helanke"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/rubel-power-fresh-90-pranja-9kg--1005758-medium.jpg",
    "name": "RUBEL Power fresh 90 pranja (9kg)",
    "price": 869.99,
    "fabric": "svila",
    "fabricPercent": 75,
    "distributor": "Univerexport",
    "city": "beograd",
    "clothingType": "haljina"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/axel-sapun-za-ves-250g-1009287-medium.jpg",
    "name": "AXEL sapun za veš 250g",
    "price": 99.99,
    "fabric": "pamuk",
    "fabricPercent": 10,
    "distributor": "Roda",
    "city": "niš",
    "clothingType": "bluza"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-merix-sapun-za-ves-250g-1000896-medium.jpg",
    "name": "Deterdžent za veš MERIX sapun za veš 250g",
    "price": 109.99,
    "fabric": "sintetika",
    "fabricPercent": 15,
    "distributor": "Roda",
    "city": "novi sad",
    "clothingType": "haljina"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-vanish-sapun-250g-1010274-medium.jpg",
    "name": "Deterdžent za veš VANISH sapun 250g",
    "price": 339.99,
    "fabric": "pamuk",
    "fabricPercent": 40,
    "distributor": "Univerexport",
    "city": "beograd",
    "clothingType": "majica"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/deterdzent-za-ves-vanish-sapun-za-ves-75g-1000897-medium.jpg",
    "name": "Deterdžent za veš VANISH sapun za veš 75g",
    "price": 249.99,
    "fabric": "svila",
    "fabricPercent": 30,
    "distributor": "Univerexport",
    "city": "beograd",
    "clothingType": "bluza"
  },
  {
    "imageURL": "https://cenoteka.rs/assets/images/articles/dr-beckmann-sapun-za-uporne-fleke-100g-1008169-medium.jpg",
    "name": "DR.BECKMANN sapun za uporne fleke 100g",
    "price": 199.99,
    "fabric": "vuna",
    "fabricPercent": 100,
    "distributor": "Maxi",
    "city": "subotica",
    "clothingType": "majica"
  }
];

export {
  cities,
  fabrics,
  clothingTypes,
  data
}

/*
cenoteka data parser to json function

$('#products .list-articles-content .article-row').map((index, item) => {
  let alt = $(item).find('img')[0].getAttribute('src');
  let name = $(item).find('.article-name > a')[0].innerHTML.trim();
  let price = +$(item).find('.price.lowest')[0].innerHTML.trim().replace(',','.');
  let fabrics = ["pamuk","poliester","elastin","sintetika","vuna","svila","somot","najlon"];
  let fabric = fabrics[Math.floor(Math.random() * fabrics.length)].toLowerCase();
  let distributor = $(item).find('.price.lowest').parent()[0].querySelector('.shop > img').getAttribute('alt');
  let cities = ["Niš","Beograd","Subotica","Novi Sad","Kragujevac","Kraljevo","Kruševac"];
  let city = cities[Math.floor(Math.random() * cities.length)].toLowerCase();
  let clothingTypes = ["bluza","majica","helanke","pantalone","majica bez rukava","haljina","džemper","kardigan", "košulja","potkošulja","bodi bluza","bodi majica"];
  let clothingType = clothingTypes[Math.floor(Math.random() * clothingTypes.length)].toLowerCase();

  return `{
    "imageURL": "https://cenoteka.rs${alt}",
    "name": "${name}",
    "price": "${price}",
    "fabric": "${fabric}",
    "fabricPercent": "${Math.round(Math.random() * 20 + 1) * },
    "distributor": "${distributor}",
    "city": "${city}",
    "clothingType": "${clothingType}"
  }`
}).toArray().join(',\n');

*/
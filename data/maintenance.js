// ДЕТАЛИ ТО - готово

const OIL_FILTERS = [
    {
        detail_info: 'Фильтр маслянный',
        detail_code: '5281090AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/oil_filters/oil-filter_mopar_05281090AB.jpg',
        detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'у многих на этом фильтре появляется стук при запуске',
        // detail_favorite: false,
    },
    {
        detail_info: 'Фильтр маслянный',
        detail_code: 'PH16',
        detail_manufacturer: 'Fram',
        detail_image: './images/details/oil_filters/oil-filter_fram_PH16.jpg',
        detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'нормальный фильтр, но после 5000 пробега превращается в г..но',
        // detail_options: [{},],
    },
    {
        detail_info: 'Фильтр маслянный',
        detail_code: 'OC23',
        detail_manufacturer: 'Mahle/Knecht',
        detail_image: './images/details/oil_filters/oil-filter_mahle_OC23.jpg',
        detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'норм фильтр',
        // detail_options: [{},],
    },
    {
        detail_info: 'Фильтр маслянный',
        detail_code: 'OC236',
        detail_manufacturer: 'Mahle/Knecht',
        detail_image: './images/details/oil_filters/oil-filter_mahle_OC236.jpg',
        detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'норм фильтр',
        // detail_options: [{},],
    },
]

const AIR_FILTERS = [
    {
        detail_info: 'Фильтр воздушный',
        detail_code: '5510026AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/air_filters/air-filter_mopar_5510026AA.jpg',
        detail_scheme: './images/details/air_filters/air-filter.gif',
        detail_more: '',
    },
    {
        detail_info: 'Фильтр воздушный',
        detail_code: 'PF1534',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/air_filters/air_filter_patron_PF1534.jpg',
        detail_scheme: './images/details/air_filters/air-filter.gif',
        detail_more: '',
    },
    {
        detail_info: 'Фильтр воздушный',
        detail_code: 'ADA102256',
        detail_manufacturer: 'Blue Print',
        detail_image: './images/details/air_filters/air_filter_blue-print_ADA102256.jpeg',
        detail_scheme: './images/details/air_filters/air-filter.gif',
        detail_more: '',
    },
    {
        detail_info: 'Фильтр воздушный',
        detail_code: '7101933SX',
        detail_manufacturer: 'Stellox',
        detail_image: './images/details/air_filters/air_filter_stellox_7101933SX.jpg',
        detail_scheme: './images/details/air_filters/air-filter.gif',
        detail_more: '',
    },
]

const CABIN_FILTERS = [
    {
        detail_info: 'Фильтр салона',
        detail_code: '82205905',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/cabin_filters/cabin-filter_mopar_82205905.jpg',
        detail_scheme: './images/details/cabin_filters/cabin-filter.gif',
        detail_more: '',
    },
    {
        detail_info: 'Фильтр салона',
        detail_code: 'PF2250',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/cabin_filters/cabin-filter_patron_PF2250.JPG',
        detail_scheme: './images/details/cabin_filters/cabin-filter.gif',
        detail_more: 'угольный',
    },
    {
        detail_info: 'Фильтр салона',
        detail_code: 'ADA102503',
        detail_manufacturer: 'Blue Print',
        detail_image: './images/details/cabin_filters/cabin-filter_blue-print_ADA102503.jpg',
        detail_scheme: './images/details/cabin_filters/cabin-filter.gif',
        detail_more: 'угольный',
    },
    {
        detail_info: 'Фильтр салона',
        detail_code: '7110470SX',
        detail_manufacturer: 'Stellox',
        detail_image: './images/details/cabin_filters/cabin-filter_stellox_7110470SX.jpg',
        detail_scheme: './images/details/cabin_filters/cabin-filter.gif',
        detail_more: '',
    },
]

const TRANSMISSION_FILTERS = [
    {
        detail_info: 'Фильтр АКПП',
        detail_code: '4864505AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/transmission_filters/transmission-filter_mopar_4864505AB.jpg',
        detail_scheme: './images/details/transmission_filters/transmission-filter.gif',
        detail_more: 'если надо прокладка, то приобретается отдельно. Обычно народ сажает на гермет. По заводу, кстати, стоит на герметике',
    },
    {
        detail_info: 'Фильтр АКПП',
        detail_code: 'FT1122A',
        detail_manufacturer: 'Fram',
        detail_image: './images/details/transmission_filters/transmission-filter_fram_FT1122A.jpg',
        detail_scheme: './images/details/transmission_filters/transmission-filter.gif',
        detail_more: 'в комплекте идёт пробковая прокладка, ',
    },
    {
        detail_info: 'Фильтр АКПП',
        detail_code: 'JT398K',
        detail_manufacturer: 'JSAsakashi',
        detail_image: './images/details/transmission_filters/transmission-filter_JS-Asakashi_JT398K.jpg',
        detail_scheme: './images/details/transmission_filters/transmission-filter.gif',
        detail_more: 'в комплекте идёт прокладка',
    },
    {
        detail_info: 'Фильтр АКПП',
        detail_code: 'PF5001',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/transmission_filters/transmission-filter_patron_PF5001.jpg',
        detail_scheme: './images/details/transmission_filters/transmission-filter.gif',
        detail_more: 'в комплекте идёт прокладка',
    },
]

const SPARK_PLUGS = [
    {
        detail_info: 'Свечи зажигания',
        detail_code: 'SZFR5LP13G',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/spark_plugs/spark-plug_mopar_SZFR5LP13G.jpg',
        detail_scheme: './images/details/spark_plugs/spark-plug.gif',
        detail_more: 'отличные свечи, выхаживают по 100тык',
    },
    {
        detail_info: 'Свечи зажигания',
        detail_code: '7034',
        detail_manufacturer: 'Champion',
        detail_image: './images/details/spark_plugs/spark-plug_champion_7034.jpg',
        detail_scheme: './images/details/spark_plugs/spark-plug.gif',
        detail_more: 'нормальные бюджетные свечи, тыш 30+ выхаживают',
    },
    {
        detail_info: 'Свечи зажигания',
        detail_code: '7781',
        detail_manufacturer: 'NGK',
        detail_image: './images/details/spark_plugs/spark-plug_ngk_7781.jpg',
        detail_scheme: './images/details/spark_plugs/spark-plug.gif',
        detail_more: 'эти же свечи лежат в оригинале',
    },
]

const V_RIBBED_BELTS = [
    {
        detail_info: 'Ремень поликлинковый',
        detail_code: '4861850AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/v_ribbed_belts/v-ribbed-belts_mopar_4861850AA.jpg',
        detail_scheme: './images/details/v_ribbed_belts/v-ribbed-belt.gif',
        detail_more: 'можно любой ремень с размерами 6PK2370-2380, натяжитель компенсирует длину',
    },
    {
        detail_info: 'Ремень в обход кондиционера',
        detail_code: '6PK2050...2100',
        detail_manufacturer: '',
        detail_image: './images/details/v_ribbed_belts/v-ribbed-belt_bypass.jpg',
        detail_scheme: './images/details/v_ribbed_belts/v-ribbed-belt.gif',
        detail_more: 'длина в обход компрессора кондиционера 2050-2100мм, можно любой ремень, натяжитель компенсирует длину.',
    },
]

const TIMING_BELTS = [
    {
        detail_info: 'Ремень ГРМ',
        detail_code: '4792353',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/timing_belts/timing-belt_mopar_4792353.jpg',
        detail_scheme: './images/details/timing_belts/timing-belt.gif',
        detail_more: '',
    },
    {
        detail_info: 'Ремень ГРМ',
        detail_code: '5674XS',
        detail_manufacturer: 'Gates',
        detail_image: './images/details/timing_belts/timing-belt_gates_5674XS.jpg',
        detail_scheme: './images/details/timing_belts/timing-belt.gif',
        detail_more: 'отличный ремень, ставим только его',
    },
]

const THERMOSTATS = [
    {
        detail_info: 'Термостат',
        detail_code: '68210217AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/thermostats/thermostat_mopar_68210217AA.jpg',
        detail_scheme: './images/details/thermostats/thermostat.gif',
        detail_more: '',
    },
    {
        detail_info: 'Термостат',
        detail_code: '465-195',
        detail_manufacturer: 'Motorad',
        detail_image: './images/details/thermostats/thermostat_motorad_465-195.jpg',
        detail_scheme: './images/details/thermostats/thermostat.gif',
        detail_more: 'на 91 градус',
    }
]

const WATER_PUMPS = [
    {
        detail_info: 'Водяной насос (малая помпа)',
        detail_code: 'V9900085',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/water_pumps/water_pump_mopar_V9900085.jpg',
        detail_scheme: './images/details/water_pumps/water_pump.gif',
        detail_more: 'на 03-04 модельный год',
    },
    {
        detail_info: 'Водяной насос (малая помпа)',
        detail_code: '7162',
        detail_manufacturer: 'Airtex',
        detail_image: './images/details/water_pumps/water_pump_airtex_7162.jpg',
        detail_scheme: './images/details/water_pumps/water_pump.gif',
        detail_more: 'на 03-04 модельный год. Бюджетный вариант, лучше не ставить, но некоторые ставят'
    },
    {
        detail_info: 'Водяной насос (малая помпа)',
        detail_code: 'GWCR35A',
        detail_manufacturer: 'GMB',
        detail_image: './images/details/water_pumps/water_pump_gmb_GWCR35A.jpeg',
        detail_scheme: './images/details/water_pumps/water_pump.gif',
        detail_more: 'на 03-04 модельный год. Наверное лучшее из цена/качество',
    },
    {
        detail_info: 'Водяной насос (малая помпа)',
        detail_code: 'PWP1018',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/water_pumps/water_pump_patron_PWP1018.jpg',
        detail_scheme: './images/details/water_pumps/water_pump.gif',
        detail_more: 'на 03-04 модельный год',
    },
    {
        detail_info: 'Водяной насос (большая помпа)',
        detail_code: '04792968AD',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/water_pumps/water_pump_mopar_04792968AD.jpg',
        detail_scheme: './images/details/water_pumps/water_pump.gif',
        detail_more: 'на 05-06 модельный год',
    },
    {
        detail_info: 'Водяной насос (большая помпа)',
        detail_code: '1835',
        detail_manufacturer: 'Airtex',
        detail_image: './images/details/water_pumps/water_pump_airtex_1835.jpeg',
        detail_scheme: './images/details/water_pumps/water_pump.gif',
        detail_more: 'на 05-06 модельный год. Бюджетный вариант, лучше не ставить, но некоторые ставят',
    },
    {
        detail_info: 'Водяной насос (большая помпа)',
        detail_code: 'GWCR43A',
        detail_manufacturer: 'GMB',
        detail_image: './images/details/water_pumps/water_pump_gmb_GWCR43A.jpg',
        detail_scheme: './images/details/water_pumps/water_pump.gif',
        detail_more: 'на 05-06 модельный год. Наверное лучшее из цена/качество',
    },
    {
        detail_info: 'Водяной насос (большая помпа)',
        detail_code: 'PWP1217',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/water_pumps/water_pump_patron_PWP1217.jpg',
        detail_scheme: './images/details/water_pumps/water_pump.gif',
        detail_more: 'на 05-06 модельный год',
    },
]

const FRONT_BRAKE_PADS = [
    {
        detail_info: 'Передние тормозные колодки',
        detail_code: 'ADA104274',
        detail_manufacturer: 'Blue Print',
        detail_image: './images/details/brake_pads/front-brake-pad_blue-print_ADA104274.JPG',
        detail_scheme: './images/details/brake_pads/front-brake-pad.gif',
        detail_more: '',
    },
    {
        detail_info: 'Передние тормозные колодки',
        detail_code: 'CMX997',
        detail_manufacturer: 'Morse/Friction Master',
        detail_image: './images/details/brake_pads/front-brake-pad_fm_CMX997.jpg',
        detail_scheme: './images/details/brake_pads/front-brake-pad.gif',
        detail_more: 'Серия CMX - Керамические',
    },
    {
        detail_info: 'Передние тормозные колодки',
        detail_code: 'MKD997',
        detail_manufacturer: 'Morse/Friction Master',
        detail_image: './images/details/brake_pads/front-brake-pad_fm_MKD997.jpeg',
        detail_scheme: './images/details/brake_pads/front-brake-pad.gif',
        detail_more: 'Серия MKD - бюджетный стандарт',
    },
    {
        detail_info: 'Передние тормозные колодки',
        detail_code: 'PBP7000',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/brake_pads/front-brake-pad_patron_PBP7000.jpg',
        detail_scheme: './images/details/brake_pads/front-brake-pad.gif',
        detail_more: 'нормальные колодки цена/качество',
    },
    {
        detail_info: 'Передние тормозные колодки',
        detail_code: 'EHT997H',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_pads/front-brake-pad_raybestos_EHT997H.jpg',
        detail_scheme: './images/details/brake_pads/front-brake-pad.gif',
        detail_more: 'гибридные колодки для мажоров, но говорят ничего',
    },
    {
        detail_info: 'Передние тормозные колодки',
        detail_code: 'MGD997CH',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_pads/front-brake-pad_raybestos_MGD997CH.jpg',
        detail_scheme: './images/details/brake_pads/front-brake-pad.gif',
        detail_more: '',
    },
    {
        detail_info: 'Передние тормозные колодки',
        detail_code: 'SGD997C',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_pads/front-brake-pad_raybestos_SGD997C.jpg',
        detail_scheme: './images/details/brake_pads/front-brake-pad.gif',
        detail_more: '',
    },
    {
        detail_info: 'Передние тормозные колодки',
        detail_code: 'QC997',
        detail_manufacturer: 'Wagner',
        detail_image: './images/details/brake_pads/front-brake-pad_wagner_QC997.jpg',
        detail_scheme: './images/details/brake_pads/front-brake-pad.gif',
        detail_more: 'Миша говорит, что это лучшее что тормозит',
    },
    {
        detail_info: 'Передние тормозные колодки',
        detail_code: 'ZD997',
        detail_manufacturer: 'Wagner',
        detail_image: './images/details/brake_pads/front-brake-pad_wagner_ZD997.jpg',
        detail_scheme: './images/details/brake_pads/front-brake-pad.gif',
        detail_more: 'Миша говорит, что это лучшее что тормозит',
    },
]

const REAR_BRAKE_PADS = [
    {
        detail_info: 'Задние тормозные колодки',
        detail_code: 'ADA104275',
        detail_manufacturer: 'Blue Print',
        detail_image: './images/details/brake_pads/rear-brake-pad_blue-print_ADA104275.jpg',
        detail_scheme: './images/details/brake_pads/rear-brake-pad.gif',
        detail_more: '',
    },
    {
        detail_info: 'Задние тормозные колодки',
        detail_code: 'ELT998',
        detail_manufacturer: 'Morse/Friction Master',
        detail_image: './images/details/brake_pads/rear-brake-pad_fm_ELT998.jpg',
        detail_scheme: './images/details/brake_pads/rear-brake-pad.gif',
        detail_more: 'Серия ELT - соответствует оригиналу, а может и лучше',
    },
    {
        detail_info: 'Задние тормозные колодки',
        detail_code: 'MKD998',
        detail_manufacturer: 'Morse/Friction Master',
        detail_image: './images/details/brake_pads/rear-brake-pad_fm_MKD998.jpg',
        detail_scheme: './images/details/brake_pads/rear-brake-pad.gif',
        detail_more: 'Серия MKD - бюджетный стандарт',
    },
    {
        detail_info: 'Задние тормозные колодки',
        detail_code: 'PBP7001',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/brake_pads/rear_brake_pad_patron_PBP7001.jpg',
        detail_scheme: './images/details/brake_pads/rear-brake-pad.gif',
        detail_more: 'нормальные колодки цена/качество',
    },
    {
        detail_info: 'Задние тормозные колодки',
        detail_code: 'EHT998H',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_pads/rear-brake-pad_raybestos_EHT998H.jpg',
        detail_scheme: './images/details/brake_pads/rear-brake-pad.gif',
        detail_more: 'гибридные колодки для мажоров, но говорят ничего',
    },
    {
        detail_info: 'Задние тормозные колодки',
        detail_code: 'MGD998CH',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_pads/rear-brake-pad_raybestos_MGD998CH.jpg',
        detail_scheme: './images/details/brake_pads/rear-brake-pad.gif',
        detail_more: '',
    },
    {
        detail_info: 'Задние тормозные колодки',
        detail_code: 'SGD998C',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_pads/rear-brake-pad_raybestos_SGD998C.jpg',
        detail_scheme: './images/details/brake_pads/rear-brake-pad.gif',
        detail_more: '',
    },
    {
        detail_info: 'Задние тормозные колодки',
        detail_code: 'QC998',
        detail_manufacturer: 'Wagner',
        detail_image: './images/details/brake_pads/rear-brake-pad_wagner_QC998.jpg',
        detail_scheme: './images/details/brake_pads/rear-brake-pad.gif',
        detail_more: '',
    },
    {
        detail_info: 'Задние тормозные колодки',
        detail_code: 'ZD998',
        detail_manufacturer: 'Wagner',
        detail_image: './images/details/brake_pads/rear-brake-pad_wagner_ZD998.jpg',
        detail_scheme: './images/details/brake_pads/rear-brake-pad.gif',
        detail_more: '',
    },
]

const PARKING_BRAKE_PADS = [
    {
        detail_info: 'Колодки стояночного тормоза',
        detail_code: 'PSP069',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/brake_pads/parking-brake-pad_patron_PSP069.jpg',
        detail_scheme: './images/details/brake_pads/parking-brake-pad.gif',
        detail_more: '',
    },
    {
        detail_info: 'Колодки стояночного тормоза',
        detail_code: '777PG',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_pads/parking-brake-pad_raybestos_777PG.jpg',
        detail_scheme: './images/details/brake_pads/parking-brake-pad.gif',
        detail_more: '',
    },
    {
        detail_info: 'Колодки стояночного тормоза',
        detail_code: 'Z777',
        detail_manufacturer: 'Wagner',
        detail_image: './images/details/brake_pads/parking-brake-pad_wagner_Z777.jpg',
        detail_scheme: './images/details/brake_pads/parking-brake-pad.gif',
        detail_more: '',
    },
]

const PLUG_OIL_DRAIN = [
    {
        detail_info: 'Пробка сливного отверстия',
        detail_code: '6507741AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/plug_oil_drain/plug-oil-drain_mopar_6507741AA.jpg',
        detail_scheme: './images/details/plug_oil_drain/plug-oil-drain.gif',
        detail_more: 'стандартный болт имеет резьбу M14-1.5mm. В случае слизывания резьбы, обычно "перерезают" на М16-1.5мм',
    },
]

const WIPERS = [
    {
        detail_info: 'Передние дворники',
        detail_code: '22"',
        detail_manufacturer: '55см',
        detail_image: './images/details/blade_wipers/front_wiper.jpg',
        detail_scheme: './images/details/blade_wipers/front_blade_wipers.gif',
        detail_more: 'Стоковый размер 22" (55см, специально для Сирожы). Максимум 24"',
    },
    {
        detail_info: 'Задний дворник',
        detail_code: '14"',
        detail_manufacturer: '35см',
        detail_image: './images/details/blade_wipers/rear_wiper.jpg',
        detail_scheme: './images/details/blade_wipers/rear_blade_wipers.gif',
        detail_more: 'Стоковый размер 14" (35см, специально для Сирожы). Максимум 15"',
    },
]

// ДВИГАТЕЛЬ

// ПРОКЛАДКИ

const VALVE_COVER_GASKETS = [
    {
        detail_info: 'Прокладка клапанной крышки',
        detail_code: 'VS50501R',
        detail_manufacturer: 'Fel-Pro',
        detail_image: './images/details/gaskets/valve_cover_gaskets/valve_cover_gasket_fel-pro_VS50501R.jpg',
        detail_scheme: './images/details/gaskets/valve_cover_gaskets/valve_cover_gasket.gif',
        detail_more: 'комплект на две головы с кольцами под свечные колодцы',
    },
    {
        detail_info: 'Прокладка клапанной крышки',
        detail_code: 'VS50248',
        detail_manufacturer: 'Mahle',
        detail_image: './images/details/gaskets/valve_cover_gaskets/valve_cover_gasket_mahle_VS50248.jpg',
        detail_scheme: './images/details/gaskets/valve_cover_gaskets/valve_cover_gasket.gif',
        detail_more: 'комплект на две головы с кольцами под свечные колодцы',
    },
    // {
    //     detail_info: 'Прокладка клапанной крышки',
    //     detail_code: 'VS50501R',
    //     detail_manufacturer: 'Ultra-Power',
    //     detail_image: './images/details/gaskets/valve_cover_gaskets/valve_cover_gasket_ultra-power_VS50501R.jpg',
    //     detail_scheme: './images/details/gaskets/valve_cover_gaskets/valve_cover_gasket.gif',
    //     detail_more: 'комплект на две головы с кольцами под свечные колодцы',
    // },
]

const OIL_PAN_GASKETS = [
    {
        detail_info: 'Прокладка маслянного поддона 03-04',
        detail_code: '04792663AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/oil_pan_gaskets/oil_pan_gasket_mopar_04792663AA.jpg',
        detail_scheme: './images/details/gaskets/oil_pan_gaskets/oil_pan_gasket.gif',
        detail_more: 'на машины 2003-2004 года выпуска',
    },
    {
        detail_info: 'Прокладка маслянного поддона 04-06',
        detail_code: '04892072AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/oil_pan_gaskets/oil_pan_gasket_mopar_04892072AA.jpg',
        detail_scheme: './images/details/gaskets/oil_pan_gaskets/oil_pan_gasket.gif',
        detail_more: 'на машины 2004-2006 года выпуска',
    },
]

const INTAKE_MANIFOLD_GASKETS = [
    {
        detail_info: 'Прокладка впускного коллектора',
        detail_code: 'MS19537',
        detail_manufacturer: 'Mahle',
        detail_image: './images/details/gaskets/intake_manifold_gaskets/gasket_intake_plenum_mahle_MS19537.jpg',
        detail_scheme: './images/details/gaskets/intake_manifold_gaskets/gasket_intake_plenum.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка впускного коллектора',
        detail_code: '00986200',
        detail_manufacturer: 'Ajusa',
        detail_image: './images/details/gaskets/intake_manifold_gaskets/gasket_intake_plenum_ajusa_00986200.jpg',
        detail_scheme: './images/details/gaskets/intake_manifold_gaskets/gasket_intake_plenum.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка впускного коллектора',
        detail_code: 'MS96324',
        detail_manufacturer: 'Fel-Pro',
        detail_image: './images/details/gaskets/intake_manifold_gaskets/gasket_intake_plenum_fel-pro_MS96324.jpg',
        detail_scheme: './images/details/gaskets/intake_manifold_gaskets/gasket_intake_plenum.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка впускного коллектора',
        detail_code: '4663852AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/intake_manifold_gaskets/intake_manifold_gasket_mopar_04663852AB.jpg',
        detail_scheme: './images/details/gaskets/intake_manifold_gaskets/intake_manifold_gasket.gif',
        detail_more: 'Для замены необходимо 2 прокладки. В комплекте идет ОДНА прокладка, очень часто именно из-за них уходит антифриз из системы',
    },
    {
        detail_info: 'Прокладка впускного коллектора',
        detail_code: '13171700',
        detail_manufacturer: 'Ajusa',
        detail_image: './images/details/gaskets/intake_manifold_gaskets/intake_manifold_gasket_ajusa_13171700.jpg',
        detail_scheme: './images/details/gaskets/intake_manifold_gaskets/intake_manifold_gasket.gif',
        detail_more: 'Для замены необходимо 2 прокладки. В комплекте идет ОДНА прокладка, очень часто именно из-за них уходит антифриз из системы',
    },
    {
        detail_info: 'Прокладка впускного коллектора',
        detail_code: 'MS921651',
        detail_manufacturer: 'Fel-Pro',
        detail_image: './images/details/gaskets/intake_manifold_gaskets/intake_manifold_gasket_fel-pro_MS921651.jpg',
        detail_scheme: './images/details/gaskets/intake_manifold_gaskets/intake_manifold_gasket.gif',
        detail_more: 'В комплекте идут 2-е прокладки + прокладка впускного коллектора, очень часто именно из-за них уходит антифриз из системы',
    },
    {
        detail_info: 'Прокладка впускного коллектора',
        detail_code: 'MS16210',
        detail_manufacturer: 'Mahle',
        detail_image: './images/details/gaskets/intake_manifold_gaskets/intake_manifold_gasket_mahle_MS16210.jpg',
        detail_scheme: './images/details/gaskets/intake_manifold_gaskets/intake_manifold_gasket.gif',
        detail_more: 'В комплекте идут 2-е прокладки, очень часто именно из-за них уходит антифриз из системы',
    },
]

const EXHAUST_MANIFOLD_GASKETS = [
    {
        detail_info: 'Прокладка выпускного коллектора',
        detail_code: '04648913AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_mopar_04648913AA.jpg',
        detail_scheme: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket.gif',
        detail_more: 'Для замены необходимо 2 прокладки. В комплекте идет ОДНА прокладка',
    },
    {
        detail_info: 'Прокладка выпускного коллектора',
        detail_code: 'MS95446',
        detail_manufacturer: 'Fel-Pro',
        detail_image: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_fel-pro_MS95446.jpg',
        detail_scheme: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket.gif',
        detail_more: 'В комплекте идут 2-е прокладки',
    },
    {
        detail_info: 'Прокладка выпускного коллектора',
        detail_code: '04648915AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_mopar_04648915AA.jpg',
        detail_scheme: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_2.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка выпускного коллектора',
        detail_code: '711366800',
        detail_manufacturer: 'Victor Reinz',
        detail_image: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_victor-reinz_71-13668-00.jpg',
        detail_scheme: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_2.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка катализатора',
        detail_code: '04809696AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_mopar_04809696AA.jpg',
        detail_scheme: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_3.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка катализатора',
        detail_code: '61266',
        detail_manufacturer: 'Fel-Pro',
        detail_image: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_fel-pro_61266.jpg',
        detail_scheme: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_3.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка катализатора',
        detail_code: '31647',
        detail_manufacturer: 'Walker',
        detail_image: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_walker_31647.jpg',
        detail_scheme: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_3.gif',
        detail_more: '',
    },
]

const CYLINDER_HEAD_GASKETS = [
    {
        detail_info: 'Прокладка головки цилиндров (правая)',
        detail_code: '26208PT',
        detail_manufacturer: 'Fel-Pro',
        detail_image: './images/details/gaskets/cylinder_head_gaskets/cylinder_head_gasket_R_fel-pro_26208PT.jpg',
        detail_scheme: './images/details/gaskets/cylinder_head_gaskets/cylinder_head_gasket.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка головки цилиндров (левая)',
        detail_code: '26209PT',
        detail_manufacturer: 'Fel-Pro',
        detail_image: './images/details/gaskets/cylinder_head_gaskets/cylinder_head_gasket_L_fel-pro_26209PT.jpg',
        detail_scheme: './images/details/gaskets/cylinder_head_gaskets/cylinder_head_gasket.gif',
        detail_more: '',
    },
]

const SEAL_VALVE_GUIDE = [
    {
        detail_info: 'Колпачек маслосъемный',
        detail_code: 'SS72842',
        detail_manufacturer: 'Fel-Pro',
        detail_image: './images/details/gaskets/seal_valve_guide/seal_valve_guide_fel-pro_SS72842.jpg',
        detail_scheme: './images/details/gaskets/seal_valve_guide/seal_valve_guide.gif',
        detail_more: 'комплект маслосъемных колпачков 12шт',
    },
    {
        detail_info: 'Колпачек маслосъемный',
        detail_code: 'SS45832',
        detail_manufacturer: 'Mahle',
        detail_image: './images/details/gaskets/seal_valve_guide/seal_valve_guide_mahle_SS45832.jpg',
        detail_scheme: './images/details/gaskets/seal_valve_guide/seal_valve_guide.gif',
        detail_more: 'комплект маслосъемных колпачков 12шт',
    },
]

const FUEL_SYSTEM_SEALING = [
    {
        detail_info: 'Уплотнительные кольца форсунок',
        detail_code: 'SK9',
        detail_manufacturer: 'Standard',
        detail_image: './images/details/gaskets/fuel_system_sealing/fuel_system_sealing_standard_SK9.jpg',
        detail_scheme: './images/details/gaskets/fuel_system_sealing/fuel_system_sealing.gif',
        detail_more: 'устанавливается по 2 кольца на форсунку',
    },
]

const COOLANT_SEALING = [
    {
        detail_info: 'Прокладка нижнего патрубка радиатора',
        detail_code: '04792239AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/coolant_sealing/lower_radiator_hose_gasket_mopar_04792239AB.jpg',
        detail_scheme: './images/details/gaskets/coolant_sealing/lower_radiator_hose_gasket.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка нижнего патрубка радиатора',
        detail_code: '35631',
        detail_manufacturer: 'Fel-Pro',
        detail_image: './images/details/gaskets/coolant_sealing/lower_radiator_hose_gasket_fel-pro_35631.jpg',
        detail_scheme: './images/details/gaskets/coolant_sealing/lower_radiator_hose_gasket.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка водяного насоса (помпы)',
        detail_code: '04659430AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/coolant_sealing/water_pump_gasket_mopar_04659430AB.jpg',
        detail_scheme: './images/details/gaskets/coolant_sealing/water_pump_gasket.gif',
        detail_more: '',
    },
]

const THERMOSTAT_HOUSING_GASKETS = [
    {
        detail_info: 'Прокладка верхнего патрубка (термостата) радиатора ',
        detail_code: '04781674AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/coolant_sealing/upper_radiator_hose_gasket_mopar_04781674AA.jpg',
        detail_scheme: './images/details/gaskets/coolant_sealing/upper_radiator_hose_gasket.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка верхнего патрубка (термостата) радиатора ',
        detail_code: '35651',
        detail_manufacturer: 'Fel-Pro',
        detail_image: './images/details/gaskets/coolant_sealing/upper_radiator_hose_gasket_fel-pro_35651.jpg',
        detail_scheme: './images/details/gaskets/coolant_sealing/upper_radiator_hose_gasket.gif',
        detail_more: '',
    },
]

const SEALING_OIL_CIRCULATION_SYSTEM = [
    {
        detail_info: 'Прокладка маслянного насоса',
        detail_code: '04648938AC',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/sealing_oil_circulation_system/oil_pump_gasket_mopar_04648938AC.jpg',
        detail_scheme: './images/details/gaskets/sealing_oil_circulation_system/oil_pump_gasket.gif',
        detail_more: '',
    },
]

const OIL_SEALS = [
    {
        detail_info: 'Передний сальник распредвала',
        detail_code: '15058700',
        detail_manufacturer: 'Ajusa',
        detail_image: './images/details/gaskets/oil_seals/front_camshaft_oil_seal_ajusa_15058700.jpg',
        detail_scheme: './images/details/gaskets/oil_seals/front_camshaft_oil_seal.gif',
        detail_more: '',
    },
    {
        detail_info: 'Передний сальник коленвала',
        detail_code: '04792317AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/oil_seals/front_crankshaft_oil_seal_mopar_04792317AB.jpg',
        detail_scheme: './images/details/gaskets/oil_seals/front_crankshaft_oil_seal.gif',
        detail_more: 'сюда ставим ТОЛЬКО ОРИГИНАЛ, остальные текут',
    },
    {
        detail_info: 'Задний сальник коленвала',
        detail_code: 'JV1642',
        detail_manufacturer: 'Mahle',
        detail_image: './images/details/gaskets/oil_seals/rear_crankshaft_oil_seal_mahle_JV1642.jpg',
        detail_scheme: './images/details/gaskets/oil_seals/rear_crankshaft_oil_seal.gif',
        detail_more: '',
    },
]

// СИСТЕМА ПОДАЧИ ВОЗДУХА

const AIR_TEMPERATURE_SENSOR = [
    {
        detail_info: 'Датчик, температура впускаемого воздуха',
        detail_code: '04606487AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/air_supply_system/air_temperature_sensor_mopar_04606487AB.jpg',
        detail_scheme: './images/details/air_supply_system/air_temperature_sensor.gif',
        detail_more: '',
    },
]

const THROTTLE_VALVE = [
    {
        detail_info: 'Прокладка дроссельной заслонки',
        detail_code: 'G31666',
        detail_manufacturer: 'Mahle',
        detail_image: './images/details/air_supply_system/throttle_valve_gasket_mahle_G31666.jpg',
        detail_scheme: './images/details/air_supply_system/throttle_valve_gasket.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка дроссельной заслонки',
        detail_code: '61230',
        detail_manufacturer: 'Fel-Pro',
        detail_image: './images/details/air_supply_system/throttle_valve_gasket_fel-pro_61230.jpg',
        detail_scheme: './images/details/air_supply_system/throttle_valve_gasket.gif',
        detail_more: '',
    },
]

// Система ГРМ

const CRANKSHAFT_GEAR = [
    {
        detail_info: 'Шестерня коленчатого вала',
        detail_code: '04536479',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gas_distribution_mechanism/crankshaft_gear_mopar_04536479.jpg',
        detail_scheme: './images/details/gas_distribution_mechanism/crankshaft_gear.gif',
        detail_more: '',
    },
]

const ROCKERS = [
    {
        detail_info: 'Рокер левый, коромысло впускного клапана переднее (с гидрокомпенсатором)',
        detail_code: '04573459',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gas_distribution_mechanism/rocker_arm_intake_left_mopar_04573459.jpg',
        detail_scheme: './images/details/gas_distribution_mechanism/rocker_arm_intake_left.gif',
        detail_more: '',
    },
    {
        detail_info: 'Рокер правый, коромысло впускного клапана заднее (с гидрокомпенсатором)',
        detail_code: '04573460',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gas_distribution_mechanism/rocker_arm_intake_right_mopar_04573460.jpg',
        detail_scheme: './images/details/gas_distribution_mechanism/rocker_arm_intake_right.gif',
        detail_more: '',
    },
    {
        detail_info: 'Рокер, коромысло выпускного клапана (с гидрокомпенсатором)',
        detail_code: '04663996',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gas_distribution_mechanism/rocker_arm_exhaust_mopar_04663996.jpg',
        detail_scheme: './images/details/gas_distribution_mechanism/rocker_arm_exhaust.gif',
        detail_more: '',
    },
    {
        detail_info: 'Рокер, коромысло выпускного клапана (с гидрокомпенсатором)',
        detail_code: 'ER909',
        detail_manufacturer: 'Enginetech',
        detail_image: './images/details/gas_distribution_mechanism/rocker_arm_exhaust_enginetech_ER909.jpg',
        detail_scheme: './images/details/gas_distribution_mechanism/rocker_arm_exhaust.gif',
        detail_more: '',
    },
    {
        detail_info: 'Рокер левый, коромысло впускного клапана переднее (с гидрокомпенсатором)',
        detail_code: 'ER910',
        detail_manufacturer: 'Enginetech',
        detail_image: './images/details/gas_distribution_mechanism/rocker_arm_intake_left_enginetech_ER910.jpg',
        detail_scheme: './images/details/gas_distribution_mechanism/rocker_arm_intake_left.gif',
        detail_more: '',
    },
    {
        detail_info: 'Рокер правый, коромысло впускного клапана заднее (с гидрокомпенсатором)',
        detail_code: 'ER911',
        detail_manufacturer: 'Enginetech',
        detail_image: './images/details/gas_distribution_mechanism/rocker_arm_intake_right_enginetech_ER911.jpg',
        detail_scheme: './images/details/gas_distribution_mechanism/rocker_arm_intake_right.gif',
        detail_more: '',
    },
    {
        detail_info: 'Гидрокомпенсатор',
        detail_code: 'L0096',
        detail_manufacturer: 'Enginetech',
        detail_image: './images/details/gas_distribution_mechanism/valve_lifter_enginetech_L0096.jpg',
        detail_scheme: '',
        detail_more: '',
    },
]

const TIMING_KIT = [
    {
        detail_info: 'Натяжной ролик ремня ГРМ',
        detail_code: '04663515AD',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/timing_kit/tension_roller_mopar_04663515AD.jpg',
        detail_scheme: './images/details/timing_kit/tension_roller.gif',
        detail_more: '',
    },
    {
        detail_info: 'Натяжной ролик ремня ГРМ',
        detail_code: 'GT90010',
        detail_manufacturer: 'GMB',
        detail_image: './images/details/timing_kit/tension_roller_gmb_GT90010.jpg',
        detail_scheme: './images/details/timing_kit/tension_roller.gif',
        detail_more: 'Отличный ролик, хорошо ходит. Ролик отдельно, без площадки',
    },
    {
        detail_info: 'Натяжной ролик ремня ГРМ',
        detail_code: '532022710',
        detail_manufacturer: 'INA',
        detail_image: './images/details/timing_kit/tension_roller_ina_532022710.jpg',
        detail_scheme: './images/details/timing_kit/tension_roller.gif',
        detail_more: 'Отличный ролик, хорошо ходит. Ролик отдельно, без площадки. Говаривают что внутри лежит GMB',
    },
    {
        detail_info: 'Гидронатяжитель ролика ремня ГРМ',
        detail_code: '04892109AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/timing_kit/timing_belt_tensioner_mopar_04892109AA.jpg',
        detail_scheme: './images/details/timing_kit/timing_belt_tensioner.gif',
        detail_more: 'Оригинал есть оригинал',
    },
    {
        detail_info: 'Гидронатяжитель ролика ремня ГРМ',
        detail_code: 'TT129',
        detail_manufacturer: 'Enginetech',
        detail_image: './images/details/timing_kit/timing_belt_tensioner_enginetech_TT129.jpg',
        detail_scheme: './images/details/timing_kit/timing_belt_tensioner.gif',
        detail_more: 'Отличный натяжитель, внутри обычно лежит оригинал',
    },
    {
        detail_info: 'Гидронатяжитель ролика ремня ГРМ',
        detail_code: '4892109AA',
        detail_manufacturer: 'Crown',
        detail_image: './images/details/timing_kit/timing_belt_tensioner_crown_4892109AA.jpg',
        detail_scheme: './images/details/timing_kit/timing_belt_tensioner.gif',
        detail_more: '',
    },


]

const CRANKCASE_BLOCK = [
    {
        detail_info: 'Клапан PCV системы вентиляции картера',
        detail_code: '04792962AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/pcv_valve/pcv_valve_mopar_04792962AA.jpg',
        detail_scheme: './images/details/pcv_valve/pcv_valve.gif',
        detail_more: '',
    },
    {
        detail_info: 'Шланг вентиляции картера',
        detail_code: '04792682AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/pcv_valve/valve_hose_pcv_mopar_04792682AB.jpg',
        detail_scheme: './images/details/pcv_valve/valve_hose_pcv.gif',
        detail_more: '',
    },
]

const ENGINE_ELECTRONICS = []

const CAMSHAFT = [
    {
        detail_info: 'Задняя крышка распредвала',
        detail_code: '04556518AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/camshaft/camshaft_thrust_plate_mopar_04556518AB.jpg',
        detail_scheme: './images/details/camshaft/camshaft_thrust_plate.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка задней крышки распредвала',
        detail_code: '04556518AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/camshaft/camshaft_seal_mopar_04536492AB.jpg',
        detail_scheme: './images/details/camshaft/camshaft_thrust_plate.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка задней крышки распредвала',
        detail_code: '01210000',
        detail_manufacturer: 'Ajusa',
        detail_image: './images/details/camshaft/camshaft_seal_ajusa_01210000.jpg',
        detail_scheme: './images/details/camshaft/camshaft_thrust_plate.gif',
        detail_more: '',
    },
    {
        detail_info: 'Кольцо с прокладкой задней крышки распредвала',
        detail_code: 'ES73216',
        detail_manufacturer: 'FEL-PRO',
        detail_image: './images/details/camshaft/camshaft-housing-gasket_fel-pro_ES73216.jpg',
        detail_scheme: './images/details/camshaft/camshaft_seal.gif',
        detail_more: '',
    },
]

// КШМ

const LINERS = [
    {
        detail_info: 'Вкладыши шатунные',
        detail_code: '04626657AD',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/liners/connecting_rod_bearings_mopar_04626657AD.jpg',
        detail_scheme: './images/details/liners/connecting_rod_bearings.gif',
        detail_more: '',
    },
    {
        detail_info: 'Вкладыши шатунные',
        detail_code: 'RB143',
        detail_manufacturer: 'DNJ',
        detail_image: './images/details/liners/connecting_rod_bearings_dnj_RB143.jpg',
        detail_scheme: './images/details/liners/connecting_rod_bearings.gif',
        detail_more: '',
    },
    {
        detail_info: 'Вкладыши шатунные',
        detail_code: 'BB103JSTD',
        detail_manufacturer: 'Enginetech',
        detail_image: './images/details/liners/connecting_rod_bearings_enginetech_BB103J.jpg',
        detail_scheme: './images/details/liners/connecting_rod_bearings.gif',
        detail_more: '',
    },
]

const OIL_PRESSURE_SWITCH = [
    {
        detail_info: 'Датчик давления масла',
        detail_code: '05149098AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/oil_pressure_switch/oil_pressure_switch_mopar_05149098AA.jpg',
        detail_scheme: './images/details/oil_pressure_switch/oil_pressure_switch.gif',
        detail_more: '',
    },
    {
        detail_info: 'Датчик давления масла',
        detail_code: '12617513068',
        detail_manufacturer: 'BMW',
        detail_image: './images/details/oil_pressure_switch/oil_pressure_switch_bmw_12617513068.jpg',
        detail_scheme: './images/details/oil_pressure_switch/oil_pressure_switch.gif',
        detail_more: '',
    },
    {
        detail_info: 'Датчик давления масла',
        detail_code: 'PS287T',
        detail_manufacturer: 'Standard',
        detail_image: './images/details/oil_pressure_switch/oil_pressure_switch_standard_PS287T.jpg',
        detail_scheme: './images/details/oil_pressure_switch/oil_pressure_switch.gif',
        detail_more: '',
    },
]

const OIL_DIPSTICK = [
    {
        detail_info: 'Щуп маслянный',
        detail_code: '04792670AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/oil_dipstick/oil_dipstick_mopar_04792670AB.jpg',
        detail_scheme: './images/details/oil_dipstick/oil_dipstick.gif',
        detail_more: '',
    },
]

// ПОДУШКИ ДВС

const MOUNTS = [
    {
        detail_info: 'Нижняя опора двигателя, подушка',
        detail_code: '05510007AD',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/cushion_engine_supports/cushion_engine_support_mopar_05510007AD.jpg',
        detail_scheme: './images/details/cushion_engine_supports/cushion_engine_support.gif',
        detail_more: '',
    },
    {
        detail_info: 'Нижняя опора двигателя, подушка',
        detail_code: '3084',
        detail_manufacturer: 'Anchor',
        detail_image: './images/details/cushion_engine_supports/cushion_engine_support_anchor_3084.jpg',
        detail_scheme: './images/details/cushion_engine_supports/cushion_engine_support.gif',
        detail_more: '',
    },
    {
        detail_info: 'Нижняя опора двигателя, подушка',
        detail_code: 'A5299',
        detail_manufacturer: 'DEA',
        detail_image: './images/details/cushion_engine_supports/cushion_engine_support_dea_A5299.jpg',
        detail_scheme: './images/details/cushion_engine_supports/cushion_engine_support.gif',
        detail_more: '',
    },
    {
        detail_info: 'Нижняя опора двигателя, подушка',
        detail_code: 'CRM-PACFR',
        detail_manufacturer: 'Febest',
        detail_image: './images/details/cushion_engine_supports/cushion_engine_support_febest_CRM-PACFR.jpg',
        detail_scheme: './images/details/cushion_engine_supports/cushion_engine_support.gif',
        detail_more: '',
    },
    {
        detail_info: 'Нижняя опора двигателя, подушка',
        detail_code: 'EM3084',
        detail_manufacturer: 'Westar',
        detail_image: './images/details/cushion_engine_supports/cushion_engine_support_westar_EM3084.jpg',
        detail_scheme: './images/details/cushion_engine_supports/cushion_engine_support.gif',
        detail_more: '',
    },
    {
        detail_info: 'Нижняя опора двигателя, подушка',
        detail_code: 'PSE3273',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/cushion_engine_supports/cushion_engine_support_patron_PSE3273.jpg',
        detail_scheme: './images/details/cushion_engine_supports/cushion_engine_support.gif',
        detail_more: 'Подушка двигателя от Мерса. Крекление болтом, нужно будет докупить',
    },
    {
        detail_info: 'Боковая опора двигателя, подушка',
        detail_code: '04881050AC',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/support_engine_mounts/support_engine_mount_mopar_04881050AC.jpg',
        detail_scheme: './images/details/support_engine_mounts/support_engine_mount.gif',
        detail_more: '',
    },
    {
        detail_info: 'Боковая опора двигателя, подушка',
        detail_code: '3181',
        detail_manufacturer: 'Anchor',
        detail_image: './images/details/support_engine_mounts/support_engine_mount_anchor_3181.jpg',
        detail_scheme: './images/details/support_engine_mounts/support_engine_mount.gif',
        detail_more: '',
    },
    {
        detail_info: 'Боковая опора двигателя, подушка',
        detail_code: 'A5305',
        detail_manufacturer: 'DEA',
        detail_image: './images/details/support_engine_mounts/support_engine_mount_dea_A5305.jpg',
        detail_scheme: './images/details/support_engine_mounts/support_engine_mount.gif',
        detail_more: '',
    },
    {
        detail_info: 'Боковая опора двигателя, подушка',
        detail_code: 'CRM-PACRH',
        detail_manufacturer: 'Febest',
        detail_image: './images/details/support_engine_mounts/support_engine_mount_febest_CRM-PACRH.jpg',
        detail_scheme: './images/details/support_engine_mounts/support_engine_mount.gif',
        detail_more: 'Только сам картридж боковой подушки',
    },
    {
        detail_info: 'Боковая опора двигателя, подушка',
        detail_code: 'EM5085',
        detail_manufacturer: 'Westar',
        detail_image: './images/details/support_engine_mounts/support_engine_mount_westar_EM5085.jpg',
        detail_scheme: './images/details/support_engine_mounts/support_engine_mount.gif',
        detail_more: '',
    },
    {
        detail_info: 'Боковая опора, подушка АКПП',
        detail_code: '3095',
        detail_manufacturer: 'Anchor',
        detail_image: './images/details/strut_engine/strut_engine_anchor_3095.jpg',
        detail_scheme: './images/details/strut_engine/strut_engine.gif',
        detail_more: '',
    },
    {
        detail_info: 'Боковая опора, подушка АКПП',
        detail_code: 'A5306',
        detail_manufacturer: 'DEA',
        detail_image: './images/details/strut_engine/strut_engine_dea_A5306.jpg',
        detail_scheme: './images/details/strut_engine/strut_engine.gif',
        detail_more: '',
    },
    {
        detail_info: 'Боковая опора, подушка АКПП',
        detail_code: 'EM3095',
        detail_manufacturer: 'Westar',
        detail_image: './images/details/strut_engine/strut_engine_westar_EM3095.jpg',
        detail_scheme: './images/details/strut_engine/strut_engine.gif',
        detail_more: '',
    },
]

// РЕМЕННОЙ ПРИВОД

const PULLEYS = [
    {
        detail_info: 'Шкив коленвала',
        detail_code: '04792989AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/pulleys/crankshaft_damper_mopar_04792989AA.jpg',
        detail_scheme: './images/details/pulleys/crankshaft_damper.gif',
        detail_more: '',
    },
    {
        detail_info: 'Шкив коленвала',
        detail_code: '594-439',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/pulleys/crankshaft_damper_dorman_594-439.jpg',
        detail_scheme: './images/details/pulleys/crankshaft_damper.gif',
        detail_more: '',
    },
    {
        detail_info: 'Шкив насоса ГУР',
        detail_code: '04861582AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/pulleys/power_steering_pump_pulley_mopar_04861582AA.jpg',
        detail_scheme: './images/details/pulleys/power_steering_pump_pulley.gif',
        detail_more: '',
    },
]

const PULLEY_ALTERNATOR = [
    {
        detail_info: 'Обгонная муфта генератора',
        detail_code: '535020810',
        detail_manufacturer: 'INA',
        detail_image: './images/details/pulley_alternator/alternator_pulley_ina_535020810.jpg',
        detail_scheme: './images/details/pulley_alternator/alternator_pulley.gif',
        detail_more: '',
    },
    {
        detail_info: 'Обгонная муфта генератора',
        detail_code: 'KR6029',
        detail_manufacturer: 'Torque',
        detail_image: './images/details/pulley_alternator/torque_KR6029.jpeg',
        detail_scheme: './images/details/pulley_alternator/alternator_pulley.gif',
        detail_more: '',
    },
    {
        detail_info: 'Обгонная муфта генератора',
        detail_code: 'ZN5428',
        detail_manufacturer: 'ZEN',
        detail_image: './images/details/pulley_alternator/alternator_pulley_zen_ZN5428.jpg',
        detail_scheme: './images/details/pulley_alternator/alternator_pulley.gif',
        detail_more: '',
    },
]

const BYPASS_ROLLERS = [
    {
        detail_info: 'Обводной ролик гладкий',
        detail_code: '89007',
        detail_manufacturer: 'Dayco',
        detail_image: './images/details/bypass_rollers/bypass_roller_dayco_89007.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_1.gif',
        detail_more: '',
    },
    {
        detail_info: 'Обводной ролик гладкий',
        detail_code: '36600',
        detail_manufacturer: 'Gates',
        detail_image: './images/details/bypass_rollers/bypass_roller_gates_36600.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_1.gif',
        detail_more: '',
    },
    {
        detail_info: 'Обводной ролик ручейковый',
        detail_code: '89009',
        detail_manufacturer: 'Dayco',
        detail_image: './images/details/bypass_rollers/bypass_roller_dayco_89009.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_2.gif',
        detail_more: '',
    },
    {
        detail_info: 'Обводной ролик ручейковый',
        detail_code: '89051',
        detail_manufacturer: 'Dayco',
        detail_image: './images/details/bypass_rollers/bypass_roller_dayco_89051.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_2.gif',
        detail_more: '',
    },
    {
        detail_info: 'Обводной ролик ручейковый',
        detail_code: '36100',
        detail_manufacturer: 'Gates',
        detail_image: './images/details/bypass_rollers/bypass_roller_gates_36100.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_2.gif',
        detail_more: '',
    },
    {
        detail_info: 'Обводной ролик ручейковый',
        detail_code: '38009',
        detail_manufacturer: 'Gates',
        detail_image: './images/details/bypass_rollers/bypass_roller_gates_38009.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_2.gif',
        detail_more: '',
    },
    {
        detail_info: 'Обводной ролик ручейковый',
        detail_code: 'T38009',
        detail_manufacturer: 'Gates',
        detail_image: './images/details/bypass_rollers/bypass_roller_gates_T38009.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_2.gif',
        detail_more: '',
    },
    {
        detail_info: 'Ролик натяжителя',
        detail_code: '89017',
        detail_manufacturer: 'Dayco',
        detail_image: './images/details/bypass_rollers/bypass_roller_dayco_89017.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_3.gif',
        detail_more: '',
    },
    {
        detail_info: 'Ролик натяжителя',
        detail_code: '89144',
        detail_manufacturer: 'Dayco',
        detail_image: './images/details/bypass_rollers/bypass_roller_dayco_89144.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_3.gif',
        detail_more: '',
    },
    {
        detail_info: 'Ролик натяжителя',
        detail_code: '38015',
        detail_manufacturer: 'Gates',
        detail_image: './images/details/bypass_rollers/bypass_roller_gates_38015.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_3.gif',
        detail_more: '',
    },
    {
        detail_info: 'Ролик натяжителя',
        detail_code: 'T38018',
        detail_manufacturer: 'Gates',
        detail_image: './images/details/bypass_rollers/bypass_roller_gates_T38018.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_3.gif',
        detail_more: '',
    },
    {
        detail_info: 'Натяжитель обводного ремня',
        detail_code: '04861660AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/bypass_rollers/bypass_roller_mopar_04861660AA.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_0.gif',
        detail_more: '',
    },
    {
        detail_info: 'Натяжитель обводного ремня',
        detail_code: '38323',
        detail_manufacturer: 'Gates',
        detail_image: './images/details/bypass_rollers/bypass_roller_gates_38323.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_0.gif',
        detail_more: '',
    },
    {
        detail_info: 'Натяжитель обводного ремня',
        detail_code: '419006',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/bypass_rollers/bypass_roller_dorman_419-006.jpg',
        detail_scheme: './images/details/bypass_rollers/bypass_roller_0.gif',
        detail_more: '',
    },
]

// СИСТЕМА ОХЛАЖДЕНИЯ

const RADIATOR_ENGINE_COOLING = [
    {
        detail_info: 'Основной радиатор охлаждения',
        detail_code: 'DRM06001',
        detail_manufacturer: 'Denso',
        detail_image: './images/details/radiator_engine_cooling/radiator_engine_cooling_denso_DRM06001.jpg',
        detail_scheme: './images/details/radiator_engine_cooling/radiator_engine_cooling.gif',
        detail_more: 'Отличный радиатор',
    },
    {
        detail_info: 'Основной радиатор охлаждения',
        detail_code: '61028',
        detail_manufacturer: 'Nissens',
        detail_image: './images/details/radiator_engine_cooling/radiator_engine_cooling_nissens_61028.jpg',
        detail_scheme: './images/details/radiator_engine_cooling/radiator_engine_cooling.gif',
        detail_more: 'Отличный радиатор',
    },
    {
        detail_info: 'Основной радиатор охлаждения',
        detail_code: '2460081',
        detail_manufacturer: 'Polcar',
        detail_image: './images/details/radiator_engine_cooling/radiator_engine_cooling_polcar_2460081.jpg',
        detail_scheme: './images/details/radiator_engine_cooling/radiator_engine_cooling.gif',
        detail_more: '',
    },
    {
        detail_info: 'Основной радиатор охлаждения',
        detail_code: 'CR0009',
        detail_manufacturer: 'Sat',
        detail_image: './images/details/radiator_engine_cooling/radiator_engine_cooling_sat_CR0009.jpg',
        detail_scheme: './images/details/radiator_engine_cooling/radiator_engine_cooling.gif',
        detail_more: 'Редкостное гавно, но народ упорно ставит)))',
    },
    {
        detail_info: 'Основной радиатор охлаждения',
        detail_code: '1026824SX',
        detail_manufacturer: 'Stellox',
        detail_image: './images/details/radiator_engine_cooling/radiator_engine_cooling_stellox_1026824SX.jpg',
        detail_scheme: './images/details/radiator_engine_cooling/radiator_engine_cooling.gif',
        detail_more: 'С качеством как повезёт. Крышку на расширительный бачок ОБЯЗАТЕЛЬНО ставим на 16psi',
    },
    {
        detail_info: 'Основной радиатор охлаждения',
        detail_code: '1026890SX',
        detail_manufacturer: 'Stellox',
        detail_image: './images/details/radiator_engine_cooling/radiator_engine_cooling_stellox_1026890SX.jpeg',
        detail_scheme: './images/details/radiator_engine_cooling/radiator_engine_cooling.gif',
        detail_more: 'С качеством как повезёт. Крышку на расширительный бачок ОБЯЗАТЕЛЬНО ставим на 16psi',
    },
    {
        detail_info: 'Основной радиатор охлаждения',
        detail_code: '310993',
        detail_manufacturer: 'Termal',
        detail_image: './images/details/radiator_engine_cooling/radiator_engine_cooling_termal_310993.jpg',
        detail_scheme: './images/details/radiator_engine_cooling/radiator_engine_cooling.gif',
        detail_more: 'Вроде ходит ничего. Стоил бы ещё подешевле ))))',
    },
]

const EXPANSION_TANK = [
    {
        detail_info: 'Расширительный бачок',
        detail_code: '4880498AC',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/expansion_tank/expansion_tank_mopar_4880498AC.jpg',
        detail_scheme: './images/details/expansion_tank/expansion_tank.gif',
        detail_more: 'Крышка на 18psi идёт в комплекте',
    },
    {
        detail_info: 'Расширительный бачок',
        detail_code: '2460ZB2',
        detail_manufacturer: 'Polcar',
        detail_image: './images/details/expansion_tank/expansion_tank_polcar_2460ZB2.jpg',
        detail_scheme: './images/details/expansion_tank/expansion_tank.gif',
        detail_more: 'Крышки в комплекте нет, нужно приобретать дополнительно',
    },
]

const EXPANSION_TANK_CAP = [
    {
        detail_info: 'Крышка расширительного бачка (18psi)',
        detail_code: '31525',
        detail_manufacturer: 'Gates',
        detail_image: './images/details/expansion_tank/radiator_cap_gates_31525.jpg',
        detail_scheme: './images/details/expansion_tank/radiator_cap.gif',
        detail_more: 'Крышка с номинальным давлением 18psi. Ставить желательно только на хорошие радиаторы: Denso, Nissens',
    },
    {
        detail_info: 'Крышка расширительного бачка (16psi)',
        detail_code: 'RC135',
        detail_manufacturer: 'Gates',
        detail_image: './images/details/expansion_tank/radiator_cap_gates_RC135.jpg',
        detail_scheme: './images/details/expansion_tank/radiator_cap.gif',
        detail_more: 'Крышка с пониженным давлением на 16psi. Такое ставим на польско-китайские радиаторы или на "уставшие"',
    },
    {
        detail_info: 'Крышка расширительного бачка (16psi)',
        detail_code: 'LL0301',
        detail_manufacturer: 'Luzar',
        detail_image: './images/details/expansion_tank/radiator_cap_luzar_LL0301.jpg',
        detail_scheme: './images/details/expansion_tank/radiator_cap.gif',
        detail_more: 'Крышка с пониженным давлением на 16psi. Такое ставим на польско-китайские радиаторы или на "уставшие"',
    },
    {
        detail_info: 'Крышка расширительного бачка (18psi)',
        detail_code: 'T18',
        detail_manufacturer: 'Motorad',
        detail_image: './images/details/expansion_tank/radiator_cap_motorad_T18.jpg',
        detail_scheme: './images/details/expansion_tank/radiator_cap.gif',
        detail_more: 'Крышка с номинальным давлением 18psi. Ставить желательно только на хорошие радиаторы: Denso, Nissens',
    },
    {
        detail_info: 'Крышка расширительного бачка (16psi)',
        detail_code: '10234',
        detail_manufacturer: 'Stant',
        detail_image: './images/details/expansion_tank/radiator_cap_stant_10234.jpg',
        detail_scheme: './images/details/expansion_tank/radiator_cap.gif',
        detail_more: 'Крышка с пониженным давлением на 16psi. Такое ставим на польско-китайские радиаторы или на "уставшие"',
    },
    {
        detail_info: 'Крышка расширительного бачка (13psi)',
        detail_code: '10329',
        detail_manufacturer: 'Stant',
        detail_image: './images/details/expansion_tank/radiator_cap_stant_10329.jpg',
        detail_scheme: './images/details/expansion_tank/radiator_cap.gif',
        detail_more: 'Крышка с пониженным давлением на 13psi. Для совсем "уставших" и слабеньких радиаторов',
    },
]

const RADIATOR_HOSES = [
    {
        detail_info: 'Верхний патрубок радиатора',
        detail_code: '72215',
        detail_manufacturer: 'Dayco',
        detail_image: './images/details/radiator_hoses/hose_radiator_inlet_dayco_72215.jpg',
        detail_scheme: './images/details/radiator_hoses/hose_radiator_inlet.gif',
        detail_more: '',
    },
    {
        detail_info: 'Верхний патрубок радиатора',
        detail_code: '22851',
        detail_manufacturer: 'Gates',
        detail_image: './images/details/radiator_hoses/hose_radiator_inlet_gates_22851.jpg',
        detail_scheme: './images/details/radiator_hoses/hose_radiator_inlet.gif',
        detail_more: '',
    },
    {
        detail_info: 'Верхний патрубок радиатора',
        detail_code: '2170810120811',
        detail_manufacturer: 'БРТ Балаково',
        detail_image: './images/details/radiator_hoses/hose_radiator_inlet_btr_2170810120811.jpg',
        detail_scheme: './images/details/radiator_hoses/hose_radiator_inlet.gif',
        detail_more: 'армированный патрубок от ТАЗ-2170',
    },
    {
        detail_info: 'Нижний патрубок радиатора',
        detail_code: '72216',
        detail_manufacturer: 'Dayco',
        detail_image: './images/details/radiator_hoses/hose_radiator_outlet_dayco_72216.jpg',
        detail_scheme: './images/details/radiator_hoses/hose_radiator_outlet.gif',
        detail_more: '',
    },
    {
        detail_info: 'Нижний патрубок радиатора',
        detail_code: '22852',
        detail_manufacturer: 'Gates',
        detail_image: './images/details/radiator_hoses/hose_radiator_outlet_gates_22852.jpg',
        detail_scheme: './images/details/radiator_hoses/hose_radiator_outlet.gif',
        detail_more: '',
    },
]

const THERMOSTAT_HOUSING = [
    {
        detail_info: 'Верхний патрубок термостата',
        detail_code: '04781387AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/thermostat_housing/thermostat_housing_mopar_04781387AA.jpg',
        detail_scheme: './images/details/thermostat_housing/thermostat_housing_inlet.gif',
        detail_more: '',
    },
    {
        detail_info: 'Верхний патрубок термостата',
        detail_code: '902698',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/thermostat_housing/thermostat_housing_dorman_902-698.jpg',
        detail_scheme: './images/details/thermostat_housing/thermostat_housing_inlet.gif',
        detail_more: '',
    },
    {
        detail_info: 'Нижний патрубок',
        detail_code: 'Mopar',
        detail_manufacturer: '4781685AA',
        detail_image: './images/details/thermostat_housing/thermostat_housing_mopar_4781685AA.jpg',
        detail_scheme: './images/details/thermostat_housing/thermostat_housing_outlet.gif',
        detail_more: '',
    },
    {
        detail_info: 'Нижний патрубок',
        detail_code: '9023037',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/thermostat_housing/thermostat_housing_dorman_902-3037.jpg',
        detail_scheme: './images/details/thermostat_housing/thermostat_housing_outlet.gif',
        detail_more: '',
    },
]

const COOLANT_SENSORS = [
    {
        detail_info: 'Датчик температуры охлаждающей жидкости',
        detail_code: '05269870AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/engine_electronics/sensor_coolant_temperature_mopar_05269870AB.jpg',
        detail_scheme: './images/details/engine_electronics/sensor_coolant_temperature.gif',
        detail_more: '',
    },
]

const RADIATOR_FANS = [
    {
        detail_info: 'Большой вентилятор радиатора охлаждения',
        detail_code: 'LCF0118',
        detail_manufacturer: 'Luzar',
        detail_image: './images/details/radiator_fans/big_radiator_fan_luzar_LFC0118.jpg',
        detail_scheme: './images/details/radiator_fans/big_radiator_fan.gif',
        detail_more: '',
    },
    {
        detail_info: 'Большой вентилятор радиатора охлаждения',
        detail_code: 'PFN259',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/radiator_fans/big_radiator_fan_patron_PFN259.jpg',
        detail_scheme: './images/details/radiator_fans/big_radiator_fan.gif',
        detail_more: '',
    },
    {
        detail_info: 'Малый вентилятор радиатора охлаждения',
        detail_code: 'LCF0103',
        detail_manufacturer: 'Luzar',
        detail_image: './images/details/radiator_fans/small_radiator_fan_luzar_LFC0103.jpg',
        detail_scheme: './images/details/radiator_fans/small_radiator_fan.gif',
        detail_more: '',
    },
    {
        detail_info: 'Малый вентилятор радиатора охлаждения',
        detail_code: 'PFN179',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/radiator_fans/small_radiator_fan_patron_PFN179.jpg',
        detail_scheme: './images/details/radiator_fans/small_radiator_fan.gif',
        detail_more: '',
    },
    {
        detail_info: 'Вентиляторы радиатора в сборе',
        detail_code: '620031',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/radiator_fans/radiator_fans_dorman_620-031.jpg',
        detail_scheme: './images/details/radiator_fans/radiator_fans.gif',
        detail_more: '',
    },
    {
        detail_info: 'Вентиляторы радиатора в сборе',
        detail_code: '246023W1',
        detail_manufacturer: 'Polcar',
        detail_image: './images/details/radiator_fans/radiator_fans_polcar_246023W1.jpg',
        detail_scheme: './images/details/radiator_fans/radiator_fans.gif',
        detail_more: '',
    },
]

// ТРАНСМИССИЯ

const TRANSMISSION_PANS = [
    {
        detail_info: 'Маслянный поддон АКПП',
        detail_code: '4800210AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/transmission_pans/transmission_pan_mopar_04800210AA.jpg',
        detail_scheme: './images/details/transmission_pans/transmission_pan.gif',
        detail_more: '',
    },
    {
        detail_info: 'Маслянный поддон АКПП',
        detail_code: 'BMO-CH-031',
        detail_manufacturer: 'NTY',
        detail_image: './images/details/transmission_pans/transmission_pan_nty_BMO-CH-031.JPG',
        detail_scheme: './images/details/transmission_pans/transmission_pan.gif',
        detail_more: '',
    },
]

const TRANSMISSION_CASE_COVERS = [
    {
        detail_info: 'Крышка корпуса АКПП',
        detail_code: '04659636',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/transmission_case_cover/case_cover_mopar_04659636.jpg',
        detail_scheme: './images/details/transmission_case_cover/case_cover.gif',
        detail_more: '',
    },
    {
        detail_info: 'Крышка корпуса АКПП',
        detail_code: '265820',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/transmission_case_cover/case_cover_dorman_265-820.jpg',
        detail_scheme: './images/details/transmission_case_cover/case_cover.gif',
        detail_more: '',
    },
    {
        detail_info: 'Крышка корпуса АКПП',
        detail_code: 'GCD201027',
        detail_manufacturer: 'GUD',
        detail_image: './images/details/transmission_case_cover/case_cover_gud_GCD201027.jpg',
        detail_scheme: './images/details/transmission_case_cover/case_cover.gif',
        detail_more: '',
    },
    {
        detail_info: 'Крышка корпуса АКПП',
        detail_code: 'BMO-CH-033',
        detail_manufacturer: 'NTY',
        detail_image: './images/details/transmission_case_cover/case_cover_nty_BMO-CH-033.jpg',
        detail_scheme: './images/details/transmission_case_cover/case_cover.gif',
        detail_more: '',
    },
]

const SHIFT_SOLENOID = [
    {
        detail_info: 'Прокладка блока соленоидов',
        detail_code: '04659982',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/transmission_shift_solenoid/control_solenoid_seal_mopar_04659982.jpg',
        detail_scheme: './images/details/transmission_shift_solenoid/control_solenoid_seal.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка блока соленоидов',
        detail_code: '92328A',
        detail_manufacturer: 'Transtar',
        detail_image: './images/details/transmission_shift_solenoid/control_solenoid_seal_transtar_92328A.jpg',
        detail_scheme: './images/details/transmission_shift_solenoid/control_solenoid_seal.gif',
        detail_more: '',
    },
    {
        detail_info: 'Блок соленоидов',
        detail_code: '50083',
        detail_manufacturer: 'Borg-Warner',
        detail_image: './images/details/transmission_shift_solenoid/shift_solenoid_borg-warner_50083.jpg',
        detail_scheme: './images/details/transmission_shift_solenoid/shift_solenoid.gif',
        detail_more: '',
    },
]

const SPEED_SENSORS = [
    {
        detail_info: 'Датчик скорости входного вала АКПП',
        detail_code: '04800878',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/transmission_speed_sensors/speed_sensor_input_mopar_04800878.jpg',
        detail_scheme: './images/details/transmission_speed_sensors/speed_sensor_input.gif',
        detail_more: '',
    },
    {
        detail_info: 'Датчик скорости выходного вала АКПП',
        detail_code: '04800879',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/transmission_speed_sensors/speed_sensor_output_mopar_04800879.jpg',
        detail_scheme: './images/details/transmission_speed_sensors/speed_sensor_output.gif',
        detail_more: '',
    },
]

const CARDAN_SHAFT = [
        {
        detail_info: 'Подвесной подшипник кардана',
        detail_code: 'TCB-024',
        detail_manufacturer: 'Febest',
        detail_image: './images/details/cardan_shaft/outboard_bearing_febest_TCB-024.jpg',
        detail_scheme: './images/details/cardan_shaft/outboard_bearing.gif',
        detail_more: '',
    },
    {
        detail_info: 'Подвесной подшипник кардана',
        detail_code: 'VW6001R',
        detail_manufacturer: 'VTR',
        detail_image: './images/details/cardan_shaft/outboard_bearing_vtr_VW6001R.jpg',
        detail_scheme: './images/details/cardan_shaft/outboard_bearing.gif',
        detail_more: '',
    },
    {
        detail_info: 'Муфта кардана',
        detail_code: '00735',
        detail_manufacturer: 'Metalcaucho',
        detail_image: './images/details/cardan_shaft/cardan_coupling_metalcaucho_00735.jpg',
        detail_scheme: './images/details/cardan_shaft/cardan_coupling.gif',
        detail_more: '',
    },
]

const WHEEL_DRIVE = [
    {
        detail_info: 'Наружный ШРУС',
        detail_code: 'NJ165NY',
        detail_manufacturer: 'Nakayama',
        detail_image: './images/details/wheel_drive/outer_CV_joint_nakayama_NJ165NY.jpg',
        detail_scheme: './images/details/wheel_drive/outer_CV_joint.gif',
        detail_more: '',
    },
    {
        detail_info: 'Наружный ШРУС',
        detail_code: 'PCV6751',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/wheel_drive/outer_CV_joint_patron_PCV6751.jpg',
        detail_scheme: './images/details/wheel_drive/outer_CV_joint.gif',
        detail_more: '',
    },
    {
        detail_info: 'Внутренний ШРУС, передний правый AWD',
        detail_code: 'PCV9535',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/wheel_drive/outer_CV_joint_patron_PCV9538.jpg',
        detail_scheme: './images/details/wheel_drive/inner_CV_joint.gif',
        detail_more: 'берём отсюда трипоид для внутреннего ШРУСа правой передней полуоси AWD',
    },
]

const REAR_REDUCER = [
    {
        detail_info: 'Сальник полуосей заднего редуктора',
        detail_code: '05134787AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/rear_gear_seal/rear_gear_seal_mopar_05134787AB.jpg',
        detail_scheme: './images/details/rear_gear_seal/rear_gear_seal.jpg',
        detail_more: '',
    },
    {
        detail_info: 'Сальник полуосей заднего редуктора',
        detail_code: 'NUP-CH-003',
        detail_manufacturer: 'NTY',
        detail_image: './images/details/rear_gear_seal/rear_gear_seal_nty_NUP-CH-003.jpeg',
        detail_scheme: './images/details/rear_gear_seal/rear_gear_seal.jpg',
        detail_more: '',
    },
    {
        detail_info: 'Сальник полуосей заднего редуктора',
        detail_code: '95IEW40641113C',
        detail_manufacturer: 'Febest',
        detail_image: './images/details/rear_gear_seal/rear_gear_seal_febest_95IEW40641113C.jpg',
        detail_scheme: './images/details/rear_gear_seal/rear_gear_seal.jpg',
        detail_more: '',
    },
]

// ТОРМОЗНАЯ СИСТЕМА

const BRAKE_DISCS = [
    {
        detail_info: 'Диск тормозной передний',
        detail_code: 'ADA104373',
        detail_manufacturer: 'Blue Print',
        detail_image: './images/details/brake_discs/front_brake_disc_blue-print_ADA104373.JPG',
        detail_scheme: './images/details/brake_discs/front_brake_disc.gif',
        detail_more: '',
    },
    {
        detail_info: 'Диск тормозной передний',
        detail_code: 'PBD53019',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/brake_discs/front_brake_disc_patron_PBD53019.jpg',
        detail_scheme: './images/details/brake_discs/front_brake_disc.gif',
        detail_more: '',
    },
    {
        detail_info: 'Диск тормозной передний',
        detail_code: '780175R',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_discs/front_brake_disc_raybestos_780175R.jpg',
        detail_scheme: './images/details/brake_discs/front_brake_disc.gif',
        detail_more: '',
    },
    {
        detail_info: 'Диск тормозной задний',
        detail_code: 'ADA104374',
        detail_manufacturer: 'Blue Print',
        detail_image: './images/details/brake_discs/rear_brake_disc_blue-print_ADA104374.jpg',
        detail_scheme: './images/details/brake_discs/rear_brake_disc.gif',
        detail_more: '',
    },
    {
        detail_info: 'Диск тормозной задний',
        detail_code: 'PBD7002',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/brake_discs/rear_brake_disc_PBD7002.jpg',
        detail_scheme: './images/details/brake_discs/rear_brake_disc.gif',
        detail_more: '',
    },
    {
        detail_info: 'Диск тормозной задний',
        detail_code: '780152R',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_discs/rear_brake_disc_raybestos_780152R.jpg',
        detail_scheme: './images/details/brake_discs/rear_brake_disc.gif',
        detail_more: '',
    },
]

const BRAKE_PARTS = [
    {
        detail_info: 'Штуцер прокачки тормозов',
        detail_code: '5093343AA',
        detail_manufacturer: 'Crown',
        detail_image: './images/details/brake_parts/brake_bleeder_screw_crown_5093343AA.jpg',
        detail_scheme: './images/details/brake_parts/brake_bleeder_screw.gif',
        detail_more: '',
    },
    {
        detail_info: 'Поршень переднего суппорта (2шт)',
        detail_code: '7815',
        detail_manufacturer: 'Carlson',
        detail_image: './images/details/brake_parts/caliper_piston_front_carlson_7815.jpg',
        detail_scheme: './images/details/brake_parts/caliper_piston_front_support.gif',
        detail_more: 'На суппорте ДВА поршня. Параметры поршня: диаметр 48.3мм; высота 50.8мм',
    },
    {
        detail_info: 'Пыльник направляющей переднего суппорта',
        detail_code: '16177',
        detail_manufacturer: 'Carlson',
        detail_image: './images/details/brake_parts/front_support_caliper_bushing_carlson_16177.jpg',
        detail_scheme: './images/details/brake_parts/front_support_caliper_bushing.gif',
        detail_more: '',
    },
    {
        detail_info: 'Пыльник направляющей переднего суппорта',
        detail_code: 'H16177',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_parts/front_support_caliper_bushing_raybestos_H16117.jpg',
        detail_scheme: './images/details/brake_parts/front_support_caliper_bushing.gif',
        detail_more: '',
    },
    {
        detail_info: 'Ремкомплект переднего суппорта',
        detail_code: '5681K',
        detail_manufacturer: 'BBP',
        detail_image: './images/details/brake_parts/front_caliper_repair_kit_bbp_5681K.jpg',
        detail_scheme: './images/details/brake_parts/front_caliper_repair_kit.gif',
        detail_more: '',
    },
    {
        detail_info: 'Ремкомплект переднего суппорта',
        detail_code: 'H5681Q',
        detail_manufacturer: 'Carlson',
        detail_image: './images/details/brake_parts/front_caliper_repair_kit_carlson_H5681Q.jpg',
        detail_scheme: './images/details/brake_parts/front_caliper_repair_kit.gif',
        detail_more: '',
    },
    {
        detail_info: 'Пыльник поршня переднего суппорта',
        detail_code: '41418K',
        detail_manufacturer: 'BBP',
        detail_image: './images/details/brake_parts/front_piston_boot_bbp_41418K.jpg',
        detail_scheme: './images/details/brake_parts/front_support_piston_boot.gif',
        detail_more: '',
    },
    {
        detail_info: 'Пыльник поршня переднего суппорта',
        detail_code: '41161',
        detail_manufacturer: 'Carlson',
        detail_image: './images/details/brake_parts/front_piston_boot_carlson_41161.jpg',
        detail_scheme: './images/details/brake_parts/front_support_piston_boot.gif',
        detail_more: '',
    },
    {
        detail_info: 'Пыльник поршня переднего суппорта',
        detail_code: 'D670030',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/brake_parts/front_piston_boot_dorman_D670030.jpg',
        detail_scheme: './images/details/brake_parts/front_support_piston_boot.gif',
        detail_more: '',
    },
    {
        detail_info: 'Поршень заднего суппорта',
        detail_code: '7855',
        detail_manufacturer: 'Carlson',
        detail_image: './images/details/brake_parts/caliper_piston_rear_carlson_7855.jpg',
        detail_scheme: './images/details/brake_parts/caliper_piston_rear_support.gif',
        detail_more: 'Параметры поршня: диаметр 41.9мм; высота 52.3мм',
    },
    {
        detail_info: 'Пыльник направляющей заднего суппорта',
        detail_code: '16122',
        detail_manufacturer: 'Carlson',
        detail_image: './images/details/brake_parts/rear_support_caliper_bushing_carlson_16122.jpg',
        detail_scheme: './images/details/brake_parts/rear_support_caliper_bushing.gif',
        detail_more: '',
    },
    {
        detail_info: 'Пыльник направляющей заднего суппорта',
        detail_code: 'H16122',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_parts/rear_support_caliper_bushing_raybestos_H16122.jpg',
        detail_scheme: './images/details/brake_parts/rear_support_caliper_bushing.gif',
        detail_more: '',
    },
    {
        detail_info: 'Пыльник поршня заднего суппорта',
        detail_code: '41557K',
        detail_manufacturer: 'BBP',
        detail_image: './images/details/brake_parts/rear_piston_boot_bbp_41557K.jpg',
        detail_scheme: './images/details/brake_parts/rear_support_piston_boot.gif',
        detail_more: '',
    },
    {
        detail_info: 'Пыльник поршня заднего суппорта',
        detail_code: '41226',
        detail_manufacturer: 'Carlson',
        detail_image: './images/details/brake_parts/rear_piston_boot_carlson_41226.jpg',
        detail_scheme: './images/details/brake_parts/rear_support_piston_boot.gif',
        detail_more: '',
    },

]

const PARKING_BRAKE = [
    {
        detail_info: 'Монтажный комплект стояночного тормоза',
        detail_code: 'PSRK0126',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/brake_parts/mounting_kit _brake_pads_patron_PSRK0126.jpg',
        detail_scheme: './images/details/brake_parts/mounting_kit _brake_pads.gif',
        detail_more: '',
    },
]

const BRAKE_CABLES = [
    {
        detail_info: 'Главный трос стояночного тормоза',
        detail_code: 'BC97332',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/parking_brake/parking_brake_cable_raybestos_BC97332.jpg',
        detail_scheme: './images/details/parking_brake/parking_brake_cable.gif',
        detail_more: 'Для 03-04 модельного года (до 01.06.04)',
    },
    {
        detail_info: 'Главный трос стояночного тормоза',
        detail_code: 'BC97333',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/parking_brake/parking_brake_cable_raybestos_BC97333.jpg',
        detail_scheme: './images/details/parking_brake/parking_brake_cable.gif',
        detail_more: 'Для 05-06 модельного года (после 01.07.04)',
    },
    {
        detail_info: 'Трос стояночного тормоза',
        detail_code: '04683858AD',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/parking_brake/parking_brake_cable_mopar_04683858AD.jpg',
        detail_scheme: './images/details/parking_brake/parking_brake_cable2.gif',
        detail_more: 'Левый = Правый',
    },
    {
        detail_info: 'Трос стояночного тормоза',
        detail_code: 'C661260',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/parking_brake/parking_brake_cable_dorman_C661260.jpg',
        detail_scheme: './images/details/parking_brake/parking_brake_cable2.gif',
        detail_more: 'Левый = Правый',
    },
    {
        detail_info: 'Трос стояночного тормоза',
        detail_code: 'BC97130',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/parking_brake/parking_brake_cable_raybestos_BC97130.jpg',
        detail_scheme: './images/details/parking_brake/parking_brake_cable2.gif',
        detail_more: 'Левый = Правый',
    },
]

// СИСТЕМА ВЫПУСКА

const EXHAUST_GAS_NEUTRALIZATION = [
    {
        detail_info: 'Клапан ЕГР',
        detail_code: '04861579AH',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/exhaust_gas_neutralization/mopar_04861579AH.jpg',
        // detail_scheme: './images/details/exhaust_gas_neutralization/',
        detail_more: '',
    },
    {
        detail_info: 'Клапан ЕГР',
        detail_code: '04861635AG',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/exhaust_gas_neutralization/mopar_04861635AG.jpg',
        // detail_scheme: './images/details/exhaust_gas_neutralization/',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка фланца трубки ЕГР',
        detail_code: '05277928',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/exhaust_gas_neutralization/mopar_05277928.jpg',
        detail_scheme: './images/details/exhaust_gas_neutralization/gasket_egr_tube_flange.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка фланца трубки ЕГР',
        detail_code: 'VG14',
        detail_manufacturer: 'Standard',
        detail_image: './images/details/exhaust_gas_neutralization/standard_VG14.jpg',
        detail_scheme: './images/details/exhaust_gas_neutralization/gasket_egr_tube_flange.gif',
        detail_more: '',
    },
    {
        detail_info: 'Уплотнительное кольцо трубки ЕГР',
        detail_code: '04667431',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/exhaust_gas_neutralization/mopar_04667431.jpg',
        // detail_scheme: './images/details/exhaust_gas_neutralization/',
        detail_more: '',
    },
    {
        detail_info: 'Уплотнительное кольцо трубки ЕГР',
        detail_code: '70696',
        detail_manufacturer: 'Fel-Pro',
        detail_image: './images/details/exhaust_gas_neutralization/fel-pro_70696.jpg',
        // detail_scheme: './images/details/exhaust_gas_neutralization/',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка клапана ЕГР',
        detail_code: '04891068AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/exhaust_gas_neutralization/mopar_04891068AB.jpg',
        detail_scheme: './images/details/exhaust_gas_neutralization/gasket_egr_valve.gif',
        detail_more: '',
    },
]

const EXHAUST = [
    {
        detail_info: 'Глушитель 1-я часть',
        detail_code: '4514',
        detail_manufacturer: 'Edex',
        detail_image: './images/details/muffler_assembly/muffler_exhaust_edex-4514.jpg',
        detail_scheme: './images/details/muffler_assembly/muffler_exhaust.gif',
        detail_more: '1-я банка глушителя с гофрой',
    },
    {
        detail_info: 'Глушитель 2-я часть',
        detail_code: '4515',
        detail_manufacturer: 'Edex',
        detail_image: './images/details/muffler_assembly/muffler_resonator_exhaust_edex-4515.jpg',
        detail_scheme: './images/details/muffler_assembly/muffler_resonator_exhaust.gif',
        detail_more: 'Задняя часть глушителя, состоит из 2-х частей',
    },
    {
        detail_info: 'Глушитель, задняя банка',
        detail_code: '16.202',
        detail_manufacturer: 'Ferroz',
        detail_image: './images/details/muffler_assembly/muffler_resonator_exhaust_ferroz-16.202.jpg',
        detail_scheme: './images/details/muffler_assembly/muffler_resonator_exhaust.gif',
        detail_more: 'Задняя банка от Пыжа, нужно рукожопить с креплениями',
    },
    {
        detail_info: 'Глушитель, задняя банка',
        detail_code: '19.218',
        detail_manufacturer: 'Polmostrow',
        detail_image: './images/details/muffler_assembly/muffler_resonator_exhaust_polmostrow_19.218.jpg',
        detail_scheme: './images/details/muffler_assembly/muffler_resonator_exhaust.gif',
        detail_more: 'Задняя банка от Пыжа, нужно рукожопить с креплениями',
    },
    {
        detail_info: 'Универсальный катализатор',
        detail_code: '99354HM',
        detail_manufacturer: 'Magnaflow',
        detail_image: './images/details/muffler_assembly/converter_catalytic_universal_catalytic_converter_magnaflow_99354HM.jpg',
        detail_scheme: './images/details/muffler_assembly/converter_catalytic.gif',
        detail_more: '',
    },
]

const OXYGEN_SENSORS = [
    {
        detail_info: 'Лямбда-зонд №1, 03-04 модельный год',
        detail_code: '04727446AD',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/oxygen_sensors/oxygen_sensor_mopar_04727446AD.jpg',
        // detail_scheme: './images/details/oxygen_sensors/',
        detail_more: '1-я лямбда, перед катализатором, 03-04 модельный год, ставим сюда ТОЛЬКО ОРИГИНАЛ!!!',
    },
    {
        detail_info: 'Лямбда-зонд №2, 03-04 модельный год',
        detail_code: '04727936AD',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/oxygen_sensors/oxygen_sensor_mopar_04727936AD.jpg',
        // detail_scheme: './images/details/oxygen_sensors/',
        detail_more: '2-я лямбда, после катализатором, 03-04 модельный год',
    },
    {
        detail_info: 'Лямбда-зонд №1, 05-06 модельный год',
        detail_code: '56028998AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/oxygen_sensors/oxygen_sensor_mopar_56028998AB.jpg',
        // detail_scheme: './images/details/oxygen_sensors/',
        detail_more: '1-я лямбда, перед катализатором, 03-04 модельный год, ставим сюда ТОЛЬКО ОРИГИНАЛ!!!',
    },
    {
        detail_info: 'Лямбда-зонд №2, 05-06 модельный год',
        detail_code: '56028999AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/oxygen_sensors/oxygen_sensor_mopar_56028999AB.jpg',
        // detail_scheme: './images/details/oxygen_sensors/',
        detail_more: '2-я лямбда, после катализатором, 05-06 модельный год',
    },
]

const EXHAUST_MANIFOLD = [
    {
        detail_info: 'Прокладки выпускного коллектора',
        detail_code: '04648913AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/exhaust_manifold/mopar_04648913AA.jpg',
        detail_scheme: './images/details/exhaust_manifold/gasket_exhaust_manifold_1.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка выпускного коллектора',
        detail_code: '04648915AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/exhaust_manifold/mopar_04648915AA.jpg',
        detail_scheme: './images/details/exhaust_manifold/gasket_exhaust_manifold_2.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка выпускного коллектора',
        detail_code: '711366800',
        detail_manufacturer: 'Victor Reinz',
        detail_image: './images/details/exhaust_manifold/victor-reinz_71-13668-00.jpg',
        detail_scheme: './images/details/exhaust_manifold/gasket_exhaust_manifold_2.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка выпускного коллектора, катализатора',
        detail_code: '04809696AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/exhaust_manifold/mopar_04809696AA.jpg',
        detail_scheme: './images/details/exhaust_manifold/gasket_exhaust_manifold_3.gif',
        detail_more: '',
    },
]

// ХОДОВАЯ ЧАСТЬ

const SPRINGS = [
    {
        detail_info: 'Передняя пружина подвески',
        detail_code: 'C4T61562H',
        detail_manufacturer: 'OBK',
        detail_image: './images/details/springs/front_spring_obk_C4T61562H.jpg',
        detail_scheme: './images/details/springs/front_spring.gif',
        detail_more: 'Весьма сомнительное занятие по замене))) Нужно греть, гнуть, подгонять. Почитать можно на Д2',
    },
    {
        detail_info: 'Задняя пружина подвески',
        detail_code: 'C4T61881H',
        detail_manufacturer: 'OBK',
        detail_image: './images/details/springs/rear_spring_obk_C4T61881H.jpg',
        detail_scheme: './images/details/springs/rear_spring.gif',
        detail_more: 'Пружина от "Прадика", желательно подпилить, но кто-то гоняет и так',
    },

    {
        detail_info: 'Передняя пружина подвески',
        detail_code: '4063492',
        detail_manufacturer: 'Lesjofors',
        detail_image: './images/details/springs/front_spring_lesjofors_4063492.jpeg',
        detail_scheme: './images/details/springs/front_spring.gif',
        detail_more: 'Хороший производитель, пружины подбирались по параметрам оригинала, но ещё не устанавливались',
    },
    {
        detail_info: 'Задняя пружина подвески',
        detail_code: '4014219',
        detail_manufacturer: 'Lesjofors',
        detail_image: './images/details/springs/rear_spring_lesjofors_4014219.jpeg',
        detail_scheme: './images/details/springs/rear_spring.gif',
        detail_more: 'Хороший производитель, пружины подбирались по параметрам оригинала, но ещё не устанавливались',
    },
    {
        detail_info: 'Задняя пружина подвески',
        detail_code: 'SF-1223',
        detail_manufacturer: 'Zekkert',
        detail_image: './images/details/springs/rear_spring_zekkert_SF-1223.jpg',
        detail_scheme: './images/details/springs/rear_spring.gif',
        detail_more: 'Проходят "обкатку"',
    },
]

const SHOCK_ABSORBER_SUPPORTS = [
    {
        detail_info: 'Опора переднего амортизатора',
        detail_code: '04862027AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/strut_mounts/strut_mount_mopar_04862027AB.jpg',
        detail_scheme: './images/details/strut_mounts/strut_mount.gif',
        detail_more: '',
    },
    {
        detail_info: 'Опора переднего амортизатора',
        detail_code: 'SM5266',
        detail_manufacturer: 'Kayaba',
        detail_image: './images/details/strut_mounts/strut_mount_kyb_SM5266.jpg',
        detail_scheme: './images/details/strut_mounts/strut_mount.gif',
        detail_more: 'Опорный подшипник в комплекте',
    },
    {
        detail_info: 'Опора переднего амортизатора',
        detail_code: '3327001',
        detail_manufacturer: 'Lemforder',
        detail_image: './images/details/strut_mounts/strut_mount_lemforder_3327001.jpg',
        detail_scheme: './images/details/strut_mounts/strut_mount.gif',
        detail_more: 'Опорный подшипник в комплекте',
    },
    {
        detail_info: 'Опора переднего амортизатора',
        detail_code: 'MK278',
        detail_manufacturer: 'Monroe',
        detail_image: './images/details/strut_mounts/strut_mount_monroe_MK278.jpg',
        detail_scheme: './images/details/strut_mounts/strut_mount.gif',
        detail_more: 'Опорный подшипник в комплекте',
    },
    {
        detail_info: 'Опорный подшипник',
        detail_code: '4743044AA',
        detail_manufacturer: 'Crown',
        detail_image: './images/details/strut_mounts/crown_4743044AA.jpg',
        detail_scheme: './images/details/strut_mounts/strut_bearing.gif',
        detail_more: '',
    },
    {
        detail_info: 'Опорный подшипник',
        detail_code: 'AD-CH-004',
        detail_manufacturer: 'NTY',
        detail_image: './images/details/strut_mounts/nty_AD-CH-004.jpg',
        detail_scheme: './images/details/strut_mounts/strut_bearing.gif',
        detail_more: '',
    },
]

const SHOCK_ABSORBERS = [
    {
        detail_info: 'Передний амортизатор подвески',
        detail_code: '339088',
        detail_manufacturer: 'Kayaba',
        detail_image: './images/details/shock_absorbers/front_shock_absorber_kyb_339088.jpg',
        detail_scheme: './images/details/shock_absorbers/front_shock_absorber.gif',
        detail_more: 'Для тех, кто любит по жестче :)',
    },
    {
        detail_info: 'Передний амортизатор подвески',
        detail_code: '72130',
        detail_manufacturer: 'Monroe',
        detail_image: './images/details/shock_absorbers/front_shock_absorber_monroe_72130.jpg',
        detail_scheme: './images/details/shock_absorbers/front_shock_absorber.gif',
        detail_more: '',
    },
    {
        detail_info: 'Передний амортизатор подвески',
        detail_code: '802130',
        detail_manufacturer: 'Monroe',
        detail_image: './images/details/shock_absorbers/front_shock_absorber_monroe_802130.jpg',
        detail_scheme: './images/details/shock_absorbers/front_shock_absorber.gif',
        detail_more: 'Говорят что это более продвинутая модель 72130',
    },
    {
        detail_info: 'Передний амортизатор подвески',
        detail_code: 'PSA339088',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/shock_absorbers/front_shock_absorber_patron_PSA339088.jpg',
        detail_scheme: './images/details/shock_absorbers/front_shock_absorber.gif',
        detail_more: '',
    },
    {
        detail_info: 'Комплект пыльник+отбойник амортизатора',
        detail_code: '910023',
        detail_manufacturer: 'Kayaba',
        detail_image: './images/details/shock_absorbers/shield_shock_absorber_kit_kyb_910023.jpg',
        detail_scheme: './images/details/shock_absorbers/shield_shock_absorber_kit.gif',
        detail_more: 'Комплект на две стороны: 2 пыльника + 2 отбойника',
    },
    {
        detail_info: 'Комплект пыльник+отбойник амортизатора',
        detail_code: 'K201272',
        detail_manufacturer: 'Moog',
        detail_image: './images/details/shock_absorbers/shield_shock_absorber_kit_moog_K201272.jpg',
        detail_scheme: './images/details/shock_absorbers/shield_shock_absorber_kit.gif',
        detail_more: '',
    },
    {
        detail_info: 'Задний амортизатор, нивомат',
        detail_code: '04766854AD',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/shock_absorbers/rear_shock_absorber_mopar_04766854AD.jpg',
        detail_scheme: './images/details/shock_absorbers/rear_shock_absorber.gif',
        detail_more: '',
    },
    {
        detail_info: 'Задний амортизатор, нивомат',
        detail_code: '40211',
        detail_manufacturer: 'Monroe',
        detail_image: './images/details/shock_absorbers/rear_shock_absorber_monroe_40211.jpg',
        detail_scheme: './images/details/shock_absorbers/rear_shock_absorber.gif',
        detail_more: '',
    },
    {
        detail_info: 'Задний амортизатор, нивомат',
        detail_code: '444206',
        detail_manufacturer: 'Sachs',
        detail_image: './images/details/shock_absorbers/rear_shock_absorber_sachs_444206.jpg',
        detail_scheme: './images/details/shock_absorbers/rear_shock_absorber.gif',
        detail_more: '',
    },
    {
        detail_info: 'Задний амортизатор',
        detail_code: '271.01.111',
        detail_manufacturer: 'Doka',
        detail_image: './images/details/shock_absorbers/rear_shock_absorber_doka_27101111.jpg',
        detail_scheme: './images/details/shock_absorbers/rear_shock_absorber.gif',
        detail_more: 'Нужны доработки: втулки внизу, в место крепление болта и сверху на штоке втулку заменить',
    },
]

const SHOCK_ABSORBER_MOUNT = [
    {
        detail_info: 'Передние развальные болты',
        detail_code: 'K90474',
        detail_manufacturer: 'Moog',
        detail_image: './images/details/breakup_bolts/breakup_bolts_moog_K90474.jpg',
        detail_scheme: './images/details/breakup_bolts/breakup_bolts.gif',
        detail_more: '',
    },
    {
        detail_info: 'Передние развальные болты',
        detail_code: '05013687AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/breakup_bolts/breakup_bolts_mopar_05013687AB.jpg',
        detail_scheme: './images/details/breakup_bolts/breakup_bolts.gif',
        detail_more: '',
    },
]

const HUBS = [
    {
        detail_info: 'Ступица в сборе',
        detail_code: 'KLP-CH-027',
        detail_manufacturer: 'NTY',
        detail_image: './images/details/hubs/front_hub_nty_KLP-CH-027.jpg',
        detail_scheme: './images/details/hubs/front_hub.gif',
        detail_more: 'Ступицы одинаковые, не важна сторона установки. Задняя и передняя отличаются длиной датчика АБС, который можно перекинуть просто со старой',
    },
    {
        detail_info: 'Ступица в сборе',
        detail_code: 'PBK4035H',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/hubs/front_hub_patron_PBK4035H.jpg',
        detail_scheme: './images/details/hubs/front_hub.gif',
        detail_more: 'Ступицы одинаковые, не важна сторона установки. Задняя и передняя отличаются длиной датчика АБС, который можно перекинуть просто со старой',
    },
    {
        detail_info: 'Ступица в сборе',
        detail_code: 'PBK513201H',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/hubs/front_hub_patron_PBK513201H.jpg',
        detail_scheme: './images/details/hubs/front_hub.gif',
        detail_more: 'Ступицы одинаковые, не важна сторона установки. Задняя и передняя отличаются длиной датчика АБС, который можно перекинуть просто со старой',
    },
    {
        detail_info: 'Ступица в сборе',
        detail_code: '4329070SX',
        detail_manufacturer: 'Stellox',
        detail_image: './images/details/hubs/front_hub_stellox_4329070SX.jpg',
        detail_scheme: './images/details/hubs/front_hub.gif',
        detail_more: 'Ступицы одинаковые, не важна сторона установки. Задняя и передняя отличаются длиной датчика АБС, который можно перекинуть просто со старой',
    },
    {
        detail_info: 'Шпилька колёсная',
        detail_code: '610369',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/hubs/hub_stud_dorman_610-369.jpg',
        detail_scheme: './images/details/hubs/hub_stud.gif',
        detail_more: 'Шпилька М12-1,5мм, если не врут, длина 46мм',
    },
    {
        detail_info: 'Шпилька колёсная',
        detail_code: 'KSP-CH-005',
        detail_manufacturer: 'NTY',
        detail_image: './images/details/hubs/hub_stud_nty_KSP-CH-005.jpeg',
        detail_scheme: './images/details/hubs/hub_stud.gif',
        detail_more: 'Шпилька М12-1,5мм, если не врут, длина 46мм',
    },
    {
        detail_info: 'Болт крепления задней ступицы',
        detail_code: '28677',
        detail_manufacturer: 'Febi',
        detail_image: './images/details/hubs/rear_hub_bolt_febi_28677.jpg',
        detail_scheme: './images/details/hubs/rear_hub_bolt.gif',
        detail_more: 'Головка болта TORX, длина 42мм(29мм), резьба М10',
    },
]

const LEVERS_AND_PULLS = [
    {
        detail_info: 'Передний рычаг в сборе',
        detail_code: '246037',
        detail_manufacturer: 'Polcar/SRLine',
        detail_image: './images/details/front_suspension_arms/polcar_246037_left.jpg',
        detail_scheme: './images/details/front_suspension_arms/front_suspension_arm.gif',
        detail_more: 'Левый рычаг в сборе',
    },
    {
        detail_info: 'Передний рычаг в сборе',
        detail_code: '246038',
        detail_manufacturer: 'Polcar/SRLine',
        detail_image: './images/details/front_suspension_arms/polcar_246038_right.jpg',
        detail_scheme: './images/details/front_suspension_arms/front_suspension_arm.gif',
        detail_more: 'Правый рычаг в сборе',
    },
    {
        detail_info: 'Передний, малый сайлентблок рычага',
        detail_code: 'CR0103RP',
        detail_manufacturer: 'VTR',
        detail_image: './images/details/silent_blocks_of_levers/front_arm_bushing_vtr_CR0103RP.jpeg',
        detail_scheme: './images/details/silent_blocks_of_levers/front_arm_bushing.gif',
        detail_more: 'Полиуретановый сайлентблок',
    },
    {
        detail_info: 'Передний, малый сайлентблок рычага',
        detail_code: 'K7286',
        detail_manufacturer: 'Moog',
        detail_image: './images/details/silent_blocks_of_levers/front_arm_bushing_moog_K7286.jpg',
        detail_scheme: './images/details/silent_blocks_of_levers/front_arm_bushing.gif',
        detail_more: 'Отличный сайлентблок, хорошо ходит',
    },
    {
        detail_info: 'Задний, большой сайлентблок рычага',
        detail_code: 'CR0124RP',
        detail_manufacturer: 'VTR',
        detail_image: './images/details/silent_blocks_of_levers/rear_arm_bushing_vtr_CR0124RP.jpeg',
        detail_scheme: './images/details/silent_blocks_of_levers/rear_arm_bushing.gif',
        detail_more: 'Полиуретановый сайлентблок',
    },
    {
        detail_info: 'Шаровая опора переднего рычага',
        detail_code: 'K80759',
        detail_manufacturer: 'Moog',
        detail_image: './images/details/silent_blocks_of_levers/ball_joint_moog_K80759.jpg',
        detail_scheme: './images/details/silent_blocks_of_levers/ball_joint.gif',
        detail_more: 'Отличная шаровая, но ооооооооочень дорогая. Имеет смысл поискать что-то подешевле',
    },
    {
        detail_info: 'Задний рычаг, "банан"',
        detail_code: '246037-3',
        detail_manufacturer: 'Polcar/SRLine',
        detail_image: './images/details/rear_suspension_arms/tension_link_polcar_246037-3.jpeg',
        detail_scheme: './images/details/rear_suspension_arms/tension_link.gif',
        detail_more: 'Задний рычаг в сборе, ЛЕВЫЙ=ПРАВЫЙ',
    },
    {
        detail_info: 'Задний рычаг, "кривой"',
        detail_code: '246037-4',
        detail_manufacturer: 'Polcar/SRLine',
        detail_image: './images/details/rear_suspension_arms/camber_link_polcar_246037-4.jpeg',
        detail_scheme: './images/details/rear_suspension_arms/camber_link.gif',
        detail_more: 'Задний ЛЕВЫЙ рычаг в сборе',
    },
    {
        detail_info: 'Задний рычаг, "кривой"',
        detail_code: '246038-4',
        detail_manufacturer: 'Polcar/SRLine',
        detail_image: './images/details/rear_suspension_arms/camber_link_polcar_246038-4.jpeg',
        detail_scheme: './images/details/rear_suspension_arms/camber_link.gif',
        detail_more: 'Задний ПРАВЫЙ рычаг в сборе',
    },
    {
        detail_info: 'Задний рычаг, "вилка"',
        detail_code: '246037-5',
        detail_manufacturer: 'Polcar/SRLine',
        detail_image: './images/details/rear_suspension_arms/compression_link_polcar_246037-5.jpeg',
        detail_scheme: './images/details/rear_suspension_arms/compression_link.gif',
        detail_more: 'Задний рычаг в сборе, ЛЕВЫЙ=ПРАВЫЙ. Часто ломают шиномонтажники и прочие рукажопы',
    },
    {
        detail_info: 'Задний рычаг, развальный',
        detail_code: '246037-6',
        detail_manufacturer: 'Polcar/SRLine',
        detail_image: './images/details/rear_suspension_arms/toe_link_polcar_246037-6.jpeg',
        detail_scheme: './images/details/rear_suspension_arms/toe_link.gif',
        detail_more: 'Задний рычаг в сборе, ЛЕВЫЙ=ПРАВЫЙ',
    },
    {
        detail_info: 'Сайлентблоки задних рычагов',
        detail_code: 'CRAB-0...',
        detail_manufacturer: 'Febest',
        detail_image: './images/details/silent_blocks_of_levers/rear_suspension_bushings_febest.png',
        // detail_scheme: './images/details/silent_blocks_of_levers',
        detail_more: 'Комплект сайлентблоков Febest задних рычагов. Отсутствуют "плавающий" и сайлетблок балки. Качество так себе, но народ ставит',
    },
    {
        detail_info: 'Сайлентблоки задних рычагов',
        detail_code: 'CR0...',
        detail_manufacturer: 'VTR',
        detail_image: './images/details/silent_blocks_of_levers/rear_suspension_bushings_vtr.jpg',
        // detail_scheme: './images/details/silent_blocks_of_levers',
        detail_more: 'Комплект сайлентблоков VTR задних рычагов. Отсутствуют "плавающий" и сайлетблок балки',
    },
    {
        detail_info: 'Сайлентблок заднего рычага, "банан"',
        detail_code: '2972601',
        detail_manufacturer: 'Lemforder',
        detail_image: './images/details/silent_blocks_of_levers/lemforder_2972601_banana.jpg',
        detail_scheme: './images/details/silent_blocks_of_levers/banana_silent_block.gif',
        detail_more: 'Отличные сайлентблоки, пока вроде никто не жаловался',
    },
    {
        detail_info: 'Сайлентблок заднего рычага, балочный',
        detail_code: '2240201',
        detail_manufacturer: 'Lemforder',
        detail_image: './images/details/silent_blocks_of_levers/lemforder_2240201_beam.jpg',
        detail_scheme: './images/details/silent_blocks_of_levers/beam_silent_block.gif',
        detail_more: 'Отличные сайлентблоки, пока вроде никто не жаловался',
    },
    {
        detail_info: 'Сайлентблок заднего рычага, "кривой"',
        detail_code: '2491401',
        detail_manufacturer: 'Lemforder',
        detail_image: './images/details/silent_blocks_of_levers/lemforder_2491401_crooked.jpg',
        detail_scheme: './images/details/silent_blocks_of_levers/crooced_silent_block.gif',
        detail_more: 'Отличные сайлентблоки, пока вроде никто не жаловался',
    },
    {
        detail_info: 'Сайлентблок заднего рычага, "плавающий"',
        detail_code: '3475601',
        detail_manufacturer: 'Lemforder',
        detail_image: './images/details/silent_blocks_of_levers/lemforder_3475601_floating.jpg',
        detail_scheme: './images/details/silent_blocks_of_levers/floating_silent_block.gif',
        detail_more: 'Отличные сайлентблоки, пока вроде никто не жаловался',
    },
    {
        detail_info: 'Сайлентблок заднего рычага, "вилка"',
        detail_code: '2975101',
        detail_manufacturer: 'Lemforder',
        detail_image: './images/details/silent_blocks_of_levers/lemforder_2975101_fork.jpg',
        detail_scheme: './images/details/silent_blocks_of_levers/fork_silent_block.gif',
        detail_more: 'Отличные сайлентблоки, пока вроде никто не жаловался',
    },
    {
        detail_info: 'Сайлентблок заднего рычага, развальный',
        detail_code: '3539201',
        detail_manufacturer: 'Lemforder',
        detail_image: './images/details/silent_blocks_of_levers/lemforder_3539201_metal.jpeg',
        detail_scheme: './images/details/silent_blocks_of_levers/metal_silent_block.gif',
        detail_more: 'Отличные сайлентблоки, пока вроде никто не жаловался',
    },
]

const STABILIZER = [
    {
        detail_info: 'Втулки переднего стабилизатора',
        detail_code: '928526',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/stabilizer/front_stabilizer_bushing_dorman_928-526.jpg',
        detail_scheme: './images/details/stabilizer/front_stabilizer_bushing.gif',
        detail_more: 'Комплект втулок переднего стабилизатора с креплениями',
    },
    {
        detail_info: 'Втулки переднего стабилизатора',
        detail_code: 'CR1403R',
        detail_manufacturer: 'VTR',
        detail_image: './images/details/stabilizer/front_stabilizer_bushing_vtr_CR1403R.jpg',
        detail_scheme: './images/details/stabilizer/front_stabilizer_bushing.gif',
        detail_more: '',
    },
    {
        detail_info: 'Втулки переднего стабилизатора',
        detail_code: 'CR1403RP',
        detail_manufacturer: 'VTR',
        detail_image: './images/details/stabilizer/front_stabilizer_bushing_vtr_CR1403RP.jpg',
        detail_scheme: './images/details/stabilizer/front_stabilizer_bushing.gif',
        detail_more: 'Материал - полиурентан',
    },
    {
        detail_info: 'Втулки заднего стабилизатора',
        detail_code: '0476687AC',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/stabilizer/rear_stabilizer_bushing_mopar_04766876AC.jpg',
        detail_scheme: './images/details/stabilizer/rear_stabilizer_bushing.gif',
        detail_more: '',
    },
    {
        detail_info: 'Втулки заднего стабилизатора',
        detail_code: '928542',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/stabilizer/rear_stabilizer_bushing_dorman_928-542.jpg',
        detail_scheme: './images/details/stabilizer/rear_stabilizer_bushing.gif',
        detail_more: 'Комплект втулок заднего стабилизатора с креплениями',
    },
    {
        detail_info: 'Передние стойки стабилизатора',
        detail_code: '26OP1005',
        detail_manufacturer: 'As Metal',
        detail_image: './images/details/stabilizer/front_link_stabilizer_bar_as-metall_26OP1005.jpg',
        detail_scheme: './images/details/stabilizer/front_link_stabilizer_bar.gif',
        detail_more: 'Лучший вариант стоек по цене и как ходят, а ходят отлично',
    },
    {
        detail_info: 'Задние стойки стабилизатора',
        detail_code: '5600059SX',
        detail_manufacturer: 'Stellox',
        detail_image: './images/details/stabilizer/rear_link_stabilizer_bar_stellox_5600059SX.jpg',
        detail_scheme: './images/details/stabilizer/rear_link_stabilizer_bar.gif',
        detail_more: 'Мало кто их меняет. Что нашёл, то и всунул',
    },
]

const BRIDGE_BEAM = [
    {
        detail_info: 'Передний сайлентблок задней балки',
        detail_code: '04766744AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/rear_beam/beam_front_silent_block_mopar_04766744AA.jpg',
        detail_scheme: './images/details/rear_beam/beam_front_silent_block.gif',
        detail_more: 'Деталь для мажоров, народ обычно точит болванки',
    },
    {
        detail_info: 'Задний сайлентблок задней балки',
        detail_code: '04766746AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/rear_beam/beam_rear_silent_block_mopar_04766746AA.jpg',
        detail_scheme: './images/details/rear_beam/beam_rear_silent_block.gif',
        detail_more: 'Деталь для мажоров, народ обычно точит болванки',
    },
]

// РУЛЕВОЕ УПРАВЛЕНИЕ

const STEERING_TIPS = [
    {
        detail_info: 'Рулевой наконечник',
        detail_code: 'CECR8',
        detail_manufacturer: 'CTR',
        detail_image: './images/details/steering_tip/steering_tip_ctr_CECR8.jpg',
        detail_scheme: './images/details/steering_tip/steering_tip.gif',
        detail_more: '',
    },
    {
        detail_info: 'Рулевой наконечник',
        detail_code: 'AMGES3614',
        detail_manufacturer: 'Moog',
        detail_image: './images/details/steering_tip/steering_tip_moog_AMGES3614.jpg',
        detail_scheme: './images/details/steering_tip/steering_tip.gif',
        detail_more: 'Отличный наконечник, правда цена не гуманная',
    },
    {
        detail_info: 'Рулевой наконечник',
        detail_code: '5039304',
        detail_manufacturer: 'NK',
        detail_image: './images/details/steering_tip/steering_tip_nk_5039304.jpg',
        detail_scheme: './images/details/steering_tip/steering_tip.gif',
        detail_more: '',
    },
    {
        detail_info: 'Рулевой наконечник',
        detail_code: '2021CAR',
        detail_manufacturer: 'Febest',
        detail_image: './images/details/steering_tip/steering_tip_febest_2021CAR.jpg',
        detail_scheme: './images/details/steering_tip/steering_tip.gif',
        detail_more: 'ХЗ как ходит, но народ ставит',
    },
]

const POWER_STEERING_PUMPS = [
    {
        detail_info: 'Насос ГУР',
        detail_code: '215343',
        detail_manufacturer: 'Cardone',
        detail_image: './images/details/power_steering_pump/power_steering_pump_cardone_215343.jpg',
        detail_scheme: './images/details/power_steering_pump/power_steering_pump.gif',
        detail_more: 'Насос восстановленный, идёт без шкива, нужно приобретать отдельно',
    },
    {
        detail_info: 'Насос ГУР',
        detail_code: 'P1885HG',
        detail_manufacturer: 'Motorherz',
        detail_image: './images/details/power_steering_pump/power_steering_pump_motorherz_P1885HG.jpg',
        detail_scheme: './images/details/power_steering_pump/power_steering_pump.gif',
        detail_more: 'Насос идёт без шкива, нужно приобретать отдельно',
    },
    {
        detail_info: 'Насос ГУР',
        detail_code: 'PPS135',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/power_steering_pump/power_steering_pump_patron_PPS135.jpg',
        detail_scheme: './images/details/power_steering_pump/power_steering_pump.gif',
        detail_more: 'Насос идёт без шкива, нужно приобретать отдельно. После установки издает посторонние звуки',
    },
    {
        detail_info: 'Насос ГУР',
        detail_code: 'P0503',
        detail_manufacturer: 'Raikanen',
        detail_image: './images/details/power_steering_pump/power_steering_pump_raikanen_P0503.jpg',
        detail_scheme: './images/details/power_steering_pump/power_steering_pump.gif',
        detail_more: 'Насос восстановленный со шкивом (но лучше уточнять)',
    },
    {
        detail_info: 'Ремкомплект рулевой рейки',
        detail_code: 'AG0040',
        detail_manufacturer: 'Auto-Gur',
        detail_image: './images/details/power_steering_pump/steering_rack_repair_kit_auto-gur_AG0040.jpg',
        // detail_scheme: './images/details/power_steering_pump/power_steering_pump.gif',
        // detail_more: 'Насос восстановленный со шкивом (но лучше уточнять)',
    },
]

const TIE_ROD = [
    {
        detail_info: 'Рулевая тяга',
        detail_code: '68032249AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/tie_rods/tie_rod_mopar_68032249AA.jpg',
        detail_scheme: './images/details/tie_rods/tie_rod.gif',
        detail_more: 'Комплект рулевой тяги по космической цене',
    },
    {
        detail_info: 'Рулевая тяга',
        detail_code: 'TI81230',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/tie_rods/tie_rod_dorman_TI81230.jpg',
        detail_scheme: './images/details/tie_rods/tie_rod.gif',
        detail_more: '',
    },
    {
        detail_info: 'Рулевая тяга',
        detail_code: 'GES80646',
        detail_manufacturer: 'Mevotech',
        detail_image: './images/details/tie_rods/tie_rod_mevotech_GES80646.jpg',
        detail_scheme: './images/details/tie_rods/tie_rod.gif',
        detail_more: '',
    },
    {
        detail_info: 'Рулевая тяга',
        detail_code: 'MES80646',
        detail_manufacturer: 'Mevotech',
        detail_image: './images/details/tie_rods/tie_rod_mevotech_MES80646.jpg',
        detail_scheme: './images/details/tie_rods/tie_rod.gif',
        detail_more: '',
    },
]

const BRAKE_HOSES = [
    {
        detail_info: 'Передний левый тормозной шланг',
        detail_code: 'H620545',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/brake_hoses/front_brake_hose_left_dorman_H620545.jpg',
        detail_scheme: './images/details/brake_hoses/front_brake_hose_left.gif',
        detail_more: '',
    },
    {
        detail_info: 'Передний правый тормозной шланг',
        detail_code: 'H620544',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/brake_hoses/front_brake_hose_right_dorman_H620544.jpg',
        detail_scheme: './images/details/brake_hoses/front_brake_hose_right.gif',
        detail_more: '',
    },
    {
        detail_info: 'Передний левый тормозной шланг',
        detail_code: 'BH382518',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_hoses/front_brake_hose_left_raybestos_BH382518.jpg',
        detail_scheme: './images/details/brake_hoses/front_brake_hose_left.gif',
        detail_more: '',
    },
    {
        detail_info: 'Передний правый тормозной шланг',
        detail_code: 'BH382753',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_hoses/front_brake_hose_right_raybestos_BH382753.jpg',
        detail_scheme: './images/details/brake_hoses/front_brake_hose_right.gif',
        detail_more: '',
    },
    {
        detail_info: 'Задний левый тормозной шланг',
        detail_code: 'H620547',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/brake_hoses/rear_brake_hose_left_dorman_H620547.jpg',
        detail_scheme: './images/details/brake_hoses/rear_brake_hose_left.gif',
        detail_more: '',
    },
    {
        detail_info: 'Задний правый тормозной шланг',
        detail_code: 'H620546',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/brake_hoses/rear_brake_hose_right_dorman_H620546.jpg',
        detail_scheme: './images/details/brake_hoses/rear_brake_hose_right.gif',
        detail_more: '',
    },
    {
        detail_info: 'Задний левый тормозной шланг',
        detail_code: 'BH382362',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_hoses/rear_brake_hose_left_raybestos_BH382362.jpg',
        detail_scheme: './images/details/brake_hoses/rear_brake_hose_left.gif',
        detail_more: '',
    },
    {
        detail_info: 'Задний правый тормозной шланг',
        detail_code: 'BH382368',
        detail_manufacturer: 'Raybestos',
        detail_image: './images/details/brake_hoses/rear_brake_hose_right_raybestos_BH382368.jpg',
        detail_scheme: './images/details/brake_hoses/rear_brake_hose_right.gif',
        detail_more: '',
    },
]

// ДЕТАЛИ КУЗОВА

const FRONT_BUMPER_REFLECTOR = [
    {
        detail_info: 'Катафот переднего бампера левый',
        detail_code: '246192',
        detail_manufacturer: 'Polcar',
        detail_image: './images/details/front_bumper_reflector/front_bumper_reflector_left_polcar_246192.jpg',
        detail_scheme: './images/details/front_bumper_reflector/front_bumper_reflector.gif',
        detail_more: '',
    },
    {
        detail_info: 'Катафот переднего бампера левый',
        detail_code: '185986001N',
        detail_manufacturer: 'TYC',
        detail_image: './images/details/front_bumper_reflector/front_bumper_reflector_left_tyc_18-5986-001N.jpg',
        detail_scheme: './images/details/front_bumper_reflector/front_bumper_reflector.gif',
        detail_more: '',
    },
    {
        detail_info: 'Катафот переднего бампера правый',
        detail_code: '246202',
        detail_manufacturer: 'Polcar',
        detail_image: './images/details/front_bumper_reflector/front_bumper_reflector_right_polcar_246202.jpg',
        detail_scheme: './images/details/front_bumper_reflector/front_bumper_reflector.gif',
        detail_more: '',
    },
    {
        detail_info: 'Катафот переднего бампера правый',
        detail_code: '185985001N',
        detail_manufacturer: 'TYC',
        detail_image: './images/details/front_bumper_reflector/front_bumper_reflector_right_tyc_18-5985-001N.jpg',
        detail_scheme: './images/details/front_bumper_reflector/front_bumper_reflector.gif',
        detail_more: '',
    },
]

const GLAZING_MIRRORS = [
    {
        detail_info: 'Зеркальный элемент левый',
        detail_code: '18250308',
        detail_manufacturer: 'Ergon',
        detail_image: './images/details/glass_mirror_elements/ergon_left.jpg',
        detail_scheme: './images/details/glass_mirror_elements/glass_mirror_element.gif',
        detail_more: 'Сферический элемент с обогревом',
    },
    {
        detail_info: 'Зеркальный элемент левый',
        detail_code: '18250306',
        detail_manufacturer: 'Ergon',
        detail_image: './images/details/glass_mirror_elements/ergon_left.jpg',
        detail_scheme: './images/details/glass_mirror_elements/glass_mirror_element.gif',
        detail_more: 'Асферический элемент с обогревом',
    },
    {
        detail_info: 'Зеркальный элемент правый',
        detail_code: '18250309',
        detail_manufacturer: 'Ergon',
        detail_image: './images/details/glass_mirror_elements/ergon_right.jpg',
        detail_scheme: './images/details/glass_mirror_elements/glass_mirror_element.gif',
        detail_more: 'Сферический элемент с обогревом',
    },
    {
        detail_info: 'Зеркальный элемент правый',
        detail_code: '18250300',
        detail_manufacturer: 'Ergon',
        detail_image: './images/details/glass_mirror_elements/ergon_right.jpg',
        detail_scheme: './images/details/glass_mirror_elements/glass_mirror_element.gif',
        detail_more: 'Асферический элемент с обогревом',
    },
]

// ТОПЛИВНАЯ СИСТЕМА

const TANK_FUEL = [
    {
        detail_info: 'Топливный бак',
        detail_code: '05101802AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/fuel_tank/fuel_tank_mopar_05101802AB.jpg',
        detail_scheme: './images/details/fuel_tank/fuel_tank.gif',
        detail_more: '',
    },
]

const FUEL_LEVEL_SENSORS = [
    {
        detail_info: 'Датчик уровня топлива',
        detail_code: '05101804AC',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/fuel_level_sensor/fuel_level_sensor_mopar_05101804AC.jpg',
        detail_scheme: './images/details/fuel_level_sensor/fuel_level_sensor.gif',
        detail_more: 'Рабочее сопротивление 70...1050 Ом (для 3.5). Левый = Правый',
    },
]

const LEAK_DETECTION_PUMP = [
    {
        detail_info: 'Насос для обнаружения утечек паров',
        detail_code: '04891427AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/vapor_detection_pump/vapor_detection_pump_mopar_04891427AB.jpg',
        detail_scheme: './images/details/vapor_detection_pump/vapor_detection_pump.gif',
        detail_more: '',
    },
    {
        detail_info: 'Насос для обнаружения утечек паров',
        detail_code: '310500',
        detail_manufacturer: 'Dorman',
        detail_image: './images/details/vapor_detection_pump/vapor_detection_pump_dorman_310-500.jpg',
        detail_scheme: './images/details/vapor_detection_pump/vapor_detection_pump.gif',
        detail_more: '',
    },
    {
        detail_info: 'Фильтр насоса для обнаружения утечек паров',
        detail_code: '04891561AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/vapor_detection_pump/vapor_recovery_filter_mopar_04891561AA.jpg',
        detail_scheme: './images/details/vapor_detection_pump/vapor_recovery_filter.gif',
        detail_more: '',
    },
    {
        detail_info: 'Фильтр насоса для обнаружения утечек паров',
        detail_code: 'LDP74',
        detail_manufacturer: 'Standard',
        detail_image: './images/details/vapor_detection_pump/vapor_recovery_filter_standart_LDP74.jpg',
        detail_scheme: './images/details/vapor_detection_pump/vapor_recovery_filter.gif',
        detail_more: '',
    },
]

const REGULATOR_FUEL_PRESSURE = [
    {
        detail_info: 'Регулятор давления топлива',
        detail_code: 'PR321',
        detail_manufacturer: 'Standard',
        detail_image: './images/details/regulator_fuel_pressure/regulator_fuel_pressure_standard_PR321.jpg',
        detail_scheme: './images/details/regulator_fuel_pressure/regulator_fuel_pressure.gif',
        detail_more: '',
    },
    {
        detail_info: 'Модуль регулятора давления топлива',
        detail_code: '05101805AC',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/regulator_fuel_pressure/regulator_fuel_pressure_module_mopar_05101805AC.jpg',
        detail_scheme: './images/details/regulator_fuel_pressure/regulator_fuel_pressure_module.gif',
        detail_more: '',
    },
    {
        detail_info: 'Модуль регулятора давления топлива',
        detail_code: 'FG0785K',
        detail_manufacturer: 'Delphi',
        detail_image: './images/details/regulator_fuel_pressure/regulator_fuel_pressure_module_delphi_FG0785K.jpg',
        detail_scheme: './images/details/regulator_fuel_pressure/regulator_fuel_pressure_module.gif',
        detail_more: '',
    },
]

const FUEL_PUMP = [
    {
        detail_info: 'Модуль топливного насоса',
        detail_code: '68028056AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/fuel_pump/fuel_pump_module_mopar_68028056AB.jpg',
        detail_scheme: './images/details/fuel_pump/fuel_pump_module.gif',
        detail_more: '',
    },
    {
        detail_info: 'Модуль топливного насоса',
        detail_code: 'CBB2F440',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/fuel_pump/fuel_pump_module_mopar_CBB2F440.jpg',
        detail_scheme: './images/details/fuel_pump/fuel_pump_module.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка топливного модуля',
        detail_code: '52100410AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/fuel_pump/fuel_pump_gasket_mopar_52100410AA.jpg',
        detail_scheme: './images/details/fuel_pump/fuel_pump_gasket.gif',
        detail_more: '',
    },
    {
        detail_info: 'Фильтр насоса, грубой очистки',
        detail_code: 'HS109001',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/fuel_pump/mesh_pump_patron_HS109001.jpg',
        detail_scheme: './images/details/fuel_pump/fuel_pump_mesh.jpg',
        detail_more: '',
    },
    {
        detail_info: 'Насос топливный',
        detail_code: '0580453453',
        detail_manufacturer: 'Bosch',
        detail_image: './images/details/fuel_pump/fuel_pump_bosch_0580453453.jpg',
        detail_scheme: './images/details/fuel_pump/fuel_pump.jpg',
        detail_more: '',
    },
    {
        detail_info: 'Насос топливный',
        detail_code: 'KR0261P',
        detail_manufacturer: 'Krauf',
        detail_image: './images/details/fuel_pump/fuel_pump_krauf_KR0261P.jpg',
        detail_scheme: './images/details/fuel_pump/fuel_pump.jpg',
        detail_more: '',
    },
    {
        detail_info: 'Насос топливный',
        detail_code: 'KR5093P',
        detail_manufacturer: 'Krauf',
        detail_image: './images/details/fuel_pump/fuel_pump_krauf_KR5093P.jpg',
        detail_scheme: './images/details/fuel_pump/fuel_pump.jpg',
        detail_more: '',
    },
    {
        detail_info: 'Насос топливный',
        detail_code: 'FP453453',
        detail_manufacturer: 'Weber',
        detail_image: './images/details/fuel_pump/fuel_pump_weber_FP453453.jpg',
        detail_scheme: './images/details/fuel_pump/fuel_pump.jpg',
        detail_more: '',
    },
    {
        detail_info: 'Фильтр тонкой очистки',
        detail_code: 'FC002S',
        detail_manufacturer: 'Japanparts',
        detail_image: './images/details/fuel_pump/fuel_filter_japanparts_FC002S.jpg',
        detail_scheme: './images/details/fuel_pump/fuel_pump_filter.jpg',
        detail_more: '',
    },

]

// ЭЛЕКТРООБОРУДОВАНИЕ

const GENERATOR = [
    {
        detail_info: 'Коллектор генератора',
        detail_code: '133.3701',
        detail_manufacturer: 'КРОНА',
        detail_image: './images/details/generator/generator_manifold_krona_1333701.jpg',
        // detail_scheme: './images/details/',
        detail_more: '',
    },
    {
        detail_info: 'Коллектор генератора',
        detail_code: '239718',
        detail_manufacturer: 'Cargo',
        detail_image: './images/details/generator/generator_manifold_cargo_239718.jpg',
        // detail_scheme: './images/details/',
        detail_more: '',
    },
    {
        detail_info: 'Диодный мост',
        detail_code: 'RN-29',
        detail_manufacturer: 'Mobiletron',
        detail_image: './images/details/generator/diode_bridge_mobiletron_RN-29.jpg',
        // detail_scheme: './images/details/',
        detail_more: '',
    },
    {
        detail_info: 'Диодный мост',
        detail_code: 'TT34547',
        detail_manufacturer: 'Tesla',
        detail_image: './images/details/generator/diode_bridge_tesla_TT34547.jpg',
        // detail_scheme: './images/details/',
        detail_more: '',
    },
    {
        detail_info: 'Щеткодержатель',
        detail_code: '235607',
        detail_manufacturer: 'Cargo',
        detail_image: './images/details/generator/generator_brush_holder_cargo_235607.jpg',
        // detail_scheme: './images/details/',
        detail_more: '',
    },
    {
        detail_info: 'Щеткодержатель',
        detail_code: 'HN5607B',
        detail_manufacturer: 'UTM',
        detail_image: './images/details/generator/generator_brush_holder_utm_HN5607B.jpg',
        // detail_scheme: './images/details/',
        detail_more: '',
    },
    {
        detail_info: 'Подшипник генератора',
        detail_code: '6303.2RSR.C3',
        detail_manufacturer: 'FAG',
        detail_image: './images/details/generator/generator_bearing_fag_6202_6303.jpg',
        // detail_scheme: './images/details/',
        detail_more: 'подшипник генератора! 17x47x14',
    },
    {
        detail_info: 'Подшипник генератора',
        detail_code: '6202.2RSR.C3',
        detail_manufacturer: 'FAG',
        detail_image: './images/details/generator/generator_bearing_fag_6202_6303.jpg',
        // detail_scheme: './images/details/',
        detail_more: 'подшипник генератора! 15x35x11',
    },
]

// КОНДИЦИОНЕР

const AIR_CONDITIONER = [
    {
        detail_info: 'Радиатор кондиционера',
        detail_code: 'CR500P',
        detail_manufacturer: 'AVG',
        detail_image: './images/details/condenser_air_conditioning/condenser_air_conditioning_avg_CR500P.jpg',
        detail_scheme: './images/details/condenser_air_conditioning/condenser_air_conditioning.gif',
        detail_more: '',
    },
    {
        detail_info: 'Радиатор кондиционера',
        detail_code: '4770816',
        detail_manufacturer: 'Denso',
        detail_image: './images/details/condenser_air_conditioning/condenser_air_conditioning_denso_477-0816.jpg',
        detail_scheme: './images/details/condenser_air_conditioning/condenser_air_conditioning.gif',
        detail_more: '',
    },
    {
        detail_info: 'Радиатор кондиционера',
        detail_code: '94906',
        detail_manufacturer: 'Nissens',
        detail_image: './images/details/condenser_air_conditioning/condenser_air_conditioning_nissens_94906.jpg',
        detail_scheme: './images/details/condenser_air_conditioning/condenser_air_conditioning.gif',
        detail_more: '',
    },
    {
        detail_info: 'Радиатор кондиционера',
        detail_code: '2460K8C1',
        detail_manufacturer: 'Polcar',
        detail_image: './images/details/condenser_air_conditioning/condenser_air_conditioning_polcar_2460K8C1.jpg',
        detail_scheme: './images/details/condenser_air_conditioning/condenser_air_conditioning.gif',
        detail_more: '',
    },
    {
        detail_info: 'Радиатор кондиционера',
        detail_code: 'KTT110207',
        detail_manufacturer: 'Thermotec',
        detail_image: './images/details/condenser_air_conditioning/condenser_air_conditioning_thermotec_KTT110207.jpg',
        detail_scheme: './images/details/condenser_air_conditioning/condenser_air_conditioning.gif',
        detail_more: '',
    },
]

const QWERTY = [
    {
        detail_info: '',
        detail_code: '',
        detail_manufacturer: '',
        detail_image: './images/details/',
        detail_scheme: './images/details/',
        detail_more: '',
    },
]

export const HEADERS = [
    // {
    //     title: 'МОИ ЗАПЧАСТИ',
    //     subtitles: [
    //         {
    //             subtitle: 'УБРАТЬ ЭТО НАХРЕН',
    //             details: null
    //         }
    //     ]
    // },
    {
        title: 'Детали ТО',
        subtitles: [
            {
                subtitle: 'Маслянный фильтр',
                details: OIL_FILTERS
            },
            {
                subtitle: 'Воздушный фильтр',
                details: AIR_FILTERS
            },
            {
                subtitle: 'Фильтр салона',
                details: CABIN_FILTERS
            },
            {
                subtitle: 'Фильтр АКПП',
                details: TRANSMISSION_FILTERS
            },
            {
                subtitle: 'Свечи зажигания',
                details: SPARK_PLUGS
            },
            {
                subtitle: 'Ремень поликлинковый',
                details: V_RIBBED_BELTS
            },
            {
                subtitle: 'Ремень ГРМ',
                details: TIMING_BELTS
            },
            {
                subtitle: 'Термостат',
                details: THERMOSTATS
            },
            {
                subtitle: 'Пробка сливного отверстия',
                details: PLUG_OIL_DRAIN
            },
            {
                subtitle: 'Щетки стеклоочистителя',
                details: WIPERS
            },
            {
                subtitle: 'Насос системы охлаждения (помпа)',
                details: WATER_PUMPS
            },
            {
                subtitle: 'Колодки тормозные',
                sub_subtitles:  [
                    {
                        sub_subtitle: 'Передние тормозные колодки',
                        details: FRONT_BRAKE_PADS
                    },
                    {
                        sub_subtitle: 'Задние тормозные колодки',
                        details: REAR_BRAKE_PADS
                    },
                    {
                        sub_subtitle: 'Колодки стояночного тормоза',
                        details: PARKING_BRAKE_PADS
                    },
                ]
            },
        ]
    },
    {
        title: 'Двигатель',
        subtitles: [
            {
                subtitle: 'Прокладки',
                sub_subtitles: [
                    {
                        sub_subtitle: 'Прокладка головки цилиндра',
                        details: CYLINDER_HEAD_GASKETS
                    },
                    {
                        sub_subtitle: 'Прокладка клапанной крышки',
                        details: VALVE_COVER_GASKETS
                    },
                    {
                        sub_subtitle: 'Колпачёк маслоотражающий',
                        details: SEAL_VALVE_GUIDE
                    },
                    {
                        sub_subtitle: 'Прокладка впускного коллектора',
                        details: INTAKE_MANIFOLD_GASKETS
                    },
                    {
                        sub_subtitle: 'Прокладка выпускного коллектора',
                        details: EXHAUST_MANIFOLD_GASKETS
                    },
                    {
                        sub_subtitle: 'Прокладка маслянного поддона',
                        details: OIL_PAN_GASKETS
                    },
                    {
                        sub_subtitle: 'Герметизация топливной системы',
                        details: FUEL_SYSTEM_SEALING
                    },
                    {
                        sub_subtitle: 'Герметизация охлаждающей жидкости',
                        details: THERMOSTAT_HOUSING_GASKETS.concat(COOLANT_SEALING)
                        // details: COOLANT_SEALING.concat(THERMOSTAT_HOUSING_GASKETS)
                    },
                    {
                        sub_subtitle: 'Герметизация в системе циркуляции масла',
                        details: SEALING_OIL_CIRCULATION_SYSTEM
                    },
                    {
                        sub_subtitle: 'Сальники, комплект уплотнений',
                        details: OIL_SEALS
                    },
                ]
            },
            {
                subtitle: 'Система подачи воздуха',
                sub_subtitles: [
                    {
                      sub_subtitle: 'Корпус воздушного фильтра',
                      details: AIR_TEMPERATURE_SENSOR
                    },
                    {
                        sub_subtitle: 'Коллектор впускной',
                        details: INTAKE_MANIFOLD_GASKETS
                    },
                    {
                        sub_subtitle: 'Заслонка дроссельная',
                        details: THROTTLE_VALVE
                    },
                    {
                        sub_subtitle: 'Регулирование, управление',
                        details: ''
                    },
                ]
            },
            {
                subtitle: 'Механизм газораспределения ГРМ',
                // details: GAS_DISTRIBUTION_MECHANISM
                sub_subtitles: [
                    {
                        sub_subtitle: 'Шестерни',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Шестерня коленвала',
                        details: CRANKSHAFT_GEAR
                    },
                    {
                        sub_subtitle: 'Распредвал',
                        details: CAMSHAFT
                    },
                    {
                        sub_subtitle: 'Коромысло, балансир',
                        details: ROCKERS
                    },
                    {
                        sub_subtitle: 'Комплект ГРМ',
                        details: TIMING_KIT.concat(TIMING_BELTS)
                    },
                    {
                        sub_subtitle: 'Клапан, регулировка',
                        details: ''
                    },
                ]
            },
            {
                subtitle: 'Блок-картер',
                details: CRANKCASE_BLOCK
            },
            {
                subtitle: 'Электроника двигателя',
                details: COOLANT_SENSORS
            },
            {
                subtitle: 'Кривошипношатунный механизм',
                // details: CRANK_MECHANISM
                sub_subtitles: [
                    {
                        sub_subtitle: 'Коленчатый вал, вкладыши',
                        details: LINERS
                    },
                    {
                        sub_subtitle: 'Шатун',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Поршень',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Сальник, комплекты уплотнений',
                        details: ''
                    },
                ]
            },
            {
                subtitle: 'Система смазки (насос)',
                // details: LUBRICATION_MECHANISM
                sub_subtitles: [
                    {
                        sub_subtitle: 'Фильтр маслянный',
                        details: OIL_FILTERS
                    },
                    {
                        sub_subtitle: 'Корпус и прокладка маслянного фильтра',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Поддон маслянный',
                        details: OIL_PAN_GASKETS.concat(PLUG_OIL_DRAIN)
                    },
                    {
                        sub_subtitle: 'Датчик давления масла',
                        details: OIL_PRESSURE_SWITCH
                    },
                    {
                        sub_subtitle: 'Указатель уровня масла',
                        details: OIL_DIPSTICK
                    },
                    {
                        sub_subtitle: 'Насос маслянный, комплекующие',
                        details: ''
                    },
                ]
            },
            {
                subtitle: 'Крепление двигателя (подушки)',
                details: MOUNTS
            },
            {
                subtitle: 'Система очистки ОГ (ЕГР)',
                details: EXHAUST_GAS_NEUTRALIZATION
            },
            {
                subtitle: 'Ременной привод',
                // details: DRIVE_PULLEYS
                sub_subtitles: [
                    {
                        sub_subtitle: 'Шкив',
                        details: PULLEYS
                    },
                    {
                        sub_subtitle: 'Механизм свободного хода генератора',
                        details: PULLEY_ALTERNATOR
                    },
                    {
                        sub_subtitle: 'Ремень поликлинковый, ролики',
                        details: V_RIBBED_BELTS.concat(BYPASS_ROLLERS)
                    },
                    {
                        sub_subtitle: 'Комплект ГРМ',
                        details: TIMING_KIT.concat(TIMING_BELTS)
                    },
                ]
            },
            {
                subtitle: 'Приготовление смеси (форсунки)',
                // details: FUEL_PREPARATION
                sub_subtitles: [
                    {
                        sub_subtitle: 'Прокладка',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Заслонка дроссельная',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Форсунка',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Управление холостам ходом',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Датчик кислорода',
                        details: OXYGEN_SENSORS
                    },
                ]
            },
            {
                subtitle: 'Головка цилиндра',
                // details: CYLINDER_HEAD
                sub_subtitles: [
                    {
                        sub_subtitle: 'Прокладка головки цилиндра',
                        details: CYLINDER_HEAD_GASKETS
                    },
                    {
                        sub_subtitle: 'Крышка клапанная',
                        details: VALVE_COVER_GASKETS
                    },
                    {
                        sub_subtitle: 'Прокладка впускного, выпускного коллектора',
                        details: INTAKE_MANIFOLD_GASKETS.concat(EXHAUST_MANIFOLD_GASKETS)
                    },
                    {
                        sub_subtitle: 'Болт головки блока цилиндра',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Крышка маслозаливной горловины',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Головка цилиндра',
                        details: ''
                    },
                ]
            },
        ]
    },
    {
        title: 'Топливная система',
        subtitles: [
            {
                subtitle: 'Бак топливный',
                details: TANK_FUEL
            },
            {
                subtitle: 'Клапан',
                details: LEAK_DETECTION_PUMP
            },
            {
                subtitle: 'Датчик уровня топлива',
                details: FUEL_LEVEL_SENSORS
            },
            {
                subtitle: 'Регулятор давления подачи топлива',
                details: REGULATOR_FUEL_PRESSURE
            },
            {
                subtitle: 'Насос топливный, комплектующие',
                details: FUEL_PUMP
            },
        ],
    },
    {
        title: 'Система охлаждения',
        subtitles: [
            {
                subtitle: 'Термостат, прокладка',
                details: THERMOSTATS.concat(THERMOSTAT_HOUSING_GASKETS)
            },
            {
                subtitle: 'Расширительный бачок, крышка',
                details: EXPANSION_TANK.concat(EXPANSION_TANK_CAP)
            },
            {
                subtitle: 'Радиатор маслянный, водяной',
                // details: COOLING_RADIATORS
                sub_subtitles: [
                    {
                        sub_subtitle: 'Радиатор системы охлаждения',
                        details: RADIATOR_ENGINE_COOLING
                    },
                    {
                        sub_subtitle: 'Радиатор печки',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Расширительный бачок',
                        details: EXPANSION_TANK
                    },
                ]
            },
            {
                subtitle: 'Патрубки системы охлаждения',
                details: RADIATOR_HOSES.concat(THERMOSTAT_HOUSING)
            },
            {
                subtitle: 'Выключатель, датчик ОЖ',
                details: COOLANT_SENSORS
            },
            {
                subtitle: 'Вентилятор охлаждения радиатора',
                details: RADIATOR_FANS
            },
            {
                subtitle: 'Насос системы охлаждения (помпа)',
                details: WATER_PUMPS
            },
        ],
    },
    {
        title: 'Система выпуска',
        subtitles: [
            {
                subtitle: 'Нейтрализация ОГ',
                details: EXHAUST_GAS_NEUTRALIZATION
            },
            {
                subtitle: 'Глушитель в сборе/части',
                details: EXHAUST
            },
            {
                subtitle: 'Датчик кислорода (лямбда-зонд)',
                details: OXYGEN_SENSORS
            },
            {
                subtitle: 'Коллектор выпускной (прокладки)',
                details: EXHAUST_MANIFOLD
            },
            {
                subtitle: 'Трубы (гофра)',
                // details: MUFFLER_CORRUGATION
            },
            {
                subtitle: 'Детали монтажа',
                // details: ISOLATOR_EXHAUST
            },
        ],
    },
    {
        title: 'Трансмиссия',
        subtitles: [
            {
                subtitle: 'Автоматическая коробка передач',
                // details: AUTOMATIC_TRANSMISSION
                sub_subtitles: [
                    {
                        sub_subtitle: 'Блок соленоидов',
                        details: SHIFT_SOLENOID
                    },
                    {
                        sub_subtitle: 'Датчики скорости',
                        details: SPEED_SENSORS
                    },
                    {
                        sub_subtitle: 'Крышка АКПП, дифференциала',
                        details: TRANSMISSION_CASE_COVERS
                    },
                    {
                        sub_subtitle: 'Поддон АКПП',
                        details: TRANSMISSION_PANS.concat(TRANSMISSION_FILTERS)
                    },
                ]

                    // TRANSMISSION_PANS.concat(TRANSMISSION_CASE_COVERS, TRANSMISSION_FILTERS)
            },
            {
                subtitle: 'Привод колеса (полуоси)',
                details: WHEEL_DRIVE
            },
            {
                subtitle: 'Главная передача: раздатка, кардан (AWD)',
                // details: CARDAN_SHAFT
                sub_subtitles: [
                    {
                        sub_subtitle: 'Угловой редуктор (раздатка)',
                        details: null
                    },
                    {
                      sub_subtitle: 'Кардан',
                      details: CARDAN_SHAFT
                    },
                    {
                        sub_subtitle: 'Задний редуктор',
                        details: REAR_REDUCER
                    },

                ]
            },
        ],
    },
    {
        title: 'Ходовая часть',
        subtitles: [
            {
                subtitle: 'Пружина подвески',
                details: SPRINGS
            },
            {
                subtitle: 'Опора амортизатора',
                details: SHOCK_ABSORBER_SUPPORTS
            },
            {
                subtitle: 'Амортизатор подвески',
                details: SHOCK_ABSORBERS
            },
            {
                subtitle: 'Рычаги и тяги подвески',
                details: LEVERS_AND_PULLS
            },
            {
                subtitle: 'Стабилизатор, крепление',
                details: STABILIZER
            },
            {
                subtitle: 'Ступица колеса, составляющие',
                details: HUBS
            },
            {
                subtitle: 'Крепление амортизатора подвески',
                details: SHOCK_ABSORBER_MOUNT
            },
            {
                subtitle: 'Кулак поворотный, составляющие',
                // details: ROUNDED_FIST
            },
            {
                subtitle: 'Балка моста, подвеска оси',
                details: BRIDGE_BEAM
            },
            // {
            //     subtitle: 'Колесо, крепление колеса',
            //     // details: WHEEL
            // },
            {
                subtitle: 'Система контроля давления в шинах',
                // details: TPMS
            },
            {
                subtitle: 'Колеса, шины',
                // details: TIRES
            },
        ],
    },
    {
        title: 'Рулевое управление',
        subtitles: [
            {
                subtitle: 'Шарниры (рулевые наконечники)',
                details: STEERING_TIPS
            },
            {
                subtitle: 'Рулевая рейка, Насос ГУР',
                details: POWER_STEERING_PUMPS
            },
            {
                subtitle: 'Бачок ГУР',
                // details: HYDRAULIC_RESERVOIR
            },
            {
                subtitle: 'Тяга рулевая',
                details: TIE_ROD
            },
        ],
    },
    {
        title: 'Тормозная система',
        subtitles: [
            {
                subtitle: 'Дисковый тормоз',
                sub_subtitles: [
                    {
                        sub_subtitle: 'Диск тормозной',
                        details: BRAKE_DISCS
                    },
                    {
                        sub_subtitle: 'Колодки тормозные',
                        details: FRONT_BRAKE_PADS.concat(REAR_BRAKE_PADS)
                    },
                    {
                        sub_subtitle: 'Детали тормозной системы',
                        details: BRAKE_PARTS
                    },
                ]
            },
            {
                subtitle: 'Барабанный тормозной механизм',
                sub_subtitles: [
                    {
                        sub_subtitle: 'Колодки тормозные',
                        details: PARKING_BRAKE_PADS
                    },
                    {
                        sub_subtitle: 'Стояночный тормоз',
                        details: PARKING_BRAKE
                    },
                ]
            },
            {
                subtitle: 'Тросы, тяги и рычаги тормозной системы',
                details: BRAKE_CABLES
            },
            {
                subtitle: 'Стояночный тормоз',
                details: PARKING_BRAKE
            },
            {
                subtitle: 'Шланги тормозные',
                details: BRAKE_HOSES
            },
            {
                subtitle: 'Тормозной усилитель',
                // details: BRAKE_BOOSTER
            },
            {
                subtitle: 'Главный тормозной усилитель',
                // details: MAIN_BRAKE_BOOSTER
            },
            {
                subtitle: 'Регулировка динамики движения',
                // details: DYNAMICS_CONTROL
            },
            {
                subtitle: 'Выключатель фонаря сигнала торможения',
                // details: BRAKE_LIGHT_SWITCH
            },
            {
                subtitle: 'Суппорт тормозной',
                details: BRAKE_PARTS
            },
        ],
    },
    {
        title: 'Электрооборудование',
        subtitles: [
            {
                subtitle: 'Система стартера',
                // details: STARTER_SYSTEM
            },
            {
                subtitle: 'Генератор, составляющие',
                details: GENERATOR
            },
            {
                subtitle: 'Головной свет, составляющие',
                // details: HEADLIGHT
            },
            {
                subtitle: 'Дополнительное освещение',
                // details: ADDITIONAL_LIGHTING
            },
            {
                subtitle: 'Система освещения',
                // details: LIGHTING_SYSTEM
            },
            {
                subtitle: 'Выключатель, реле, блок управления освещения',
                // details: LIGHTING_CONTROL_UNIT
            },
            {
                subtitle: 'Датчики',
                // details: SENSORS
            },
            {
                subtitle: 'Контрольные приборы',
                // details: CONTROL_DEVICES
            },
            {
                subtitle: 'Система очистки окон',
                // details: WINDOW_CLEANING_SYSTEM
            },
            {
                subtitle: 'Дополнительные удобства',
                // details: ADDITIONAL_AMENITIES
            },
        ],
    },
    {
        title: 'Отопление / Кондиционирование',
        subtitles: [
            {
                subtitle: 'Отопление',
                // details: HEATING
            },
            {
                subtitle: 'Кондиционер',
                details: AIR_CONDITIONER
            },
        ],
    },
    {
        title: 'Детали салона',
        subtitles: [
            {
                subtitle: 'Подъемное устройство',
                // details: LIFTING_DEVICE
            },
            {
                subtitle: 'Ручки',
                // details: PENS
            },
            {
                subtitle: 'Багажник',
                // details: TRUNK
            },
            {
                subtitle: 'Замок',
                // details: LOCK
            },
        ],
    },
    {
        title: 'Детали кузова',
        subtitles: [
            {
                subtitle: 'Автомобиль, передняя часть',
                // details: FRONT_END
                details: FRONT_BUMPER_REFLECTOR
            },
            {
                subtitle: 'Кабина пассажира',
                // details: PASSENGER_CABIN
            },
            {
                subtitle: 'Автомобиль, задняя часть',
                // details: REAR_END
            },
            {
                subtitle: 'Кузовные детали',
                // details: BODY_PARTS
            },
            {
                subtitle: 'Облицовка, защитные накладки, эмблемы',
                // details: FACING
            },
            {
                subtitle: 'Остекление, зеркала',
                details: GLAZING_MIRRORS
            },
            {
                subtitle: 'Головной свет',
                // details: HEADLIGHT
            },
            {
                subtitle: 'Дополнительное освещение',
                // details: ADDITIONAL_LIGHTING
            },
            {
                subtitle: 'Освещение',
                // details: LIGHTING
            },
        ],
    },
]

// console.log(HEADERS);

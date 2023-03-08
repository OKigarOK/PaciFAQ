// ДЕТАЛИ ТО

// DETAIL_IMAGE - основная картинка

const OIL_FILTERS = [
    {
        detail_info: 'Фильтр маслянный',
        detail_code: '5281090AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/oil_filters/oil-filter_mopar_05281090AB.jpg',
        detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'У многих на этом фильтре появляется стук',
        // detail_options: [{},],
    },
    {
        detail_info: 'Фильтр маслянный',
        detail_code: 'PH16',
        detail_manufacturer: 'Fram',
        detail_image: './images/details/oil_filters/oil-filter_fram_PH16.jpg',
        detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'Нормальный фильтр, но после 5000 пробега превращается в г..но',
        // detail_options: [{},],
    },
    {
        detail_info: 'Фильтр маслянный',
        detail_code: 'OC23',
        detail_manufacturer: 'Mahle/Knecht',
        detail_image: './images/details/oil_filters/oil-filter_mahle_OC23.jpg',
        detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'Норм фильтр',
        // detail_options: [{},],
    },
    {
        detail_info: 'Фильтр маслянный',
        detail_code: 'OC236',
        detail_manufacturer: 'Mahle/Knecht',
        detail_image: './images/details/oil_filters/oil-filter_mahle_OC236.jpg',
        detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'Тоже норм фильтр',
        // detail_options: [{},],
    },
    {
        detail_info: 'Ремень в обход кондиционера',
        detail_code: 'TEST',
        detail_manufacturer: '',
        detail_image: './images/details/oil_filters/oil-filter_fram_PH16.jpg',
        // detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'Нормальный фильтр, но после 5000 пробега превращается в г..но',
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
]

const CABIN_FILTERS = [
    {
        detail_info: 'Фильтр салона',
        detail_code: '82205905',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/cain_filters/cabin-filter_mopar_82205905.jpg',
        detail_scheme: './images/details/cain_filters/cabin-filter.gif',
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
        detail_more: '',
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
]

const V_RIBBED_BELTS = [
    {
        detail_info: 'Ремень поликлинковый',
        detail_code: '4861850AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/v_ribbed_belts/v-ribbed-belts_mopar_4861850AA.jpg',
        detail_scheme: './images/details/v_ribbed_belts/v-ribbed-belt.gif',
        detail_more: 'можно любой ремень с размерами 6PK2370-2380. Длина в обход компрессора кондиционера 2050-2100мм',
    }
]

const TIMING_BELTS = [
    {
        detail_info: 'Ремень ГРМ',
        detail_code: '4792353',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/timing_belts/timing-belt_mopar_4792353.jpg',
        detail_scheme: './images/details/timing_belts/timing-belt.gif',
        detail_more: '',
    }
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
        detail_more: 'термостат на 91 градус',
    }
]

const WATER_PUMPS = [
    {
        detail_info: 'Водяной насос (малая помпа)',
        detail_code: 'V9900085',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/water_pumps/water_pump_mopar_V9900085.jpg',
        detail_scheme: './images/details/water_pumps/water_pump.gif',
        detail_more: 'малая помпа, на автомобили 2003-2004 годов выпуска',
    }
]

const FRONT_BRAKE_PADS = [
    {
        detail_info: 'Передние тормозные колодки',
        detail_code: 'PBP7000',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/brake_pads/front-brake-pad_patron_PBP7000.jpg',
        detail_scheme: './images/details/brake_pads/front-brake-pad.gif',
        detail_more: 'нормальные колодки цена/качество',
    },
]

const REAR_BRAKE_PADS = [
    {
        detail_info: 'Задние тормозные колодки',
        detail_code: 'PBP7001',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/brake_pads/rear_brake_pad_patron_PBP7001.jpg',
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

// const WIPERS = [
//     // {
//     //     detail_info: '',
//     //     detail_code: '',
//     //     detail_manufacturer: '',
//     //     detail_image: './images/menu/like.png',
//     //     detail_scheme: './images/details/',
//     //     detail_more: '',
//     // },
// ]

// ДВИГАТЕЛЬ

// ПРОКЛАДКИ

const VALVE_COVER_GASKETS = [
    {
        detail_info: 'Прокладка клапанной крышки',
        detail_code: 'VS50248',
        detail_manufacturer: 'Mahle',
        detail_image: './images/details/gaskets/valve_cover_gaskets/valve_cover_gasket_mahle_VS50248.jpg',
        detail_scheme: './images/details/gaskets/valve_cover_gaskets/valve_cover_gasket.gif',
        detail_more: 'комплект на две головы с кольцами под свечные колодцы',
    },
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
        detail_code: '4663852AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/intake_manifold_gaskets/intake_manifold_gasket_mopar_04663852AB.jpg',
        detail_scheme: './images/details/gaskets/intake_manifold_gaskets/intake_manifold_gasket.gif',
        detail_more: 'комплект из 2-х прокладок, очень часто именно из-за них уходит антифриз из системы',
    },
]

const EXHAUST_MANIFOLD_GASKETS = [
    {
        detail_info: 'Прокладка выпускного коллектора',
        detail_code: '04648913AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_mopar_04648913AA.jpg',
        detail_scheme: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка выпускного коллектора',
        detail_code: '04648915AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_mopar_04648915AA.jpg',
        detail_scheme: './images/details/gaskets/exhaust_manifold_gaskets/exhaust_manifold_gasket_2.gif',
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
        detail_info: 'Прокладка водяного насоса (помпы)',
        detail_code: '04659430AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/coolant_sealing/water_pump_gasket_mopar_04659430AB.jpg',
        detail_scheme: './images/details/gaskets/coolant_sealing/water_pump_gasket.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка нижнего патрубка радиатора',
        detail_code: '04792239AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/coolant_sealing/lower_radiator_hose_gasket_mopar_04792239AB.jpg',
        detail_scheme: './images/details/gaskets/coolant_sealing/lower_radiator_hose_gasket.gif',
        detail_more: '',
    },
    {
        detail_info: 'Прокладка верхнего патрубка (термостата) радиатора ',
        detail_code: '04781674AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/gaskets/coolant_sealing/upper_radiator_hose_gasket_mopar_04781674AA.jpg',
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
        detail_info: 'Гидронатяжитель ролика ремня ГРМ',
        detail_code: '04892109AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/timing_kit/timing_belt_tensioner_mopar_04892109AA.jpg',
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
]

const ENGINE_ELECTRONICS = [
    {
        detail_info: 'Датчик температуры охлаждающей жидкости',
        detail_code: '05269870AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/engine_electronics/sensor_coolant_temperature_mopar_05269870AB.jpg',
        detail_scheme: './images/details/engine_electronics/sensor_coolant_temperature.gif',
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

// ТОРМОЗНАЯ СИСТЕМА

const BRAKE_DISCS = [
    {
        detail_info: 'Диск тормозной передний',
        detail_code: 'PBD53019',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/brake_discs/front_brake_disc_patron_PBD53019.jpg',
        detail_scheme: './images/details/brake_discs/front_brake_disc.gif',
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
        detail_code: 'C4T61532H',
        detail_manufacturer: 'OBK',
        detail_image: './images/details/springs/front_spring_obk_C4T61562H.jpg',
        detail_scheme: './images/details/springs/front_spring.gif',
        detail_more: 'Весьма сомнительное занятие по замене))) Нужно греть, гнуть, подгонять. Почитать можно на Д2',
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
        detail_code: 'C4T61881H',
        detail_manufacturer: 'OBK',
        detail_image: './images/details/springs/rear_spring_obk_C4T61881H.jpg',
        detail_scheme: './images/details/springs/rear_spring.gif',
        detail_more: 'Пружина от "Прадика", желательно подпилить, но кто-то гоняет и так',
    },
    {
        detail_info: 'Задняя пружина подвески',
        detail_code: '4014219',
        detail_manufacturer: 'Lesjofors',
        detail_image: './images/details/springs/rear_spring_lesjofors_4014219.jpeg',
        detail_scheme: './images/details/springs/rear_spring.gif',
        detail_more: 'Хороший производитель, пружины подбирались по параметрам оригинала, но ещё не устанавливались',
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
]

export const HEADERS = [
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
                // details: WIPERS
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
                        details: COOLANT_SEALING
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
                        details: ''
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
                        details: ''
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
                details: ENGINE_ELECTRONICS
            },
            {
                subtitle: 'Кривошипношатунный механизм',
                // details: CRANK_MECHANISM
                sub_subtitles: [
                    {
                        sub_subtitle: 'Коленчатый вал, вкладыши',
                        details: ''
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
                        details: ''
                    },
                    {
                        sub_subtitle: 'Датчик давления масла',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Указатель уровня масла',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Насос маслянный, комплекующие',
                        details: ''
                    },
                ]
            },
            {
                subtitle: 'Крепление двигателя (подушки)',
                // details: MOUNTS
            },
            {
                subtitle: 'Система очистки ОГ (ЕГР)',
                // details: EXHAUST_GAS_CLEANING_SYSTEM
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
                        details: ''
                    },
                    {
                        sub_subtitle: 'Крышка клапанная',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Прокладка впускного, выпускного коллектора',
                        details: ''
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
                // details: TANK_FUEL
            },
            {
                subtitle: 'Клапан',
                // details: LEAK_DETECTION_PUMP
            },
            {
                subtitle: 'Датчик уровня топлива',
                // details: FUEL_SENDING_UNIT
            },
            {
                subtitle: 'Регулятор давления подачи топлива',
                // details: REGULATOR_FUEL_PRESSURE
            },
            {
                subtitle: 'Насос топливный, комплектующие',
                // details: FUEL_PUMP
            },
        ],
    },
    {
        title: 'Система охлаждения',
        subtitles: [
            {
                subtitle: 'Термостат, прокладка',
                // details: THERMOSTAT_PAD
            },
            {
                subtitle: 'Расширительный бачок, крышка',
                // details: EXPANSION_TANK
            },
            {
                subtitle: 'Радиатор маслянный, водяной',
                // details: COOLING_RADIATORS
                sub_subtitles: [
                    {
                        sub_subtitle: 'Радиатор системы охлаждения',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Радиатор печки',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Расширительный бачок',
                        details: ''
                    },
                ]
            },
            {
                subtitle: 'Патрубки системы охлаждения',
                // details: PIPE_BRANCH
            },
            {
                subtitle: 'Выключатель, датчик ОЖ',
                // details: COOLANT_SENSOR
            },
            {
                subtitle: 'Вентилятор охлаждения радиатора',
                // details: RADIATOR_FANS
            },
            {
                subtitle: 'Насос системы охлаждения (помпа)',
                // details: WATER_PUMP
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
            },
            {
                subtitle: 'Привод колеса (полуоси)',
                // details: WHEEL_DRIVE
            },
            {
                subtitle: 'Главная передача: раздатка, кардан (AWD)',
                // details: CARDAN_SHAFT
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
                // details: LEVERS_AND_PULLS
            },
            {
                subtitle: 'Стабилизатор, крепление',
                // details: STABILIZER
            },
            {
                subtitle: 'Ступица колеса, составляющие',
                // details: HUB
            },
            {
                subtitle: 'Крепление амортизатора подвески',
                // details: SHOCK_ABSORBER_MOUNT
            },
            {
                subtitle: 'Кулак поворотный, составляющие',
                // details: ROUNDED_FIST
            },
            {
                subtitle: 'Балка моста, подвеска оси',
                // details: BRIDGE_BEAM
            },
            {
                subtitle: 'Колесо, крепление колеса',
                // details: WHEEL
            },
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
                // details: END_TIE_ROD
            },
            {
                subtitle: 'Рейка рулевая, насос ГУР',
                // details: STEERING_RAIL
            },
            {
                subtitle: 'Бачок ГУР',
                // details: HYDRAULIC_RESERVOIR
            },
            {
                subtitle: 'Тяга рулевая',
                // details: TIE_ROD
            },
        ],
    },
    {
        title: 'Тормозная система',
        subtitles: [
            {
                subtitle: 'Дисковый тормоз',
                // details: BRAKE_DISC
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
                        details: ''
                    },
                ]
            },
            {
                subtitle: 'Барабанный тормозной механизм',
                // details: DRUM_BRAKE
                sub_subtitles: [
                    {
                        sub_subtitle: 'Колодки тормозные',
                        details: PARKING_BRAKE_PADS
                    },
                    {
                        sub_subtitle: 'Стояночный тормоз',
                        details: ''
                    },
                ]
            },
            {
                subtitle: 'Тросы, тяги и рычаги тормозной системы',
                // details: BRAKE_CABLES
            },
            {
                subtitle: 'Стояночный тормоз',
                // details: PARKING_BRAKE
            },
            {
                subtitle: 'Шланги тормозные',
                // details: BRAKE_HOSE
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
                // details: BRAKE_CALIPER
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
                // details: GENERATOR
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
                // details: AIR_CONDITIONER
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
                // details: GLAZING_MIRRORS
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



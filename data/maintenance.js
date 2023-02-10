// ДЕТАЛИ ТО

const OIL_FILTERS = [
    {
        detail_info: 'Фильтр маслянный',
        detail_code: '5281090AB',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/oil_filters/oil-filter_mopar_05281090AB.jpg',
        detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'Какая-то дополнительная информация...',
        // detail_options: [{},],
    },
    {
        detail_info: 'Фильтр маслянный',
        detail_code: 'PH16',
        detail_manufacturer: 'Fram',
        detail_image: './images/details/oil_filters/oil-filter_fram_PH16.jpg',
        detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'Что-то ещё...',
        // detail_options: [{},],
    },
    {
        detail_info: 'Фильтр маслянный',
        detail_code: 'OC23',
        detail_manufacturer: 'Mahle/Knecht',
        detail_image: './images/details/oil_filters/oil-filter_mahle_OC23.jpg',
        detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'Что-то ещё...',
        // detail_options: [{},],
    },
    {
        detail_info: 'Фильтр маслянный',
        detail_code: 'OC236',
        detail_manufacturer: 'Mahle/Knecht',
        detail_image: './images/details/oil_filters/oil-filter_mahle_OC236.jpg',
        detail_scheme: './images/details/oil_filters/oil-filter.gif',
        detail_more: 'Что-то ещё...',
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
        detail_more: '',
    },
]

const V_RIBBED_BELTS = [
    {
        detail_info: 'Ремень поликлинковый',
        detail_code: '4861850AA',
        detail_manufacturer: 'Mopar',
        detail_image: './images/details/v_ribbed_belts/v-ribbed-belts_mopar_4861850AA.jpg',
        detail_scheme: './images/details/v_ribbed_belts/v-ribbed-belt.gif',
        detail_more: 'Можно любой ремень с размерами 6PK 2370-2380. Длинна в обходк компрессора кондиционера 2050-2100мм',
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

const FRONT_BRAKE_PADS = [
    {
        detail_info: 'Передние тормозные колодки',
        detail_code: 'PBP7000',
        detail_manufacturer: 'Patron',
        detail_image: './images/details/brake_pads/front-brake-pad_patron_PBP7000.jpg',
        detail_scheme: './images/details/brake_pads/front-brake-pad.gif',
        detail_more: '',
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
        detail_more: 'Стандартный болт имеет резьбу M14-1.5mm',
    },
]

const WIPERS = [
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
                // details: THERMOSTAT
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
                // details: WATER_PUMPS
            },
            {
                subtitle: 'Колодки тормозные',
                // details: BRAKE_PADS,
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
                        // details: CYLINDER_HEAD_GASKETS
                    },
                    {
                        sub_subtitle: 'Прокладка клапанной крышки',
                        // details: VALVE_COVER_GASKETS
                    },
                    {
                        sub_subtitle: 'Колпачёк маслоотражающий',
                        // details: OIL_REFLECTING_CAP
                    },
                    {
                        sub_subtitle: 'Прокладка впускного коллектора',
                        // details: INTAKE_MANIFOLD_GASKETS
                    },
                    {
                        sub_subtitle: 'Прокладка выпускного коллектора',
                        // details: EXHAUST_MANIFOLD_GASKETS
                    },
                    {
                        sub_subtitle: 'Прокладка маслянного поддона',
                        // details: OIL_PAN_GASKETS
                    },
                    {
                        sub_subtitle: 'Герметизация топливной системы',
                        // details: FUEL_SYSTEM_SEALING
                    },
                    {
                        sub_subtitle: 'Герметизация охлаждающей жидкости',
                        // details: COOLANT_SEALING
                    },
                    {
                        sub_subtitle: 'Герметизация в системе циркуляции масла',
                        // details: SEALING_OIL_CIRCULATION_SYSTEM
                    },
                    {
                        sub_subtitle: 'Сальники, комплект уплотнений',
                        // details: OIL_SEALS
                    },
                ]
            },
            {
                subtitle: 'Система подачи воздуха',
                // details: AIR_SUPPLY_SYSTEM
                sub_subtitles: [
                    {
                      sub_subtitle: 'Корпус воздушного фильтра',
                      details: ''
                    },
                    {
                        sub_subtitle: 'Коллектор впускной',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Заслонка дроссельная',
                        details: ''
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
                        details: ''
                    },
                    {
                        sub_subtitle: 'Распредвал',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Коромысло, балансир',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Комплект ГРМ',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Клапан, регулировка',
                        details: ''
                    },
                ]
            },
            {
                subtitle: 'Блок-картер',
                // details: CRANKCASE_BLOCK
            },
            {
                subtitle: 'Электроника двигателя',
                // details: CRANKCASE_BLOCK
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
                        details: ''
                    },
                    {
                        sub_subtitle: 'Механизм свободного хода генератора',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Ремень поликлинковый, ролики',
                        details: ''
                    },
                    {
                        sub_subtitle: 'Комплект ГРМ',
                        details: ''
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
                        details: ''
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
                subtitle: 'Нейтрализация ОГ (катализатор)',
                // details: CATALYTIC_CONVERTER
            },
            {
                subtitle: 'Глушитель в сборе/части',
                // details: EXHAUST
            },
            {
                subtitle: 'Датчик кислорода (лямбда-зонд)',
                // details: OXYGEN
            },
            {
                subtitle: 'Коллектор выпускной (прокладки)',
                // details: EXHAUST_MANIFOLD
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
                // details: SPRINGS
            },
            {
                subtitle: 'Опора амортизатора',
                // details: SHOCK_ABSORBER_SUPPORT
            },
            {
                subtitle: 'Амортизатор подвески',
                // details: SHOCK_ABSORBER
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
                        details: ''
                    },
                    {
                        sub_subtitle: 'Колодки тормозные',
                        details: ''
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
                        details: ''
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



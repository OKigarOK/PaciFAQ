const OIL_FILTERS = [
    {
        detail_info: 'Фильтр маслянный',
        detail_scheme: './images/details/oil_filters/77102.gif',

        detail_options: [
            {

            },
        ],

        detail_image: './images/details/oil_filters/oil-filter_mopar_05281090AB.jpg',
        detail_code: '5281090AB',
        detail_manufacturer: 'Mopar',
        detail_more: 'Какая-то дополнительная информация...',

    },
    // {
    //     detail_image: './images/details/oil_filters/oil-filter_fram_PH16.jpg',
    //     detail_info: 'Фильтр маслянный',
    //     detail_code: 'PH16',
    //     detail_manufacturer: 'Fram',
    //     detail_more: '',
    //     detail_scheme: './images/details/oil_filters/77102.gif'
    // },
]

const AIR_FILTERS = [
    {
        detail_image: './images/details/air_filters/air-filter_mopar_5510026AA.jpg',
        detail_info: 'Фильтр воздушный',
        detail_code: '5510026AA',
        detail_manufacturer: 'Mopar',
        detail_more: '',
        detail_scheme: ''
    },
]

const CABIN_FILTERS = [
    {
        detail_image: './images/details/cain_filters/cabin-filter_mopar_82205905.jpg',
        detail_info: 'Фильтр салона',
        detail_code: '82205905',
        detail_manufacturer: 'Mopar',
        detail_more: '',
        detail_scheme: ''
    },
]

const TRANSMISSION_FILTERS = [
    {
        detail_image: './images/details/transmission_filters/transmission-filter_mopar_4864505AB.jpg',
        detail_info: 'Фильтр АКПП',
        detail_code: '4864505AB',
        detail_manufacturer: 'Mopar',
        detail_more: '',
        detail_scheme: ''
    },
]

const SPARK_PLUGS = [
    {
        detail_image: './images/details/spark_plugs/spark-plug_mopar_SZFR5LP13G.jpg',
        detail_info: 'Свечи зажигания',
        detail_code: 'SZFR5LP13G',
        detail_manufacturer: 'Mopar',
        detail_more: '',
        detail_scheme: ''
    },
]

// export const DATA = [...OIL_FILTERS, ...OIL_FILTERS]

const MAINTENANCE_LIST = [
    {
        subtitle: 'Маслянный фильтр',
        id: 'oil_filters',
        details: OIL_FILTERS // МАССИВ ДЕТАЛЕЙ
    },
    {
        subtitle: 'Воздушный фильтр',
        id: 'air_filters',
        details: AIR_FILTERS
    },
    {
        subtitle: 'Фильтр салона',
        id: 'cabin_filters',
        details: CABIN_FILTERS
    },
    {
        subtitle: 'Фильтр АКПП',
        id: 'transmission_filters',
        details: TRANSMISSION_FILTERS
    },
    {
        subtitle: 'Свечи зажигания',
        id: 'spark_plugs',
        details: SPARK_PLUGS
    },
    {
        subtitle: 'Ремень поликлинковый',
        id: '',
        details: ''
    },
    {
        subtitle: 'Ремень ГРМ',
        id: '',
        details: ''
    },
    {
        subtitle: 'Колодки тормозные',
        id: '',
        details: ''
    },
    {
        subtitle: 'Пробка сливного отверстия',
        id: '',
        details: ''
    },
    {
        subtitle: 'Щетки стеклоочистителя',
        id: '',
        details: ''
    },
]


const GASKETS = [
    {
        detail_image: './images/details/gaskets/vs50248.jpg',
        detail_info: 'Прокладка клапанной крышки',
        detail_code: 'VS50248',
        detail_manufacturer: 'Mahle',
        detail_more: '',
        detail_scheme: './images/details/gaskets/76920.gif'
    },
]

const ENGINE_LIST = [
    {
        subtitle: 'Прокладки',
        id: 'gaskets',
        details: GASKETS // МАССИВ ДЕТАЛЕЙ
    },
    {
        subtitle: 'Воздушный фильтр',
        id: 'air_filters',
        details: AIR_FILTERS
    },
]

const FUEL_SYSTEM_LIST = [
    {},
]

const COOLING_SYSTEM_LIST = [
    {},
]

const EXHAUST_SYSTEM_LIST = [
    {},
]

const TRANSMISSION_LIST = [
    {},
]

const CHASSIS_LIST = [
    {},
]

const STEERING_LIST = [
    {},
]

const BRAKE_SYSTEM_LIST = [
    {},
]

const ELECTRICAL_EQUIPMENT_LIST = [
    {},
]

const HEATING_CONDITION_LIST = [
    {},
]

const INTERIOR_DETAILS_LIST = [
    {},
]

const BODY_PARTS_LIST = [
    {},
]

export const HEADERS = [
    {
        title: 'Детали ТО',
        id: 'maintenance',
        subtitles: MAINTENANCE_LIST, // МАССИВ ПОДЗАГОЛОВКОВ
    },
    {
        title: 'Двигатель',
        id: 'engine',
        subtitles: ENGINE_LIST,
    },
    {
        title: 'Топливная система',
        id: 'fuel_system',
        subtitles: FUEL_SYSTEM_LIST,
    },
    {
        title: 'Система охлаждения',
        id: 'cooling_system',
        subtitles: COOLING_SYSTEM_LIST,
    },
    {
        title: 'Система выпуска',
        id: 'exhaust_system',
        subtitles: EXHAUST_SYSTEM_LIST,
    },
    {
        title: 'Трансмиссия',
        id: 'transmission',
        subtitles: TRANSMISSION_LIST,
    },
    {
        title: 'Ходовая часть',
        id: 'chassis',
        subtitles: CHASSIS_LIST,
    },
    {
        title: 'Рулевое управление',
        id: 'steering',
        subtitles: STEERING_LIST,
    },
    {
        title: 'Тормозная система',
        id: 'brake_system',
        subtitles: BRAKE_SYSTEM_LIST,
    },
    {
        title: 'Электрооборудование',
        id: 'electrical_equipment',
        subtitles: ELECTRICAL_EQUIPMENT_LIST,
    },
    {
        title: 'Отопление / Кондиционирование',
        id: 'heating_conditioning',
        subtitles: HEATING_CONDITION_LIST,
    },
    {
        title: 'Детали салона',
        id: 'interior_details',
        subtitles: INTERIOR_DETAILS_LIST,
    },
    {
        title: 'Детали кузова',
        id: 'body_parts',
        subtitles: BODY_PARTS_LIST,
    },
]

// console.log(HEADERS);



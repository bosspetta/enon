import { layout, index, route } from '@react-router/dev/routes'

export default [
    layout('layout.jsx', [
        index('pages/Home.jsx'),
        route('que-es-enon', 'pages/QueEsEnon.jsx'),
        route('yoga', 'pages/Yoga.jsx'),
        route('yoga/restaurativo', 'pages/YogaRestaurativo.jsx'),
        route('mindfulness', 'pages/Mindfulness.jsx'),
        route('masaje', 'pages/Quiromasaje.jsx'),
        route('mas-actividades', 'pages/External.jsx'),
        route('contacto', 'pages/Contacto.jsx'),
        route('horarios', 'pages/SchedulesPrices.jsx'),
        route('normas', 'pages/Normas.jsx'),
        route('bono-regalo', 'pages/BonoRegalo.jsx'),
        route('*', 'pages/NoMatch.jsx'),
    ]),
]

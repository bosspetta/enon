import PropTypes from 'prop-types'

import { PAGES, SITE_URL, pagePath } from '../site'

// Datos del negocio para Google (schema.org, JSON-LD)
function businessData(t, lang) {
    return {
        '@context': 'https://schema.org',
        '@type': ['HealthAndBeautyBusiness', 'SportsActivityLocation'],
        '@id': `${SITE_URL}/#business`,
        name: 'enON',
        description: t('seo.home.description'),
        url: SITE_URL + pagePath('home', lang),
        image: `${SITE_URL}/yoga-enon.png`,
        logo: `${SITE_URL}/enon.svg`,
        telephone: '+34640029302',
        email: 'hola@enon.yoga',
        priceRange: '15€ - 65€',
        currenciesAccepted: 'EUR',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Calle San Luis 78',
            addressLocality: 'Sevilla',
            postalCode: '41003',
            addressRegion: 'Andalucía',
            addressCountry: 'ES',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 37.39987,
            longitude: -5.98841,
        },
        hasMap: 'https://maps.app.goo.gl/mGN4PYGnHVD6KRMF8',
        sameAs: ['https://maps.app.goo.gl/mGN4PYGnHVD6KRMF8'],
        founder: {
            '@type': 'Person',
            name: 'Isabel Martínez San Esteban',
        },
    }
}

// Migas de pan: Inicio > (página superior) > página actual
function breadcrumbData(t, lang, pageKey) {
    const trail = []
    let key = pageKey
    while (key) {
        const page = PAGES.find(p => p.key === key)
        trail.unshift(page)
        key = page.key === 'home' ? null : (page.parent ?? 'home')
    }
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: trail.map((page, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: t(page.label),
            item: SITE_URL + pagePath(page.key, lang),
        })),
    }
}

function JsonLd({ data }) {
    // "<" escapado para que el JSON no pueda cerrar la etiqueta <script>
    const json = JSON.stringify(data).replace(/</g, '\\u003c')
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}

JsonLd.propTypes = {
    data: PropTypes.object.isRequired
}

export default function StructuredData({ t, lang, pageKey }) {
    if (!pageKey) {
        return null
    }
    return (
        <>
            <JsonLd data={businessData(t, lang)} />
            {pageKey !== 'home' && <JsonLd data={breadcrumbData(t, lang, pageKey)} />}
        </>
    )
}

StructuredData.propTypes = {
    t: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
    pageKey: PropTypes.string
}

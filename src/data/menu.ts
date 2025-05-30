// src/data/menu.ts

export const headerMenu = [
    { name: 'Nosotros', link: '/team' },
    { name: 'Servicios', showArrow: false,
        children: [
            { name: 'Consultoría NERC-CIP', link: '/servicios/consultoria-nerc-cip' },
            { name: 'IA Generativa', link: '/servicios/ia-generativa' },
            { name: 'Ley de Ciberseguridad Chile', link: '/servicios/ley-ciberseguridad-chilena' },
            { name: 'Integración de Aplicaciones', link: '/servicios/integraciones-software' },
        ]
    },
    { name: 'Blog', link: '/blog' },
    { name: 'Aula Virtual', showArrow: false, children: [
        { name: 'Aula Ciberseguridad Sonnedix', link: 'https://aulasx.codevsys.cl/login', target: '_blank' },
    ]},
];

export const footerMenu = [
    { name: 'Consultoría NERC-CIP', link: '/servicios/consultoria-nerc-cip' },
    { name: 'Ley de Ciberseguridad', link: '/servicios/ley-ciberseguridad-chilena' },
];

export const legalMenu = [
    { name: 'Política de privacidad', link: '/legal/privacy-policy' },
    { name: 'Terminos de servicio', link: '/legal/terms-of-service' }
];


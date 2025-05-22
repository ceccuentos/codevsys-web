// src/data/menu.ts

export const headerMenu = [
    { name: 'Nosotros', link: '/team' },
    { name: 'Blog', link: '/blog' },
    { name: 'Servicios', showArrow: false,
        children: [
            { name: 'Estándar NERC-CIP', link: '/servicios/nerc-cip' },
            { name: 'Apps IA Generativa', link: '/servicios/ia' },
            { name: 'Ley Ciberseguridad Chile', link: '/servicios/ley-marco-ciberseguridad' },
            { name: 'Integración de Aplicaciones', link: '/servicios/integraciones' },
        ]
    },
    { name: 'Aula Virtual', showArrow: false, children: [
        { name: 'Aula Sonnedix', link: 'https://aulasx.codevsys.cl/login', target: '_blank' },
    ]},
];

export const footerMenu = [
    { name: 'NERC-CIP', link: '/servicios/nerc-cip' },
    { name: 'Ley Ciberseguridad', link: '/servicios/ley-marco-ciberseguridad' },
];

export const legalMenu = [
    { name: 'Política de privacidad', link: '/legal/privacy-policy' },
    { name: 'Terminos de servicio', link: '/legal/terms-of-service' }
];


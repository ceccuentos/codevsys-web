export interface Stat {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface StatsList {
    id: string;
    stats: Stat[];
    content?: {
        title: string;
        description: string;
        button?: {
            text: string;
            link: string;
            variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        };
    };
}

export const statsLists: Record<string, StatsList> = {
    main: {
        id: 'main',
        stats: [
            {
                value: 10,
                label: 'Theme Configurations',
            },
            {
                value: 11,
                label: 'Pre-Built Components',
            },
            {
                value: 48,
                label: 'Team Members',
            },
            {
                value: 500000,
                label: 'Lines of Code',
                prefix: '+'
            }
        ]
    },
    nerc_cip: {
        id: 'nerc_cip',
        stats: [
            {
                value: 70,
                label: 'Visibilidad de activos críticos',
                prefix: '+',
                suffix: '%'
            },
            {
                value: 3,
                label: ' Identificación de activos, usando metodologías ágiles y herramientas de escaneo.',
                suffix: ' Semanas'
            },
            {
                value: 60,
                label: 'Incidentes sin notificación',
                prefix: '-',
                suffix: '%',
            },
            {
                value: 55,
                label: 'Tiempos de respuesta ante incidentes',
                prefix: '-',
                suffix: '%'
            }
        ]
    },
    ley_marco: {
        id: 'ley_marco',
        stats: [
            {
                value: 65,
                label: ' Mejora en la capacidad de respuesta a incidentes.',
                prefix: '+',
                suffix: '%'
            },
            {
                value: 50,
                label: ' Tiempo promedio de detección de incidentes.',
                prefix: '-',
                suffix: '%'
            },
            {
                value: 100,
                label: ' Cumplimiento en los plazos de reporte al CSIRT Nacional.',
                suffix: '%',
            },
            {
                value: 70,
                label: ' Aumento en la concientización del personal.',
                prefix: '+',
                suffix: '%'
            }
        ]
    },
    ia: {
        id: 'ia',
        stats: [
            {
                value: 60,
                label: ' Mejora en la precisión de respuestas mediante sistemas RAG.',
                prefix: '+',
                suffix: '%'
            },
            {
                value: 85,
                label: ' Reducción en errores humanos al implementar agentes autónomos.',
                prefix: '-',
                suffix: '%'
            },
            {
                value: 100,
                label: ' Cumplimiento en normativas de privacidad con técnicas de anonimización de datos.',
                suffix: '%',
            },
            {
                value: 70,
                label: ' Eficiencia en procesos automatizados mediante IA generativa.',
                prefix: '+',
                suffix: '%'
            }
        ]
    },
    integraciones: {
        id: 'integraciones',
        stats: [
            {
                value: 65,
                label: ' Eficiencia operativa al automatizar procesos entre ERP, CRM y plataformas web.',
                prefix: '+',
                suffix: '%'
            },
            {
                value: 50,
                label: ' Tiempos de respuesta a clientes gracias a la integración entre ventas, operaciones y logística.',
                prefix: '-',
                suffix: '%'
            },
            {
                value: 80,
                label: ' Disponibilidad de información crítica para la toma de decisiones en tiempo real.',
                suffix: '%',
            },
            {
                value: 90,
                label: ' Reducción en riesgo de pérdida de datos al implementar respaldos programados y verificados.',
                prefix: '',
                suffix: '%'
            }
        ]
    },
};

import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface FeaturePage {
    id: string;
    title: string;
    description: string;
    image?: string;
}

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
    descriptionPage?: string;
    featuresPage?: FeaturePage[];
    image?: string; // Ruta relativa a la imagen
    slug: string; // Nombre corto o identificador de página
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {


    main: {
        id: 'main',
        features: [
            {
                icon: Zap,
                title: 'Estándar NERC-CIP Industria Eléctrica Chilena',
                description: 'Ayudamos a empresas del sector energético y de infraestructura crítica a cumplir con los estándares de ciberseguridad NERC CIP, reduciendo riesgos y garantizando el cumplimiento normativo.',
                image: '../src/assets/images/servicios/servicio-1.webp',
                slug: 'nerc-cip',
                descriptionPage: 'Ayudamos a empresas del sector energético y de infraestructura crítica a cumplir con los estándares de ciberseguridad NERC CIP, reduciendo riesgos y garantizando el cumplimiento normativo.',
                featuresPage: [
                    {
                        id: 'nerc-cip-1',
                        title: 'Inventario de Ciberactivos',
                        description: 'Identificamos y clasificamos tus activos críticos OT/IT conforme a NERC-CIP, sentando la base para una gestión segura y trazable.',
                        image: '../src/assets/images/servicios/nerc-cip/activo.webp'
                    },
                    {
                        id: 'nerc-cip-2',
                        title: 'Gestión de Riesgos CIP',
                        description: 'Evaluamos riesgos operacionales y cibernéticos, priorizando controles para cumplir con los requerimientos regulatorios y proteger la infraestructura crítica.',
                        image: '../src/assets/images/servicios/nerc-cip/riesgos.webp'
                    },
                    {
                        id: 'nerc-cip-3',
                        title: 'Capacitación y Awareness CIP',
                        description: 'Diseñamos programas de formación y cultura de ciberseguridad alineados con NERC-CIP, enfocados en roles operacionales y técnicos.',
                        image: '../src/assets/images/servicios/nerc-cip/capacitacion.webp'
                    },
                    {
                        id: 'nerc-cip-4',
                        title: 'Plan de Cumplimiento CIP',
                        description: 'Creamos un plan detallado de implementación de controles y evidencia para auditorías del Coordinador Eléctrico Nacional.',
                        image: '../src/assets/images/servicios/nerc-cip/plan.webp'
                    }
                ]
            },
            {
                icon: Shield,
                title: 'Ley Marco de Ciberseguridad Chilena',
                description: 'Brindamos apoyo especializado para ayudar a las organizaciones a cumplir con los requisitos de la Ley Marco de Ciberseguridad de Chile, incluyendo evaluaciones de cumplimiento, desarrollo de políticas y gestión de incidentes.',
                image: '../src/assets/images/servicios/servicio-2.webp',
                slug: 'ley-marco-ciberseguridad',
                descriptionPage: 'Brindamos apoyo especializado para ayudar a las organizaciones a cumplir con los requisitos de la Ley Marco de Ciberseguridad de Chile, incluyendo evaluaciones de cumplimiento, desarrollo de políticas y gestión de incidentes.',
                featuresPage: [
                    {
                        id: 'ley-marco-1',
                        title: 'Ley Marco de Ciberseguridad Chilena',
                        description: 'Diseñamos e implementamos políticas, procedimientos y protocolos para alinear tu organización con la Ley Marco de Ciberseguridad y sus reglamentos asociados.',
                        image: '../src/assets/images/servicios/ley-marco-ciberseguridad/ley-marco-1.webp'
                    },
                    {
                        id: 'ley-marco-2',
                        title: 'Procedimientos y Resiliencia',
                        description: 'Establecemos procedimientos de respuesta a incidentes, incluyendo planes DRP y análisis BIA para asegurar continuidad operativa y reportes efectivos al CSIRT Nacional.',
                        image: '../src/assets/images/servicios/ley-marco-ciberseguridad/ley-marco-2.webp'
                    },
                    {
                        id: 'ley-marco-3',
                        title: 'Políticas Claras y Efectivas',
                        description: 'Desarrollamos políticas de ciberseguridad adaptadas a tu organización, promoviendo una cultura de seguridad y cumplimiento normativo.',
                        image: '../src/assets/images/servicios/ley-marco-ciberseguridad/ley-marco-3.webp'
                    },
                    {
                        id: 'ley-marco-4',
                        title: 'Gobernanza de Ciberseguridad',
                        description: 'Diseñamos estructuras de roles, responsabilidades y comités, asegurando una gestión clara y responsable de la ciberseguridad en todos los niveles de la organización.',
                        image: '../src/assets/images/servicios/ley-marco-ciberseguridad/ley-marco-4.webp'
                    }
                ]
            },
            {
                icon: TabletSmartphone,
                title: 'Desarrollo de Apps IA Generativa',
                description: 'Creamos soluciones tecnológicas avanzadas basadas en técnicas del tipo RAG con IA generativa, optimizando la toma de decisiones mediante la integración de grandes bases de datos con modelos de lenguaje natural al servicio del usuario final.',
                image: '../src/assets/images/servicios/servicio-3.webp',
                slug: 'ia',
                descriptionPage: 'Creamos soluciones tecnológicas avanzadas basadas en técnicas del tipo RAG con IA generativa, optimizando la toma de decisiones mediante la integración de grandes bases de datos con modelos de lenguaje natural al servicio del usuario final.',
                featuresPage: [
                    {
                        id: 'ia-1',
                        title: 'Creación de Sistemas RAG',
                        description: 'Desarrollamos soluciones de Generación Aumentada por Recuperación (RAG) que combinan modelos de lenguaje con bases de datos empresariales, mejorando la precisión y relevancia de las respuestas generadas',
                        image: '../src/assets/images/servicios/ia/ia-1.webp'
                    },
                    {
                        id: 'ia-2',
                        title: 'Implementación de Agentes Autónomos',
                        description: 'Diseñamos agentes de IA capaces de tomar decisiones y ejecutar acciones de forma independiente, optimizando procesos y reduciendo la intervención humana.',
                        image: '../src/assets/images/servicios/ia/ia-2.webp'
                    },
                    // {
                    //     id: 'ia-3',
                    //     title: 'Desarrollo de Chatbots Inteligentes',
                    //     description: 'Creamos chatbots impulsados por IA generativa que interactúan de manera natural con los usuarios, proporcionando respuestas contextuales y mejorando la experiencia del cliente.',
                    //     image: '../src/assets/images/servicios/ia/ia-3.webp'
                    // },
                    {
                        id: 'ia-3',
                        title: 'Anonimización de Datos Sensibles',
                        description: 'Implementamos técnicas avanzadas para anonimizar y seudonomizar datos personales, garantizando la privacidad y cumplimiento de normativas como la Ley de Protección de Datos Personales (Ley 21719/2024) que homologa los estándares nacionales a los del Reglamento General de Protección de Datos (GDPR) de la Unión Europea.',
                        image: '../src/assets/images/servicios/ia/ia-3.webp'
                    },
                    {
                        id: 'ia-4',
                        title: 'Automatización de Decisiones y Workflows',
                        description: 'Automatizamos flujos de trabajo y procesos de toma de decisiones utilizando modelos de IA, aumentando la eficiencia operativa y reduciendo errores.',
                        image: '../src/assets/images/servicios/ia/ia-4.webp'
                    },
                ]
            },
            {
                icon: Smile,
                title: 'Integración de Aplicaciones con Sistemas ERP',
                description: 'Diseñamos e implementamos soluciones que conectan aplicaciones personalizadas con sistemas ERP como SAP, Oracle, o Microsoft Dynamics, permitiendo una gestión empresarial más eficiente y automatizada.',
                image: '../src/assets/images/servicios/servicio-4.webp',
                slug: 'integraciones',
                descriptionPage: 'Diseñamos e implementamos soluciones que conectan aplicaciones personalizadas con sistemas ERP como SAP, Oracle, o Microsoft Dynamics, permitiendo una gestión empresarial más eficiente y automatizada.',
                featuresPage: [
                    {
                        id: 'integraciones-1',
                        title: 'Integración de Aplicaciones con Sistemas ERP',
                        description: 'Conectamos tus sistemas con ERP nacionales como Qbiz, Flexline o DeFontana y plataformas globales como SAP, Oracle y Microsoft Dynamics para automatizar procesos críticos.',
                        image: '../src/assets/images/servicios/integraciones/integraciones-1.webp'
                    },
                    {
                        id: 'integraciones-2',
                        title: 'CRM y Sistemas Logísticos',
                        description: 'Integramos CRM como Salesforce, Zoho o HubSpot con tus sistemas internos y plataformas logísticas, mejorando la trazabilidad, atención al cliente y gestión operativa.',
                        image: '../src/assets/images/servicios/integraciones/integraciones-2.webp'
                    },
                    {
                        id: 'integraciones-3',
                        title: 'Desarrollo Web a Medida',
                        description: 'Creamos aplicaciones web escalables, seguras y personalizadas que se adaptan a los procesos y requerimientos específicos de tu empresa, integrando tus sistemas existentes.',
                        image: '../src/assets/images/servicios/integraciones/integraciones-3.webp'
                    },
                    {
                        id: 'integraciones-4',
                        title: 'Servicios de Backups',
                        description: 'Automatizamos respaldos cifrados y programados hacia nubes como Google Drive, Dropbox, S3 y servidores propios, utilizando Rclone para asegurar la continuidad operativa de tus datos críticos.',
                        image: '../src/assets/images/servicios/integraciones/integraciones-4.webp'
                    },
                ]
            },
            // {
            //     icon: Type,
            //     title: 'TypeScript Support',
            //     description: 'Built with TypeScript in mind',
            //     slug: 'typescript-support'
            // },
            // {
            //     icon: CodeXml,
            //     title: 'Minimal Dependencies',
            //     description: 'Keep your project lightweight',
            //     slug: 'minimal-dependencies'
            // }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail',
                slug: 'made-with-love'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements',
                slug: 'always-fresh'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                slug: 'user-friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};

// Utility function to find a feature by slug
export function getFeatureBySlug(slug: string): Feature | undefined {
  return featureLists.main.features.find(f => f.slug === slug);
}


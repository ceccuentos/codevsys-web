export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "Is Titan Core completely free to use?",
                answer: "Yes, Titan Core is 100% free and open-source. You can use it for personal and commercial projects without any licensing fees."
            },
            {
                question: "How do I customize the color schemes?",
                answer: "Titan Core comes with 10 pre-built color schemes that can be easily switched through the theme configuration file. For custom colors, you can modify the CSS variables in the `src/styles/global.css` file to match your brand identity."
            },
            {
                question: "Do I need to know Astro JS to use this theme?",
                answer: "Basic familiarity with Astro JS is helpful, but not required. The component-based architecture makes it easy to understand and modify even if you're new to Astro."
            },
            {
                question: "Can I use Titan Core as a starting point for client projects?",
                answer: "Absolutely! Titan Core is designed to be a foundation theme that you can build upon for client projects. Its clean architecture and minimal approach make it perfect as a starting point for customized websites."
            },
            {
                question: "How often is Titan Core updated?",
                answer: "We aim to update Titan Core regularly to keep it compatible with the latest Astro JS releases and web standards. Major updates are released quarterly, with smaller fixes and improvements added more frequently. You can star our GitHub repository to stay informed about updates."
            }
        ]
    },
    nerc_cip: {
        id: 'nerc_cip',
        faqs: [
            {
              question: "¿Qué es el estándar NERC-CIP?",
              answer: "Es un conjunto de normas obligatorias en América del Norte que regulan la ciberseguridad de los sistemas críticos en el sector eléctrico. En Chile, ha sido adoptado como base para regulaciones locales, especialmente por el Coordinador Eléctrico Nacional."
            },
            {
              question: "¿Cuáles son los requisitos principales del NERC-CIP?",
              answer: "Inventario de activos críticos, control de acceso lógico y físico, gestión de incidentes y continuidad operativa, entre otros. Está compuesto por normas CIP-002 a CIP-013."
            },
            {
              question: "¿Cómo afecta NERC-CIP a las empresas eléctricas chilenas?",
              answer: "El Coordinador Eléctrico Nacional ha adoptado NERC-CIP como base para definir exigencias obligatorias en materia de ciberseguridad para ciertas empresas eléctricas que operan infraestructura crítica."
            },
            {
              question: "¿Es obligatorio cumplir con NERC-CIP en Chile?",
              answer: "NERC-CIP no está consagrado en una ley nacional, pero su cumplimiento es obligatorio para ciertas empresas eléctricas chilenas, según lo establecido por el Coordinador Eléctrico Nacional en normativas sectoriales."
            },
            {
              question: "¿Qué servicios ofrece Codevsys para NERC-CIP?",
              answer: "Realizamos assessment normativo, plan de cumplimiento, capacitación y acompañamiento técnico para lograr alineación con el estándar."
            }
          ]
    },
    ley_ciberseguridad: {
        id: 'ley_ciberseguridad',
        faqs: [
            {
                question: "¿Qué es la Ley Marco de Ciberseguridad en Chile?",
                answer: "Es una legislación chilena que establece medidas obligatorias para proteger infraestructuras críticas y fortalecer la ciberseguridad nacional."
            },
            {
                question: "¿A qué empresas afecta la nueva ley de ciberseguridad?",
                answer: "Principalmente a empresas que operan infraestructuras críticas, organismos públicos, y proveedores de servicios esenciales y estratégicos."
            },
            {
                question: "¿Cómo puede mi empresa cumplir con esta ley?",
                answer: "Mediante la evaluación de riesgos, la implementación de controles técnicos y administrativos, y la definición de planes de respuesta a incidentes."
            },
            {
                question: "¿Qué sanciones contempla la ley por incumplimiento?",
                answer: "Sanciones administrativas y económicas, que pueden incluir multas y revocación de autorizaciones si no se cumplen las exigencias del CSIRT Nacional."
            },
            {
                question: "¿Cómo ayuda Codevsys en el cumplimiento de esta ley?",
                answer: "Ofrecemos consultoría experta en levantamiento de brechas, diseño de políticas, y entrenamiento para cumplir con los requisitos legales vigentes."
            }
        ]
    },
    ia: {
        id: 'ia',
        faqs: [
            {
                question: "¿Qué es la inteligencia artificial generativa?",
                answer: "Es un tipo de IA que genera contenido nuevo (texto, imágenes, código) a partir de datos y ejemplos existentes, usando modelos como GPT o DALL·E."
            },
            {
                question: "¿Qué aplicaciones prácticas tiene en empresas?",
                answer: "Automatización de tareas, generación de reportes, procesamiento de documentos legales, atención a clientes, análisis de datos, entre otros."
            },
            {
                question: "¿Qué tecnologías usa Codevsys en este servicio?",
                answer: "Usamos herramientas como LlamaIndex, RAGs, modelos de lenguaje y bases vectoriales para crear agentes y flujos inteligentes personalizados."
            },
            {
                question: "¿Cómo saber si mi empresa puede aplicar IA generativa?",
                answer: "Analizamos tus flujos operativos, documentos, y necesidades de automatización para proponer soluciones de IA adaptadas a tu contexto."
            },
            {
                question: "¿Qué diferencia hay entre un chatbot tradicional y uno con IA generativa?",
                answer: "Un chatbot generativo entiende contexto, aprende con ejemplos y puede interactuar de forma natural, no se limita a respuestas predefinidas."
            }
        ]
    },
    inicio_codevsys_faq: {
        id: "inicio_codevsys_faq",
        faqs: [
          {
            question: "¿Qué servicios ofrece Codevsys?",
            answer:
              "Ofrecemos consultoría en ciberseguridad basada en la Ley de Ciberseguridad Chilena, cumplimiento NERC-CIP para empresas eléctricas y soluciones con inteligencia artificial generativa."
          },
          {
            question: "¿Dónde opera Codevsys?",
            answer:
              "Codevsys tiene sede en Santiago de Chile y presta servicios a nivel nacional, incluyendo atención remota y proyectos en sectores regulados y estratégicos."
          },
          {
            question: "¿Qué tipo de empresas pueden trabajar con Codevsys?",
            answer:
              "Trabajamos principalmente con medianas y grandes empresas de sectores como energía, servicios financieros, tecnología y administración pública."
          },
          {
            question: "¿Qué diferencia a Codevsys de otras consultoras?",
            answer:
              "Nos enfocamos en normativas locales como la Ley Marco de Ciberseguridad y el estándar NERC-CIP, combinadas con automatización e inteligencia artificial aplicada a procesos empresariales."
          },
          {
            question: "¿Cómo puedo contactar a Codevsys?",
            answer:
              "Puedes escribirnos a través de nuestro formulario web, agendar una reunión en línea o contactarnos por correo a info@codevsys.cl."
          }
        ]
    }
}

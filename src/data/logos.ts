import type { ImageMetadata } from 'astro';

// Import your logo images
// Replace these imports with your actual logo files


import logo_panelexpertos from '../assets/images/logos/logo-panelexpertos.png';
import logo_australis from '../assets/images/logos/logo-australis.png';
import logo_aguaspacifico from '../assets/images/logos/logo-aguaspacifico.png';
import logo_sonnedix from '../assets/images/logos/logo-sonnedix_PrimaryLogo.svg';
import logo_starfood from '../assets/images/logos/logo-starfood.png';
import logo_makita from '../assets/images/logos/logo-makita.svg';
import logo_arcoenergy from '../assets/images/logos/xlogo-arcoenergy.jpg';


export interface Logo {
    src: ImageMetadata;
    alt: string; // The partner company's name
}

export interface LogoList {
    id: string;
    logos: Logo[];
}

// Example logo lists with imported images
export const logoLists: Record<string, LogoList> = {
    main: {
        id: 'main',
        logos: [
            {
                src: logo_panelexpertos, //logo1,
                alt: 'Panel de Expertos',
            },
            {
                src: logo_australis,
                alt: 'Australis Partner',
            },
            {
                src: logo_sonnedix,
                alt: 'Sonnedix',
            },
            {
                src: logo_arcoenergy,
                alt: 'Arco Energy',
            },
            {
                src: logo_aguaspacifico,
                alt: 'Aguas Pacífico',
            },
            {
                src: logo_makita,
                alt: 'Makita Chile',
            },
            {
                src: logo_starfood,
                alt: 'Starfood',
            },
        ],
    },
};

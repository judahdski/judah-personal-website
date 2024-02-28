import { chrismastWeb, helpdeskPospay, hikeAssist, jTodoList, jhondoe3DPortfolio, judskyCalculator, theSportsId } from '../img/projects/thumb';

import { angularIcon, jsIcon, htmlIcon, laravelIcon, nextjsIcon, phpIcon, reactIcon, tailwindcssIcon, threejsIcon, typescriptIcon } from '../img/projects/icon-tech';

export const PROJECTS = [
    {
        title: 'Jhon Doe 3D Portfolio',
        description:
            'Website portfolio 3D ini dibangun menggunakan teknologi React JS, Tailwind, dan Three JS. Dengan antarmuka yang interaktif dan responsif, membuat website ini menjadi platform yang menarik untuk menampilkan portofolio seni 3D.',
        category: {
            code: 'ptfl',
            title: 'Personal Portfolio',
        },
        techStack: [
            {
                description: 'React.JS',
                logoUrl: reactIcon,
                style: {
                    background: 'bg-[rgba(0,217,255,0.16)]',
                    text: 'text-[#88E1F2]',
                },
            },
            {
                description: 'HTML5 & CSS3',
                logoUrl: htmlIcon,
                style: {
                    background: 'bg-[#e34f2629]',
                    text: 'text-[#F2B588]',
                },
            },
            {
                description: 'JavaScript',
                logoUrl: jsIcon,
                style: {
                    background: 'bg-[#f0da4f29]',
                    text: 'text-[#F2E188]',
                },
            },
            {
                description: 'Tailwind CSS',
                logoUrl: tailwindcssIcon,
                style: {
                    background: 'bg-[#38bff829]',
                    text: 'text-[#78C6E9]',
                },
            },
        ],
        utils: {
            isMobile: true,
            thumbnailURL: jhondoe3DPortfolio,
            cardAppearance: {
                backgroundColor: 'border-[#00D8FF]',
                shadowColor: 'shadow-[1px_3px_6px_#00d9ff28]',
            },
        },
        links: {
            site: 'https://jhondoe-portfolio.netlify.app/',
            github: '',
        },
    },
    {
        title: 'JudSky Calculator',
        description: 'Website calculator simple yang memiliki tampilan keren.',
        category: {
            code: 'ftnt',
            title: 'Functionality',
        },
        techStack: [
            {
                description: 'JavaScript',
                logoUrl: jsIcon,
                style: {
                    background: 'bg-[#f0da4f29]',
                    text: 'text-[#F2E188]',
                },
            },
            {
                description: 'React.JS',
                logoUrl: reactIcon,
                style: {
                    background: 'bg-[rgba(0,217,255,0.16)]',
                    text: 'text-[#88E1F2]',
                },
            },
        ],
        utils: {
            isMobile: true,
            thumbnailURL: judskyCalculator,
            cardAppearance: {
                backgroundColor: 'border-[#F0DB4F]',
                shadowColor: 'shadow-[1px_3px_6px_#f0da4f87]',
            },
        },
        links: {
            site: 'https://judsky-calculator.netlify.app/',
            github: '',
        },
    },
    {
        title: 'theSports-id',
        description: 'Website yang menyediakan berita dan blog seputar olahraga adalah situs yang menyajikan informasi terkini seputar dunia olahraga, termasuk artikel, berita, ulasan.',
        category: {
            code: 'ftnt',
            title: 'Blog',
        },
        techStack: [
            {
                logoUrl: laravelIcon,
                description: 'Laravel',
                style: {
                    background: 'bg-[#ff2b2038]',
                    text: 'text-[#F8948E]',
                },
            },
            {
                description: 'HTML5 & CSS3',
                logoUrl: htmlIcon,
                style: {
                    background: 'bg-[#e34f2629]',
                    text: 'text-[#F2B588]',
                },
            },
            {
                logoUrl: jsIcon,
                description: 'JavaScript',
                style: {
                    background: 'bg-[#f0da4f29]',
                    text: 'text-[#F2E188]',
                },
            },
            {
                logoUrl: phpIcon,
                description: 'PHP',
                style: {
                    background: 'bg-[#777bb329]',
                    text: 'text-[#A9ACD3]',
                },
            },
        ],
        utils: {
            isMobile: false,
            thumbnailURL: theSportsId,
            cardAppearance: {
                backgroundColor: 'border-[#FF2D20]',
                shadowColor: 'shadow-[1px_3px_6px_#ff2b2029]',
            },
        },
        links: {
            site: 'https://thesport-id.000webhostapp.com/',
            github: '',
        },
    },
    {
        title: 'Responsive Christmas Website',
        description: 'Website static bertema Christmas yang memiliki responsive design.',
        category: {
            code: 'ftnt',
            title: 'Landing Page',
        },
        techStack: [
            {
                description: 'Three.JS',
                logoUrl: threejsIcon,
                style: {
                    background: 'bg-[#ffffff3d]',
                    text: 'text-white',
                },
            },
            {
                description: 'HTML5 & CSS3',
                logoUrl: htmlIcon,
                style: {
                    background: 'bg-[#e34f2629]',
                    text: 'text-[#F2B588]',
                },
            },
            {
                description: 'JavaScript',
                logoUrl: jsIcon,
                style: {
                    background: 'bg-[#f0da4f29]',
                    text: 'text-[#F2E188]',
                },
            },
        ],
        utils: {
            isMobile: true,
            thumbnailURL: chrismastWeb,
            cardAppearance: {
                backgroundColor: 'border-[#fff]',
                shadowColor: 'shadow-[1px_3px_6px_#ffffff45]',
            },
        },
        links: {
            site: 'https://christmas-judah.netlify.app/',
            github: '',
        },
    },
    {
        title: 'JTodo List',
        description: '',
        category: {
            code: 'ftnt',
            title: 'Functionality',
        },
        techStack: [
            {
                description: 'HTML5 & CSS3',
                logoUrl: htmlIcon,
                style: {
                    background: 'bg-[#e34f2629]',
                    text: 'text-[#F2B588]',
                },
            },
            {
                description: 'JavaScript',
                logoUrl: jsIcon,
                style: {
                    background: 'bg-[#f0da4f29]',
                    text: 'text-[#F2E188]',
                },
            },
        ],
        utils: {
            isMobile: true,
            thumbnailURL: jTodoList,
            cardAppearance: {
                backgroundColor: 'border-[#E34F26]',
                shadowColor: 'shadow-[1px_3px_6px_#e34f2629]',
            },
        },
        links: {
            site: 'https://jtodo-list.netlify.app/',
            github: '',
        },
    },
    {
        title: 'POSPAY Helpdesk',
        description: '',
        category: {
            code: 'ftnt',
            title: 'Dashboard',
        },
        techStack: [
            {
                description: 'React.JS',
                logoUrl: reactIcon,
                style: {
                    background: 'bg-[rgba(0,217,255,0.16)]',
                    text: 'text-[#88E1F2]',
                },
            },
            {
                description: 'JavaScript',
                logoUrl: jsIcon,
                style: {
                    background: 'bg-[#f0da4f29]',
                    text: 'text-[#F2E188]',
                },
            },
            {
                description: 'Tailwind CSS',
                logoUrl: tailwindcssIcon,
                style: {
                    background: 'bg-[#38bff829]',
                    text: 'text-[#78C6E9]',
                },
            },
        ],
        utils: {
            isMobile: false,
            thumbnailURL: helpdeskPospay,
            cardAppearance: {
                backgroundColor: 'border-[#00D8FF]',
                shadowColor: 'shadow-[1px_3px_6px_#00d9ff28]',
            },
        },
        links: {
            site: 'https://helpdesk-pospay-ext-rivaldo.netlify.app/',
            github: '',
        },
    },
    {
        title: 'HikeAssist',
        description: '',
        category: {
            code: 'ftnt',
            title: 'Landing Page',
        },
        techStack: [
            {
                description: 'TypeScript',
                logoUrl: typescriptIcon,
                style: {
                    background: 'bg-[#3179c678]',
                    text: 'text-[#8FC7FA]',
                },
            },
            {
                logoUrl: nextjsIcon,
                description: 'Next.JS',
                style: {
                    background: 'bg-[#ffffff3d]',
                    text: 'text-white',
                },
            },
            {
                logoUrl: tailwindcssIcon,
                description: 'Tailwind CSS',
                style: {
                    background: 'bg-[#38bff829]',
                    text: 'text-[#78C6E9]',
                },
            },
        ],
        utils: {
            isMobile: true,
            thumbnailURL: hikeAssist,
            cardAppearance: {
                backgroundColor: 'border-[#fff]',
                shadowColor: 'shadow-[1px_3px_6px_#ffffff45]',
            },
        },
        links: {
            site: 'https://hike-assist.netlify.app/',
            github: 'https://github.com/judahdski/hike-assist',
        },
    },
];

import { chrismastWeb, helpdeskPospay, hikeAssist, jTodoList, jhondoe3DPortfolio, judskyCalculator, theSportsId } from "../img/projects";

export const PROJECTS = [
    {
        name: 'Jhon Doe 3D Portfolio',
        description:
            'Website portfolio 3D ini dibangun menggunakan teknologi React JS, Tailwind, dan Three JS. Dengan antarmuka yang interaktif dan responsif, membuat website ini menjadi platform yang menarik untuk menampilkan portofolio seni 3D.',
        category: {
            techStack: ['JavaScript', 'React.JS', 'Three.JS', 'Tailwind CSS'],
            type: {
                code: 'ptfl',
                title: 'Personal Portfolio',
            },
        },
        imageURL: jhondoe3DPortfolio,
        siteLink: 'https://jhondoe-portfolio.netlify.app/',
        githubLink: '',
        isMobile: true,
    },
    {
        name: 'JudSky Calculator',
        description: 'Website calculator simple yang memiliki tampilan keren.',
        category: {
            techStack: ['JavaScript', 'React.JS'],
            type: {
                code: 'ftnt',
                title: 'Functionality',
            },
        },
        imageURL: judskyCalculator,
        siteLink: 'https://judsky-calculator.netlify.app/',
        githubLink: '',
        isMobile: true,
    },
    {
        name: 'theSports-id',
        description: 'Website yang menyediakan berita dan blog seputar olahraga adalah situs yang menyajikan informasi terkini seputar dunia olahraga, termasuk artikel, berita, ulasan.',
        category: {
            techStack: ['HTML5 & CSS3', 'JavaScript', 'PHP', 'Laravel'],
            type: {
                code: 'ftnt',
                title: 'Blog',
            },
        },
        imageURL: theSportsId,
        siteLink: 'https://thesport-id.000webhostapp.com/',
        githubLink: '',
        isMobile: false,
    },
    {
        name: 'Responsive Christmas Website',
        description: 'Website static bertema Christmas yang memiliki responsive design.',
        techStack: 'HTML 5, CSS 3, JavaScript',
        category: {
            techStack: ['HTML5 & CSS3', 'JavaScript'],
            type: {
                code: 'ftnt',
                title: 'Landing Page',
            },
        },
        imageURL: chrismastWeb,
        siteLink: 'https://christmas-judah.netlify.app/',
        githubLink: '',
        isMobile: true,
    },
    {
        name: 'JTodo List',
        description: '',
        category: {
            techStack: ['HTML5 & CSS3', 'JavaScript', 'PHP', 'Laravel'],
            type: {
                code: 'ftnt',
                title: 'Functionality',
            },
        },
        imageURL: jTodoList,
        siteLink: 'https://jtodo-list.netlify.app/',
        githubLink: '',
        isMobile: true,
    },
    {
        name: 'POSPAY Helpdesk',
        description: '',
        techStack: 'React JS, Tailwind CSS, JavaScript',
        category: {
            techStack: ['JavaScript', 'React.JS', 'Tailwind CSS'],
            type: {
                code: 'ftnt',
                title: 'Dashboard',
            },
        },
        imageURL: helpdeskPospay,
        siteLink: 'https://helpdesk-pospay-ext-rivaldo.netlify.app/',
        githubLink: '',
        isMobile: false,
    },
    {
        name: 'HikeAssist',
        description: '',
        techStack: 'Next.JS, Tailwind CSS, TypeScript',
        category: {
            techStack: ['TypeScript', 'Next.JS', 'Tailwind CSS'],
            type: {
                code: 'ftnt',
                title: 'Landing Page',
            },
        },
        imageURL: hikeAssist,
        siteLink: 'https://hike-assist.netlify.app/',
        githubLink: 'https://github.com/judahdski/hike-assist',
        isMobile: true,
    },
];

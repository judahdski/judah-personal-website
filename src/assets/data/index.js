import {aboutSpainWeb, chrismastWeb, jhondoe3DPortfolio, jTodoList, judskyCalculator, mandiri, museumPos, theSportsId, helpdeskPospay} from '../img/projects/index';

export const projects = [
    {
        name: 'Jhon Doe 3D Portfolio',
        description:
            'Website portfolio 3D ini dibangun menggunakan teknologi React JS, Tailwind, dan Three JS. Dengan antarmuka yang interaktif dan responsif, membuat website ini menjadi platform yang menarik untuk menampilkan portofolio seni 3D.',
        category: {
            techStack: ['JavaScript', 'React.JS', 'Three.JS', 'Tailwind CSS'],
            type: {
                code: 'ptfl',
                title: 'Personal Portfolio'
            },
        },
        imageURL: jhondoe3DPortfolio,
        siteLink: 'https://jhondoe-portfolio.netlify.app/',
        githubLink: '',
    },
    {
        name: 'JudSky Calculator',
        description: 'Website calculator simple yang memiliki tampilan keren.',
        category: {
            techStack: ['JavaScript', 'React.JS'],
            type: {
                code: 'ftnt',
                title: 'Functionality'
            },
        },
        imageURL: judskyCalculator,
        siteLink: 'https://judsky-calculator.netlify.app/',
        githubLink: '',
    },
    {
        name: 'theSports-id',
        description: 'Website yang menyediakan berita dan blog seputar olahraga adalah situs yang menyajikan informasi terkini seputar dunia olahraga, termasuk artikel, berita, ulasan.',
        category: {
            techStack: ['HTML5 & CSS3', 'JavaScript', 'PHP', 'Laravel'],
            type: {
                code: 'ftnt',
                title: 'Blog'
            },
        },
        imageURL: theSportsId,
        siteLink: 'https://thesport-id.000webhostapp.com/',
        githubLink: '',
    },
    {
        name: 'Responsive Christmas Website',
        description: 'Website static bertema Christmas yang memiliki responsive design.',
        techStack: 'HTML 5, CSS 3, JavaScript',
        category: {
            techStack: ['HTML5 & CSS3', 'JavaScript'],
            type: {
                code: 'ftnt',
                title: 'Landing Page'
            },
        },
        imageURL: chrismastWeb,
        siteLink: 'https://christmas-judah.netlify.app/',
        githubLink: '',
    },
    {
        name: 'JTodo List',
        description: '',
        category: {
            techStack: ['HTML5 & CSS3', 'JavaScript', 'PHP', 'Laravel'],
            type: {
                code: 'ftnt',
                title: 'Functionality'
            },
        },
        imageURL: jTodoList,
        siteLink: 'https://jtodo-list.netlify.app/',
        githubLink: '',
    },
    {
        name: 'POSPAY Helpdesk',
        description: '',
        techStack: 'React JS, Tailwind CSS, JavaScript',
        category: {
            techStack: ['JavaScript', 'React.JS', 'Tailwind CSS'],
            type: {
                code: 'ftnt',
                title: 'Dashboard'
            },
        },
        imageURL: helpdeskPospay,
        siteLink: 'https://helpdesk-pospay-ext-rivaldo.netlify.app/',
        githubLink: '',
    },
];

export const contact = {
    email: 'judahjmdasuki@gmail.com',
    phoneNumber: '(+62)81387306360',
};

const navs = [
    {
        title: 'HOME',
        hrefURL: '/',
    },
    {
        title: 'PROJECTS',
        hrefURL: '#projects',
    },
    {
        title: 'CONTACT',
        hrefURL: '#contacts',
    },
];

export const socialMedias = [
    {
        icon: 'fa-brands fa-linkedin',
        link: 'https://www.linkedin.com/in/judahdasuki/',
    },
    {
        icon: 'fa-brands fa-twitter',
        link: 'https://twitter.com/judahdskh',
    },
    {
        icon: 'fa-brands fa-github',
        link: 'https://www.linkedin.com/in/judahdasuki/',
    },
]

export const menus = [
    {
        path: '/projects',
        title: 'PROJECTS',
    },
    {
        path: '/',
        title: 'RESUME',
    },
    {
        path: '/contacts',
        title: 'CONTACT',
    },
];
import sparklingWillo from '../img/projects/camera.jpg';
import maryVarrodaja from '../img/projects/sewing.jpg';
import parisBarber from '../img/projects/barber.jpg';
import curtainMaster from '../img/projects/curtain.jpg';

import react from '../img/svg/react.svg'
import nodejs from '../img/svg/nodejs.svg'
import js from '../img/svg/js.svg'
import python from '../img/svg/python.svg'
import mongodb from '../img/svg/mongodb.svg'
import aws from '../img/svg/aws.svg'
import html from '../img/svg/html.svg'
import css from '../img/svg/css.svg'
import sass from '../img/svg/sass.svg'

const technologies = [
    { name: 'react', svg: react },
    { name: 'nodejs', svg: nodejs },
    { name: 'js', svg: js },
    { name: 'python', svg: python },
    { name: 'mongodb', svg: mongodb },
    { name: 'aws', svg: aws },
    { name: 'html', svg: html },
    { name: 'css', svg: css },
    { name: 'sass', svg: sass },
]


const bgColors = {
    ReactJs: '#48CEF7',
    Express: '#F2C986',
    NodeJs: '#E1C1C1',
    HTML: '#F66B3A',
    CSS: '#1296D5',
    JS: '#F7DF1E',
    AWS: '#F79400',
}

const labels = {
    ReactJs: <div className='technology' style={{ backgroundColor: bgColors.ReactJs }}> React.js </div>,
    Express: <div className='technology' style={{ backgroundColor: bgColors.Express }}> Express </div>,
    NodeJs: <div className='technology' style={{ backgroundColor: bgColors.NodeJs }}> Node.js </div>,
    HTML: <div className='technology' style={{ backgroundColor: bgColors.HTML }}> HTML </div>,
    CSS: <div className='technology' style={{ backgroundColor: bgColors.CSS }}> CSS </div>,
    JS: <div className='technology' style={{ backgroundColor: bgColors.JS }}> JavaScript </div>,
    AWS: <div className='technology' style={{ backgroundColor: bgColors.AWS }}> AWS </div>,
}

const data = {
    projects: [
        {
            id: 1,
            status: 'Live',
            name: 'Sparkling Willo Photography',
            box_name: {
                eng: 'Photographer',
                hun: 'Fényképész',
                pol: 'Fotograf',
            },
            img: {
                indexSrc: sparklingWillo,
                alt: 'spw-img',
            },
            labels:
                [
                    labels.ReactJs,
                    labels.Express,
                    labels.NodeJs
                ],
            projectName: "Photographer's website",
            website: "https://www.sparklingwillowphotography.co.uk/",
            github: "https://github.com/Karoly-Git",
            description: [
                'Responsive business website using backend and frontend technologies. Each page has a fully responsive layout applying mobile-first approach.',
                'JavaScript, HTML and CSS are used at the frontend. NodeJS is used at the backend. The following modules, packages or third-party services are applied: Font Awesome, Lightbox, Express, Express-Handlebars, Nodemailer.',
                'The main steps during development: Interview with the customer, sketching the design and outlining the functionalities, collecting all necessary assets, coding frontend, coding backend, deploying and setup at hosting service.',
            ],
        },
        {
            id: 2,
            status: 'Live',
            name: 'Mary Varrodája',
            box_name: {
                eng: 'Dressmaker',
                hun: 'Varrónő',
                pol: 'Krawcowa',
            },
            img: {
                indexSrc: maryVarrodaja,
                alt: 'mary-varrodaja-img',
            },
            labels:
                [
                    labels.Express,
                    labels.NodeJs
                ],
            projectName: "Dressmaker's website",
            website: "https://www.maryvarrodaja.hu/",
            github: "https://github.com/Karoly-Git",
            description: [
                'Responsive website applying mobile-first approach. Both backend and frontend technologies are implemented.',
                'At the frontend: JavaScript, HTML and CSS. At the backend: NodeJS.',
                'Modules, packages or third-party services: Font Awesome, Express, Express-Handlebars, Nodemailer.',
                'The main steps during development: Interview with the owner, sketching the design and outlining the functionalities, collecting all necessary assets, coding frontend, coding backend, registering domain, deploying and setup at hosting service.',
            ],
        },
        {
            id: 3,
            status: 'In development',
            name: 'Paris Barber',
            box_name: {
                eng: 'Barber',
                hun: 'Fodrász',
                pol: 'Fryzjer',
            },
            img: {
                indexSrc: parisBarber,
                alt: 'paris-barber-img',
            },
            labels:
                [
                    labels.ReactJs,
                    labels.Express,
                    labels.NodeJs
                ],
            projectName: "Barber's shop website",
            //website: "http://parisbarber.co.uk",
            website: "http://webdevme.co.uk/#/coming-soon",
            //website: "http://localhost:3000/coming-soon",
            github: "https://github.com/Karoly-Git",
            description: [],
        },
        {
            id: 4,
            status: 'In development',
            name: 'Curtain Master',
            box_name: {
                eng: 'Home decor',
                hun: 'Lakás dekor',
                pol: 'Wystrój domu',
            },
            img: {
                indexSrc: curtainMaster,
                alt: 'curtain-master-img',
            },
            labels:
                [
                    labels.ReactJs,
                    labels.Express,
                    labels.NodeJs
                ],
            projectName: "Curtain webshop",
            //website: "https://curtainmaster.co.uk/",
            website: "http://webdevme.co.uk/#/coming-soon",
            //website: "http://localhost:3000/coming-soon",
            github: "https://github.com/Karoly-Git",
            description: [],
        },
        /*{
            id: 4,
            status: 'Live',
            name: 'Dog watcher app',
            img: {
                indexSrc: dog,
                alt: 'dog-img',
            },
            labels:
                [
                    labels.JS,
                    labels.HTML,
                    labels.CSS
                ],
            projectName: "Dog watcher app",
            website: "",
            github: "https://github.com/Karoly-Git",
            description: [
                'Single-page application that fetches random photos from https://dog.ceo. The site demonstrates the communication between APIs.',
                'Technologies are used: JavaScript, HTML and CSS.',
                'Responsive layout applying mobile-first approach. Multi language application with dark mode functionality.',
                'User can choose the breed and the number of images wished to be displayed.',
            ],
        },
        {
            id: 5,
            status: 'Live',
            name: 'Weather app',
            img: {
                indexSrc: weather,
                alt: 'weather-img',
            },
            labels:
                [
                    labels.JS,
                    labels.HTML,
                    labels.CSS
                ],
            projectName: "Weather app",
            website: "",
            github: "https://github.com/Karoly-Git",
            description: [
                'This is a module app that can be part of other applications. It fetches the weather information from https://www.weatherapi.com',
                'By default, it displays the current weather is in Wandsworth, London, UK.',
                'After clicking the location, an input field pops up and any other location can be chosen by typing directly into the input field.',
                'About the wind direction arrow: the top of the screen represents North. Face to North when holding your device in hand then arrow shows you the correct wind direction.',
            ],
        },
        {
            id: 6,
            status: 'Live',
            name: 'Bank holiday app',
            img: {
                indexSrc: bankHoliday,
                alt: 'bank-holiday-img',
            },
            labels:
                [
                    labels.JS,
                    labels.HTML,
                    labels.CSS
                ],
            projectName: "Bank holiday app",
            website: "",
            github: "https://github.com/Karoly-Git",
            description: [
                'This single-page application fetches the bank holidays from https://www.gov.uk',
                'Technologies are used: React, JavaScript, HTML and CSS.',
                'The app has dark mode functionality.',
                'User can choose the country (England and Wales, Schotland, Northen Ireland) and the year wished to be displayed.',
            ],
        },
        {
            id: 7,
            status: 'Live',
            name: 'AWS 3s uploader app',
            img: {
                indexSrc: uploader,
                alt: 'uploader-img',
            },
            labels:
                [
                    labels.AWS,
                    labels.Express,
                    labels.NodeJs
                ],
            projectName: "AWS 3s uploader app",
            website: "",
            github: "https://github.com/Karoly-Git",
            description: [],
        },
        {
            id: 8,
            status: 'Live',
            name: 'AWS 3s uploader app',
            img: {
                indexSrc: uploader,
                alt: 'uploader-img',
            },
            labels:
                [
                    labels.AWS,
                    labels.Express,
                    labels.NodeJs
                ],
            projectName: "AWS 3s uploader app",
            website: "",
            github: "https://github.com/Karoly-Git",
            description: [],
        },
        {
            id: 9,
            status: 'Live',
            name: 'AWS 3s uploader app',
            img: {
                indexSrc: uploader,
                alt: 'uploader-img',
            },
            labels:
                [
                    labels.AWS,
                    labels.Express,
                    labels.NodeJs
                ],
            projectName: "AWS 3s uploader app",
            website: "",
            github: "https://github.com/Karoly-Git",
            description: [],
        },*/
    ]
}

export default data;
export { technologies };

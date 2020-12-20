var data_cat = [
    {
        title: 'Websites',
        code: 'W',
    },
    {
        title: 'E-Commerce',
        code: 'EC',
    },
    {
        title: 'Installations',
        code: 'IN',
    },
    {
        title: 'Exhibitions',
        code: 'EX',
    },
    {
        title: 'Portfolio',
        code: 'PF',
    },
    {
        title: 'Motion Graphics',
        code: 'MG',
    },
    {
        title: 'Design / Concept',
        code: 'D',
    },
    {
        title: 'Development',
        code: 'DV',
    },
];

var data_work = [
    {
        title: 'Amos Abel Yong',
        description: 'Concept and development of an online portfolio with a content management system for Singapore-based photographer, Amos Abel Yong.',
        url: 'https://ahmoo.se/',
        cat: ['w', 'pf', 'd', 'dv'],
        path: 'amos',
        media: ['0.mp4'],
        vimeo: '386013980',
    },
    {
        title: 'Mun Jiwoo',
        description: 'Mun Jiwoo is a South Korean conceptual artist.<br><br>This website linearly journals her wanders through life with the mouse cursor acting as a color picker tool that changes the background color of the website depending on the part of the photograph the mouse hovers on.',
        url: 'https://munjiwoo.com',
        cat: ['w', 'pf', 'd', 'dv'],
        path: 'jiwoo',
        media: ['0.mp4'],
        vimeo: '430933119',
    },
    {
        title: null,
    },
    {
        title: 'OKOK Services',
        description: 'OKOK Services is an independent creative studio based between Amsterdam and Seoul, creating exploratory visual digital experiences.',
        url: 'https://okok.services/',
        cat: ['w', 'pf', 'd', 'dv'],
        path: 'okok',
        media: ['0.mp4'],
        vimeo: '390138968',
    },
    {
        title: null,
    },

    {
        title: 'Alex Heeyeon Kil',
        description: 'Alex Heeyeon Kil is a Korean writer and researcher.<br><br>This website draws inspiration from the writer’s actual writing notes which was largely made up of accumulative layers of annotations and research materials which lends a scrapbook-esque quality to the end result.<br><br>At the same time, we looked to physical hardcover books to carry over their tactile and tangible characteristic to digital screens.',
        url: 'https://www.alexheeyeonkil.com/',
        cat: ['w', 'd', 'dv'],
        path: 'alex',
        media: ['0.mp4'],
        vimeo: '430933957',
    },
    {
        title: 'MONO X7',
        description: 'Designed and developed a new playful, bi-lingual site for Mono X7 – a digital canvas for the digital age.',
        url: 'https://mono.frm.fm/',
        cat: ['w', 'ec', 'd', 'dv'],
        path: 'tmc',
        media: ['0.mp4'],
        vimeo: '459880805',
    },
    {
        title: 'A Minor Thread',
        description: 'A Minor Thread is a design practice based in Singapore that works on commercial and independent projects.<br><br>The site invites visitors to create their own ‘minor threads’ by drawing on the home page with a mouse pointer or their own touch devices.<br><br>Muted pixel pigment variations of each project is sampled and used in a subtle gradient overlay as a hover effect.',
        url: 'http://aminorthread.com/',
        cat: ['w', 'pf', 'd', 'dv'],
        path: 'amt',
        media: ['0.mp4'],
        vimeo: '386014009',
    },

    {
        title: 'Demo Festival 2019',
        description: "Demo Festival celebrates the finest motion from the finest studios and designers from all around the world.<br><br>I was fortunate enough to have my work selected showcased for 24 hours on 80 digital screens located in Amsterdam Central train station.<br><br><span class='note'>*Photos are composites from original photographs by Aad Hoogendoorn.</span>",
        url: null,
        cat: ['in', 'ex', 'mg', 'd'],
        path: 'demo',
        media: ['0.mp4'],
        vimeo: '386014080',
    },
    {
        title: null,
    },

    {
        title: 'Occasional Glimpses',
        description: 'Occasionally, I Saw Brief Glimpses of Beauty is a series of graphite drawings completed from 2015 – 2020 by Izzy Tan.<br><br>It records a collection of individual human figures caught in between moments, suspended in different points of reflection. An exercise in an observation of the ordinary, building up to a library of pictorial alphabets of the everyday.<br><br>When combined, these images form new narratives.',
        url: 'https://www.occasional-glimpses.com/',
        cat: ['w', 'ex', 'd', 'dv'],
        path: 'og',
        media: ['0.mp4'],
        vimeo: '430935152',
    },

    {
        title: 'Red Bull Music',
        description: 'Red Bull Music Presents is a collection of shows that celebrates diverse music scenes in cities across the globe. I was comissioned to create some exploratory motion graphic visuals with code for the 2020 edition of the program.<br><br>Visuals done in code with THREE.js and cables.gl',
        url: null,
        cat: ['mg', 'd', 'dv'],
        path: 'redbull',
        media: ['0.mp4'],
        vimeo: '386015613',
    },
    {
        title: null,
    },

    {
        title: 'Nikmat Mathematics',
        description: 'A non-conventional landing page for freelance mathematics tutor Nikmat with a little play on formulas and graphs.',
        url: 'https://www.nikmaths.com/',
        cat: ['w', 'd', 'dv'],
        path: 'og',
        media: ['0.mp4'],
        vimeo: '477890135',
    },
    {
        title: null,
    },
    {
        title: 'The Waumap Project',
        description: 'The Waumap project archives a 10-year record of major commercial buildings near Wausan-ro, the location of Hongik University and presents this information as interactive ‘street-view’ images and motion typography.<br><br>WebGL visuals done with THREE.js<br><br>Project completed while working with Rebel9.',
        url: 'https://waumap.netlify.com/',
        cat: ['w', 'in', 'ex', 'd', 'dv'],
        path: 'waumap',
        media: ['0.mp4'],
        vimeo: '386014188',
    },

    {
        title: 'Full of Luck Club',
        description: 'Full of Luck Club is a modern Cantonese kitchen in Singapore serving authentic Chinese comfort food and lots of good luck.',
        url: null,
        cat: ['w', 'd', 'dv'],
        path: 'folc',
        media: ['0.mp4'],
        vimeo: '386014100',
    },
    {
        title: null,
    },
    {
        title: 'The Mindful Company',
        description: "The Mindful Company is a website for individuals to join on a journey to live an inspired and mindful life. It also features an online store to buy thoughtfully designed reminder bands.<br><br>Nominated for <a href='https://www.awwwards.com/' target='_blank'>AWWWARDS</a> 2015 ecommerce website of the year",
        url: 'https://www.mindful-company.com/',
        cat: ['w', 'ec', 'd', 'dv'],
        path: 'tmc',
        media: ['0.mp4'],
        vimeo: '386012622',
    },
    {
        title: 'MMCA Korea',
        description: 'MMCA - A website for the National Museum of Modern and Contemporary Art of Korea (MMCA) to showcase archive data submissions from an online survey done as part of the 50th anniversary celebrations of the art institution.<br><br>WebGL data visualization done with THREE.js and oimi.js<br><br>Project completed while working with Rebel9.',
        url: '',
        cat: ['w', 'ex', 'in', 'd', 'dv'],
        path: 'mmca',
        media: ['0.mp4'],
        vimeo: '386014127',
    },
    {
        title: 'Bless You My Dear',
        description: 'Bless You My Dear – A curation of sterling silver jewelry and an expression of wearable frankness.<br><br>Online store built on the Shopify ecommerce platform.',
        url: 'https://www.blessyoumydear.com/',
        cat: ['w', 'ec', 'd', 'dv'],
        path: 'bymd',
        media: ['0.mp4'],
        vimeo: '386015212',
    },

    {
        title: null,
    },
    {
        title: 'Coma Makeup',
        description: 'Coma Makeup is a one-stop online beauty station for amazing quality cosmetics and beauty products at affordable prices.<br><br>Online store built on the Shopify ecommerce platform.',
        url: null,
        cat: ['w', 'ec', 'd', 'dv'],
        path: 'coma',
        media: ['0.mp4'],
        vimeo: '386014044',
    },
    {
        title: null,
    },
    {
        title: null,
    },
    {
        title: 'The Gentle Label',
        description: 'The Gentle Label makes beautifully simple and natural skincare products for the whole family and home.<br><br>Development of the online shop was done on Shopify.',
        url: null,
        cat: ['w', 'ec', 'd', 'dv'],
        path: 'tgl',
        media: ['0.mp4'],
        vimeo: '386014154',
    },

    {
        title: null,
    },
    {
        title: 'Experimentations',
        description: "Various code based visual experimentations made with WebGL, GLSL, cables.gl<br><br>View more at <a href='https://instagram.com/faris.kassim' target='_blank'>@faris.kassim",
        url: null,
        cat: ['mg', 'd', 'dv'],
        path: 'coma',
        media: ['0.mp4'],
        vimeo: '389052202',
    },
];

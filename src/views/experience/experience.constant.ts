import { Link } from "@shared/models";

import { Experience } from "./experience.model";

export const EXPERIENCE_TITLE = 'What are my experiences?';

export const EXPERIENCES: Experience[] = [
    new Experience(
        'Valcon',
        `Currently working as Front-End developer at Valcon - European consulting, 
        technology and data company based in the Netherlands, Denmark, UK, Sweden, 
        Germany, Croatia and Serbia. Focused on delivering pixel-perfect and complex
        UI/UX solutions based on client needs.
        `,
        'April 2022 - Present',
        [],
        new Link('https://valcon.com/hr/', 'Valcon official website')
    ),
    new Experience(
        'Infomedica d.o.o.',
        `Medical-IT solutions company where I was working as Junior
        Full Stack Developer focusing on Radiological Information
        System using Angular, .NET Core, EF Core and SQL relational
        database. Key challenges and skills gained:
        `,
        'September 2019 - October 2021',
        [
            'Teamwork and collaboration despite COVID-19 pandemic',
            'Simple and effective UI design',
            'Web application full development cycle',
            'Medical staff thinking',
            'Regional clients collaboration and software maintenance'
        ],
        new Link('https://infomedica.hr', 'Infomedica official website')
    ),
    new Experience(
        'Personal projects',
        `Self invested projects developed within college projects,
        Master Thesis and in free time:
        `,
        '',
        [
            `Oglasomat - hybrid mobile application for faster listings
            findings on local advertising website developed using
            Ionic, Cordova and SQLite.`,
            `GigBook - in development with colleague using Angular,
            .NET Core, EF Core and SQL relational database. Mini
            social website that should help local organisers to avoid
            event overlapping.`,
            `MusicPlayer - simple music player built within college
            class using Android Studio and Java.`
        ]
    ),
    new Experience(
        'Jantar',
        [
            `Software Development Lecturer at Jantar - Foreign Language
            School. Teached youth about general programming ideas and
            paradigms introducing Visual Studio as IDE, C++ language and
            console applications.
        `,
            `
            Key challenge was to simplify
            curriculum and to adapt it to student capabilities which
            improved my presentation skills and performances.`
        ],
        'September 2018 - June 2019',
        [],
        new Link('https://www.jantar.hr/hr', 'Jantar official website')
    ),
    new Experience(
        'KUM - Club Kocka',
        `Stage technician/Live Sound Enginner volunteer. Gained and
        improved skills relevant to software development are
        teamwork, social skills, coordination and management,
        solving complex problems.
        `,
        'January 2014 - December 2020',
        [],
        new Link('https://www.kum-split.hr', 'KUM official website')
    )
];

import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: "Stéphane",
    lastName: "Salomon",
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: "Frontend Developer",
    avatar: "/images/mypicture.jpg",
    location: "Europe/Paris", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: (
        <>
            I occasionally write about design, technology, and share thoughts on
            the intersection of creativity and engineering.
        </>
    ),
};

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: "GitHub",
        icon: "github",
        link: "https://github.com/theflupke/",
    },
    {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/stephanesalomon/",
    },
    {
        name: "Email",
        icon: "email",
        link: "mailto:stephane.salomon@pm.me",
    },
];

const home = {
    label: "Home",
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>JavaScript Developer</>,
    subline: (
        <>
            I'm Stéphane, a javascript developer at{" "}
            <InlineCode>Agence Eliette</InlineCode>, where I craft intuitive
            user experiences. After hours, I build my own projects.
        </>
    ),
};

const about = {
    label: "About",
    title: "About me",
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false,
    },
    avatar: {
        display: true,
    },
    calendar: {
        display: false,
        link: "https://cal.com",
    },
    intro: {
        display: true,
        title: "Introduction",
        description: (
            <>
                Passionate JavaScript developer, I combine technical expertise
                and design to craft high‑performance websites and web
                applications. With several years of agency experience, I’ve
                worked on diverse projects, from major brands like Volkswagen
                and Zodiac Nautic to local businesses. My goal: to bring my
                skills in React, Next.js, Node.js, and WordPress to ambitious,
                long‑term projects.
            </>
        ),
    },
    work: {
        display: true, // set to false to hide this section
        title: "Work Experience",
        experiences: [
            {
                company: "Agence Eliette",
                timeframe: "2020 - Present",
                role: "Lead Developer",
                achievements: [
                    <>
                        Led a team of 2 developers and 1 designer on e‑commerce
                        and corporate projects. Migrated multiple websites from
                        WordPress to Next.js + Tailwind, boosting team
                        productivity by 30%.
                    </>,
                    <>
                        Implemented GitLab CI/CD pipelines and Docker, reducing
                        deployment time by 50%.
                    </>,
                    <>
                        Developed React interfaces and integrated GSAP
                        animations for dynamic, engaging UIs.
                    </>,
                    <>
                        Optimized loading times across several websites,
                        achieving up to 40% faster performance.
                    </>,
                ],
                images: [
                    // optional: leave the array empty if you don't want to display images
                    {
                        src: "/images/eliette.jpg",
                        alt: "Agence Eliette",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                company: "Creative Web Solutions",
                timeframe: "2018 - 2020",
                role: "Front-End Developer",
                achievements: [
                    <>
                        Collaborated with designers and project managers to
                        deliver B2B web solutions.
                    </>,
                    <>
                        Built and maintained high‑performance front‑end
                        interfaces using JavaScript and modern frameworks.
                    </>,
                    <>
                        Delivered projects for key clients including Volkswagen,
                        Seat, and L’Oréal.
                    </>,
                    <>
                        Worked on tight deadlines for major clients, ensuring
                        both quality and responsiveness.
                    </>,
                    <>
                        Improved UX/UI for key websites and internal tools,
                        focusing on usability and visual consistency.
                    </>,
                ],
                images: [],
            },
            {
                company: "Bourse de l'immobilier",
                timeframe: "2016 - 2018",
                role: "Web designer",
                achievements: [
                    <>
                        Led the UX/UI redesign of the main website and internal
                        tools.
                    </>,
                    <>
                        Developed new features and tools on a .NET stack,
                        collaborating closely with stakeholders.
                    </>,
                    <>
                        Focused on user‑centric design and web performance,
                        enhancing both functionality and aesthetics.
                    </>,
                ],
                images: [],
            },
        ],
    },
    studies: {
        display: true, // set to false to hide this section
        title: "Studies",
        institutions: [
            {
                name: "ESTEI Bordeaux",
                description: <>Studied graphic design and web development.</>,
            },
        ],
    },
    technical: {
        display: false, // set to false to hide this section
        title: "Technical skills",
        skills: [
            {
                title: "Figma",
                description: <>Able to prototype in Figma</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: "/images/projects/project-01/cover-02.jpg",
                        alt: "Project image",
                        width: 16,
                        height: 9,
                    },
                    {
                        src: "/images/projects/project-01/cover-03.jpg",
                        alt: "Project image",
                        width: 16,
                        height: 9,
                    },
                ],
            },
            {
                title: "Next.js",
                description: <>Building next gen apps with Next.js.</>,
                // optional: leave the array empty if you don't want to display images
                images: [],
            },
        ],
    },
};

const blog = {
    label: "Blog",
    title: "Writing about design and tech...",
    description: `Read what ${person.name} has been up to recently`,
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
};

const work = {
    label: "Work",
    title: "My projects",
    description: `Design and dev projects by ${person.name}`,
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
};

const gallery = {
    label: "Gallery",
    title: "My photo gallery",
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: "/images/gallery/img-01.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-02.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-03.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-04.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-05.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-06.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-07.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-08.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-09.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-10.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-11.jpg",
            alt: "image",
            orientation: "vertical",
        },
        {
            src: "/images/gallery/img-12.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-13.jpg",
            alt: "image",
            orientation: "horizontal",
        },
        {
            src: "/images/gallery/img-14.jpg",
            alt: "image",
            orientation: "horizontal",
        },
    ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

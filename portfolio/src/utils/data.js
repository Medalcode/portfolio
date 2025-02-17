export const SKILLS = [
    {
        "title": "Frontend",
        "icon": "assets/Images/frontend2.svg",
        "skills": [
            { "skill": "HTML 5", "icon": "assets/Images/html5.svg", "description": "Creating structures and basic content for web pages." },
            { "skill": "CSS 3", "icon": "assets/Images/css3.svg", "description": "Designing and styling web page layouts." },
            { "skill": "JavaScript", "icon": "assets/Images/jscript.svg", "description": "Creating interactive and dynamic web pages." },
            { "skill": "React", "icon": "assets/Images/react.svg", "description": "Developing reactive user interfaces with reusable components." }
        ]
    },
    {
        "title": "Backend",
        "icon": "assets/Images/backend3.svg",
        "skills": [
            { "skill": "Python", "icon": "assets/Images/python.svg", "description": "Developing backend applications and scripts." },
            { "skill": "Django", "icon": "assets/Images/django.svg", "description": "Building complete web applications using this Python framework." },
            { "skill": "MySQL", "icon": "assets/Images/mysql.svg", "description": "Designing and managing relational databases." },
            { "skill": "MongoDB", "icon": "assets/Images/mongodb.svg", "description": "Managing non-relational (NoSQL) databases." }
        ]
    },
    {
        "title": "Tools",
        "icon": "assets/Images/tools2.svg",
        "skills": [
            { "skill": "GitHub", "icon": "assets/Images/github.svg", "description": "Version control and collaboration in software projects." },
            { "skill": "Visual Studio Code", "icon": "assets/Images/vscode.svg", "description": "Code editor with integrated development tools." },
            { "skill": "Linux", "icon": "assets/Images/linux.svg", "description": "Using the Linux operating system for development and server management." },
            { "skill": "ChatGPT", "icon": "assets/Images/chatgpt.svg", "description": "Assistance in generating code and solving programming problems." }
        ]
    },
    {
        title: "Soft Skills",
        icon: "assets/Images/softskills1.svg",
        skills: [
            { skill: "Problem Solving", icon: "assets/Images/problemsolving.svg", description: "Effective resolution of complex issues in technical environments." },
            { skill: "Teamwork", icon: "assets/Images/teamwork.svg", description: "Collaboration in multidisciplinary teams to achieve common goals." },
            { skill: "Communication", icon: "assets/Images/communication2.svg", description: "Clear and effective exchange of technical and non-technical ideas." },
            { skill: "Time Management", icon: "assets/Images/timemanagement.svg", description: "Prioritization and organization to meet tight deadlines." },
        ]
    },
];

export const WORK_EXPERIENCE = [
    {
        title: "Technical Support Executive at VTR",
        date: "2009 - 2023",
        responsibilities: [
            "Analyzed and resolved technical issues in internal systems to ensure operational continuity.",
            "Detected and managed massive system failures using monitoring and data analysis tools.",
            "Provided second-level technical support, resolving critical incidents efficiently.",
            "Designed manuals and processes to train technical staff in problem-solving techniques.",
            "Optimized workflows by implementing technological solutions and data-driven approaches."
        ],
    },
    {
        title: "Support Technician at Konecta",
        date: "2007 - 2009",
        responsibilities: [
            "Implemented technical solutions for customers, including service installation and configuration.",
            "Diagnosed and repaired faults in telecommunication equipment and systems.",
            "Coordinated the provisioning and configuration of internal and external equipment, ensuring high standards of quality."
        ],
    },
    {
        title: "Mobile Device Repair Technician at ANOVO – COMTEL",
        date: "2003 - 2006",
        responsibilities: [
            "Analyzed and repaired electronic and software failures in mobile devices.",
            "Performed software updates and configurations on terminals to ensure full functionality.",
            "Implemented process improvements for the refurbishment of mobile devices."
        ],
    },
];

export const PROJECTS = [
    {
        title: "Tuniforme",
        technologies: [" HTML ", " CSS ", " JavaScript ", " Bootstrap ", " PostgreSQL ", " Django ", " Django REST framework ", " Render "],
        description: "A fake store with transbank payment gateway built for the application development workshop.",
        characteristics: [
            "The system allows you to manage inventories, add, edit and delete uniforms, and receive alerts for low stock.",
            "Users can place orders, track their status, and view purchase history.",
            "The distribution of uniforms is recorded, including assignments, deliveries and returns.",
            "It has authentication and roles for administrators, employees and users with different permissions.",
            "The interface is intuitive and responsive thanks to Bootstrap, optimized for mobile devices."
        ],
        link: "https://tuniforme.onrender.com"
    },
    {
        title: "Medalblog",
        technologies: [" HTML ", " CSS ", " JavaScript ", " Next.js ", " Tailwind CSS ", " MongoDB ", " NextAuth.js ", " Vercel "],
        description: "A personal blog to share programming tips and resources.",
        characteristics: [
            "It features a clean and responsive design thanks to Tailwind CSS.",
            "Implements static and dynamic page generation with Next.js.",
            "Includes authentication and user management using NextAuth.js.",
            "Content is handled in Markdown/MDX, making it easy to edit and organize."
        ],
        link: "https://medalblog-vo3w.vercel.app"
    },
    {
        title: "Portfolio",
        technologies: [" HTML ", " CSS ", " JavaScript ", " React ", "Node", "JSON"],
        description: "Personal portfolio website designed to showcase projects, skills, and work experience.",
        characteristics: [
            "Responsive design that adapts to various devices.",
            "Interactive UI with dynamic content filtering and animations.",
            "Modern design with a focus on usability and visual appeal.",
            "Integration with backend API for dynamic data display.",
            "Optimized for performance and SEO to reach a wider audience."
        ],
    },
];

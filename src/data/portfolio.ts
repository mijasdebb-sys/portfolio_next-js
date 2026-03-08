import {
    FaNodeJs, FaDocker, FaPython,
    FaGithub
} from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiPostgresql,
    SiMysql, SiFirebase, SiVercel
} from "react-icons/si";

export const personalInfo = {
    name: "Mijadev",
    role: "Aprendiz de ingeniería de sistemas",
    titles: [
        "Desarrollador Full Stack",
        "Solucionador de problemas",
        "Entusiasta de la tecnología",
        "Defensor de UI/UX"
    ],
    bio: "Soy un Desarrollador Full Stack apasionado con una sólida base en la construcción de aplicaciones web escalables. Me especializo en el ecosistema Next.js en el frontend y Node.js con PostgreSQL en el backend. Me encanta transformar problemas complejos en experiencias digitales elegantes, intuitivas y de alto rendimiento. Cuando no estoy programando, exploro nuevas tecnologías y mejores prácticas para mantenerme a la vanguardia del desarrollo web.",
    location: "La paz, Bolivia",
    email: "mijasdevbb@gmail.com", // Replace with real email
    socials: {
        github: "https://github.com/mijasdebb-sys", // Replace with real url
        linkedin: "https://linkedin.com", // Replace with real url
    }
};

export const skills = {
    frontend: [
        { name: "Next.js", icon: SiNextdotjs, level: 90, color: "#FFFFFF" },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 95, color: "#06B6D4" },
    ],
    backend: [
        { name: "Node.js", icon: FaNodeJs, level: 90, color: "#339933" },
        { name: "Python", icon: FaPython, level: 80, color: "#3776AB" },
        { name: "REST APIs", icon: null, level: 95, color: "#FF6C37" },
        { name: "GraphQL", icon: null, level: 70, color: "#E10098" },
    ],
    database: [
        { name: "MySQL", icon: SiMysql, level: 85, color: "#4479A1" },
        { name: "PostgreSQL", icon: SiPostgresql, level: 85, color: "#4169E1" },
        { name: "Firebase", icon: SiFirebase, level: 80, color: "#FFCA28" },
    ],
    tools: [
        { name: "Git/GitHub", icon: FaGithub, level: 90, color: "#FFFFFF" },
        { name: "Docker", icon: FaDocker, level: 75, color: "#2496ED" },
        { name: "Vercel", icon: SiVercel, level: 85, color: "#000000" },
        { name: "Linux", icon: null, level: 80, color: "#FCC624" },
    ]
};

export const projects = [
    {
        id: "cinema-system",
        title: "Sistema de Gestión de Cine",
        description: "Aplicación CRUD completa para gestionar operaciones de cine. Incluye programación de películas, reserva de entradas, selección de asientos y panel de administración para reportes. Construida con autenticación robusta y consultas complejas a base de datos relacional.",
        image: "/projects/cinema.jpg",
        techStack: ["Node.js", "PostgreSQL", "Express", "Next.js", "JWT"],
        demoUrl: "https://demo.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: "ecommerce-dashboard",
        title: "Panel de Administración E-commerce",
        description: "Panel administrativo completo para plataformas de comercio electrónico. Ofrece análisis de ventas en tiempo real, gestión de inventario, flujos de procesamiento de pedidos y visualización de datos con gráficos personalizados.",
        image: "/projects/ecommerce.jpg",
        techStack: ["Next.js", "Tailwind CSS", "Recharts", "Firebase"],
        demoUrl: "https://demo.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: "ai-chatbot",
        title: "Landing Page de Chatbot con IA",
        description: "Landing page de alta conversión que integra un chatbot inteligente de soporte al cliente. Conecta el frontend Next.js con automatización de flujos n8n y la API de GPT-4 de OpenAI para respuestas dinámicas y contextuales.",
        image: "/projects/ai-chat.jpg",
        techStack: ["Next.js 14", "n8n", "OpenAI API"],
        demoUrl: "https://demo.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: "restaurant-app",
        title: "App de Pedidos para Restaurante",
        description: "Aplicación full-stack responsive para que los clientes del restaurante exploren menús, personalicen pedidos y procesen pagos de forma segura. Incluye sistema de seguimiento de pedidos en tiempo real para la cocina.",
        image: "/projects/restaurant.jpg",
        techStack: ["Next.js", "Node.js", "MySQL", "Stripe API", "Socket.io"],
        demoUrl: "https://demo.com",
        githubUrl: "https://github.com",
        featured: false,
    }
];

export const experience = [
    {
        id: 1,
        role: "Desarrollador Full Stack",
        company: "Tech Solutions Inc.",
        period: "2023 - Presente",
        description: "Lideré el desarrollo de aplicaciones web escalables con Next.js y Node.js. Mejoré el rendimiento de consultas a base de datos en un 40% e implementé pipelines CI/CD robustos.",
        type: "work"
    },
    {
        id: 2,
        role: "Practicante Desarrollador Frontend",
        company: "Digital Studio",
        period: "2022 - 2023",
        description: "Colaboré con diseñadores para implementar componentes UI responsivos y pixel-perfect. Migré código legacy a Next.js con Hooks modernos.",
        type: "work"
    },
    {
        id: 3,
        role: "Ingeniería de Sistemas",
        company: "Universidad de Tecnología",
        period: "2019 - 2023",
        description: "Especializado en Ingeniería de Software y Sistemas Distribuidos. Graduado con Honores. Lideré el Club de Programación Universitario.",
        type: "education"
    }
];

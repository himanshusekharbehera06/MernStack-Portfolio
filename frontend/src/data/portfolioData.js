import {

  Code2,
  Database,
  ServerCog,
  Laptop2,
  Github,
  Linkedin,
  Mail,
  Globe,
  ShieldCheck,
  Layers3,
  Sparkles,
  Instagram,
} from "lucide-react";

export const personalInfo = {
  name: "Himanshu Sekhar Behera",
  role: "MERN Stack Developer | Java & Spring Boot Developer",
  tagline: "Building modern, scalable, and high-performance web applications",
  intro:
 "I work across both frontend and backend development, allowing me to create complete full-stack solutions that are not only technically strong but also visually polished and user-friendly. On the frontend, I focus on building engaging and responsive interfaces using React, JavaScript, Tailwind CSS, HTML, CSS, and modern UI practices. I enjoy crafting web experiences that feel smooth, professional, and intuitive for users, while also maintaining clean component structure and scalable code organization. On the backend, I work with Node.js, Express.js, MongoDB, REST APIs, JWT authentication, and Java-based technologies to develop secure, maintainable, and performance-oriented applications. I am particularly interested in backend logic, API integration, authentication systems, and database management that support robust real-world applications. Alongside MERN stack development, I also have a strong foundation in Java programming, object-oriented concepts, and backend development using Spring Boot. This combination allows me to approach software development with a broader understanding of application architecture, problem-solving, and development best practices.",
 location: "Bengaluru, Karnataka",
  email: "himanshusekharbehera205@gmail.com",
  phone: "8249736001",
  linkedin: "https://www.linkedin.com/in/himanshu-sekhar-behera-076368275",
  github: "https://github.com/himanshusekharbehera06",
  resume: "#",
};

export const quickStats = [
  { label: "Tech Stack", value: "MERN + Java + Spring Boot" },
  { label: "Projects", value: "4+ Real-World Projects" },
  { label: "Focus", value: "Full Stack Web Development" },
];

export const aboutHighlights = [
  {
    icon: Layers3,
    title: "Full Stack Focus",
    desc: "Building polished frontend experiences with robust backend systems.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Architecture",
    desc: "JWT auth, protected routes, validation, and scalable APIs.",
  },
  {
    icon: Sparkles,
    title: "Premium UI Mindset",
    desc: "Creating clean, interactive, and recruiter-ready interfaces.",
  },
];

export const skills = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "MySql", "Mongoose"],
  },
  {
    title: "Java & Spring Boot",
    icon: Laptop2,
    items: ["Java", "Spring Boot", "Core Java", "OOPs", "Maven", "JDBC", "Servlets", "JSP",],
  },
  {
    title: "Tools",
    icon: Globe,
    items: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Figma", "Netlify", "Heroku", "MongoDB Atlas", "Cloudinary","Adobe Photoshop"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "GIET University, Gunupur, Odisha",
    year: "2022 – 2024",
    description:
      "Completed a Master of Computer Applications with a strong academic and practical foundation in software engineering, full-stack web development, database management, object-oriented programming, and application design. Gained hands-on experience in building scalable and user-friendly applications using modern technologies."
     },
  {
    degree: "Bachelor of Science (BSC)",
    institution: "Maharaja Sriram Chandra Bhanja Deo University, Odisha",
    year: "2018 – 2021",
    description:
    "Completed a Bachelor of Science degree that helped build a strong academic foundation in analytical thinking, logical reasoning, mathematics/science concepts, and technical understanding. Developed discipline, problem-solving ability, and a structured approach toward learning and technology."
 },
   {
    degree: "Bachelor of Science (+2 Science)",
    institution: "Gonashika +2 Science College Keonjhar,  Odisha",
    year: "2016 – 2018",
    description:
    "Completed Higher Secondary Education with a focus on academic fundamentals, discipline, communication, and core subject knowledge. This stage strengthened the base for higher studies and improved overall confidence in learning and career development."
  },
];

export const experience = [
    {
    title: "Java Full-Stack Developer",
    company: "JSpiders",
    duration: "Internship",
    points: [
      "Gained practical experience in full-stack web development using Java and modern web technologies.",
      "Worked on both frontend and backend modules of web applications.",
      "Developed and integrated RESTful APIs for smooth communication between client and server.",
      "Implemented backend functionalities using Java, Spring Boot, and database connectivity.",
      "Strengthened problem-solving and coding skills through real-time project development.",
      "Improved understanding of software development lifecycle, debugging, and deployment workflow.",
      "Collaborated on application features, testing, and performance improvement.",
      "Gained exposure to version control tools like Git and GitHub.",
    ],
  },
  {
    title: "MERN Stack Developer Trainee",
    company: "JSpiders",
    duration: "Internship",
    points: [
      "Built responsive full-stack web applications using React, Node.js, Express.js, and MongoDB.",
      "Developed authentication systems using JWT and protected routes.",
      "Worked on REST API integration, CRUD operations, and database management.",
      "Created modern UI components using Tailwind CSS and reusable React architecture.",
      "Improved debugging, version control, and backend integration skills through hands-on project development.",
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Website",
    description:
      "MERN Ecommerce is a full-stack application designed to transform your online shopping experience. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it leverages Redux Toolkit for efficient state management and Material UI for a sleek, user-friendly interface. This project offers a robust platform for both users and admins, packed with essential features for a seamless experience.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    github: "https://github.com/himanshusekharbehera06/E-commerce.git",
    live: "#",
    accent: "from-primary to-secondary",
  },
  {
    title: "Admin Panel",
    description:
      "IDURAR is Open Fair-Code Source ERP / CRM (Invoice / Inventory / Accounting / HR) Based on Mern Stack (Node.js / Express.js / MongoDb / React.js ) with Ant Design (AntD) and Redux Toolkit. It provides a comprehensive solution for managing business operations, including inventory, sales, customer relationships, and financials. The admin panel offers a user-friendly interface for efficient data management and reporting.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/himanshusekharbehera06/Admin-Panel.git",
    live: "https://cloud.idurarapp.com",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "3D Developer Portfolio",
    description:
      "Designed and developed a premium personal portfolio website featuring 3D animations, interactive UI, hover effects, project showcase, skills section, and backend-powered contact form with database integration.",
    tech: ["React.js", "Tailwind CSS", "Three.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/himanshusekharbehera06",
    live: "#",
    accent: "from-fuchsia-500 to-violet-500",
  },
  {
    title: "Tour & Travel Website",
    description:
      "Developed a secure authentication system with registration, login, email verification, protected routes, and token-based access control. Focused on backend security and user session handling.",
    tech: ["React.js", "Java", "Spring Boot", "Maven", "MongoDB", "JWT"],
    github: "https://github.com/himanshusekharbehera06",
    live: "#",
    accent: "from-emerald-500 to-teal-500",
  },
];

export const socialLinks = [
  { icon: Github, href: personalInfo.github, label: "GitHub" },
  { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
];
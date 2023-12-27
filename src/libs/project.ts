import { IProject } from "@/types/types";

export const projects: IProject[] = [
  {
    _id: "1",
    title: "X Clone",
    description: "Clone of X website using Supabase for authentication and database. Allow you login with Github and create new posts usingthe new Server Actions from Next.js 14.",
    tags: ["TypeScript", "Next.js", "TailwindCSS", "NextUI", "Vercel", "Supabase"],
    urlImage: "/images/projects/clone_x_app.webp",
    urlGithub: "https://github.com/FabrizzioLoPresti/nextjs14-clonex-supabase-midudev",
    urlDeploy: "https://nextjs14-clonex-supabase-midudev.vercel.app/"
  },
  {
    _id: "2",
    title: "CRUD of Posts",
    description: "CRUD of posts using Postgresql from Vercel. Allow you create, read, update and delete posts using the new features from Next.js 14.",
    tags: ["TypeScript", "Next.js", "TailwindCSS", "Vercel", "PostgreSQL"],
    urlImage: "/images/projects/crud_posts.webp",
    urlGithub: "https://github.com/FabrizzioLoPresti/nextjs14-faztcode",
    urlDeploy: "https://nextjs14-faztcode.vercel.app/"
  },
  {
    _id: "3",
    title: "Rick and Morty App",
    description: "It is a web application that allows you to search for characters from the Rick and Morty series. Have pagination and Server Components from Next.js 14.",
    tags: ["TypeScript", "Next.js", "TailwindCSS", "NextUI", "Vercel"],
    urlImage: "/images/projects/rick_and_morty_app.webp",
    urlGithub: "https://github.com/FabrizzioLoPresti/nextjs14-rickandmorty",
    urlDeploy: "https://nextjs14-rickandmorty.vercel.app/"
  },
  {
    _id: "4",
    title: "Cryptocurrency Quotation",
    description: "Cryptocurrency quotation using the API from CryptoCompare. Allow you to see the price of the most important cryptocurrencies compared to the selected currency.",
    tags: ["Vite", "React", "Styled Components", "CryptoCompare", "Netlify"],
    urlImage: "/images/projects/react_cotizador_crypto.webp",
    urlGithub: "https://github.com/FabrizzioLoPresti/cotizadorcrypto",
    urlDeploy: "https://cotizador-crypto-cursoreact.netlify.app/"
  },
  {
    _id: "5",
    title: "Expense planner",
    description: "Expense planner that allows load an initial budget and add expenses. It shows the remaining budget and the percentage of the budget consumed. It uses LocalStorage to save the expenses.",
    tags: ["Vite", "React", "TailwindCSS", "LocalStorage", "Netlify"],
    urlImage: "/images/projects/react_planificador_gastos.webp",
    urlGithub: "https://github.com/FabrizzioLoPresti/planificadorgastos",
    urlDeploy: "https://planificador-gastos-cursoreact.netlify.app/"
  },
  {
    _id: "6",
    title: "Veterinary Administrator",
    description: "You add pets and their owners. You can also add appointments for each pet. It uses LocalStorage to save the data.",
    tags: ["Vite", "React", "TailwindCSS", "LocalStorage", "Netlify"],
    urlImage: "/images/projects/react_veterinaria_app.webp",
    urlGithub: "https://github.com/FabrizzioLoPresti/administradorpacientes",
    urlDeploy: "https://administrador-pacientes-cursoreact.netlify.app/"
  }
]
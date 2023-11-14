export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    // {
    //   title: "Home",
    //   href: "/",
    // },
  ],
  links: {
    discord: "https://discord.gg/4jfGJENm",
    github: "https://github.com/polymahh/junior-prep",
    login: "/login",
    register: "/register",
    dashboard:"/dashboard"
  },
  dashboard:{
    title:"dashboard",
    href:"/dashboard"
  },
  teams:{
    title:"teams",
    href:"/dashboard/teams"
  },
  courses:{
    title:"courses",
    href:"/dashboard/courses"
  },
  settings:{
    title:"settings",
    href:"/dashboard/settings"
  },
  languages:[
    {
      title:"javascript",
      href:"/dashboard/javascript"
    },
    {
      title:"react",
      href:"/dashboard/react"
    },
    {
      title:"html",
      href:"/dashboard/html"
    },
    {
      title:"css",
      href:"/dashboard/css"
    },
  ]
    
  
}

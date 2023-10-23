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
    discord: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    login: "/login",
    register: "/register",
  },
  profile:{
    title:"profile",
    href:"/dashboard/profile"
  },
  settings:{
    title:"settings",
    href:"/dashboard/settings"
  },
  languages:[
    {
      title:"javascript",
      href:"/dashboard/languages/javascript"
    },
    {
      title:"react",
      href:"/dashboard/languages/react"
    },
    {
      title:"html",
      href:"/dashboard/languages/html"
    },
    {
      title:"css",
      href:"/dashboard/languages/css"
    },
  ]
    
  
}

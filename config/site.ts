export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Next.js",
    description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
    sidebarNav: [
        {
            title: "dashboard",
            href: "/dashboard",
        },
        {
            title: "teams",
            href: "/dashboard/teams",
        },
        {
            title: "courses",
            href: "/dashboard/courses",
        },
    ],
    links: {
        discord: "https://discord.gg/4jfGJENm",
        github: "https://github.com/polymahh/junior-prep",
        login: "/login",
        register: "/register",
        dashboard: "/dashboard",
    },

    languageNav: [
        {
            title: "javascript",
            href: "/dashboard/javascript",
        },
        {
            title: "react",
            href: "/dashboard/react",
        },
        {
            title: "html",
            href: "/dashboard/html",
        },
        {
            title: "css",
            href: "/dashboard/css",
        },
    ],
}

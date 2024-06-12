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
            icon: "javascript",
            title: "javascript",
            href: "/dashboard/javascript",
        },
        {
            icon: "react",
            title: "react",
            href: "/dashboard/react",
        },
        {
            icon: "html_css",
            title: "html/css",
            href: "/dashboard/html_css",
        },
        {
            icon: "ui_ux",
            title: "ui/ux",
            href: "/dashboard/ui_ux",
        },
        {
            icon: "nodejs",
            title: "nodejs",
            href: "/dashboard/nodejs",
        },
    ],
}

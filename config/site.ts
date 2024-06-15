export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Junior-Prep",
    description:
        "An open-source project for junior web developers to practice interview questions, record your progress and find teams to collaborate with",
    url: "https://junior-prep.com",
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
        discord: "https://discord.gg/uYHYYMvrAd",
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
